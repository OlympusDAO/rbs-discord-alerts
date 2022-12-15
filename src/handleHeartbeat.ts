import { DocumentReference, Firestore } from "@google-cloud/firestore";
import { Client } from "@urql/core";
import fetch from "cross-fetch";

import { HEART_CONTRACT_V1_1, RBS_SUBGRAPH_URL } from "./constants";
import { getRelativeTimestamp, sendAlert } from "./discord";
import { Beat, BeatsSinceBlockDocument } from "./graphql/rangeSnapshot";
import { getEtherscanAddressUrl, getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { castInt } from "./helpers/numberHelper";
import { shorten } from "./helpers/stringHelper";
import { getShouldThrottle, updateLastAlertDate } from "./helpers/throttleHelper";

const FIELD_LATEST_BLOCK = "heartbeat.latestBlock";
const FIELD_HEARTBEAT_DATE = "heartbeat.latestBeatDate";

const HEARTBEAT_FREQUENCY_MS = 8 * 60 * 60 * 1000; // 8 hours
const HEARTBEAT_THRESHOLD_MS = 10 * 60 * 1000; // 10 minutes

const FUNCTION_KEY = "heartbeat";
const ALERT_THRESHOLD_SECONDS = 1 * 60 * 60; // 1 hour

/**
 * Sends a Discord alert when a heartbeat event is recorded
 *
 * @param firestoreDocument
 * @param alertWebhookUrl
 * @returns
 */
const sendHeartbeatAlert = async (firestoreDocument: DocumentReference, alertWebhookUrl: string): Promise<void> => {
  console.info(`\n\nSending heartbeat alerts`);
  const firestoreDocumentObject = await firestoreDocument.get();
  const latestBlock: number | undefined = firestoreDocumentObject.get(FIELD_LATEST_BLOCK);
  console.log(`Latest block is ${latestBlock}`);

  // Fetch events since the last processed block
  const client = new Client({
    url: RBS_SUBGRAPH_URL,
    fetch,
  });
  const queryResults = await client
    .query(BeatsSinceBlockDocument, {
      sinceBlock: (latestBlock || 0).toString(),
    })
    .toPromise();
  if (!queryResults.data) {
    throw new Error(
      `Did not receive results from GraphQL query with latest block ${latestBlock}. Error: ${queryResults.error}`,
    );
  }

  const beatEvents: Beat[] = queryResults.data.beats;
  if (beatEvents.length === 0) {
    return;
  }

  // Get the latest block from last item (since we order ascending)
  const updatedLatestBlock = beatEvents[beatEvents.length - 1].block;
  const latestHeartbeatDate = beatEvents[beatEvents.length - 1].date;

  // Send Discord message
  for (let i = 0; i < beatEvents.length; i++) {
    const beatEvent = beatEvents[i];
    await sendAlert(alertWebhookUrl, "", `⏰ Heartbeat`, ``, [
      // Row 1
      {
        name: "Date",
        value: getRelativeTimestamp(castInt(beatEvent.timestamp)),
        inline: true,
      },
      {
        name: "Transaction",
        value: `[${shorten(beatEvent.transaction.toString())}](${getEtherscanTransactionUrl(
          beatEvent.transaction.toString(),
          beatEvent.blockchain,
        )})`,
        inline: true,
      },
    ]);
  }

  // Update last processed block
  await firestoreDocument.update({
    [FIELD_LATEST_BLOCK]: updatedLatestBlock,
    [FIELD_HEARTBEAT_DATE]: latestHeartbeatDate,
  });
  console.log(`Updated latest block to ${updatedLatestBlock}`);
};

/**
 * Sends a Discord alert if a heartbeat did not occur by the expected date (with a buffer of `HEARTBEAT_THRESHOLD_MS`)
 *
 * @param firestoreDocument
 * @param webhookUrl
 * @returns
 */
const checkHeartbeat = async (firestoreDocument: DocumentReference, webhookUrl: string): Promise<void> => {
  console.info(`\n\nChecking heartbeat timing`);
  const firestoreDocumentObject = await firestoreDocument.get();
  const latestBeatDateString: string | undefined = firestoreDocumentObject.get(FIELD_HEARTBEAT_DATE);
  const latestBeatDate: Date | null = latestBeatDateString ? new Date(latestBeatDateString) : null;
  console.log(`Latest heartbeat date is ${latestBeatDate ? latestBeatDate.toISOString() : "null"}`);

  if (!latestBeatDate) {
    console.info(`Latest heartbeat date is empty. Skipping.`);
    return;
  }

  // Check that enough time has passed since the previous heartbeat
  const expectedHeartbeatDate = new Date(latestBeatDate.getTime() + HEARTBEAT_FREQUENCY_MS + HEARTBEAT_THRESHOLD_MS);
  console.log(
    `Expected heartbeat (with threshold of ${
      HEARTBEAT_THRESHOLD_MS / (60 * 1000)
    } minutes) is: ${expectedHeartbeatDate.toISOString()}`,
  );
  if (Date.now() <= expectedHeartbeatDate.getTime()) {
    console.log(`Expected heartbeat date has not been reached. Nothing to report.`);
    return;
  }

  // Check if the alert should be throttled
  const shouldThrottle = await getShouldThrottle(firestoreDocument, FUNCTION_KEY, ALERT_THRESHOLD_SECONDS);
  if (shouldThrottle) {
    console.info(`Alarm conditions are present, but throttling is active.`);
    return;
  }

  // Send alert
  console.error(`Heartbeat should have happened by now. Throwing alarm.`);
  await sendAlert(
    webhookUrl,
    "",
    `🚨 Late Heartbeat`,
    `Heartbeat did not happen on time.\n\nSubsequent alerts are throttled for ${ALERT_THRESHOLD_SECONDS / 60} minutes.`,
    [
      {
        name: "Last Heartbeat",
        value: getRelativeTimestamp(latestBeatDate.getTime()),
      },
      {
        name: "Expected Heartbeat (with threshold)",
        value: getRelativeTimestamp(expectedHeartbeatDate.getTime()),
      },
      {
        name: "Contract",
        value: getEtherscanAddressUrl(HEART_CONTRACT_V1_1, "mainnet"),
      },
    ],
  );

  // Update lastAlarmDate
  await updateLastAlertDate(firestoreDocument, FUNCTION_KEY, new Date());
};

/**
 * Performs checks against Heartbeat events
 *
 * This currently:
 * - Broadcasts into Discord any heartbeat events that are emitted from the RBS contracts.
 * - Checks for missed/delayed heartbeats
 *
 * @param firestoreDocumentPath
 * @param firestoreCollectionName
 * @param alertWebhookUrl
 * @param _emergencyWebhookUrl
 * @returns
 */
export const performHeartbeatChecks = async (
  firestoreDocumentPath: string,
  firestoreCollectionName: string,
  alertWebhookUrl: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  emergencyWebhookUrl: string,
): Promise<void> => {
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);

  sendHeartbeatAlert(firestoreDocument, alertWebhookUrl);
  checkHeartbeat(firestoreDocument, alertWebhookUrl);
};

// Running via CLI
if (require.main === module) {
  if (!process.env.WEBHOOK_URL) {
    throw new Error("Set the WEBHOOK_URL environment variable");
  }

  performHeartbeatChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL, process.env.WEBHOOK_URL);
}
