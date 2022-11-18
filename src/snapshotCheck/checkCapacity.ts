import { DocumentReference } from "@google-cloud/firestore";
import { Client } from "@urql/core";
import fetch from "cross-fetch";

import { RBS_SUBGRAPH_URL } from "../constants";
import { getRoleMentions, sendAlert } from "../discord";
import { LowerCushionCapacityDepletedDocument, UpperCushionCapacityDepletedDocument } from "../graphql/rangeSnapshot";
import { addDate } from "../helpers/dateHelper";
import { getShutdownEmbedField } from "../helpers/shutdownHelper";
import { getShouldThrottle, updateLastAlertDate } from "../helpers/throttleHelper";

const CUSHION_CAPACITY_THRESHOLD = 1.0;
export const DEPLETION_COUNT_THRESHOLD = 2;
const SINCE_DAYS = 1;
const FUNCTION_KEY = "checkCapacityDepletion";
const ALERT_THRESHOLD_SECONDS = SINCE_DAYS * 24 * 60 * 60;

export const isCapacityDepleted = (
  lowerCushionDepletionCount: number,
  upperCushionDepletionCount: number,
): [boolean, string] => {
  const capacityDepletionCount = lowerCushionDepletionCount + upperCushionDepletionCount;
  console.info(
    `Capacity depletion occurred ${capacityDepletionCount} times (lower: ${lowerCushionDepletionCount}, upper: ${upperCushionDepletionCount}) in the last ${SINCE_DAYS} days`,
  );

  if (capacityDepletionCount < DEPLETION_COUNT_THRESHOLD) {
    return [false, ""];
  }

  // If any cushion capacities have been depleted twice in 24 hours, throw an alarm
  return [
    true,
    `Cushion capacities have been depleted ${capacityDepletionCount} (> threshold of ${DEPLETION_COUNT_THRESHOLD}) times in the past ${SINCE_DAYS} days.\n\nPotential flash loan/exploit/treasury attack.`,
  ];
};

export const checkCapacityDepletion = async (
  firestore: DocumentReference,
  mentionRoles: string[],
  webhookUrl: string,
  contractUrl?: string,
): Promise<void> => {
  console.info(`\n\n⏰ Checking Capacity Depletion`);
  const shouldThrottle = await getShouldThrottle(firestore, FUNCTION_KEY, ALERT_THRESHOLD_SECONDS);

  const now = new Date();
  const sinceDate = addDate(now, -1 * SINCE_DAYS, 0, false);
  const sinceDateString = sinceDate.toISOString();

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
    .query(UpperCushionCapacityDepletedDocument, {
      sinceDate: sinceDateString,
      belowCapacity: CUSHION_CAPACITY_THRESHOLD,
    })
    .toPromise();
  if (!upperCushionCapacity.data) {
    throw new Error(
      `Did not receive results from upper cushion capacity GraphQL query with sinceDate ${sinceDateString} and capacity ${CUSHION_CAPACITY_THRESHOLD}. Error: ${upperCushionCapacity.error}`,
    );
  }

  const lowerDepletionCount = lowerCushionCapacity.data.rangeSnapshots.length;
  const upperDepletionCount = upperCushionCapacity.data.rangeSnapshots.length;

  const result = isCapacityDepleted(lowerDepletionCount, upperDepletionCount);
  if (!result[0]) {
    return;
  }

  if (shouldThrottle) {
    console.info(`Alarm conditions are present, but throttling is active.`);
    return;
  }

  // Throw alarm
  console.error(`Above threshold of ${DEPLETION_COUNT_THRESHOLD}. Throwing alarm.`);
  await sendAlert(webhookUrl, getRoleMentions(mentionRoles), `🚨 Repeated Cushion Depletion`, result[1], [
    ...getShutdownEmbedField(contractUrl),
  ]);

  // Update lastAlarmDate
  await updateLastAlertDate(firestore, FUNCTION_KEY, new Date());
};
