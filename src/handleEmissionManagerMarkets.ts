import { Firestore } from "@google-cloud/firestore";

import { getEmissionManagerSubgraphUrl } from "./constants";
import { createDiscordAlertSender, type DiscordAlertSender, type EmbedField, getRelativeTimestamp } from "./discord";
import {
  EmissionManagerMarketDocument,
  EmissionManagerMarketsCreatedSinceDocument,
  type EmissionManagerMarketsCreatedSinceQuery,
} from "./graphql/emissionManager";
import { createGraphQLClient } from "./helpers/graphqlClient";
import { getSubgraphEventStartBlock, getSubgraphIndexedBlock } from "./helpers/indexerCursorHelper";

type EmissionManagerSaleCreated = EmissionManagerMarketsCreatedSinceQuery["saleCreateds"][0];

import { getBondsSubgraphUrl } from "./constants";
import { type MarketClosedEvent, MarketClosedEventsDocument } from "./graphql/bondMarket";
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
  marketEvent: MarketClosedEvent,
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
  | { kind: "closed"; block: number; event: MarketClosedEvent };

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
  const emissionManagerClient = createGraphQLClient(getEmissionManagerSubgraphUrl());
  const bondsClient = createGraphQLClient(getBondsSubgraphUrl());

  const [createdStartBlock, closedStartBlock] = await Promise.all([
    getSubgraphEventStartBlock(emissionManagerClient, storedCreatedBlock || undefined, "Emission Manager subgraph"),
    getSubgraphEventStartBlock(bondsClient, storedClosedBlock || undefined, "Bonds subgraph"),
  ]);

  const [saleCreatedResults, marketsClosedResults] = await Promise.all([
    emissionManagerClient
      .query(EmissionManagerMarketsCreatedSinceDocument, { latestBlock: createdStartBlock.toString() })
      .toPromise(),
    bondsClient.query(MarketClosedEventsDocument, { sinceBlock: closedStartBlock.toString() }).toPromise(),
  ]);
  if (!saleCreatedResults.data) {
    throw new Error(
      `Did not receive results from EmissionManager SaleCreated GraphQL query. Error: ${saleCreatedResults.error}`,
    );
  }
  if (!marketsClosedResults.data) {
    throw new Error(
      `Did not receive results from MarketClosedEvents GraphQL query. Error: ${marketsClosedResults.error}`,
    );
  }
  const tasks: EmissionManagerTask[] = [
    ...saleCreatedResults.data.saleCreateds.map(event => ({
      kind: "created" as const,
      block: castInt(event.blockNumber),
      event,
    })),
    ...marketsClosedResults.data.marketClosedEvents.map(event => ({
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

    emissionManagerIndexedBlock ??= await getSubgraphIndexedBlock(emissionManagerClient, "Emission Manager subgraph");
    if (task.block > emissionManagerIndexedBlock) {
      throw new Error(
        `Emission Manager subgraph is indexed through block ${emissionManagerIndexedBlock}, before market closed event block ${task.block}`,
      );
    }
    const marketId = task.event.market.marketId;
    const emissionManagerResults = await emissionManagerClient
      .query(EmissionManagerMarketDocument, { marketId })
      .toPromise();
    if (!emissionManagerResults.data) {
      throw new Error(
        `Did not receive results from EmissionManager GraphQL query for market ${marketId}. Error: ${emissionManagerResults.error}`,
      );
    }
    if (emissionManagerResults.data.saleCreateds.length > 0) {
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
