import { type DocumentReference, Firestore } from "@google-cloud/firestore";

import { createDiscordAlertSender, type DiscordAlertSender, type EmbedField, getRelativeTimestamp } from "./discord";
import { ChainId, getEtherscanAddressUrl, getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { getIndexerEventStartBlock } from "./helpers/indexerCursorHelper";
import { castFloat } from "./helpers/numberHelper";
import { shorten } from "./helpers/stringHelper";
import {
  getClaimedYieldsSince,
  getConvertibleDepositsIndexedBlock,
  getDepositAssetSymbols,
} from "./indexer/convertibleDeposits";
import type { CdClaimedYield } from "./indexer/types";

const FUNCTION_KEY = "convertibleDepositFacilityClaimedYield";
const LATEST_BLOCK = "latestBlock";

type ConvertibleDepositFacilityClaimedYieldEvent = CdClaimedYield;

/**
 * Sends a Discord alert when a convertible deposit facility claimed yield event is detected
 *
 * @param webhookUrl
 * @param event
 */
const sendClaimYieldAlert = (
  alertSender: DiscordAlertSender,
  webhookUrl: string,
  event: ConvertibleDepositFacilityClaimedYieldEvent,
  assetSymbols: Map<string, string>,
): Promise<boolean> => {
  const timestamp = Number(event.timestamp) * 1000; // Convert to milliseconds
  const txHash = event.txHash;
  const amount = castFloat(event.amountDecimal);

  const description = "The protocol has claimed yield from convertible deposits";

  const fields: EmbedField[] = [
    {
      name: "Date",
      value: getRelativeTimestamp(timestamp),
      inline: false,
    },
    {
      name: "Transaction",
      value: `[${shorten(txHash)}](${getEtherscanTransactionUrl(txHash, ChainId.MAINNET)})`,
      inline: false,
    },
    {
      name: "Asset",
      value: `[${assetSymbols.get(event.depositAsset.toLowerCase()) || "Unknown"}](${getEtherscanAddressUrl(event.depositAsset, ChainId.MAINNET)})`,
      inline: true,
    },
    {
      name: "Amount",
      value: `${amount.toFixed(2)}`,
      inline: true,
    },
  ];

  return alertSender(webhookUrl, "", `💸 Protocol Yield Claimed`, description, fields);
};

const getLatestBlock = async (firestoreDocument: DocumentReference): Promise<number | undefined> => {
  const firestoreSnapshot = await firestoreDocument.get();
  const value = firestoreSnapshot.get(`${FUNCTION_KEY}.${LATEST_BLOCK}`);
  const latestBlock = value ? parseInt(value, 10) : undefined;

  console.info(`Latest block is ${latestBlock}`);
  return latestBlock;
};

/**
 * Performs checks for convertible deposit facility claimed yield events
 *
 * This function:
 * - Queries the GraphQL convertible deposits endpoint for convertible deposit facility claimed yield events
 * - Sends Discord alerts with facility address and transaction hash
 * - Updates Firestore with the latest processed block
 *
 * @param firestoreDocumentPath
 * @param firestoreCollectionName
 * @param webhookUrl
 * @returns
 */
export const performClaimedYieldChecks = async (
  firestoreDocumentPath: string,
  firestoreCollectionName: string,
  webhookUrl: string,
): Promise<void> => {
  const alertSender = createDiscordAlertSender();
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);

  console.info(`\n\n⏰ Processing Claimed Yield Events`);

  // Get the latest block
  const latestBlock = await getIndexerEventStartBlock(
    await getLatestBlock(firestoreDocument),
    getConvertibleDepositsIndexedBlock,
  );

  console.debug(`Fetching claimed yield events since block ${latestBlock}`);

  const events = await getClaimedYieldsSince(latestBlock);
  console.info(`Processing ${events.length} claimed yield events`);

  if (events.length === 0) {
    console.info(`No claimed yield events to process`);
    return;
  }

  // The event rows carry the deposit asset ADDRESS; the symbol shown in the
  // alert comes from the assets route, resolved once for the whole batch.
  const assetSymbols = await getDepositAssetSymbols();

  // Process events and send alerts
  for (const event of events) {
    const eventBlock = Number(event.block);
    console.info(`Processing claimed yield event for facility ${event.facility} at block ${eventBlock}`);
    const alertSent = await sendClaimYieldAlert(alertSender, webhookUrl, event, assetSymbols);
    if (!alertSent) throw new Error(`Discord rate-limited the claimed yield alert at block ${eventBlock}`);

    await firestoreDocument.update({
      [`${FUNCTION_KEY}.${LATEST_BLOCK}`]: eventBlock,
    });
    console.info(`Updated latest block to ${eventBlock}`);
  }
};

// Running via CLI
if (require.main === module) {
  if (!process.env.WEBHOOK_URL) {
    throw new Error("Set the WEBHOOK_URL environment variable");
  }

  const webhookUrl = process.env.WEBHOOK_URL;

  void (async () => {
    try {
      await performClaimedYieldChecks("rbs-discord-alerts-dev", "default", webhookUrl);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  })();
}
