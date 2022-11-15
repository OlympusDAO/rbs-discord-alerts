import { Client } from "@urql/core";
import fetch from "cross-fetch";

import { RBS_SUBGRAPH_URL } from "./constants";
import { sendAlert } from "./discord";
import { LatestRangeSnapshotDocument, RangeSnapshotDocument } from "./graphql/rangeSnapshot";

const LOWER_WALL_PRICE_MULTIPLE = 0.8;

export const checkLowerWall = async (webhookUrl: string): Promise<void> => {
  // Get the current block
  const rangeSnapshotClient = new Client({
    url: RBS_SUBGRAPH_URL,
    fetch,
  });
  const latestBlockResults = await rangeSnapshotClient.query(LatestRangeSnapshotDocument, {}).toPromise();
  if (!latestBlockResults.data || latestBlockResults.data.rangeSnapshots.length == 0) {
    throw new Error(
      `Did not receive results from latest RangeSnapshot GraphQL query. Error: ${latestBlockResults.error}`,
    );
  }

  const latestSnapshot = latestBlockResults.data.rangeSnapshots[0];
  const latestBlock = latestSnapshot.block;
  const latestPrice = latestSnapshot.ohmPrice;
  // It can be null, in which case we skip the check
  if (!latestPrice) {
    console.warn(`RangeSnapshot at block ${latestBlock} had an empty OHM price. Skipping.`);
    return;
  }

  // Calculate the block for 6 hours ago
  const historicalBlock = latestBlock - (6 * 60 * 60) / 12;

  // Get the lower wall price 6 hours ago
  const previousBlockResults = await rangeSnapshotClient
    .query(RangeSnapshotDocument, {
      block: historicalBlock,
    })
    .toPromise();
  if (!previousBlockResults.data || previousBlockResults.data.rangeSnapshots.length == 0) {
    throw new Error(
      `Did not receive results from RangeSnapshot GraphQL query with block ${historicalBlock}. Error: ${previousBlockResults.error}`,
    );
  }

  const historicalLowerWallPrice = previousBlockResults.data.rangeSnapshots[0].wallLowPrice;

  // If the current price is > 80% of the lower wall price, exit
  if (latestPrice > LOWER_WALL_PRICE_MULTIPLE * historicalLowerWallPrice) {
    console.info(
      `Current price at block ${latestBlock}: ${latestPrice}\nLower wall price at block ${historicalBlock}: ${historicalLowerWallPrice}\nCurrent price is >= ${LOWER_WALL_PRICE_MULTIPLE} * ${historicalLowerWallPrice}, so in bounds. Exiting.`,
    );
    return;
  }

  // Throw alarm
  console.error(`Outside threshold of ${LOWER_WALL_PRICE_MULTIPLE}. Throwing alarm.`);
  await sendAlert(
    webhookUrl,
    `🚨 Fast Price Depreciation`,
    `The current price (${latestPrice}) is < ${LOWER_WALL_PRICE_MULTIPLE} of the lower wall price from 6 hours ago (${historicalLowerWallPrice}).\n\nThe rate of price depreciation is out of bounds.`,
    [],
  );
};
