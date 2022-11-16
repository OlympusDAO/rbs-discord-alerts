import { Firestore } from "@google-cloud/firestore";

import { checkCapacityDepletion } from "./checkCapacity";
import { checkLowerWall } from "./checkLowerWall";
import { checkPrice } from "./checkPrice";

export const handleSnapshots = async (
  firestoreDocumentPath: string,
  firestoreCollectionName: string,
  mentionRoles: string[],
  webhookUrl: string,
): Promise<void> => {
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);

  await checkCapacityDepletion(firestoreDocument, mentionRoles, webhookUrl);
  await checkPrice(firestoreDocument, mentionRoles, webhookUrl);
  await checkLowerWall(firestoreDocument, mentionRoles, webhookUrl);
};

// Running via CLI
if (require.main === module) {
  handleSnapshots("rbs-discord-alerts-dev", "default", [], "dummyUrl");
}
