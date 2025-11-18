import { type DocumentReference, Firestore } from "@google-cloud/firestore";

import { getConvertibleDepositsSubgraphUrl } from "./constants";
import { type EmbedField, getRelativeTimestamp, sendAlert } from "./discord";
import { AuctionResultSinceDocument, type AuctionResultSinceQuery } from "./graphql/convertibleDeposits";
import { ChainId, getEtherscanAddressUrl, getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { createGraphQLClient } from "./helpers/graphqlClient";
import { castFloat } from "./helpers/numberHelper";
import { shorten } from "./helpers/stringHelper";

const FUNCTION_KEY = "auctionResult";
const LATEST_BLOCK = "latestBlock";

type AuctionResultEvent = AuctionResultSinceQuery["convertibleDepositAuctioneerAuctionResults"]["items"][number];

/**
 * Sends a Discord alert when auction results are updated
 *
 * @param webhookUrl
 * @param event
 */
const sendAuctionResultAlert = (webhookUrl: string, event: AuctionResultEvent): void => {
  const timestamp = Number(event.timestamp) * 1000; // Convert to milliseconds
  const txHash = event.txHash;
  const target = castFloat(event.targetDecimal);
  const ohmConvertible = castFloat(event.ohmConvertibleDecimal);

  const title = "Convertible Deposit Auction Ended";
  const description = "";

  const fields: EmbedField[] = [
    {
      name: "Deposit Asset",
      value: `[${shorten(event.depositAsset)}](${getEtherscanAddressUrl(event.depositAsset, ChainId.MAINNET)})`,
    },
    {
      name: "End Date",
      value: getRelativeTimestamp(timestamp),
    },
    {
      name: "Transaction",
      value: `[${shorten(txHash)}](${getEtherscanTransactionUrl(txHash, ChainId.MAINNET)})`,
      inline: true,
    },
    {
      name: "Day Target",
      value: `${target.toFixed(2)} OHM`,
      inline: true,
    },
    {
      name: "OHM Sold",
      value: `${ohmConvertible.toFixed(2)} OHM`,
      inline: true,
    },
  ];

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
 * Performs checks for auction result events
 *
 * This function:
 * - Queries the GraphQL convertible deposits endpoint for auction result events
 * - Sends Discord alerts with auction details
 * - Updates Firestore with the latest processed block
 *
 * @param firestoreDocumentPath
 * @param firestoreCollectionName
 * @param webhookUrl
 * @returns
 */
export const performAuctionResultChecks = async (
  firestoreDocumentPath: string,
  firestoreCollectionName: string,
  webhookUrl: string,
): Promise<void> => {
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);

  console.info(`\n\n⏰ Processing Auction Result Events`);

  // Get the latest block
  const latestBlock = await getLatestBlock(firestoreDocument);

  // Fetch events using GraphQL
  const client = createGraphQLClient(getConvertibleDepositsSubgraphUrl());
  console.debug(`Fetching auction result events since block ${latestBlock}`);

  const queryResults = await client
    .query(AuctionResultSinceDocument, {
      latestBlock: latestBlock.toString(),
      chainId: 1,
    })
    .toPromise();

  if (!queryResults.data) {
    throw new Error(
      `Did not receive results from GraphQL query with latest block ${latestBlock}. Error: ${queryResults.error}`,
    );
  }

  const events = queryResults.data.convertibleDepositAuctioneerAuctionResults.items || [];
  console.info(`Processing ${events.length} auction result events`);

  if (events.length === 0) {
    console.info(`No auction result events to process`);
    return;
  }

  let updatedLatestBlock = latestBlock;

  // Process events and send alerts
  for (const event of events) {
    const eventBlock = Number(event.block);
    console.info(`Processing auction result event for auctioneer ${event.auctioneer} at block ${eventBlock}`);
    sendAuctionResultAlert(webhookUrl, event);

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

  performAuctionResultChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL);
}
