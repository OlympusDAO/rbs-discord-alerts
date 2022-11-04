import { Firestore } from "@google-cloud/firestore";
import { Client } from "@urql/core";
import fetch from "cross-fetch";

import { sendAlert } from "./discord";
import { PriceEvent, RbsPriceEventsDocument } from "./graphql/generated";
import { formatCurrency } from "./helpers/numberHelper";

const FIELD_LATEST_BLOCK = "latestBlock";
const SUBGRAPH_URL = "https://api.thegraph.com/subgraphs/name/olympusdao/rbs";

export const handler = async (
  firestoreDocumentPath: string,
  firestoreCollectionName: string,
  webhookUrl: string,
): Promise<void> => {
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);
  const firestoreDocumentObject = await firestoreDocument.get();
  const latestBlock: number | undefined = firestoreDocumentObject.get(FIELD_LATEST_BLOCK);
  console.log(`latest block is ${latestBlock}`);

  // Fetch events since the last processed block
  const client = new Client({
    url: SUBGRAPH_URL,
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
    await sendAlert(webhookUrl, `🚨 RBS Price Event`, ``, [
      {
        name: "Type",
        value: priceEvent.type,
        inline: true,
      },
      {
        name: "Is High?",
        value: priceEvent.isHigh ? "True" : "False",
        inline: true,
      },
      {
        name: "Price",
        value: formatCurrency(priceEvent.price),
        inline: true,
      },
      {
        name: "Moving Average Price",
        value: formatCurrency(priceEvent.priceMovingAverage),
        inline: true,
      },
      {
        name: "Wall Low Price",
        value: formatCurrency(priceEvent.wallLowPrice),
        inline: true,
      },
      {
        name: "Cushion Low Price",
        value: formatCurrency(priceEvent.cushionLowPrice),
        inline: true,
      },
      {
        name: "Cushion High Price",
        value: formatCurrency(priceEvent.cushionHighPrice),
        inline: true,
      },
      {
        name: "Wall High Price",
        value: formatCurrency(priceEvent.wallHighPrice),
        inline: true,
      },
      {
        name: "Timestamp",
        value: priceEvent.date,
        inline: false,
      },
      {
        name: "Transaction",
        value: `https://etherscan.io/tx/${priceEvent.transaction}`,
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
  handler("rbs-discord-alerts-dev", "default", "dummyUrl");
}
