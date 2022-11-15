import { Client } from "@urql/core";
import fetch from "cross-fetch";

import { RBS_SUBGRAPH_URL } from "./constants";
import { sendAlert } from "./discord";
import { LowerCushionCapacityDepletedDocument } from "./graphql/generated";
import { addDays } from "./helpers/dateHelper";

const CUSHION_CAPACITY_THRESHOLD = 1.0;
const DEPLETION_COUNT_THRESHOLD = 2;
const SINCE_DAYS = 1;

export const checkCapacityDepletion = async (webhookUrl: string): Promise<void> => {
  const now = new Date();
  const sinceDate = addDays(now, -1 * SINCE_DAYS, false);
  const sinceDateString = sinceDate.toISOString();

  // TODO throttling?

  const client = new Client({
    url: RBS_SUBGRAPH_URL,
    fetch,
  });

  // Get the lower cushion capacity
  const lowerCushionCapacity = await client
    .query(LowerCushionCapacityDepletedDocument, {
      sinceDate: sinceDateString,
      belowCapacity: CUSHION_CAPACITY_THRESHOLD,
    })
    .toPromise();
  if (!lowerCushionCapacity.data) {
    throw new Error(
      `Did not receive results from lower cushion capacity GraphQL query with sinceDate ${sinceDateString} and capacity ${CUSHION_CAPACITY_THRESHOLD}. Error: ${lowerCushionCapacity.error}`,
    );
  }

  // Get the upper cushion capacity
  const upperCushionCapacity = await client
    .query(LowerCushionCapacityDepletedDocument, {
      sinceDate: sinceDateString,
      belowCapacity: CUSHION_CAPACITY_THRESHOLD,
    })
    .toPromise();
  if (!upperCushionCapacity.data) {
    throw new Error(
      `Did not receive results from upper cushion capacity GraphQL query with sinceDate ${sinceDateString} and capacity ${CUSHION_CAPACITY_THRESHOLD}. Error: ${upperCushionCapacity.error}`,
    );
  }

  // If any cushion capacities have been depleted twice in 24 hours, throw an alarm
  const lowerDepletionCount = lowerCushionCapacity.data.rangeSnapshots.length;
  const upperDepletionCount = upperCushionCapacity.data.rangeSnapshots.length;
  const capacityDepletionCount = lowerDepletionCount + upperDepletionCount;

  console.info(
    `Capacity depletion occurred ${capacityDepletionCount} times (lower: ${lowerDepletionCount}, upper: ${upperDepletionCount}) in the last ${SINCE_DAYS}`,
  );
  if (capacityDepletionCount < DEPLETION_COUNT_THRESHOLD) {
    console.info(`Below threshold of ${DEPLETION_COUNT_THRESHOLD}.`);
    return;
  }

  console.error(`Above threshold of ${DEPLETION_COUNT_THRESHOLD}. Throwing alarm.`);
  await sendAlert(
    webhookUrl,
    `🚨 Cushion Depletion`,
    `Cushion capacities have been depleted ${capacityDepletionCount} (> threshold of ${DEPLETION_COUNT_THRESHOLD}) times in the past ${SINCE_DAYS} days. Potential flash loan/exploit/treasury attack.`,
    [],
  );
};
