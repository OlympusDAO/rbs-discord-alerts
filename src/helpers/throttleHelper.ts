const ELAPSED_THRESHOLD_SECONDS = 5 * 60; // 5 minutes
const KEY_LAST_ALERT = "lastAlertDate";

export const getShouldThrottle = async (
  firestore: FirebaseFirestore.DocumentReference,
  functionKey: string,
): Promise<boolean> => {
  const firestoreSnapshot = await firestore.get();
  const lastAlertDateValue = firestoreSnapshot.get(`${functionKey}.${KEY_LAST_ALERT}`);
  // If no alert has been sent, then we won't throttle
  if (!lastAlertDateValue) {
    console.info(`No last alert date for function ${functionKey}. No need to throttle.`);
    return false;
  }

  const lastAlertDate = new Date(lastAlertDateValue);
  const elapsedSeconds = (new Date().getTime() - lastAlertDate.getTime()) / 1000;

  console.info(`
    Last alert date: ${lastAlertDate}
    Elapsed seconds: ${elapsedSeconds}
    Threshold: ${ELAPSED_THRESHOLD_SECONDS}
  `);

  // If more than the threshold has passed, no need to throttle
  if (elapsedSeconds >= ELAPSED_THRESHOLD_SECONDS) {
    console.info(`Sufficient time has elapsed from previous alarm. No need to throttle.`);
    return false;
  }

  console.info(`Throttling.`);
  return true;
};

export const updateLastAlertDate = async (
  firestore: FirebaseFirestore.DocumentReference,
  functionKey: string,
  date: Date,
): Promise<void> => {
  console.debug(`Setting ${functionKey}.${KEY_LAST_ALERT} to ${date.toISOString()}`);
  await firestore.update({
    [`${functionKey}.${KEY_LAST_ALERT}`]: date.toISOString(),
  });
};
