import { type DocumentReference, Firestore } from "@google-cloud/firestore";

import { createDiscordAlertSender, type DiscordAlertSender, type EmbedField, getRelativeTimestamp } from "./discord";
import { ChainId, getEtherscanAddressUrl, getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { getIndexerEventStartBlock } from "./helpers/indexerCursorHelper";
import { castFloat, formatNumber } from "./helpers/numberHelper";
import { shorten } from "./helpers/stringHelper";
import { getConvertibleDepositsIndexedBlock, getFailuresSince } from "./indexer/convertibleDeposits";
import type { CdBondMarketCreationFailed } from "./indexer/types";

const FUNCTION_KEY = "bondMarketCreationFailed";
const LATEST_BLOCK = "latestBlock";

type BondMarketCreationFailedEvent = CdBondMarketCreationFailed;

/**
 * Sends a Discord alert when a bond market creation failed event is detected
 *
 * @param webhookUrl
 * @param event
 */
const sendBondMarketCreationFailedAlert = (
  alertSender: DiscordAlertSender,
  webhookUrl: string,
  event: BondMarketCreationFailedEvent,
): Promise<boolean> => {
  const timestamp = Number(event.timestamp) * 1000; // Convert to milliseconds
  const blockNumber = Number(event.block);
  const txHash = event.txHash;
  const saleAmount = castFloat(event.saleAmountDecimal);

  const description = `The heartbeat is unaffected`;

  const fields: EmbedField[] = [
    {
      name: "Emission Manager Address",
      value: `[${shorten(event.emissionManager)}](${getEtherscanAddressUrl(event.emissionManager, ChainId.MAINNET)})`,
    },
    {
      name: "Sale Amount",
      value: `${formatNumber(saleAmount, 0)} OHM`,
    },
    {
      name: "Date",
      value: getRelativeTimestamp(timestamp),
    },
    {
      name: "Block",
      value: blockNumber.toString(),
      inline: true,
    },
    {
      name: "Transaction",
      value: `[${shorten(txHash)}](${getEtherscanTransactionUrl(txHash, ChainId.MAINNET)})`,
      inline: true,
    },
    {
      name: "Manual Resolution",
      value: `Call \`createPendingBondMarket()\` on the EmissionManager contract as admin or manager to manually create the bond market.`,
      inline: false,
    },
  ];

  return alertSender(
    webhookUrl,
    "",
    `⚠️ The EmissionManager was unable to create a bond market for the under-selling of OHM.`,
    description,
    fields,
  );
};

const getLatestBlock = async (firestoreDocument: DocumentReference): Promise<number | undefined> => {
  const firestoreSnapshot = await firestoreDocument.get();
  const value = firestoreSnapshot.get(`${FUNCTION_KEY}.${LATEST_BLOCK}`);
  const latestBlock = value ? parseInt(value, 10) : undefined;

  console.info(`Latest block is ${latestBlock}`);
  return latestBlock;
};

/**
 * Performs checks for failed bond market creation events
 *
 * This function:
 * - Queries the GraphQL convertible deposits endpoint for bond market creation failed events
 * - Sends Discord alerts with emission manager address, sale amount, and transaction hash
 * - Updates Firestore with the latest processed block
 *
 * @param firestoreDocumentPath
 * @param firestoreCollectionName
 * @param webhookUrl
 * @returns
 */
export const performBondMarketCreationFailedChecks = async (
  firestoreDocumentPath: string,
  firestoreCollectionName: string,
  webhookUrl: string,
): Promise<void> => {
  const alertSender = createDiscordAlertSender();
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);

  console.info(`\n\n⏰ Processing Bond Market Creation Failed Events`);

  // Get the latest block
  const latestBlock = await getIndexerEventStartBlock(
    await getLatestBlock(firestoreDocument),
    getConvertibleDepositsIndexedBlock,
  );

  console.debug(`Fetching bond market creation failed events since block ${latestBlock}`);

  // One request returns both failure kinds; this handler wants the
  // bond-market-creation half.
  const { bondMarketCreationFailed: events } = await getFailuresSince(latestBlock);
  console.info(`Processing ${events.length} bond market creation failed events`);

  if (events.length === 0) {
    console.info(`No bond market creation failed events to process`);
    return;
  }

  // Process events and send alerts
  for (const event of events) {
    const eventBlock = Number(event.block);
    console.info(
      `Processing bond market creation failed event for emission manager ${event.emissionManager} at block ${eventBlock}`,
    );
    const alertSent = await sendBondMarketCreationFailedAlert(alertSender, webhookUrl, event);
    if (!alertSent) throw new Error(`Discord rate-limited the bond market failure alert at block ${eventBlock}`);

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

  performBondMarketCreationFailedChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL);
}
