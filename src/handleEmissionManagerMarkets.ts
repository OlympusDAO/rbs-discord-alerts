import { type DocumentReference, Firestore } from "@google-cloud/firestore";

import { EMISSION_MANAGER_ALERT_STARTING_BLOCK, getEmissionManagerSubgraphUrl } from "./constants";
import { type EmbedField, getRelativeTimestamp, sendAlert } from "./discord";
import {
  EmissionManagerMarketDocument,
  EmissionManagerMarketsCreatedSinceDocument,
  type EmissionManagerMarketsCreatedSinceQuery,
  EmissionManagerSubgraphMetaDocument,
} from "./graphql/emissionManager";
import { createGraphQLClient } from "./helpers/graphqlClient";

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

  return sendAlert(webhookUrl, "", `🏛️ EmissionManager Market Created`, description, fields);
};

/**
 * Sends a Discord alert when an EmissionManager market is closed
 *
 * @param webhookUrl
 * @param marketEvent
 */
const sendEmissionManagerMarketClosedAlert = (webhookUrl: string, marketEvent: MarketClosedEvent): Promise<boolean> => {
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

  return sendAlert(webhookUrl, "", `🏛️ EmissionManager Market Closed`, description, fields);
};

const getLatestBlock = async (firestoreDocument: DocumentReference, key: string): Promise<number> => {
  const firestoreSnapshot = await firestoreDocument.get();
  const latestBlock = parseInt(firestoreSnapshot.get(`${FUNCTION_KEY}.${key}`) || 0, 10);

  if (latestBlock === 0) {
    console.info(
      `No latest block found for ${key}, defaulting to starting block ${EMISSION_MANAGER_ALERT_STARTING_BLOCK}`,
    );
    return EMISSION_MANAGER_ALERT_STARTING_BLOCK;
  }

  console.info(`Latest block for ${key} is ${latestBlock}`);
  return latestBlock;
};

/**
 * Processes EmissionManager market creation events and sends alerts
 *
 * @param firestoreDocument
 * @param mentionRoles
 * @param webhookUrl
 * @returns
 */
const processEmissionManagerMarketCreated = async (
  firestoreDocument: DocumentReference,
  webhookUrl: string,
): Promise<void> => {
  console.info(`\n\n⏰ Processing EmissionManager Market Created Events`);

  // Get the latest block
  const latestBlock = await getLatestBlock(firestoreDocument, LATEST_BLOCK_CREATED);
  // Fetch EmissionManager markets
  const emissionManagerClient = createGraphQLClient(getEmissionManagerSubgraphUrl());
  console.debug(`Fetching SaleCreated records since block ${latestBlock}`);
  const saleCreatedResults = await emissionManagerClient
    .query(EmissionManagerMarketsCreatedSinceDocument, {
      latestBlock: latestBlock.toString(),
    })
    .toPromise();
  if (!saleCreatedResults.data) {
    throw new Error(
      `Did not receive results from EmissionManager SaleCreated GraphQL query. Error: ${saleCreatedResults.error}`,
    );
  }

  const saleCreateds: EmissionManagerSaleCreated[] = saleCreatedResults.data.saleCreateds;
  console.info(`Processing ${saleCreateds.length} SaleCreated records`);

  if (saleCreateds.length === 0) {
    console.info(`No EmissionManager SaleCreated events to process`);
    return;
  }

  // Process EmissionManager markets and send alerts for created markets
  for (const saleCreated of saleCreateds) {
    const marketId = saleCreated.marketId;

    console.info(`Processing EmissionManager market created event for market ID: ${marketId}`);
    const alertSent = await sendEmissionManagerMarketCreatedAlert(webhookUrl, saleCreated);

    const eventBlock = castInt(saleCreated.blockNumber);
    if (!alertSent)
      throw new Error(`Discord rate-limited the Emission Manager market created alert at block ${eventBlock}`);
    await firestoreDocument.update({
      [`${FUNCTION_KEY}.${LATEST_BLOCK_CREATED}`]: eventBlock,
    });
    console.info(`Updated latest created block to ${eventBlock}`);
  }
};

