import { Firestore } from "@google-cloud/firestore";

import { checkCapacityDepletion } from "./checkCapacity";
import { checkLowerWall } from "./checkLowerWall";
import { checkPrice } from "./checkPrice";

export const performSnapshotChecks = async (
  firestoreDocumentPath: string,
  firestoreCollectionName: string,
  mentionRoles: string[],
  webhookUrl: string,
  contractUrl?: string,
): Promise<void> => {
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);

  await checkCapacityDepletion(firestoreDocument, mentionRoles, webhookUrl, contractUrl);
  await checkPrice(firestoreDocument, mentionRoles, webhookUrl, contractUrl);
  await checkLowerWall(firestoreDocument, mentionRoles, webhookUrl, contractUrl);
};

// Running via CLI
if (require.main === module) {
  if (!process.env.WEBHOOK_URL) {
    throw new Error("Set the WEBHOOK_URL environment variable");
  }

  performSnapshotChecks(
    "rbs-discord-alerts-dev",
    "default",
    ["1042353289477500950"],
    process.env.WEBHOOK_URL,
    "https://goerli.etherscan.io/address/0x196a59fB453da942f062Be4407D923129c759435#writeContract",
  );
}
