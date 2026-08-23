import type { DocumentReference } from "@google-cloud/firestore";

import { type DiscordAlertSender, getRoleMentions } from "../discord";
import { addDate } from "../helpers/dateHelper";
import { getShutdownEmbedField } from "../helpers/shutdownHelper";
import { getShouldThrottle, updateLastAlertDate } from "../helpers/throttleHelper";
import { getCushionDepletion } from "../indexer/rbs";

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
  alertSender: DiscordAlertSender,
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

  // The route filters on ohmPrice > 0 itself — a null price means the feed was
  // not live yet, and without that every pre-launch snapshot counts as
  // depleted. One request now covers both sides; it was two queries.
  //
  // `sinceDate` takes a YYYY-MM-DD date, while the query this replaces took a
  // full ISO timestamp for a rolling 24h window. Requesting the DATE part
  // widens the window to the start of that day, so the rows are filtered back
  // to the exact cutoff here. Leaving it wide would inflate the depletion count
  // and fire an emergency alert that is not due.
  const depletion = await getCushionDepletion(sinceDateString.slice(0, 10), CUSHION_CAPACITY_THRESHOLD.toString());

  const withinWindow = (snapshots: { date: string }[]): number =>
    snapshots.filter(snapshot => snapshot.date > sinceDateString).length;

  const lowerDepletionCount = withinWindow(depletion.low);
  const upperDepletionCount = withinWindow(depletion.high);

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
  const alertSuccess = await alertSender(
    webhookUrl,
    getRoleMentions(mentionRoles),
    `🚨 Repeated Cushion Depletion`,
    result[1],
    [...getShutdownEmbedField(contractUrl)],
  );

  if (alertSuccess) {
    // Update lastAlarmDate
    await updateLastAlertDate(firestore, FUNCTION_KEY, new Date());
  }
};
