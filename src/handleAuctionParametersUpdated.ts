import { type DocumentReference, Firestore } from "@google-cloud/firestore";

import { getConvertibleDepositsSubgraphUrl } from "./constants";
import { type EmbedField, getRelativeTimestamp, sendAlert } from "./discord";
import {
  AuctionParametersUpdatedSinceDocument,
  type AuctionParametersUpdatedSinceQuery,
} from "./graphql/convertibleDeposits";
import { ChainId, getEtherscanAddressUrl, getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { createGraphQLClient } from "./helpers/graphqlClient";
import { castFloat } from "./helpers/numberHelper";
import { shorten } from "./helpers/stringHelper";

const FUNCTION_KEY = "auctionParametersUpdated";
const LATEST_BLOCK = "latestBlock";

type AuctionParametersUpdatedEvent =
  AuctionParametersUpdatedSinceQuery["convertibleDepositAuctioneerAuctionParametersUpdateds"]["items"][number];

const FRONTEND_URL = "https://deposit.olympusdao.finance";

/**
 * Sends a Discord alert when auction parameters are updated
 *
 * @param webhookUrl
 * @param event
 */
const sendAuctionParametersUpdatedAlert = (webhookUrl: string, event: AuctionParametersUpdatedEvent): void => {
  const timestamp = Number(event.timestamp) * 1000; // Convert to milliseconds
  const txHash = event.txHash;
  const target = castFloat(event.targetDecimal);
  const minPrice = castFloat(event.minPriceDecimal);

  const isDisabled = target === 0;

  const title = "CD Auction Tuning";
  const description = isDisabled
    ? "🛑 The auction has been disabled, due to market conditions."
    : "🟢 The auction parameters have been tuned for the emissions target.";

  const fields: EmbedField[] = [
    {
      name: "Deposit Asset",
      value: `[${shorten(event.depositAsset)}](${getEtherscanAddressUrl(event.depositAsset, ChainId.MAINNET)})`,
      inline: true,
    },
    {
      name: "Transaction",
      value: `[${shorten(txHash)}](${getEtherscanTransactionUrl(txHash, ChainId.MAINNET)})`,
      inline: true,
    },
    {
      name: "Date",
      value: getRelativeTimestamp(timestamp),
    },
  ];

  if (!isDisabled) {
    fields.push(
      {
        name: "Target",
        value: target.toString(),
        inline: true,
      },
      {
        name: "Min Price",
        value: `$${minPrice.toFixed(2)}`,
        inline: true,
      },
      {
        name: "View Auction",
        value: `[View on deposit.olympusdao.finance](${FRONTEND_URL})`,
        inline: false,
      },
    );
  }

  sendAlert(webhookUrl, "", title, description, fields);
};

const getLatestBlock = async (firestoreDocument: DocumentReference): Promise<number> => {
  const firestoreSnapshot = await firestoreDocument.get();
  const latestBlock = parseInt(firestoreSnapshot.get(`${FUNCTION_KEY}.${LATEST_BLOCK}`) || "0", 10);

  if (latestBlock === 0) {
    console.info(`No latest block found, defaulting to 0 (process all events)`);
    return 0;
  }

  console.info(`Latest block is ${latestBlock}`);
  return latestBlock;
};

/**
 * Performs checks for auction parameters updated events
 *
 * This function:
 * - Queries the GraphQL convertible deposits endpoint for auction parameters updated events
 * - Sends Discord alerts with auction details (or disabled status if target is 0)
 * - Updates Firestore with the latest processed block
 *
 * @param firestoreDocumentPath
 * @param firestoreCollectionName
 * @param webhookUrl
 * @returns
 */
export const performAuctionParametersUpdatedChecks = async (
  firestoreDocumentPath: string,
  firestoreCollectionName: string,
  webhookUrl: string,
): Promise<void> => {
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);

  console.info(`\n\n⏰ Processing Auction Parameters Updated Events`);

  // Get the latest block
  const latestBlock = await getLatestBlock(firestoreDocument);

  // Fetch events using GraphQL
  const client = createGraphQLClient(getConvertibleDepositsSubgraphUrl());
  console.debug(`Fetching auction parameters updated events since block ${latestBlock}`);

  const queryResults = await client
    .query(AuctionParametersUpdatedSinceDocument, {
      latestBlock: latestBlock.toString(),
      chainId: 1,
    })
    .toPromise();

  if (!queryResults.data) {
    throw new Error(
      `Did not receive results from GraphQL query with latest block ${latestBlock}. Error: ${queryResults.error}`,
    );
  }

  const events = queryResults.data.convertibleDepositAuctioneerAuctionParametersUpdateds.items || [];
  console.info(`Processing ${events.length} auction parameters updated events`);

  if (events.length === 0) {
    console.info(`No auction parameters updated events to process`);
    return;
  }

  let updatedLatestBlock = latestBlock;

  // Process events and send alerts
  for (const event of events) {
    const eventBlock = Number(event.block);
    console.info(
      `Processing auction parameters updated event for auctioneer ${event.auctioneer} at block ${eventBlock}`,
    );
    sendAuctionParametersUpdatedAlert(webhookUrl, event);

    // Update the latest block to this event's block
    if (eventBlock > updatedLatestBlock) {
      updatedLatestBlock = eventBlock;
    }
  }

  // Update latest block
  if (updatedLatestBlock > latestBlock) {
    await firestoreDocument.update({
      [`${FUNCTION_KEY}.${LATEST_BLOCK}`]: updatedLatestBlock,
    });
    console.info(`Updated latest block to ${updatedLatestBlock}`);
  }
};

// Running via CLI
if (require.main === module) {
  if (!process.env.WEBHOOK_URL) {
    throw new Error("Set the WEBHOOK_URL environment variable");
  }

  performAuctionParametersUpdatedChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL);
}
