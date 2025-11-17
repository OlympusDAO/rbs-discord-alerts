import { Firestore } from "@google-cloud/firestore";

import { getRbsSubgraphUrl } from "./constants";
import { type EmbedField, sendAlert } from "./discord";
import { type PriceEvent, PriceEventType, RbsPriceEventsDocument } from "./graphql/rangeSnapshot";
import { ChainId, getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { createGraphQLClient } from "./helpers/graphqlClient";
import { castFloat, castFloatNullable, castInt, formatCurrency } from "./helpers/numberHelper";
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
 * @param alertWebhookUrls
 * @param emergencyWebhookUrl
 * @returns
 */
export const performEventChecks = async (
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
  const client = createGraphQLClient(getRbsSubgraphUrl());
  const queryResults = await client
    .query(RbsPriceEventsDocument, {
      latestBlock: (latestBlock || 0).toString(),
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

  let updatedLatestBlock: string | undefined;

  // Send Discord message
  for (let i = 0; i < priceEvents.length; i++) {
    const priceEvent = priceEvents[i];
    const fields: EmbedField[] = [
      // Row 1
      {
        name: "Date",
        // Display in the local user's timezone. Expects the timestamp in seconds.
        value: `<t:${castInt(priceEvent.timestamp) / 1000}>`,
        inline: true,
      },
      {
        name: "Transaction",
        value: `[${shorten(priceEvent.transaction.toString())}](${getEtherscanTransactionUrl(
          priceEvent.transaction.toString(),
          ChainId.MAINNET,
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
        value: formatCurrency(castFloatNullable(priceEvent.snapshot.ohmPrice)),
        inline: false,
      },
      // High
      {
        name: "High",
        value: `Wall: ${formatCurrency(castFloat(priceEvent.snapshot.highWallPrice))}\nCushion: ${formatCurrency(
          castFloat(priceEvent.snapshot.highCushionPrice),
        )}`,
      },
      // Moving average
      {
        name: "Moving Average",
        value: formatCurrency(castFloatNullable(priceEvent.snapshot.ohmMovingAveragePrice)),
        inline: false,
      },
      // Low
      {
        name: "Low",
        value: `Cushion: ${formatCurrency(castFloat(priceEvent.snapshot.lowCushionPrice))}\nWall: ${formatCurrency(
          castFloat(priceEvent.snapshot.lowWallPrice),
        )}`,
      },
      {
        name: "Description",
        value: getPriceEventExplanation(priceEvent),
        inline: false,
      },
    ];

    for (let j = 0; j < alertWebhookUrls.length; j++) {
      const currentAlertSuccess = await sendAlert(alertWebhookUrls[j], "", `🚨 RBS Price Event`, ``, fields);

      // If any of the Discord webhook requests succeed, we update the latest block
      if (currentAlertSuccess) {
        updatedLatestBlock = priceEvent.block;
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

  performEventChecks("rbs-discord-alerts-dev", "default", [process.env.WEBHOOK_URL]);
}
