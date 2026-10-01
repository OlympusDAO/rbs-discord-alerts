import { type DocumentReference, Firestore } from "@google-cloud/firestore";

import { createDiscordAlertSender, type DiscordAlertSender, type EmbedField, getRelativeTimestamp } from "./discord";
import { ChainId, getEtherscanAddressUrl, getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { getIndexerEventStartBlock } from "./helpers/indexerCursorHelper";
import { castFloat } from "./helpers/numberHelper";
import { shorten } from "./helpers/stringHelper";
import {
  getAuctionEventsSince,
  getConvertibleDepositsIndexedBlock,
  getDepositAssetSymbols,
} from "./indexer/convertibleDeposits";
import type { CdAuctionResult } from "./indexer/types";

const FUNCTION_KEY = "auctionResult";
const LATEST_BLOCK = "latestBlock";

type AuctionResultEvent = CdAuctionResult;

/**
 * Sends a Discord alert when auction results are updated
 *
 * @param webhookUrl
 * @param event
 */
const sendAuctionResultAlert = (
  alertSender: DiscordAlertSender,
  webhookUrl: string,
  event: AuctionResultEvent,
  assetSymbols: Map<string, string>,
): Promise<boolean> => {
  const timestamp = Number(event.timestamp) * 1000; // Convert to milliseconds
  const txHash = event.txHash;
  const target = castFloat(event.targetDecimal);
  const ohmConvertible = castFloat(event.ohmConvertibleDecimal);

  const title = "CD Auction Result";
  const description = "The daily auction has ended.";

  const fields: EmbedField[] = [
    {
      name: "Deposit Asset",
      value: `[${assetSymbols.get(event.depositAsset.toLowerCase()) || "Unknown"}](${getEtherscanAddressUrl(event.depositAsset, ChainId.MAINNET)})`,
      inline: true,
    },
    {
      name: "Transaction",
      value: `[${shorten(txHash)}](${getEtherscanTransactionUrl(txHash, ChainId.MAINNET)})`,
      inline: true,
    },
    {
      name: "End Date",
      value: getRelativeTimestamp(timestamp),
    },
    {
      name: "Day Target",
      value: `${target.toFixed(2)} OHM`,
      inline: true,
    },
    {
      name: "OHM Sold",
      value: `${ohmConvertible.toFixed(2)} OHM`,
      inline: true,
    },
  ];

  return alertSender(webhookUrl, "", title, description, fields);
};

const getLatestBlock = async (firestoreDocument: DocumentReference): Promise<number | undefined> => {
  const firestoreSnapshot = await firestoreDocument.get();
  const value = firestoreSnapshot.get(`${FUNCTION_KEY}.${LATEST_BLOCK}`);
  const latestBlock = value ? parseInt(value, 10) : undefined;

  console.info(`Latest block is ${latestBlock}`);
  return latestBlock;
};

/**
 * Performs checks for auction result events
 *
 * This function:
 * - Queries the GraphQL convertible deposits endpoint for auction result events
 * - Sends Discord alerts with auction details
 * - Updates Firestore with the latest processed block
 *
 * @param firestoreDocumentPath
 * @param firestoreCollectionName
 * @param webhookUrl
 * @returns
 */
export const performAuctionResultChecks = async (
  firestoreDocumentPath: string,
  firestoreCollectionName: string,
  webhookUrl: string,
): Promise<void> => {
  const alertSender = createDiscordAlertSender();
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);

  console.info(`\n\n⏰ Processing Auction Result Events`);

  // Get the latest block
  const latestBlock = await getIndexerEventStartBlock(
    await getLatestBlock(firestoreDocument),
    getConvertibleDepositsIndexedBlock,
  );

  console.debug(`Fetching auction result events since block ${latestBlock}`);

  // One request returns both parameter updates and results; this handler wants
  // the results half.
  const { results: events } = await getAuctionEventsSince(latestBlock);
  console.info(`Processing ${events.length} auction result events`);

  if (events.length === 0) {
    console.info(`No auction result events to process`);
    return;
  }

  // The event rows carry the deposit asset ADDRESS; the symbol shown in the
  // alert comes from the assets route, resolved once for the whole batch.
  const assetSymbols = await getDepositAssetSymbols();

  // Process events and send alerts
  for (const event of events) {
    const eventBlock = Number(event.block);
    console.info(`Processing auction result event for auctioneer ${event.auctioneer} at block ${eventBlock}`);
    const alertSent = await sendAuctionResultAlert(alertSender, webhookUrl, event, assetSymbols);
    if (!alertSent) throw new Error(`Discord rate-limited the auction result alert at block ${eventBlock}`);

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

  performAuctionResultChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL);
}
