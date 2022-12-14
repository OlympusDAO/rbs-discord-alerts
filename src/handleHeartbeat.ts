import { Firestore } from "@google-cloud/firestore";
import { Client } from "@urql/core";
import fetch from "cross-fetch";

import { RBS_SUBGRAPH_URL } from "./constants";
import { sendAlert } from "./discord";
import { Beat, BeatsSinceBlockDocument } from "./graphql/rangeSnapshot";
import { getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { castInt } from "./helpers/numberHelper";
import { shorten } from "./helpers/stringHelper";

const FIELD_LATEST_BLOCK = "heartbeat.latestBlock";

/**
 * Performs checks against Heartbeat events
 *
 * This currently:
 * - Broadcasts into Discord any heartbeat events that are emitted from the RBS contracts.
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
  const firestoreDocumentObject = await firestoreDocument.get();
  const latestBlock: number | undefined = firestoreDocumentObject.get(FIELD_LATEST_BLOCK);
  console.log(`latest block is ${latestBlock}`);

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

  // Send Discord message
  for (let i = 0; i < beatEvents.length; i++) {
    const beatEvent = beatEvents[i];
    await sendAlert(alertWebhookUrl, "", `⏰ Heartbeat`, ``, [
      // Row 1
      {
        name: "Date",
        // Display in the local user's timezone. Expects the timestamp in seconds.
        value: `<t:${castInt(beatEvent.timestamp) / 1000}>`,
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
  });
  console.log(`Updated latest block to ${updatedLatestBlock}`);
};

// Running via CLI
if (require.main === module) {
  if (!process.env.WEBHOOK_URL) {
    throw new Error("Set the WEBHOOK_URL environment variable");
  }

  performHeartbeatChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL, process.env.WEBHOOK_URL);
}
