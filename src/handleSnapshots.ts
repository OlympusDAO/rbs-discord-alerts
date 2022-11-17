import { Firestore } from "@google-cloud/firestore";

import { checkCapacityDepletion } from "./checkCapacity";
import { checkLowerWall } from "./checkLowerWall";
import { checkPrice } from "./checkPrice";

export const handleSnapshots = async (
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

  handleSnapshots(
    "rbs-discord-alerts-dev",
    "default",
    ["1042353289477500950"],
    process.env.WEBHOOK_URL,
    "https://goerli.etherscan.io/address/0x9ECDA630626a3aa9EF24A53c4Faca1Ce76a1A508#writeContract",
  );
}
