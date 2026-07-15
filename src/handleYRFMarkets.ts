import { Firestore } from "@google-cloud/firestore";
import { getBondsSubgraphUrl, getYRFSubgraphUrl } from "./constants";
import { createDiscordAlertSender, type DiscordAlertSender, type EmbedField, getRelativeTimestamp } from "./discord";
import { type MarketClosedEvent, MarketClosedEventsDocument } from "./graphql/bondMarket";
import { type RepoMarket, RepoMarketDocument, RepoMarketsCreatedSinceDocument } from "./graphql/yrf";
import { ChainId, getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { createGraphQLClient } from "./helpers/graphqlClient";
import { getSubgraphEventStartBlock, getSubgraphIndexedBlock } from "./helpers/indexerCursorHelper";
import { castFloat, castInt, formatNumber } from "./helpers/numberHelper";

const FUNCTION_KEY = "yrfMarkets";
const LATEST_BLOCK_CREATED = "latestBlockCreated";
const LATEST_BLOCK_CLOSED = "latestBlockClosed";

/**
 * Sends a Discord alert when a YRF market is created
 *
 * @param webhookUrl
 * @param repoMarket
 */
const sendYRFMarketCreatedAlert = (
  alertSender: DiscordAlertSender,
  webhookUrl: string,
  repoMarket: RepoMarket,
): Promise<boolean> => {
  const capacity = castFloat(repoMarket.bidAmountDecimal);
  const marketId = repoMarket.marketId;
  const transaction = repoMarket.transactionHash.toString();
  const timestamp = castInt(repoMarket.blockTimestamp) * 1000; // Convert to milliseconds
  const tokenSymbol = repoMarket.contract.reserveToken.symbol;

  const description = `YRF market created with capacity of ${formatNumber(capacity, 0)} ${tokenSymbol}`;

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
      name: "Capacity",
      value: `${formatNumber(capacity, 0)} ${tokenSymbol}`,
    },
    {
      name: "Market",
      value: `https://app.bondprotocol.finance/#/market/1/${marketId}`,
    },
    {
      name: "Transaction",
      value: `${getEtherscanTransactionUrl(transaction, ChainId.MAINNET)}`,
    },
  ];

  return alertSender(webhookUrl, "", `🏛️ YRF Market Created`, description, fields);
};

/**
 * Sends a Discord alert when a YRF market is closed
 *
 * @param webhookUrl
 * @param repoMarket
 * @param marketEvent
 */
const sendYRFMarketClosedAlert = (
  alertSender: DiscordAlertSender,
  webhookUrl: string,
  repoMarket: RepoMarket,
  marketEvent: MarketClosedEvent,
): Promise<boolean> => {
  const marketId = marketEvent.market.marketId;
  const timestamp = Number.parseInt(marketEvent.timestamp, 10) * 1000; // Convert to milliseconds

  const tokenSymbol = repoMarket.contract.reserveToken.symbol;

  const description = `YRF market closed`;

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
      value: tokenSymbol,
    },
  ];

  return alertSender(webhookUrl, "", `🏛️ YRF Market Closed`, description, fields);
};

type YRFTask =
  | { kind: "created"; block: number; event: RepoMarket }
  | { kind: "closed"; block: number; event: MarketClosedEvent };

/**
 * Performs checks for YRF market creation and closing events
 *
 * This function:
 * - Queries the YRF subgraph for new repo market events
 * - Queries the bonds subgraph for corresponding market created/closed events
 * - Sends Discord alerts with YRF-specific information including capacity
 * - Handles both market creation and closing notifications
 *
 * @param firestoreDocumentPath
 * @param firestoreCollectionName
 * @param mentionRoles
 * @param webhookUrl
 * @returns
 */
export const performYRFMarketChecks = async (
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
  const yrfClient = createGraphQLClient(getYRFSubgraphUrl());
  const bondsClient = createGraphQLClient(getBondsSubgraphUrl());

  const [createdStartBlock, closedStartBlock] = await Promise.all([
    getSubgraphEventStartBlock(yrfClient, storedCreatedBlock || undefined, "YRF subgraph"),
    getSubgraphEventStartBlock(bondsClient, storedClosedBlock || undefined, "Bonds subgraph"),
  ]);

  const [repoMarketsResults, marketsClosedResults] = await Promise.all([
    yrfClient.query(RepoMarketsCreatedSinceDocument, { latestBlock: createdStartBlock.toString() }).toPromise(),
    bondsClient.query(MarketClosedEventsDocument, { sinceBlock: closedStartBlock.toString() }).toPromise(),
  ]);
  if (!repoMarketsResults.data) {
    throw new Error(`Did not receive results from YRF RepoMarket GraphQL query. Error: ${repoMarketsResults.error}`);
  }
  if (!marketsClosedResults.data) {
    throw new Error(
      `Did not receive results from MarketClosedEvents GraphQL query. Error: ${marketsClosedResults.error}`,
    );
  }
  const tasks: YRFTask[] = [
    ...repoMarketsResults.data.repoMarkets.map(event => ({
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

  let yrfIndexedBlock: number | undefined;
  for (const task of tasks) {
    if (task.kind === "created") {
      const alertSent = await sendYRFMarketCreatedAlert(alertSender, webhookUrl, task.event);
      if (!alertSent) throw new Error(`Discord rate-limited the YRF market created alert at block ${task.block}`);
      await firestoreDocument.update({ [`${FUNCTION_KEY}.${LATEST_BLOCK_CREATED}`]: task.block });
      continue;
    }

    yrfIndexedBlock ??= await getSubgraphIndexedBlock(yrfClient, "YRF subgraph");
    if (task.block > yrfIndexedBlock) {
      throw new Error(
        `YRF subgraph is indexed through block ${yrfIndexedBlock}, before market closed event block ${task.block}`,
      );
    }
    const marketId = task.event.market.marketId;
    const yrfResults = await yrfClient.query(RepoMarketDocument, { marketId }).toPromise();
    if (!yrfResults.data) {
      throw new Error(
        `Did not receive results from YRF GraphQL query for market ${marketId}. Error: ${yrfResults.error}`,
      );
    }
    const repoMarket = yrfResults.data.repoMarkets[0];
    if (repoMarket) {
      const alertSent = await sendYRFMarketClosedAlert(alertSender, webhookUrl, repoMarket, task.event);
      if (!alertSent) throw new Error(`Discord rate-limited the YRF market closed alert at block ${task.block}`);
    }
    await firestoreDocument.update({ [`${FUNCTION_KEY}.${LATEST_BLOCK_CLOSED}`]: task.block });
  }
};

// Running via CLI
if (require.main === module) {
  if (!process.env.WEBHOOK_URL) {
    throw new Error("Set the WEBHOOK_URL environment variable");
  }

  performYRFMarketChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL);
}
