import { DocumentReference, Firestore } from "@google-cloud/firestore";

import { getPonderClient } from "./helpers/ponderClient";
import { EmbedField, getRelativeTimestamp, sendAlert } from "./discord";
import { getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { shorten } from "./helpers/stringHelper";
import * as schema from "./ponder/ponder.schema";
import { asc, gt } from "@ponder/client";

const FUNCTION_KEY = "failedPeriodicTasks";
const LATEST_BLOCK = "latestBlock";

type ClaimAllYieldFailedEvent = typeof schema.convertibleDepositFacilityClaimAllYieldFailed.$inferSelect;

/**
 * Sends a Discord alert when a claim all yield failed event is detected
 *
 * @param webhookUrl
 * @param event
 */
const sendClaimAllYieldFailedAlert = (webhookUrl: string, event: ClaimAllYieldFailedEvent): void => {
  const timestamp = Number(event.timestamp) * 1000; // Convert to milliseconds
  const blockNumber = Number(event.block);
  const txHash = event.txHash.toString();

  const description = `The heartbeat is unaffected`;

  const fields: EmbedField[] = [
    {
      name: "Facility Address",
      value: event.facility,
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
      value: `[${shorten(txHash)}](${getEtherscanTransactionUrl(txHash, "Mainnet")})`,
      inline: true,
    },
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
 * - Queries the Ponder convertible deposits endpoint for claim all yield failed events
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
  let updatedLatestBlock = latestBlock;

  // Fetch failed events using Ponder client
  const client = getPonderClient();
  console.debug(`Fetching claim all yield failed events since block ${latestBlock}`);

  try {
    const events = await client.db
      .select()
      .from(schema.convertibleDepositFacilityClaimAllYieldFailed)
      .where(gt(schema.convertibleDepositFacilityClaimAllYieldFailed.block, BigInt(latestBlock)))
      .orderBy(asc(schema.convertibleDepositFacilityClaimAllYieldFailed.block));

    console.info(`Processing ${events.length} claim all yield failed events`);

    if (events.length === 0) {
      console.info(`No claim all yield failed events to process`);
      return;
    }

    // Process events and send alerts
    for (const event of events) {
      console.info(`Processing claim all yield failed event for facility ${event.facility} at block ${Number(event.block)}`);
      sendClaimAllYieldFailedAlert(webhookUrl, event);

      // Update the latest block to this event's block
      const eventBlock = Number(event.block);
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
  } catch (error) {
    console.error("Error querying Ponder endpoint:", error);
    throw error;
  }
};

// Running via CLI
if (require.main === module) {
  if (!process.env.WEBHOOK_URL) {
    throw new Error("Set the WEBHOOK_URL environment variable");
  }

  performFailedPeriodicTasksChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL);
}

