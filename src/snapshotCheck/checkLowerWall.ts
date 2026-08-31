import type { DocumentReference } from "@google-cloud/firestore";

import { type DiscordAlertSender, getRoleMentions } from "../discord";
import { castFloat, castFloatNullable, castInt } from "../helpers/numberHelper";
import { getShutdownEmbedField } from "../helpers/shutdownHelper";
import { getShouldThrottle, updateLastAlertDate } from "../helpers/throttleHelper";
import { getLatestRangeSnapshot, getRangeSnapshotAtBlock } from "../indexer/rbs";

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
  alertSender: DiscordAlertSender,
  firestore: DocumentReference,
  mentionRoles: string[],
  webhookUrl: string,
  contractUrl?: string,
): Promise<void> => {
  console.info(`\n\n⏰ Checking Lower Wall Break`);
  const shouldThrottle = await getShouldThrottle(firestore, FUNCTION_KEY, ALERT_THRESHOLD_SECONDS);

  // Get the current block
  console.debug(`Fetching latest block for RangeSnapshot`);
  // The route answers the row itself, or null before the first snapshot.
  const latestSnapshot = await getLatestRangeSnapshot();
  if (!latestSnapshot) {
    throw new Error(`Did not receive a latest RangeSnapshot from the indexer.`);
  }

  const latestBlock = castInt(latestSnapshot.block);
  const latestPrice = castFloatNullable(latestSnapshot.ohmPrice);
  // It can be null, in which case we skip the check
  if (!latestPrice) {
    console.warn(`RangeSnapshot at block ${latestBlock} had an empty OHM price. Skipping.`);
    return;
  }

  console.debug(`Latest RangeSnapshot block is ${latestBlock}`);

  // Calculate the block for 6 hours ago
  const historicalBlock = latestBlock - ALERT_THRESHOLD_SECONDS / 12;

  // Get the lower wall price 6 hours ago
  const previousSnapshots = await getRangeSnapshotAtBlock(historicalBlock);
  if (previousSnapshots.length === 0) {
    console.warn(`RangeSnapshot query at block ${historicalBlock} returned 0 records. Exiting.`);
    return;
  }

  const historicalLowerWallPrice = castFloat(previousSnapshots[0].lowWallPrice);
  console.debug(`Historical lower wall price: ${historicalLowerWallPrice}`);

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
  const alertSuccess = await alertSender(
    webhookUrl,
    getRoleMentions(mentionRoles),
    `🚨 Fast Price Depreciation`,
    result[1],
    [...getShutdownEmbedField(contractUrl)],
  );

  if (alertSuccess) {
    // Update lastAlarmDate
    console.debug(`Updating last alert date`);
    await updateLastAlertDate(firestore, FUNCTION_KEY, new Date());
  }
};
