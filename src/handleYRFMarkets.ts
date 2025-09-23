import { DocumentReference, Firestore } from "@google-cloud/firestore";

import { getYRFSubgraphUrl, YIELD_REPURCHASE_FACILITY_ALERT_STARTING_BLOCK } from "./constants";
import { createGraphQLClient } from "./helpers/graphqlClient";
import { EmbedField, getRelativeTimestamp, getRoleMentions, sendAlert } from "./discord";
import {
  RepoMarket,
  RepoMarketsCreatedSinceDocument,
  RepoMarketDocument,
} from "./graphql/yrf";
import {
  MarketClosedEvent,
  MarketClosedEventsDocument,
} from "./graphql/bondMarket";
import { getBondsSubgraphUrl } from "./constants";
import { getEtherscanTransactionUrl } from "./helpers/contractHelper";
import {
  castFloat,
  castInt,
  formatNumber,
} from "./helpers/numberHelper";

const FUNCTION_KEY = "yrfMarkets";
const LATEST_BLOCK = "latestBlock";

/**
 * Sends a Discord alert when a YRF market is created
 *
 * @param webhookUrl
 * @param mentionRoles
 * @param repoMarket
 * @param marketEvent
 */
const sendYRFMarketCreatedAlert = (
  webhookUrl: string,
  mentionRoles: string[],
  repoMarket: RepoMarket,
  marketEvent: RepoMarket,
): void => {
  const capacity = castFloat(marketEvent.bidAmountDecimal);
  const marketId = marketEvent.marketId;
  const transaction = marketEvent.transactionHash.toString();
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
      value: `${getEtherscanTransactionUrl(transaction, "Mainnet")}`,
    },
  ];

  sendAlert(
    webhookUrl,
    getRoleMentions(mentionRoles),
    `🏛️ YRF Market Created`,
    description,
    fields
  );
};

/**
 * Sends a Discord alert when a YRF market is closed
 *
 * @param webhookUrl
 * @param mentionRoles
 * @param repoMarket
 * @param marketEvent
 */
const sendYRFMarketClosedAlert = (
  webhookUrl: string,
  mentionRoles: string[],
  repoMarket: RepoMarket,
  marketEvent: MarketClosedEvent,
): void => {
  const marketId = marketEvent.market.marketId;
  const timestamp = Number.parseInt(marketEvent.timestamp) * 1000; // Convert to milliseconds

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

  sendAlert(
    webhookUrl,
    getRoleMentions(mentionRoles),
    `🏛️ YRF Market Closed`,
    description,
    fields
  );
};

const getLatestBlock = async (firestoreDocument: DocumentReference): Promise<number> => {
  const firestoreSnapshot = await firestoreDocument.get();
  const latestBlock = parseInt(firestoreSnapshot.get(`${FUNCTION_KEY}.${LATEST_BLOCK}`) || 0);

  if (latestBlock == 0) {
    console.info(`No latest block found, defaulting to starting block ${YIELD_REPURCHASE_FACILITY_ALERT_STARTING_BLOCK}`);
    return YIELD_REPURCHASE_FACILITY_ALERT_STARTING_BLOCK;
  }

  console.info(`Latest block is ${latestBlock}`);
  return latestBlock;
}

/**
 * Processes YRF market creation events and sends alerts
 *
 * @param firestoreDocument
 * @param mentionRoles
 * @param webhookUrl
 * @returns
 */
