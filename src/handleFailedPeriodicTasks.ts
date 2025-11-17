import { DocumentReference, Firestore } from "@google-cloud/firestore";

import { getConvertibleDepositsSubgraphUrl } from "./constants";
import { createGraphQLClient } from "./helpers/graphqlClient";
import { EmbedField, getRelativeTimestamp, sendAlert } from "./discord";
import { ChainId, getEtherscanAddressUrl, getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { shorten } from "./helpers/stringHelper";
import { ClaimAllYieldFailedEventsSinceDocument, ClaimAllYieldFailedEventsSinceQuery } from "./graphql/convertibleDeposits";

const FUNCTION_KEY = "failedPeriodicTasks";
const LATEST_BLOCK = "latestBlock";

type ClaimAllYieldFailedEvent = ClaimAllYieldFailedEventsSinceQuery["convertibleDepositFacilityClaimAllYieldFaileds"]["items"][number];

/**
 * Sends a Discord alert when a claim all yield failed event is detected
 *
 * @param webhookUrl
 * @param event
 */
const sendClaimAllYieldFailedAlert = (webhookUrl: string, event: ClaimAllYieldFailedEvent): void => {
  const timestamp = Number(event.timestamp) * 1000; // Convert to milliseconds
  const blockNumber = Number(event.block);
  const txHash = event.txHash;

  const description = `The heartbeat is unaffected`;

  const fields: EmbedField[] = [
    {
      name: "Facility Address",
      value: `[${shorten(event.facility)}](${getEtherscanAddressUrl(event.facility, ChainId.MAINNET)})`,
    },
    {
      name: "Date",
      value: getRelativeTimestamp(timestamp),
    },
    {
      name: "Block",
      value: blockNumber.toString(),
      inline: true,
    },
    {
      name: "Transaction",
      value: `[${shorten(txHash)}](${getEtherscanTransactionUrl(txHash, ChainId.MAINNET)})`,
      inline: true,
    },
    {
      name: "Manual Resolution",
      value: `Call \`claimAllYield()\` on the facility contract to manually claim the yield.`,
      inline: false,
    }
  ];

  sendAlert(webhookUrl, "", `⚠️ Claim All Yield Failed`, description, fields);
};

const getLatestBlock = async (firestoreDocument: DocumentReference): Promise<number> => {
  const firestoreSnapshot = await firestoreDocument.get();
  const latestBlock = parseInt(firestoreSnapshot.get(`${FUNCTION_KEY}.${LATEST_BLOCK}`) || "0");

  if (latestBlock === 0) {
    console.info(`No latest block found, defaulting to 0 (process all events)`);
    return 0;
  }

  console.info(`Latest block is ${latestBlock}`);
  return latestBlock;
};

/**
 * Performs checks for failed periodic tasks (claim all yield failed events)
 *
 * This function:
 * - Queries the GraphQL convertible deposits endpoint for claim all yield failed events
 * - Sends Discord alerts with facility address and transaction hash
 * - Updates Firestore with the latest processed block
 *
 * @param firestoreDocumentPath
 * @param firestoreCollectionName
 * @param webhookUrl
 * @returns
 */
export const performFailedPeriodicTasksChecks = async (
  firestoreDocumentPath: string,
  firestoreCollectionName: string,
  webhookUrl: string,
): Promise<void> => {
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);

  console.info(`\n\n⏰ Processing Failed Periodic Tasks`);

  // Get the latest block
  const latestBlock = await getLatestBlock(firestoreDocument);

  // Fetch failed events using GraphQL
  const client = createGraphQLClient(getConvertibleDepositsSubgraphUrl());
  console.debug(`Fetching claim all yield failed events since block ${latestBlock}`);

  const queryResults = await client
    .query(ClaimAllYieldFailedEventsSinceDocument, {
      latestBlock: latestBlock.toString(),
      chainId: 1,
    })
    .toPromise();

  if (!queryResults.data) {
    throw new Error(
      `Did not receive results from GraphQL query with latest block ${latestBlock}. Error: ${queryResults.error}`,
    );
  }

  const events = queryResults.data.convertibleDepositFacilityClaimAllYieldFaileds.items || [];
  console.info(`Processing ${events.length} claim all yield failed events`);

  if (events.length === 0) {
    console.info(`No claim all yield failed events to process`);
    return;
  }

  let updatedLatestBlock = latestBlock;

  // Process events and send alerts
  for (const event of events) {
    const eventBlock = Number(event.block);
    console.info(`Processing claim all yield failed event for facility ${event.facility} at block ${eventBlock}`);
    sendClaimAllYieldFailedAlert(webhookUrl, event);

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

  performFailedPeriodicTasksChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL);
}
