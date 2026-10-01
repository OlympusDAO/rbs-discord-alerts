import { type DocumentReference, Firestore } from "@google-cloud/firestore";

import { createDiscordAlertSender, type DiscordAlertSender, type EmbedField, getRelativeTimestamp } from "./discord";
import { ChainId, getEtherscanAddressUrl, getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { getIndexerEventStartBlock } from "./helpers/indexerCursorHelper";
import { shorten } from "./helpers/stringHelper";
import { getConvertibleDepositsIndexedBlock, getFailuresSince } from "./indexer/convertibleDeposits";
import type { CdClaimAllYieldFailed } from "./indexer/types";

const FUNCTION_KEY = "failedPeriodicTasks";
const LATEST_BLOCK = "latestBlock";

type ClaimAllYieldFailedEvent = CdClaimAllYieldFailed;

/**
 * Sends a Discord alert when a claim all yield failed event is detected
 *
 * @param webhookUrl
 * @param event
 */
const sendClaimAllYieldFailedAlert = (
  alertSender: DiscordAlertSender,
  webhookUrl: string,
  event: ClaimAllYieldFailedEvent,
): Promise<boolean> => {
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
    },
  ];

  return alertSender(webhookUrl, "", `⚠️ Claim All Yield Failed`, description, fields);
};

const getLatestBlock = async (firestoreDocument: DocumentReference): Promise<number | undefined> => {
  const firestoreSnapshot = await firestoreDocument.get();
  const value = firestoreSnapshot.get(`${FUNCTION_KEY}.${LATEST_BLOCK}`);
  const latestBlock = value ? parseInt(value, 10) : undefined;

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
  const alertSender = createDiscordAlertSender();
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);

  console.info(`\n\n⏰ Processing Failed Periodic Tasks`);

  // Get the latest block
  const latestBlock = await getIndexerEventStartBlock(
    await getLatestBlock(firestoreDocument),
    getConvertibleDepositsIndexedBlock,
  );

  console.debug(`Fetching claim all yield failed events since block ${latestBlock}`);

  // One request returns both failure kinds; this handler wants the
  // claim-all-yield half.
  const { claimAllYieldFailed: events } = await getFailuresSince(latestBlock);
  console.info(`Processing ${events.length} claim all yield failed events`);

  if (events.length === 0) {
    console.info(`No claim all yield failed events to process`);
    return;
  }

  // Process events and send alerts
  for (const event of events) {
    const eventBlock = Number(event.block);
    console.info(`Processing claim all yield failed event for facility ${event.facility} at block ${eventBlock}`);
    const alertSent = await sendClaimAllYieldFailedAlert(alertSender, webhookUrl, event);
    if (!alertSent) throw new Error(`Discord rate-limited the failed periodic task alert at block ${eventBlock}`);

    await firestoreDocument.update({
      [`${FUNCTION_KEY}.${LATEST_BLOCK}`]: eventBlock,
    });
    console.info(`Updated latest block to ${eventBlock}`);
  }
};

// Running via CLI
if (require.main === module) {
  if (!process.env.WEBHOOK_URL) {
    throw new Error("Set the WEBHOOK_URL environment variable");
  }

  performFailedPeriodicTasksChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL);
}
