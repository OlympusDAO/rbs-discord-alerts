import { Client } from "@urql/core";
import fetch from "cross-fetch";

import { PROTOCOL_METRICS_SUBGRAPH_URL, RBS_SUBGRAPH_URL } from "./constants";
import { sendAlert } from "./discord";
import { LatestPriceSnapshotDocument } from "./graphql/priceSnapshot";
import { LatestRangeSnapshotDocument } from "./graphql/rangeSnapshot";

const PRICE_DELTA = 0.1; // 10%

export const checkPrice = async (webhookUrl: string): Promise<void> => {
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
  const chainlinkPrice = latestRangeSnapshot.ohmPrice;

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
  const lpPrice = latestPriceSnapshot.priceOhm;

  // If the price is within parameters, exit
  const priceDiff = chainlinkPrice - lpPrice;
  const relativePriceDiff = Math.abs(priceDiff / chainlinkPrice);
  console.info(
    `Chainlink price: ${chainlinkPrice}
    LP price: ${lpPrice}
    Price difference is ${priceDiff}
    Relative difference is ${relativePriceDiff}`,
  );
  if (relativePriceDiff < PRICE_DELTA) {
    console.info(`Relative price difference is below threshold of ${PRICE_DELTA}. Exiting.`);
    return;
  }

  // Throw an alarm
  console.error(`Above threshold of ${PRICE_DELTA}. Throwing alarm.`);
  await sendAlert(
    webhookUrl,
    `🚨 Potential Price Manipulation`,
    `Chainlink (${chainlinkPrice}) and LP (${lpPrice}) prices differ by > ${PRICE_DELTA}: ${relativePriceDiff}.
    
    Potential manipulation of the Chainlink price oracle.`,
    [],
  );
};
