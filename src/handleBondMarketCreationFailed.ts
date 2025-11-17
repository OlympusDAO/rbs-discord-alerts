import { DocumentReference, Firestore } from "@google-cloud/firestore";

import { getConvertibleDepositsSubgraphUrl } from "./constants";
import { createGraphQLClient } from "./helpers/graphqlClient";
import { EmbedField, getRelativeTimestamp, sendAlert } from "./discord";
import { getEtherscanTransactionUrl, getEtherscanAddressUrl, ChainId } from "./helpers/contractHelper";
import { shorten } from "./helpers/stringHelper";
import { formatNumber, castFloat } from "./helpers/numberHelper";
import { BondMarketCreationFailedSinceDocument, BondMarketCreationFailedSinceQuery } from "./graphql/convertibleDeposits";

const FUNCTION_KEY = "bondMarketCreationFailed";
const LATEST_BLOCK = "latestBlock";

type BondMarketCreationFailedEvent = BondMarketCreationFailedSinceQuery["emissionManagerBondMarketCreationFaileds"]["items"][number];

/**
 * Sends a Discord alert when a bond market creation failed event is detected
 *
 * @param webhookUrl
 * @param event
 */
const sendBondMarketCreationFailedAlert = (webhookUrl: string, event: BondMarketCreationFailedEvent): void => {
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

  sendAlert(webhookUrl, "", `⚠️ The EmissionManager was unable to create a bond market for the under-selling of OHM.`, description, fields);
};

const getLatestBlock = async (firestoreDocument: DocumentReference): Promise<number> => {
  const firestoreSnapshot = await firestoreDocument.get();
  const latestBlock = parseInt(firestoreSnapshot.get(`${FUNCTION_KEY}.${LATEST_BLOCK}`) || "0");

  if (latestBlock === 0) {
    console.info(`No latest block found, defaulting to 0 (process all events)`);
    return 0;
  }

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
  // Get last processed block
  const firestoreClient = new Firestore();
  const firestoreDocument = firestoreClient.doc(`${firestoreCollectionName}/${firestoreDocumentPath}`);

  console.info(`\n\n⏰ Processing Bond Market Creation Failed Events`);

  // Get the latest block
  const latestBlock = await getLatestBlock(firestoreDocument);

  // Fetch failed events using GraphQL
  const client = createGraphQLClient(getConvertibleDepositsSubgraphUrl());
  console.debug(`Fetching bond market creation failed events since block ${latestBlock}`);

  const queryResults = await client
    .query(BondMarketCreationFailedSinceDocument, {
      latestBlock: latestBlock.toString(),
      chainId: 1,
    })
    .toPromise();

  if (!queryResults.data) {
    throw new Error(
      `Did not receive results from GraphQL query with latest block ${latestBlock}. Error: ${queryResults.error}`,
    );
  }

  const events = queryResults.data.emissionManagerBondMarketCreationFaileds.items || [];
  console.info(`Processing ${events.length} bond market creation failed events`);

  if (events.length === 0) {
    console.info(`No bond market creation failed events to process`);
    return;
  }

  let updatedLatestBlock = latestBlock;

  // Process events and send alerts
  for (const event of events) {
    const eventBlock = Number(event.block);
    console.info(
      `Processing bond market creation failed event for emission manager ${event.emissionManager} at block ${eventBlock}`,
    );
    sendBondMarketCreationFailedAlert(webhookUrl, event);

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

  performBondMarketCreationFailedChecks("rbs-discord-alerts-dev", "default", process.env.WEBHOOK_URL);
}
