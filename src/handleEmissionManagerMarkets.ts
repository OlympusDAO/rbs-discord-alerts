import { Firestore } from "@google-cloud/firestore";

import { createDiscordAlertSender, type DiscordAlertSender, type EmbedField, getRelativeTimestamp } from "./discord";
import { getIndexerEventStartBlock } from "./helpers/indexerCursorHelper";
import { getBondMarketEventsSince, getBondsIndexedBlock } from "./indexer/bonds";
import { getEmissionManagerIndexedBlock, getSale, getSalesSince } from "./indexer/emissionManager";
import type { BondMarketEvent, EmissionManagerSale } from "./indexer/types";

type EmissionManagerSaleCreated = EmissionManagerSale;

import { ChainId, getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { castFloat, castInt, formatNumber } from "./helpers/numberHelper";

const FUNCTION_KEY = "emissionManagerMarkets";
const LATEST_BLOCK_CREATED = "latestBlockCreated";
const LATEST_BLOCK_CLOSED = "latestBlockClosed";

/**
 * Sends a Discord alert when an EmissionManager market is created
 *
 * @param webhookUrl
 * @param saleCreated
 */
const sendEmissionManagerMarketCreatedAlert = (
  alertSender: DiscordAlertSender,
  webhookUrl: string,
  saleCreated: EmissionManagerSaleCreated,
): Promise<boolean> => {
  const saleAmount = castFloat(saleCreated.saleAmountDecimal);
  const transaction = saleCreated.transactionHash.toString();
  const timestamp = castInt(saleCreated.blockTimestamp) * 1000; // Convert to milliseconds

  const description = `EmissionManager market created with sale amount of ${formatNumber(saleAmount, 0)} OHM`;

  const fields: EmbedField[] = [
    {
      name: "Market ID",
      value: `${saleCreated.marketId}`,
    },
    {
      name: "Date",
      value: getRelativeTimestamp(timestamp),
    },
    {
      name: "Sale Amount",
      value: `${formatNumber(saleAmount, 0)} OHM`,
    },
    {
      name: "Market",
      value: `https://app.bondprotocol.finance/#/market/1/${saleCreated.marketId}`,
    },
    {
      name: "Transaction",
      value: `${getEtherscanTransactionUrl(transaction, ChainId.MAINNET)}`,
    },
  ];

  return alertSender(webhookUrl, "", `🏛️ EmissionManager Market Created`, description, fields);
};

/**
 * Sends a Discord alert when an EmissionManager market is closed
 *
 * @param webhookUrl
 * @param marketEvent
 */
const sendEmissionManagerMarketClosedAlert = (
  alertSender: DiscordAlertSender,
  webhookUrl: string,
  marketEvent: BondMarketEvent,
): Promise<boolean> => {
  const marketId = marketEvent.market.marketId;
  const timestamp = Number.parseInt(marketEvent.timestamp, 10) * 1000; // Convert to milliseconds

  const description = `EmissionManager market closed`;

  const fields: EmbedField[] = [
    {
      name: "Market ID",
      value: `${marketId}`,
    },
    {
      name: "Date",
      value: getRelativeTimestamp(timestamp),
    },
    {
      name: "Token",
      value: "OHM",
    },
  ];

  return alertSender(webhookUrl, "", `🏛️ EmissionManager Market Closed`, description, fields);
};

type EmissionManagerTask =
  | { kind: "created"; block: number; event: EmissionManagerSaleCreated }
  | { kind: "closed"; block: number; event: BondMarketEvent };

/**
 * Performs checks for EmissionManager market creation and closing events
 *
 * This function:
 * - Queries the EmissionManager subgraph for new sale market events
 * - Queries the bonds subgraph for corresponding market created/closed events
 * - Sends Discord alerts with EmissionManager-specific information including sale amount
 * - Handles both market creation and closing notifications
 *
 * @param firestoreDocumentPath
 * @param firestoreCollectionName
 * @param mentionRoles
 * @param webhookUrl
 * @returns
 */
export const performEmissionManagerMarketChecks = async (
  firestoreDocumentPath: string,
  firestoreCollectionName: string,
  webhookUrl: string,
): Promise<void> => {
  const alertSender = createDiscordAlertSender();
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);
  const firestoreSnapshot = await firestoreDocument.get();
  const storedCreatedBlock = parseInt(firestoreSnapshot.get(`${FUNCTION_KEY}.${LATEST_BLOCK_CREATED}`) || 0, 10);
  const storedClosedBlock = parseInt(firestoreSnapshot.get(`${FUNCTION_KEY}.${LATEST_BLOCK_CLOSED}`) || 0, 10);
  const [createdStartBlock, closedStartBlock] = await Promise.all([
    getIndexerEventStartBlock(storedCreatedBlock || undefined, getEmissionManagerIndexedBlock),
    getIndexerEventStartBlock(storedClosedBlock || undefined, getBondsIndexedBlock),
  ]);

  // The bonds route returns created AND closed events together; only the
  // closed half is used here.
  const [sales, marketEvents] = await Promise.all([
    getSalesSince(createdStartBlock),
    getBondMarketEventsSince(closedStartBlock),
  ]);

  const tasks: EmissionManagerTask[] = [
    ...sales.map(event => ({
      kind: "created" as const,
      block: castInt(event.blockNumber),
      event,
    })),
    ...marketEvents.closed.map(event => ({
      kind: "closed" as const,
      block: castInt(event.block),
      event,
    })),
  ].sort((a, b) => a.block - b.block || (a.kind === b.kind ? 0 : a.kind === "created" ? -1 : 1));

  let emissionManagerIndexedBlock: number | undefined;
  for (const task of tasks) {
    if (task.kind === "created") {
      const alertSent = await sendEmissionManagerMarketCreatedAlert(alertSender, webhookUrl, task.event);
      if (!alertSent)
        throw new Error(`Discord rate-limited the Emission Manager market created alert at block ${task.block}`);
      await firestoreDocument.update({ [`${FUNCTION_KEY}.${LATEST_BLOCK_CREATED}`]: task.block });
      continue;
    }

    if (emissionManagerIndexedBlock === undefined) {
      emissionManagerIndexedBlock = await getEmissionManagerIndexedBlock();
    }
    const indexedBlock = emissionManagerIndexedBlock;
    if (task.block > indexedBlock) {
      throw new Error(
        `Emission Manager is indexed through block ${indexedBlock}, before market closed event block ${task.block}`,
      );
    }
    const marketId = task.event.market.marketId;
    if ((await getSale(marketId)).length > 0) {
      const alertSent = await sendEmissionManagerMarketClosedAlert(alertSender, webhookUrl, task.event);
      if (!alertSent)
        throw new Error(`Discord rate-limited the Emission Manager market closed alert at block ${task.block}`);
    }
    await firestoreDocument.update({ [`${FUNCTION_KEY}.${LATEST_BLOCK_CLOSED}`]: task.block });
  }
};

// Running via CLI
if (require.main === module) {
  if (!process.env.WEBHOOK_URL) {
    throw new Error("Set the WEBHOOK_URL environment variable");
  }

  performEmissionManagerMarketChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL);
}
