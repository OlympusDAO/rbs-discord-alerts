import { type DocumentReference, Firestore } from "@google-cloud/firestore";

import { EMISSION_MANAGER_V1_2, getConvertibleDepositsSubgraphUrl, getRbsSubgraphUrl } from "./constants";
import { type EmbedField, getRelativeTimestamp, sendAlert } from "./discord";
import {
  AuctionParametersUpdatedSinceDocument,
  type AuctionParametersUpdatedSinceQuery,
} from "./graphql/convertibleDeposits";
import { RangeSnapshotAtBlockDocument } from "./graphql/rangeSnapshot";
import { ChainId, getEtherscanAddressUrl, getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { createGraphQLClient } from "./helpers/graphqlClient";
import { castFloat, castFloatNullable, formatCurrency } from "./helpers/numberHelper";
import { shorten } from "./helpers/stringHelper";

const FUNCTION_KEY = "auctionParametersUpdated";
const LATEST_BLOCK = "latestBlock";

type AuctionParametersUpdatedEvent =
  AuctionParametersUpdatedSinceQuery["convertibleDepositAuctioneerAuctionParametersUpdateds"]["items"][number];
type EmissionManagerState = NonNullable<AuctionParametersUpdatedSinceQuery["emissionManager"]>;

export type AuctionPriceContext = {
  ohmPrice: number | null;
  auctionActivationPrice: number;
};

type AuctionParametersUpdatedAlert = {
  title: string;
  description: string;
  fields: EmbedField[];
};

const FRONTEND_URL = "https://deposit.olympusdao.finance";

export const deriveAuctionPriceContext = (
  event: AuctionParametersUpdatedEvent,
  manager: EmissionManagerState,
  snapshotOhmPrice: number | null = null,
): AuctionPriceContext => {
  const minPrice = castFloat(event.minPriceDecimal);
  const minPriceScalar = castFloat(manager.minPriceScalarDecimal);
  const backing = castFloat(manager.backingDecimal);
  const minimumPremium = castFloat(manager.minimumPremiumDecimal);

  return {
    ohmPrice: minPrice > 0 && minPriceScalar > 0 ? minPrice / minPriceScalar : snapshotOhmPrice,
    auctionActivationPrice: backing * (1 + minimumPremium),
  };
};

const getOhmPriceAtBlock = async (block: string): Promise<number> => {
  const client = createGraphQLClient(getRbsSubgraphUrl());
  const queryResults = await client.query(RangeSnapshotAtBlockDocument, { block }).toPromise();
  const snapshot = queryResults.data?.rangeSnapshots[0];
  const ohmPrice = castFloatNullable(snapshot?.ohmPrice);

  if (snapshot?.block !== block || ohmPrice === null || !Number.isFinite(ohmPrice) || ohmPrice <= 0) {
    throw new Error(`Did not receive a valid OHM price snapshot at block ${block}. Error: ${queryResults.error}`);
  }

  return ohmPrice;
};

export const buildAuctionParametersUpdatedAlert = (
  event: AuctionParametersUpdatedEvent,
  priceContext: AuctionPriceContext,
): AuctionParametersUpdatedAlert => {
  const timestamp = Number(event.timestamp) * 1000; // Convert to milliseconds
  const txHash = event.txHash;
  const target = castFloat(event.targetDecimal);
  const minPrice = castFloat(event.minPriceDecimal);

  const isDisabled = target === 0;

  const title = "CD Auction Tuning";
  const description = isDisabled
    ? "🛑 The auction has been disabled, due to market conditions."
    : "🟢 The auction parameters have been tuned for the emissions target.";

  const fields: EmbedField[] = [
    {
      name: "Deposit Asset",
      value: `[${event.rDepositAsset?.rAsset?.symbol || "Unknown"}](${getEtherscanAddressUrl(event.depositAsset, ChainId.MAINNET)})`,
      inline: true,
    },
    {
      name: "Transaction",
      value: `[${shorten(txHash)}](${getEtherscanTransactionUrl(txHash, ChainId.MAINNET)})`,
      inline: true,
    },
    {
      name: "Date",
      value: getRelativeTimestamp(timestamp),
    },
    {
      name: "OHM Price",
      value: formatCurrency(priceContext.ohmPrice),
      inline: true,
    },
    {
      name: "Auction Activation Price",
      value: formatCurrency(priceContext.auctionActivationPrice),
      inline: true,
    },
  ];

  if (!isDisabled) {
    fields.push(
      {
        name: "Day Target",
        value: `${target.toFixed(2)} OHM`,
        inline: true,
      },
      {
        name: "Auction Bid Floor",
        value: formatCurrency(minPrice),
        inline: true,
      },
      {
        name: "View Auction",
        value: `[View on deposit.olympusdao.finance](${FRONTEND_URL})`,
        inline: false,
      },
    );
  }

  return { title, description, fields };
};

/**
 * Sends a Discord alert when auction parameters are updated
 *
 * @param webhookUrl
 * @param event
 * @param priceContext
 */
const sendAuctionParametersUpdatedAlert = (
  webhookUrl: string,
  event: AuctionParametersUpdatedEvent,
  priceContext: AuctionPriceContext,
): void => {
  const alert = buildAuctionParametersUpdatedAlert(event, priceContext);
  sendAlert(webhookUrl, "", alert.title, alert.description, alert.fields);
};

const validateEmissionManagerState = (
  manager: AuctionParametersUpdatedSinceQuery["emissionManager"],
  events: AuctionParametersUpdatedEvent[],
): EmissionManagerState => {
  if (!manager) {
    throw new Error(`Emission Manager state was not returned for CD auction tuning events`);
  }

  if (manager.address.toLowerCase() !== EMISSION_MANAGER_V1_2.toLowerCase()) {
    throw new Error(`Emission Manager state does not match the configured manager address`);
  }

  const numericSettings = [manager.backingDecimal, manager.minimumPremiumDecimal, manager.minPriceScalarDecimal].map(
    castFloat,
  );
  if (numericSettings.some(value => !Number.isFinite(value))) {
    throw new Error(`Emission Manager state contains invalid pricing settings`);
  }

  if (events.some(event => event.auctioneer.toLowerCase() !== manager.convertibleDepositAuctioneer.toLowerCase())) {
    throw new Error(`CD auction tuning event auctioneer does not match the Emission Manager configuration`);
  }

  return manager;
};

const getLatestBlock = async (firestoreDocument: DocumentReference): Promise<number> => {
  const firestoreSnapshot = await firestoreDocument.get();
  const latestBlock = parseInt(firestoreSnapshot.get(`${FUNCTION_KEY}.${LATEST_BLOCK}`) || "0", 10);

  if (latestBlock === 0) {
    console.info(`No latest block found, defaulting to 0 (process all events)`);
    return 0;
  }

  console.info(`Latest block is ${latestBlock}`);
  return latestBlock;
};

/**
 * Performs checks for auction parameters updated events
 *
 * This function:
 * - Queries the GraphQL convertible deposits endpoint for auction parameters updated events
 * - Sends Discord alerts with auction details (or disabled status if target is 0)
 * - Updates Firestore with the latest processed block
 *
 * @param firestoreDocumentPath
 * @param firestoreCollectionName
 * @param webhookUrl
 * @returns
 */
export const performAuctionParametersUpdatedChecks = async (
  firestoreDocumentPath: string,
  firestoreCollectionName: string,
  webhookUrl: string,
): Promise<void> => {
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);

  console.info(`\n\n⏰ Processing Auction Parameters Updated Events`);

  // Get the latest block
  const latestBlock = await getLatestBlock(firestoreDocument);

  // Fetch events using GraphQL
  const client = createGraphQLClient(getConvertibleDepositsSubgraphUrl());
  console.debug(`Fetching auction parameters updated events since block ${latestBlock}`);

  const queryResults = await client
    .query(AuctionParametersUpdatedSinceDocument, {
      latestBlock: latestBlock.toString(),
      chainId: 1,
      managerChainId: 1,
      emissionManagerAddress: EMISSION_MANAGER_V1_2.toLowerCase(),
    })
    .toPromise();

  if (!queryResults.data) {
    throw new Error(
      `Did not receive results from GraphQL query with latest block ${latestBlock}. Error: ${queryResults.error}`,
    );
  }

  const events = queryResults.data.convertibleDepositAuctioneerAuctionParametersUpdateds.items || [];
  console.info(`Processing ${events.length} auction parameters updated events`);

  if (events.length === 0) {
    console.info(`No auction parameters updated events to process`);
    return;
  }

  // This subgraph entity is current mutable state. Normal scheduler runs process events close to their block,
  // while historical replays can reflect manager settings that were updated after the event.
  const emissionManager = validateEmissionManagerState(queryResults.data.emissionManager, events);
  const priceContexts = await Promise.all(
    events.map(async event => {
      const priceContext = deriveAuctionPriceContext(event, emissionManager);
      if (priceContext.ohmPrice !== null) return priceContext;

      return deriveAuctionPriceContext(event, emissionManager, await getOhmPriceAtBlock(event.block));
    }),
  );

  let updatedLatestBlock = latestBlock;

  // Process events and send alerts
  for (const [eventIndex, event] of events.entries()) {
    const eventBlock = Number(event.block);
    console.info(
      `Processing auction parameters updated event for auctioneer ${event.auctioneer} at block ${eventBlock}`,
    );
    sendAuctionParametersUpdatedAlert(webhookUrl, event, priceContexts[eventIndex]);

    // Update the latest block to this event's block
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

// Running via CLI
if (require.main === module) {
  if (!process.env.WEBHOOK_URL) {
    throw new Error("Set the WEBHOOK_URL environment variable");
  }

  performAuctionParametersUpdatedChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL);
}
