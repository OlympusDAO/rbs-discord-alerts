import { DocumentReference } from "@google-cloud/firestore";
import { Client } from "@urql/core";

import { BONDS_SUBGRAPH_URL, ERC20_DAI, ERC20_OHM_V2, RBS_SUBGRAPH_URL } from "../constants";
import {
  MarketClosedEvent,
  MarketClosedEventsDocument,
  MarketCreatedEvent,
  MarketCreatedEventsDocument,
} from "../graphql/bondMarket";
import {
  PriceEvent,
  RangeSnapshot,
  RangeSnapshotSinceBlockDocument,
  RbsPriceEventsDocument,
} from "../graphql/rangeSnapshot";
import { formatCurrency } from "../helpers/numberHelper";

const FUNCTION_KEY = "checkBondMarkets";
const LATEST_BLOCK = "latestBlock";

const filterPriceEvents = (events: PriceEvent[], block: number, type?: string): PriceEvent[] => {
  const filteredByBlock = events.filter(priceEvent => priceEvent.block == block);

  if (!type) {
    return filteredByBlock;
  }

  return filteredByBlock.filter(priceEvent => priceEvent.type == type);
};

const filterCreatedEvents = (events: MarketCreatedEvent[], block: number, marketId?: number): MarketCreatedEvent[] => {
  const filteredByBlock = events.filter(createdEvent => createdEvent.block == block);

  if (!marketId) {
    return filteredByBlock;
  }

  return filteredByBlock.filter(createdEvent => createdEvent.marketId == marketId);
};

const filterClosedEvents = (events: MarketClosedEvent[], block: number, marketId?: number): MarketClosedEvent[] => {
  const filteredByBlock = events.filter(closedEvent => closedEvent.block == block);

  if (!marketId) {
    return filteredByBlock;
  }

  return filteredByBlock.filter(createdEvent => createdEvent.marketId == marketId);
};

const checkCushionUp = (
  priceEvent: PriceEvent,
  rangeSnapshot: RangeSnapshot,
  marketCreatedEvents: MarketCreatedEvent[],
): string[] => {
  const errors: string[] = [];
  const marketId = priceEvent.isHigh ? priceEvent.snapshot.highMarketId : priceEvent.snapshot.lowMarketId;

  // Check that the marketId is set
  if (!marketId) {
    errors.push(
      `Expected to find a market id for a CushionUp event at block ${rangeSnapshot.block.toString()}, but it was missing on the RangeSnapshot`,
    );
    return errors; // Can't proceed
  }

  // Check that a market created event was fired
  const createdMarkets = filterCreatedEvents(marketCreatedEvents, rangeSnapshot.block, marketId);
  if (!createdMarkets.length) {
    errors.push(
      `Expected to find a MarketCreatedEvent with id (${marketId}) for a CushionUp at block ${rangeSnapshot.block.toString()}, but it was missing.`,
    );
    return errors; // Can't proceed
  }

  // The marketId is unique, so we are guaranteed that there is only one result
  const createdMarket = createdMarkets[0];

  // Check that the initial price is on the correct side of the cushion
  if (priceEvent.isHigh) {
    // When high, the initial price should be higher than the cushion price
    if (createdMarket.market.initialPrice < rangeSnapshot.highCushionPrice) {
      errors.push(
        `Expected the initial price of the market (${formatCurrency(
          createdMarket.market.initialPrice,
        )}) to be > the upper cushion price (${formatCurrency(rangeSnapshot.highCushionPrice)})`,
      );
    }
  } else {
    // When low, the initial price should be lower than the cushion price
    if (createdMarket.market.initialPrice > rangeSnapshot.lowCushionPrice) {
      errors.push(
        `Expected the initial price of the market (${formatCurrency(
          createdMarket.market.initialPrice,
        )}) to be < the lower cushion price (${formatCurrency(rangeSnapshot.lowCushionPrice)})`,
      );
    }
  }

  // Check the tokens
  if (priceEvent.isHigh) {
    // Market in the high cushion should pay out in OHM
    if (createdMarket.market.payoutToken.toString().toLowerCase() !== ERC20_OHM_V2) {
      errors.push(
        `Expected payout token (${createdMarket.market.payoutToken.toString()}) of market for upper cushion (${
          createdMarket.marketId
        }) to be OHM V2 (${ERC20_OHM_V2})`,
      );
    }
  } else {
    // Market in the low cushion should pay out in DAI
    if (createdMarket.market.payoutToken.toString().toLowerCase() !== ERC20_DAI) {
      errors.push(
        `Expected payout token (${createdMarket.market.payoutToken.toString()}) of market for lower cushion (${
          createdMarket.marketId
        }) to be DAI (${ERC20_DAI})`,
      );
    }
  }

  // TODO Check the capacity

  return errors;
};