const processYRFMarketCreated = async (
  firestoreDocument: DocumentReference,
  webhookUrl: string,
): Promise<void> => {
  console.info(`\n\n⏰ Processing YRF Market Created Events`);

  // Get the latest block
  const latestBlock = await getLatestBlock(firestoreDocument);
  let updatedLatestBlock = latestBlock;

  // Fetch YRF markets
  const yrfClient = createGraphQLClient(getYRFSubgraphUrl());
  console.debug(`Fetching RepoMarket records since block ${latestBlock}`);
  const repoMarketsResults = await yrfClient
    .query(RepoMarketsCreatedSinceDocument, {
      latestBlock: latestBlock.toString(),
    })
    .toPromise();
  if (!repoMarketsResults.data) {
    throw new Error(`Did not receive results from YRF RepoMarket GraphQL query. Error: ${repoMarketsResults.error}`);
  }

  const repoMarkets: RepoMarket[] = repoMarketsResults.data.repoMarkets;
  console.info(`Processing ${repoMarkets.length} RepoMarket records`);

  if (repoMarkets.length === 0) {
    console.info(`No YRF RepoMarket events to process`);
    return;
  }

  // Process YRF markets and send alerts for created markets
  for (const repoMarket of repoMarkets) {
    const marketId = repoMarket.marketId;

    console.info(`Processing YRF market created event for market ID: ${marketId}`);
    sendYRFMarketCreatedAlert(webhookUrl, [], repoMarket, repoMarket);

    // Update the latest block to this event's block
    const eventBlock = castInt(repoMarket.blockNumber);
    if (eventBlock > updatedLatestBlock) {
      updatedLatestBlock = eventBlock;
    }
  }

  // Update latest block
  if (updatedLatestBlock > latestBlock) {
    await firestoreDocument.update({
      [`${FUNCTION_KEY}.${LATEST_BLOCK}`]: updatedLatestBlock,
    });
    console.info(`Updated latest block to ${updatedLatestBlock}`);
  }
};

/**
 * Processes bond market closed events and sends alerts for YRF markets
 *
 * @param firestoreDocument
 * @param mentionRoles
 * @param webhookUrl
 * @returns
 */
const processYRFMarketsClosed = async (
  firestoreDocument: DocumentReference,
  webhookUrl: string,
): Promise<void> => {
  console.info(`\n\n⏰ Processing YRF Market Closed Events`);

  // Get the latest block
  const latestBlock = await getLatestBlock(firestoreDocument);

  // Fetch bond market closed events
  const bondsClient = createGraphQLClient(getBondsSubgraphUrl());
  const marketsClosedResults = await bondsClient
    .query(MarketClosedEventsDocument, {
      sinceBlock: latestBlock.toString(),
    })
    .toPromise();

  if (!marketsClosedResults.data) {
    console.error(`Did not receive results from MarketClosedEvents GraphQL query. Error: ${marketsClosedResults.error}`);
    return;
  }

  const marketClosedEvents: MarketClosedEvent[] = marketsClosedResults.data.marketClosedEvents;
  console.info(`Processing ${marketClosedEvents.length} market closed events`);

  if (marketClosedEvents.length === 0) {
    console.info(`No market closed events to process`);
    return;
  }

  const yrfClient = createGraphQLClient(getYRFSubgraphUrl());

  // Process closed bond markets and check if they are YRF markets
  for (const closedEvent of marketClosedEvents) {
    const marketId = closedEvent.market.marketId;

    // Query for YRF RepoMarket with this specific marketId
    const yrfResults = await yrfClient
      .query(RepoMarketDocument, {
        marketId: marketId,
      })
      .toPromise();

    if (!yrfResults.data) {
      console.error(`Did not receive results from YRF GraphQL query for market ${marketId}. Error: ${yrfResults.error}`);
      continue;
    }

    const repoMarkets: RepoMarket[] = yrfResults.data.repoMarkets;

    if (repoMarkets.length > 0) {
      const repoMarket = repoMarkets[0]; // Should only be one market with this ID
      console.info(`Processing YRF market closed event for market ID: ${marketId}`);
      sendYRFMarketClosedAlert(webhookUrl, [], repoMarket, closedEvent);
    }
  }
};

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
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);

  await processYRFMarketCreated(firestoreDocument, webhookUrl);
  await processYRFMarketsClosed(firestoreDocument, webhookUrl);
};

// Running via CLI
if (require.main === module) {
  if (!process.env.WEBHOOK_URL) {
    throw new Error("Set the WEBHOOK_URL environment variable");
  }

  performYRFMarketChecks(
    "rbs-discord-alerts-dev",
    "default",
    process.env.WEBHOOK_URL
  );
}
