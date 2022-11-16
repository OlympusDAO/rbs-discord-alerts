import { Client } from "@urql/core";
import fetch from "cross-fetch";

import { RBS_SUBGRAPH_URL } from "./constants";
import { getRoleMentions, sendAlert } from "./discord";
import { LatestRangeSnapshotDocument, RangeSnapshotDocument } from "./graphql/rangeSnapshot";
import { getShouldThrottle, updateLastAlertDate } from "./helpers/throttleHelper";

const LOWER_WALL_PRICE_MULTIPLE = 0.8;
const FUNCTION_KEY = "checkLowerWall";
const ALERT_THRESHOLD_SECONDS = 6 * 60 * 60;

export const isLowerWallBroken = (historicalLowerWallPrice: number, currentPrice: number): [boolean, string] => {
  console.info(`
  Historical lower wall price: ${historicalLowerWallPrice}
  Current price: ${currentPrice}
  Threshold: ${LOWER_WALL_PRICE_MULTIPLE}
  `);
  // If the current price is >= 80% of the lower wall price, exit
  if (currentPrice >= LOWER_WALL_PRICE_MULTIPLE * historicalLowerWallPrice) {
    return [false, ""];
  }

  return [
    true,
    `The current price (${currentPrice}) is < ${LOWER_WALL_PRICE_MULTIPLE} of the lower wall price from 6 hours ago (${historicalLowerWallPrice}).\n\nThe rate of price depreciation is out of bounds.`,
  ];
};

export const checkLowerWall = async (
  firestore: FirebaseFirestore.DocumentReference,
  mentionRoles: string[],
  webhookUrl: string,
): Promise<void> => {
  console.info(`\n\n⏰ Checking Lower Wall Break`);
  const shouldThrottle = await getShouldThrottle(firestore, FUNCTION_KEY, ALERT_THRESHOLD_SECONDS);

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
  const historicalBlock = latestBlock - ALERT_THRESHOLD_SECONDS / 12;

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

  const result = isLowerWallBroken(historicalLowerWallPrice, latestPrice);
  if (!result[0]) {
    return;
  }

  if (shouldThrottle) {
    console.info(`Alarm conditions are present, but throttling is active.`);
    return;
  }

  // Throw alarm
  console.error(`Outside threshold of ${LOWER_WALL_PRICE_MULTIPLE}. Throwing alarm.`);
  await sendAlert(webhookUrl, getRoleMentions(mentionRoles), `🚨 Fast Price Depreciation`, result[1], []);

  // Update lastAlarmDate
  await updateLastAlertDate(firestore, FUNCTION_KEY, new Date());
};