const checkCushionDown = (
  priceEvent: PriceEvent,
  rangeSnapshot: RangeSnapshot,
  marketClosedEvents: MarketClosedEvent[],
): string[] => {
  const errors: string[] = [];
  const marketId = priceEvent.isHigh ? priceEvent.snapshot.highMarketId : priceEvent.snapshot.lowMarketId;

  // Check that the marketId is set
  if (!marketId) {
    errors.push(
      `Expected to find a market id for a CushionDown event at block ${rangeSnapshot.block.toString()}, but it was missing on the RangeSnapshot`,
    );
    return errors; // Can't proceed
  }

  // Check that a market created event was fired
  const closedMarkets = filterClosedEvents(marketClosedEvents, rangeSnapshot.block, marketId);
  if (!closedMarkets.length) {
    errors.push(
      `Expected to find a MarketClosedEvent with id (${marketId}) for a CushionDown event at block ${rangeSnapshot.block.toString()}, but it was missing.`,
    );
    return errors; // Can't proceed
  }

  // The marketId is unique, so we are guaranteed that there is only one result
  const closedMarket = closedMarkets[0];

  // Check that the market is actually closed
  if (!closedMarket.market.closedBlock) {
    errors.push(
      `Expected market id (${marketId}) to be closed for a CushionDown event at block ${rangeSnapshot.block.toString()}`,
    );
  }

  // TODO Check that the capacity is exhausted

  return errors;
};

export const checkBondMarkets = async (
  firestore: DocumentReference,
  mentionRoles: string[],
  webhookUrl: string,
): Promise<void> => {
  // Get the latest block
  const firestoreSnapshot = await firestore.get();
  const latestBlock = parseInt(firestoreSnapshot.get(`${FUNCTION_KEY}.${LATEST_BLOCK}`) || 0);

  // Fetch range snapshots
  const rangeSnapshotClient = new Client({
    url: RBS_SUBGRAPH_URL,
    fetch,
  });
  const rangeSnapshotResults = await rangeSnapshotClient
    .query(RangeSnapshotSinceBlockDocument, {
      sinceBlock: latestBlock,
    })
    .toPromise();
  if (!rangeSnapshotResults.data || rangeSnapshotResults.data.rangeSnapshots.length == 0) {
    throw new Error(`Did not receive results from RangeSnapshot GraphQL query. Error: ${rangeSnapshotResults.error}`);
  }

  const bondsClient = new Client({
    url: BONDS_SUBGRAPH_URL,
    fetch,
  });

  // Fetch PriceEvents
  const priceEventResults = await rangeSnapshotClient
    .query(RbsPriceEventsDocument, {
      latestBlock: latestBlock,
    })
    .toPromise();
  if (!priceEventResults.data) {
    throw new Error(`Did not receive results from PriceEvent GraphQL query. Error: ${priceEventResults.error}`);
  }
  const priceEvents = priceEventResults.data.priceEvents;

  // Fetch markets created
  const marketsCreatedResults = await bondsClient
    .query(MarketCreatedEventsDocument, {
      sinceBlock: latestBlock,
    })
    .toPromise();
  if (!marketsCreatedResults.data) {
    throw new Error(
      `Did not receive results from MarketCreatedEvents GraphQL query. Error: ${marketsCreatedResults.error}`,
    );
  }
  const marketCreatedEvents = marketsCreatedResults.data.marketCreatedEvents;

  // Fetch markets closed
  const marketsClosedResults = await bondsClient
    .query(MarketClosedEventsDocument, {
      sinceBlock: latestBlock,
    })
    .toPromise();
  if (!marketsClosedResults.data) {
    throw new Error(
      `Did not receive results from MarketClosedEvents GraphQL query. Error: ${marketsClosedResults.error}`,
    );
  }
  const marketClosedEvents = marketsClosedResults.data.marketClosedEvents;

  const rangeSnapshotsAsc = rangeSnapshotResults.data.rangeSnapshots.slice().sort((a, b) => a.block - b.block);
  const errors: string[] = [];

  // Iterate over blocks and perform checks
  rangeSnapshotsAsc.forEach(rangeSnapshot => {
    const cushionUpEventsAtBlock = filterPriceEvents(priceEvents, rangeSnapshot.block, "CushionUp");
    cushionUpEventsAtBlock.forEach(priceEvent =>
      errors.push(...checkCushionUp(priceEvent, rangeSnapshot, marketCreatedEvents)),
    );

    const cushionDownEventsAtBlock = filterPriceEvents(priceEvents, rangeSnapshot.block, "CushionDown");
    cushionDownEventsAtBlock.forEach(priceEvent =>
      errors.push(...checkCushionDown(priceEvent, rangeSnapshot, marketClosedEvents)),
    );

    // Market created when it shouldn't be
    // Market closed when it shouldn't be
  });

  // Send Discord alerts
};
