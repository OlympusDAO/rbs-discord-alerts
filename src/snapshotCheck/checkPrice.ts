import { DocumentReference } from "@google-cloud/firestore";
import { Client } from "@urql/core";
import fetch from "cross-fetch";

import { PROTOCOL_METRICS_SUBGRAPH_URL, RBS_SUBGRAPH_URL } from "../constants";
import { getRoleMentions, sendAlert } from "../discord";
import { LatestPriceSnapshotDocument } from "../graphql/priceSnapshot";
import { LatestRangeSnapshotDocument } from "../graphql/rangeSnapshot";
import { castFloat, castFloatNullable } from "../helpers/numberHelper";
import { getShutdownEmbedField } from "../helpers/shutdownHelper";
import { getShouldThrottle, updateLastAlertDate } from "../helpers/throttleHelper";

const PRICE_DELTA = 0.1; // 10%
const FUNCTION_KEY = "checkPrice";

export const isPriceDeviating = (chainlinkPrice: number, lpPrice: number): [boolean, string] => {
  const priceDiff = chainlinkPrice - lpPrice;
  const chainlinkRelativePriceDiff = Math.abs(priceDiff / chainlinkPrice);
  const lpRelativePriceDiff = Math.abs(priceDiff / lpPrice);
  console.info(
    `
    Chainlink price: ${chainlinkPrice}
    LP price: ${lpPrice}
    Absolute price difference is ${priceDiff}
    Chainlink relative difference is ${chainlinkRelativePriceDiff}
    LP relative difference is ${lpRelativePriceDiff}`,
  );

  if (chainlinkRelativePriceDiff < PRICE_DELTA && lpRelativePriceDiff < PRICE_DELTA) {
    return [false, ""];
  }

  return [
    true,
    `Chainlink (${chainlinkPrice}) and LP (${lpPrice}) prices differ by > ${PRICE_DELTA}: ${chainlinkRelativePriceDiff}.\n\nPotential manipulation of the Chainlink price oracle.`,
  ];
};

export const checkPrice = async (
  firestore: DocumentReference,
  mentionRoles: string[],
  webhookUrl: string,
  contractUrl?: string,
): Promise<void> => {
  console.info(`\n\n⏰ Checking Price Manipulation`);
  const shouldThrottle = await getShouldThrottle(firestore, FUNCTION_KEY);

  // Grab latest RangeSnapshot
  const rangeSnapshotClient = new Client({
    url: RBS_SUBGRAPH_URL,
    fetch,
  });
  const rangeSnapshotResults = await rangeSnapshotClient.query(LatestRangeSnapshotDocument, {}).toPromise();
  if (!rangeSnapshotResults.data || rangeSnapshotResults.data.rangeSnapshots.length == 0) {
    throw new Error(
      `Did not receive results from latest RangeSnapshot GraphQL query. Error: ${rangeSnapshotResults.error}`,
    );
  }

  // Grab the OHM price from the RangeSnapshot, which is derived from the Chainlink oracle.
  const latestRangeSnapshot = rangeSnapshotResults.data.rangeSnapshots[0];
  const chainlinkPrice = castFloatNullable(latestRangeSnapshot.ohmPrice);

  // It can be null, in which case we skip the check
  if (!chainlinkPrice) {
    console.warn(`RangeSnapshot at block ${latestRangeSnapshot.block} had an empty OHM price. Skipping.`);
    return;
  }

  // Grab latest price from the protocol-metrics PriceSnapshot
  const priceSnapshotClient = new Client({
    url: PROTOCOL_METRICS_SUBGRAPH_URL,
    fetch,
  });
  const priceSnapshotResults = await priceSnapshotClient.query(LatestPriceSnapshotDocument, {}).toPromise();
  if (!priceSnapshotResults.data || priceSnapshotResults.data.priceSnapshots.length == 0) {
    throw new Error(
      `Did not receive results from latest PriceSnapshot GraphQL query. Error: ${priceSnapshotResults.error}`,
    );
  }

  // Grab the OHM price from the PriceSnapshot, which is derived from the liquidity pools.
  const latestPriceSnapshot = priceSnapshotResults.data.priceSnapshots[0];
  const lpPrice = castFloat(latestPriceSnapshot.priceOhm);

  const result = isPriceDeviating(chainlinkPrice, lpPrice);
  if (!result[0]) {
    return;
  }

  if (shouldThrottle) {
    console.info(`Alarm conditions are present, but throttling is active.`);
    return;
  }

  // Throw an alarm
  console.error(`Above threshold of ${PRICE_DELTA}. Throwing alarm.`);
  await sendAlert(webhookUrl, getRoleMentions(mentionRoles), `🚨 Potential Price Manipulation`, result[1], [
    ...getShutdownEmbedField(contractUrl),
  ]);

  // Update lastAlarmDate
  await updateLastAlertDate(firestore, FUNCTION_KEY, new Date());
};
