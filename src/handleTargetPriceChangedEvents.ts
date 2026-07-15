import { Firestore } from "@google-cloud/firestore";

import { getRbsSubgraphUrl } from "./constants";
import { createDiscordAlertSender, type EmbedField } from "./discord";
import { type MinimumTargetPriceChanged, MinimumTargetPriceChangedEventsDocument } from "./graphql/rangeSnapshot";
import { ChainId, getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { createGraphQLClient } from "./helpers/graphqlClient";
import { getSubgraphEventStartBlock } from "./helpers/indexerCursorHelper";
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
  const alertSender = createDiscordAlertSender();
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);
  const firestoreDocumentObject = await firestoreDocument.get();
  const latestBlock: number | undefined = firestoreDocumentObject.get(FIELD_LATEST_BLOCK);
  console.log(`latest block is ${latestBlock}`);

  // Fetch events since the last processed block
  const client = createGraphQLClient(getRbsSubgraphUrl());
  const startBlock = await getSubgraphEventStartBlock(client, latestBlock, "RBS subgraph");
  const queryResults = await client
    .query(MinimumTargetPriceChangedEventsDocument, {
      latestBlock: startBlock.toString(),
    })
    .toPromise();
  if (!queryResults.data) {
    throw new Error(
      `Did not receive results from GraphQL query with latest block ${startBlock}. Error: ${queryResults.error}`,
    );
  }

  const targetPriceChangedEvents: MinimumTargetPriceChanged[] = queryResults.data.minimumTargetPriceChangeds;
  if (targetPriceChangedEvents.length === 0) {
    return;
  }

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
          ChainId.MAINNET,
        )})`,
        inline: false,
      },
    ];

    for (let j = 0; j < alertWebhookUrls.length; j++) {
      const currentAlertSuccess = await alertSender(alertWebhookUrls[j], "", `🚨 RBS Target Price Changed`, ``, fields);
      if (!currentAlertSuccess)
        throw new Error(`Discord rate-limited the target price alert at block ${targetPriceChangedEvent.block}`);
    }

    await firestoreDocument.update({
      [FIELD_LATEST_BLOCK]: targetPriceChangedEvent.block,
    });
    console.log(`Updated latest block to ${targetPriceChangedEvent.block}`);
  }
};

// Running via CLI
if (require.main === module) {
  if (!process.env.WEBHOOK_URL) {
    throw new Error("Set the WEBHOOK_URL environment variable");
  }

  performTargetPriceChangedCheck("rbs-discord-alerts-dev", "default", [process.env.WEBHOOK_URL]);
}
