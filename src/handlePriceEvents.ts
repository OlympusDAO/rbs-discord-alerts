import { Firestore } from "@google-cloud/firestore";
import { Client } from "@urql/core";
import fetch from "cross-fetch";

import { RBS_SUBGRAPH_URL } from "./constants";
import { sendAlert } from "./discord";
import { PriceEvent, PriceEventType, RbsPriceEventsDocument } from "./graphql/rangeSnapshot";
import { getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { formatCurrency } from "./helpers/numberHelper";
import { shorten } from "./helpers/stringHelper";

const FIELD_LATEST_BLOCK = "events.latestBlock";

const getPriceEventExplanation = (priceEvent: PriceEvent): string => {
  switch (priceEvent.type) {
    case PriceEventType.WallUp:
      return "Walls are periodically re-generated to re-fill capacity";
    case PriceEventType.WallDown:
      return "The price has broken through the wall, resulting in price discovery";
    case PriceEventType.CushionUp:
      return "The price has entered the cushion, resulting in the creation of a bond market";
    case PriceEventType.CushionDown:
      return "The price has returned into range from the cushion, resulting in the closure of the bond market";
    default:
      throw new Error(`Unknown price event type: ${priceEvent.type}`);
  }
};

/**
 * Performs checks against PriceEvents
 *
 * This currently:
 * - Broadcasts into Discord any PriceEvents that are emitted from the RBS contracts.
 *
 * @param firestoreDocumentPath
 * @param firestoreCollectionName
 * @param alertWebhookUrl
 * @param emergencyWebhookUrl
 * @returns
 */
export const performEventChecks = async (
  firestoreDocumentPath: string,
  firestoreCollectionName: string,
  alertWebhookUrl: string,
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
    .query(RbsPriceEventsDocument, {
      latestBlock: latestBlock || 0,
    })
    .toPromise();
  if (!queryResults.data) {
    throw new Error(
      `Did not receive results from GraphQL query with latest block ${latestBlock}. Error: ${queryResults.error}`,
    );
  }

  const priceEvents: PriceEvent[] = queryResults.data.priceEvents;
  if (priceEvents.length === 0) {
    return;
  }

  // Get the latest block from last item (since we order ascending)
  const updatedLatestBlock = priceEvents[priceEvents.length - 1].block;

  // Send Discord message
  for (let i = 0; i < priceEvents.length; i++) {
    const priceEvent = priceEvents[i];
    await sendAlert(alertWebhookUrl, "", `🚨 RBS Price Event`, ``, [
      // Row 1
      {
        name: "Date",
        // Display in the local user's timezone. Expects the timestamp in seconds.
        value: `<t:${priceEvent.timestamp / 1000}>`,
        inline: true,
      },
      {
        name: "Transaction",
        value: `[${shorten(priceEvent.transaction.toString())}](${getEtherscanTransactionUrl(
          priceEvent.transaction.toString(),
          priceEvent.blockchain,
        )})`,
        inline: true,
      },
      // Row 2
      {
        name: "Event",
        value: priceEvent.type,
        inline: true,
      },
      {
        name: "Upper/Lower",
        value: priceEvent.isHigh ? "Upper" : "Lower",
        inline: true,
      },
      // Current price
      {
        name: "Current",
        value: formatCurrency(priceEvent.snapshot.ohmPrice),
        inline: false,
      },
      // High
      {
        name: "High",
        value: `Wall: ${formatCurrency(priceEvent.snapshot.highWallPrice)}\nCushion: ${formatCurrency(
          priceEvent.snapshot.highCushionPrice,
        )}`,
      },
      // Moving average
      {
        name: "Moving Average",
        value: formatCurrency(priceEvent.snapshot.ohmMovingAveragePrice),
        inline: false,
      },
      // Low
      {
        name: "Low",
        value: `Cushion: ${formatCurrency(priceEvent.snapshot.lowCushionPrice)}\nWall: ${formatCurrency(
          priceEvent.snapshot.lowWallPrice,
        )}`,
      },
      {
        name: "Description",
        value: getPriceEventExplanation(priceEvent),
        inline: false,
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

  performEventChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL, process.env.WEBHOOK_URL);
}
