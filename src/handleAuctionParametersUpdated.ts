import { type DocumentReference, Firestore } from "@google-cloud/firestore";

import { EMISSION_MANAGER_V1_2, getConvertibleDepositsSubgraphUrl } from "./constants";
import { type EmbedField, getRelativeTimestamp, sendAlert } from "./discord";
import {
  AuctionParametersUpdatedSinceDocument,
  type AuctionParametersUpdatedSinceQuery,
} from "./graphql/convertibleDeposits";
import { ChainId, getEtherscanAddressUrl, getEtherscanTransactionUrl } from "./helpers/contractHelper";
import { type EmissionManagerStateAtBlock, getEmissionManagerStateAtBlock } from "./helpers/ethereumRpcClient";
import { createGraphQLClient } from "./helpers/graphqlClient";
import { castFloat, formatCurrency } from "./helpers/numberHelper";
import { shorten } from "./helpers/stringHelper";

const FUNCTION_KEY = "auctionParametersUpdated";
const LATEST_BLOCK = "latestBlock";

type AuctionParametersUpdatedEvent =
  AuctionParametersUpdatedSinceQuery["convertibleDepositAuctioneerAuctionParametersUpdateds"]["items"][number];

export type EmissionManagerPriceState = EmissionManagerStateAtBlock;

export type AuctionPriceContext = {
  ohmPrice: number;
  approximateActivationPrice: number;
};

type AuctionParametersUpdatedAlert = {
  title: string;
  description: string;
  fields: EmbedField[];
};

const FRONTEND_URL = "https://deposit.olympusdao.finance";
const WAD = 1_000_000_000_000_000_000n;
const OHM_SCALE = 1_000_000_000n;
const RPC_CONCURRENCY = 3;

const ceilDiv = (numerator: bigint, denominator: bigint): bigint =>
  numerator === 0n ? 0n : (numerator - 1n) / denominator + 1n;

const toDecimalNumber = (value: bigint, scale: bigint): number =>
  Number(value / scale) + Number(value % scale) / Number(scale);

const getEffectiveActivationPrice = (manager: EmissionManagerPriceState): bigint => {
  const minimumRatio = WAD + manager.minimumPremium;
  const requiredEmissionRate = ceilDiv(manager.tickSize * OHM_SCALE, manager.supply);
  const requiredRatio = ceilDiv(requiredEmissionRate * minimumRatio, manager.baseEmissionRate);
  const activationRatio = requiredRatio > minimumRatio ? requiredRatio : minimumRatio;

  return ceilDiv(manager.backing * activationRatio, WAD);
};

const validateEmissionManagerState = (
  manager: EmissionManagerPriceState,
  event: AuctionParametersUpdatedEvent,
): void => {
  if (manager.address.toLowerCase() !== EMISSION_MANAGER_V1_2.toLowerCase()) {
    throw new Error("Exact-block Emission Manager state does not match the configured manager address");
  }
  if (manager.cdAuctioneer.toLowerCase() !== event.auctioneer.toLowerCase()) {
    throw new Error("CD auction tuning event auctioneer does not match the exact-block Emission Manager configuration");
  }
  if (
    manager.supply <= 0n ||
    manager.backing <= 0n ||
    manager.baseEmissionRate <= 0n ||
    manager.minimumPremium <= 0n ||
    manager.tickSize <= 0n ||
    manager.ohmPrice <= 0n
  ) {
    throw new Error("Exact-block Emission Manager state contains invalid pricing settings");
  }
};

export const deriveAuctionPriceContext = (
  event: AuctionParametersUpdatedEvent,
  manager: EmissionManagerPriceState,
): AuctionPriceContext => {
  validateEmissionManagerState(manager, event);
  return {
    ohmPrice: toDecimalNumber(manager.ohmPrice, WAD),
    approximateActivationPrice: toDecimalNumber(getEffectiveActivationPrice(manager), WAD),
  };
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
      name: "Approximate Activation Price",
      value: formatCurrency(priceContext.approximateActivationPrice),
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
): Promise<boolean> => {
  const alert = buildAuctionParametersUpdatedAlert(event, priceContext);
  return sendAlert(webhookUrl, "", alert.title, alert.description, alert.fields);
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
  ethereumRpcUrl: string,
): Promise<void> => {
  if (!ethereumRpcUrl) throw new Error("Set the ETHEREUM_RPC_URL environment variable");

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

  const priceContexts: AuctionPriceContext[] = [];
  for (let offset = 0; offset < events.length; offset += RPC_CONCURRENCY) {
    const batch = events.slice(offset, offset + RPC_CONCURRENCY);
    priceContexts.push(
      ...(await Promise.all(
        batch.map(async event => {
          const emissionManager = await getEmissionManagerStateAtBlock(
            ethereumRpcUrl,
            EMISSION_MANAGER_V1_2,
            event.block,
          );
          return deriveAuctionPriceContext(event, emissionManager);
        }),
      )),
    );
  }

  // Process events and send alerts
  for (const [eventIndex, event] of events.entries()) {
    const eventBlock = Number(event.block);
    console.info(
      `Processing auction parameters updated event for auctioneer ${event.auctioneer} at block ${eventBlock}`,
    );
    const alertSent = await sendAuctionParametersUpdatedAlert(webhookUrl, event, priceContexts[eventIndex]);
    if (!alertSent) throw new Error(`Discord rate-limited the CD auction tuning alert at block ${eventBlock}`);

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
  if (!process.env.ETHEREUM_RPC_URL) {
    throw new Error("Set the ETHEREUM_RPC_URL environment variable");
  }

  performAuctionParametersUpdatedChecks(
    "rbs-discord-alerts-dev",
    "default",
    process.env.WEBHOOK_URL,
    process.env.ETHEREUM_RPC_URL,
  );
}