/**
 * Processes bond market closed events and sends alerts for EmissionManager markets
 *
 * @param firestoreDocument
 * @param mentionRoles
 * @param webhookUrl
 * @returns
 */
const processEmissionManagerMarketsClosed = async (
  firestoreDocument: DocumentReference,
  webhookUrl: string,
): Promise<void> => {
  console.info(`\n\n⏰ Processing EmissionManager Market Closed Events`);

  // Get the latest block
  const latestBlock = await getLatestBlock(firestoreDocument, LATEST_BLOCK_CLOSED);

  // Fetch bond market closed events
  const bondsClient = createGraphQLClient(getBondsSubgraphUrl());
  const marketsClosedResults = await bondsClient
    .query(MarketClosedEventsDocument, {
      sinceBlock: latestBlock.toString(),
    })
    .toPromise();

  if (!marketsClosedResults.data) {
    throw new Error(
      `Did not receive results from MarketClosedEvents GraphQL query. Error: ${marketsClosedResults.error}`,
    );
  }

  const marketClosedEvents: MarketClosedEvent[] = marketsClosedResults.data.marketClosedEvents;
  console.info(`Processing ${marketClosedEvents.length} market closed events`);

  if (marketClosedEvents.length === 0) {
    console.info(`No market closed events to process`);
    return;
  }

  const emissionManagerClient = createGraphQLClient(getEmissionManagerSubgraphUrl());
  const emissionManagerMetaResults = await emissionManagerClient
    .query(EmissionManagerSubgraphMetaDocument, {})
    .toPromise();
  const emissionManagerIndexedBlock = emissionManagerMetaResults.data?._meta?.block.number;
  if (emissionManagerIndexedBlock === undefined) {
    throw new Error(
      `Did not receive the indexed block from the Emission Manager subgraph. Error: ${emissionManagerMetaResults.error}`,
    );
  }

  // Process closed bond markets and check if they are EmissionManager markets
  for (const closedEvent of marketClosedEvents) {
    const marketId = closedEvent.market.marketId;
    const eventBlock = castInt(closedEvent.block);

    if (eventBlock > emissionManagerIndexedBlock) {
      throw new Error(
        `Emission Manager subgraph is indexed through block ${emissionManagerIndexedBlock}, before market closed event block ${eventBlock}`,
      );
    }

    // Query for EmissionManager SaleCreated with this specific marketId
    const emissionManagerResults = await emissionManagerClient
      .query(EmissionManagerMarketDocument, {
        marketId: marketId,
      })
      .toPromise();

    if (!emissionManagerResults.data) {
      throw new Error(
        `Did not receive results from EmissionManager GraphQL query for market ${marketId}. Error: ${emissionManagerResults.error}`,
      );
    }

    const saleCreateds: EmissionManagerSaleCreated[] = emissionManagerResults.data.saleCreateds;

    if (saleCreateds.length > 0) {
      console.info(`Processing EmissionManager market closed event for market ID: ${marketId}`);
      const alertSent = await sendEmissionManagerMarketClosedAlert(webhookUrl, closedEvent);
      if (!alertSent)
        throw new Error(`Discord rate-limited the Emission Manager market closed alert at block ${eventBlock}`);
    }

    await firestoreDocument.update({
      [`${FUNCTION_KEY}.${LATEST_BLOCK_CLOSED}`]: eventBlock,
    });
    console.info(`Updated latest closed block to ${eventBlock}`);
  }
};

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
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);

  await processEmissionManagerMarketCreated(firestoreDocument, webhookUrl);
  await processEmissionManagerMarketsClosed(firestoreDocument, webhookUrl);
};

// Running via CLI
if (require.main === module) {
  if (!process.env.WEBHOOK_URL) {
    throw new Error("Set the WEBHOOK_URL environment variable");
  }

  performEmissionManagerMarketChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL);
}
