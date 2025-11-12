import { DocumentReference, Firestore } from "@google-cloud/firestore";

import { getEmissionManagerSubgraphUrl, EMISSION_MANAGER_ALERT_STARTING_BLOCK } from "./constants";
import { createGraphQLClient } from "./helpers/graphqlClient";
import { EmbedField, getRelativeTimestamp, getRoleMentions, sendAlert } from "./discord";
import {
  EmissionManagerMarketsCreatedSinceDocument,
  EmissionManagerMarketDocument,
  EmissionManagerMarketsCreatedSinceQuery,
} from "./graphql/emissionManager";

type EmissionManagerSaleCreated = EmissionManagerMarketsCreatedSinceQuery["saleCreateds"][0];
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

const FUNCTION_KEY = "emissionManagerMarkets";
const LATEST_BLOCK_CREATED = "latestBlockCreated";
const LATEST_BLOCK_CLOSED = "latestBlockClosed";

/**
 * Sends a Discord alert when an EmissionManager market is created
 *
 * @param webhookUrl
 * @param mentionRoles
 * @param saleCreated
 */
const sendEmissionManagerMarketCreatedAlert = (
  webhookUrl: string,
  mentionRoles: string[],
  saleCreated: EmissionManagerSaleCreated,
): void => {
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
      value: `${getEtherscanTransactionUrl(transaction, "Mainnet")}`,
    },
  ];

  sendAlert(
    webhookUrl,
    getRoleMentions(mentionRoles),
    `🏛️ EmissionManager Market Created`,
    description,
    fields
  );
};

/**
 * Sends a Discord alert when an EmissionManager market is closed
 *
 * @param webhookUrl
 * @param mentionRoles
 * @param saleCreated
 * @param marketEvent
 */
const sendEmissionManagerMarketClosedAlert = (
  webhookUrl: string,
  mentionRoles: string[],
  saleCreated: EmissionManagerSaleCreated,
  marketEvent: MarketClosedEvent,
): void => {
  const marketId = marketEvent.market.marketId;
  const timestamp = Number.parseInt(marketEvent.timestamp) * 1000; // Convert to milliseconds

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

  sendAlert(
    webhookUrl,
    getRoleMentions(mentionRoles),
    `🏛️ EmissionManager Market Closed`,
    description,
    fields
  );
};

const getLatestBlock = async (firestoreDocument: DocumentReference, key: string): Promise<number> => {
  const firestoreSnapshot = await firestoreDocument.get();
  const latestBlock = parseInt(firestoreSnapshot.get(`${FUNCTION_KEY}.${key}`) || 0);

  if (latestBlock == 0) {
    console.info(`No latest block found for ${key}, defaulting to starting block ${EMISSION_MANAGER_ALERT_STARTING_BLOCK}`);
    return EMISSION_MANAGER_ALERT_STARTING_BLOCK;
  }

  console.info(`Latest block for ${key} is ${latestBlock}`);
  return latestBlock;
}

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
  let updatedLatestBlock = latestBlock;

  // Fetch EmissionManager markets
  const emissionManagerClient = createGraphQLClient(getEmissionManagerSubgraphUrl());
  console.debug(`Fetching SaleCreated records since block ${latestBlock}`);
  const saleCreatedResults = await emissionManagerClient
    .query(EmissionManagerMarketsCreatedSinceDocument, {
      latestBlock: latestBlock.toString(),
    })
    .toPromise();
  if (!saleCreatedResults.data) {
    throw new Error(`Did not receive results from EmissionManager SaleCreated GraphQL query. Error: ${saleCreatedResults.error}`);
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
    sendEmissionManagerMarketCreatedAlert(webhookUrl, [], saleCreated);

    // Update the latest block to this event's block
    const eventBlock = castInt(saleCreated.blockNumber);
    if (eventBlock > updatedLatestBlock) {
      updatedLatestBlock = eventBlock;
    }
  }

  // Update latest block
  if (updatedLatestBlock > latestBlock) {
    await firestoreDocument.update({
      [`${FUNCTION_KEY}.${LATEST_BLOCK_CREATED}`]: updatedLatestBlock,
    });
    console.info(`Updated latest block to ${updatedLatestBlock}`);
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
    throw new Error(`Did not receive results from MarketClosedEvents GraphQL query. Error: ${marketsClosedResults.error}`);
  }

  const marketClosedEvents: MarketClosedEvent[] = marketsClosedResults.data.marketClosedEvents;
  console.info(`Processing ${marketClosedEvents.length} market closed events`);

  if (marketClosedEvents.length === 0) {
    console.info(`No market closed events to process`);
    return;
  }

  const emissionManagerClient = createGraphQLClient(getEmissionManagerSubgraphUrl());

  // Process closed bond markets and check if they are EmissionManager markets
  for (const closedEvent of marketClosedEvents) {
    const marketId = closedEvent.market.marketId;

    // Query for EmissionManager SaleCreated with this specific marketId
    const emissionManagerResults = await emissionManagerClient
      .query(EmissionManagerMarketDocument, {
        marketId: marketId,
      })
      .toPromise();

    if (!emissionManagerResults.data) {
      throw new Error(`Did not receive results from EmissionManager GraphQL query for market ${marketId}. Error: ${emissionManagerResults.error}`);
    }

    const saleCreateds: EmissionManagerSaleCreated[] = emissionManagerResults.data.saleCreateds;

    if (saleCreateds.length > 0) {
      const saleCreated = saleCreateds[0]; // Should only be one market with this ID
      console.info(`Processing EmissionManager market closed event for market ID: ${marketId}`);
      sendEmissionManagerMarketClosedAlert(webhookUrl, [], saleCreated, closedEvent);
    }
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

  performEmissionManagerMarketChecks(
    "rbs-discord-alerts-dev",
    "default",
    process.env.WEBHOOK_URL
  );
}
