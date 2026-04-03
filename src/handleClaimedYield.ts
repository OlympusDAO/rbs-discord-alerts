import { type DocumentReference, Firestore } from "@google-cloud/firestore";

import { getConvertibleDepositsSubgraphUrl } from "./constants";
import { type EmbedField, getRelativeTimestamp, sendAlert } from "./discord";
import {
  ConvertibleDepositFacilityClaimedYieldsSinceDocument,
  type ConvertibleDepositFacilityClaimedYieldsSinceQuery,
} from "./graphql/convertibleDeposits";
import { ChainId, getEtherscanAddressUrl, getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { createGraphQLClient } from "./helpers/graphqlClient";
import { castFloat } from "./helpers/numberHelper";
import { shorten } from "./helpers/stringHelper";

const FUNCTION_KEY = "convertibleDepositFacilityClaimedYield";
const LATEST_BLOCK = "latestBlock";

type ConvertibleDepositFacilityClaimedYieldEvent =
  ConvertibleDepositFacilityClaimedYieldsSinceQuery["convertibleDepositFacilityClaimedYields"]["items"][number];

/**
 * Sends a Discord alert when a convertible deposit facility claimed yield event is detected
 *
 * @param webhookUrl
 * @param event
 */
const sendClaimYieldAlert = (webhookUrl: string, event: ConvertibleDepositFacilityClaimedYieldEvent): void => {
  const timestamp = Number(event.timestamp) * 1000; // Convert to milliseconds
  const txHash = event.txHash;
  const amount = castFloat(event.amountDecimal);

  const description = "The protocol has claimed yield from convertible deposits";

  const fields: EmbedField[] = [
    {
      name: "Date",
      value: getRelativeTimestamp(timestamp),
      inline: false,
    },
    {
      name: "Transaction",
      value: `[${shorten(txHash)}](${getEtherscanTransactionUrl(txHash, ChainId.MAINNET)})`,
      inline: false,
    },
    {
      name: "Asset",
      value: `[${event.rDepositAsset?.rAsset?.symbol || "Unknown"}](${getEtherscanAddressUrl(event.depositAsset, ChainId.MAINNET)})`,
      inline: true,
    },
    {
      name: "Amount",
      value: `${amount.toFixed(2)}`,
      inline: true,
    },
  ];

  sendAlert(webhookUrl, "", `💸 Protocol Yield Claimed`, description, fields);
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
 * Performs checks for convertible deposit facility claimed yield events
 *
 * This function:
 * - Queries the GraphQL convertible deposits endpoint for convertible deposit facility claimed yield events
 * - Sends Discord alerts with facility address and transaction hash
 * - Updates Firestore with the latest processed block
 *
 * @param firestoreDocumentPath
 * @param firestoreCollectionName
 * @param webhookUrl
 * @returns
 */
export const performClaimedYieldChecks = async (
  firestoreDocumentPath: string,
  firestoreCollectionName: string,
  webhookUrl: string,
): Promise<void> => {
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);

  console.info(`\n\n⏰ Processing Claimed Yield Events`);

  // Get the latest block
  const latestBlock = await getLatestBlock(firestoreDocument);

  // Fetch claimed yield events using GraphQL
  const client = createGraphQLClient(getConvertibleDepositsSubgraphUrl());
  console.debug(`Fetching claimed yield events since block ${latestBlock}`);

  const queryResults = await client
    .query(ConvertibleDepositFacilityClaimedYieldsSinceDocument, {
      latestBlock: latestBlock.toString(),
      chainId: 1,
    })
    .toPromise();

  if (!queryResults.data) {
    throw new Error(
      `Did not receive results from GraphQL query with latest block ${latestBlock}. Error: ${queryResults.error}`,
    );
  }

  const events = queryResults.data.convertibleDepositFacilityClaimedYields.items || [];
  console.info(`Processing ${events.length} claimed yield events`);

  if (events.length === 0) {
    console.info(`No claimed yield events to process`);
    return;
  }

  let updatedLatestBlock = latestBlock;

  // Process events and send alerts
  for (const event of events) {
    const eventBlock = Number(event.block);
    console.info(`Processing claimed yield event for facility ${event.facility} at block ${eventBlock}`);
    sendClaimYieldAlert(webhookUrl, event);

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

  performClaimedYieldChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL);
}
