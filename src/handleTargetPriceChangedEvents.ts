import { Firestore } from "@google-cloud/firestore";
import { Client } from "@urql/core";
import fetch from "cross-fetch";

import { getRbsSubgraphUrl } from "./constants";
import { EmbedField, sendAlert } from "./discord";
import { MinimumTargetPriceChanged, MinimumTargetPriceChangedEventsDocument } from "./graphql/rangeSnapshot";
import { getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { castFloat, castInt, formatCurrency } from "./helpers/numberHelper";
import { shorten } from "./helpers/stringHelper";

const FIELD_LATEST_BLOCK = "targetPriceChanged.latestBlock";

/**
 * Performs checks against MinimumTargetPriceChanged events
 *
 * This currently:
 * - Broadcasts into Discord any MinimumTargetPriceChanged events that are emitted from the RBS contracts.
 *
 * @param firestoreDocumentPath
 * @param firestoreCollectionName
 * @param alertWebhookUrls
 * @returns
 */
export const performTargetPriceChangedCheck = async (
  firestoreDocumentPath: string,
  firestoreCollectionName: string,
  alertWebhookUrls: string[],
): Promise<void> => {
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);
  const firestoreDocumentObject = await firestoreDocument.get();
  const latestBlock: number | undefined = firestoreDocumentObject.get(FIELD_LATEST_BLOCK);
  console.log(`latest block is ${latestBlock}`);

  // Fetch events since the last processed block
  const client = new Client({
    url: getRbsSubgraphUrl(),
    fetch,
  });
  const queryResults = await client
    .query(MinimumTargetPriceChangedEventsDocument, {
      latestBlock: (latestBlock || 0).toString(),
    })
    .toPromise();
  if (!queryResults.data) {
    throw new Error(
      `Did not receive results from GraphQL query with latest block ${latestBlock}. Error: ${queryResults.error}`,
    );
  }

  const targetPriceChangedEvents: MinimumTargetPriceChanged[] = queryResults.data.minimumTargetPriceChangeds;
  if (targetPriceChangedEvents.length === 0) {
    return;
  }

  let updatedLatestBlock: string | undefined;

  // Send Discord message
  for (let i = 0; i < targetPriceChangedEvents.length; i++) {
    const targetPriceChangedEvent = targetPriceChangedEvents[i];
    const fields: EmbedField[] = [
      // Row 1
      {
        name: "Date",
        // Display in the local user's timezone. Expects the timestamp in seconds.
        value: `<t:${castInt(targetPriceChangedEvent.timestamp) / 1000}>`,
        inline: true,
      },
      {
        name: "Target Price",
        value: formatCurrency(castFloat(targetPriceChangedEvent.minimumTargetPrice)),
        inline: true,
      },
      // Row 2
      {
        name: "Transaction",
        value: `[${shorten(targetPriceChangedEvent.transaction.toString())}](${getEtherscanTransactionUrl(
          targetPriceChangedEvent.transaction.toString(),
          targetPriceChangedEvent.blockchain,
        )})`,
        inline: false,
      },
    ];

    for (let j = 0; j < alertWebhookUrls.length; j++) {
      const currentAlertSuccess = await sendAlert(alertWebhookUrls[j], "", `🚨 RBS Target Price Changed`, ``, fields);

      // If any of the Discord webhook requests succeed, we update the latest block
      if (currentAlertSuccess) {
        updatedLatestBlock = targetPriceChangedEvent.block;
      }
    }
  }

  if (updatedLatestBlock) {
    // Update last processed block
    await firestoreDocument.update({
      [FIELD_LATEST_BLOCK]: updatedLatestBlock,
    });
    console.log(`Updated latest block to ${updatedLatestBlock}`);
  } else {
    console.log(`Latest block not updated`);
  }
};

// Running via CLI
if (require.main === module) {
  if (!process.env.WEBHOOK_URL) {
    throw new Error("Set the WEBHOOK_URL environment variable");
  }

  performTargetPriceChangedCheck("rbs-discord-alerts-dev", "default", [process.env.WEBHOOK_URL]);
}
