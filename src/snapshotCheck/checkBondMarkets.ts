import { DocumentReference } from "@google-cloud/firestore";
import { Client } from "@urql/core";
import fetch from "cross-fetch";

import {
  EMISSION_MANAGER_V1_0,
  ERC20_DAI,
  ERC20_OHM_V2,
  getBondsSubgraphUrl,
  getRbsSubgraphUrl,
  YIELD_REPURCHASE_FACILITY_V1_0,
  YIELD_REPURCHASE_FACILITY_V1_1,
  YIELD_REPURCHASE_FACILITY_V1_2,
} from "../constants";
import { getRoleMentions, sendAlert } from "../discord";
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
import { getEtherscanTransactionUrl } from "../helpers/contractHelper";
import {
  castFloat,
  castFloatNullable,
  castInt,
  castIntNullable,
  formatCurrency,
  formatNumber,
  numbersEqual,
} from "../helpers/numberHelper";
import { getShutdownEmbedField } from "../helpers/shutdownHelper";
import { isBytesEqual, toUnorderedList } from "../helpers/stringHelper";
import { getCurrentOperatorContractAddress } from "../helpers/operator";

const FUNCTION_KEY = "checkBondMarkets";
const LATEST_BLOCK = "latestBlock";
const CAPACITY_DECIMALS = 0; // Whole number
const ORACLE_UPDATE_THRESHOLD = 0.02; // 2% swing required to force the oracle to update

const filterPriceEvents = (events: PriceEvent[], block: number, type?: string): PriceEvent[] => {
  const filteredByBlock = events.filter(priceEvent => castInt(priceEvent.block) == block);

  if (!type) {
    return filteredByBlock;
  }

  return filteredByBlock.filter(priceEvent => priceEvent.type == type);
};

const filterCreatedEvents = (events: MarketCreatedEvent[], block: number, marketId?: number): MarketCreatedEvent[] => {
  const filteredByBlock = events.filter(createdEvent => castInt(createdEvent.block) == block);

  if (!marketId) {
    return filteredByBlock;
  }

  return filteredByBlock.filter(createdEvent => castInt(createdEvent.market.marketId) == marketId);
};

const filterClosedEvents = (events: MarketClosedEvent[], block: number, marketId?: number): MarketClosedEvent[] => {
  const filteredByBlock = events.filter(closedEvent => castInt(closedEvent.block) == block);

  if (!marketId) {
    return filteredByBlock;
  }

  return filteredByBlock.filter(createdEvent => castInt(createdEvent.market.marketId) == marketId);
};

const pushError = (error: string, errors: string[]): void => {
  console.error(error);
  errors.push(error);
};

const isYRFOwner = (owner: Uint8Array): boolean => {
  return (
    isBytesEqual(owner, YIELD_REPURCHASE_FACILITY_V1_0) ||
    isBytesEqual(owner, YIELD_REPURCHASE_FACILITY_V1_1) ||
    isBytesEqual(owner, YIELD_REPURCHASE_FACILITY_V1_2)
  );
}

const isEmissionManagerOwner = (owner: Uint8Array): boolean => {
  return isBytesEqual(owner, EMISSION_MANAGER_V1_0);
}

const isValidMarketOwner = (owner: Uint8Array, block: number): boolean => {
  const currentOperatorAddress = getCurrentOperatorContractAddress(block);
  // The owner should be the operator contract or the yield repurchase facility or the emission manager
  return (
    isBytesEqual(owner, currentOperatorAddress) ||
    isYRFOwner(owner) ||
    isEmissionManagerOwner(owner)
  );
}

/**
 * Performs check when a CushionUp event is received:
 * - A bond market id should be available
 * - Should have a corresponding market created event (only 1)
 * - The owner of the bond market should be the treasury operator contract
 * - Upper cushion: the initial price (in USD) of the bond market should be greater than the cushion price
 * - Lower cushion: the initial price (in USD) of the bond market should be less than the cushion price
 * - OHM price is available
 * - The initial price (in USD) of the bond market should be the same as the OHM price derived from the Chainlink oracle
 * - Upper cushion: bond market accepts DAI and pays out OHM
 * - Lower cushion: bond market accepts OHM and pays of DAI
 * - The capacity of the bond market should be correct
 *
 * @param priceEvent
 * @param rangeSnapshot
 * @param marketCreatedEvents
 * @returns
 */
const checkCushionUp = (
  priceEvent: PriceEvent,
  rangeSnapshot: RangeSnapshot,
  marketCreatedEvents: MarketCreatedEvent[],
): string[] => {
  const errors: string[] = [];
  const marketId = castFloatNullable(
    priceEvent.isHigh ? priceEvent.snapshot.highMarketId : priceEvent.snapshot.lowMarketId,
  );
  console.info(`\n\nCommencing CushionUp check`);

  // Check that the PriceEvent has a marketId set
  if (!marketId) {
    pushError(`Expected to find a market id for a CushionUp event, but it was missing on the RangeSnapshot`, errors);
    return errors; // Can't proceed
  } else {
    console.debug(`CushionUp event has a market id set: ${marketId}`);
  }

  // Check that a market created event was fired by the Bond Protocol contracts
  const createdMarkets = filterCreatedEvents(marketCreatedEvents, castInt(rangeSnapshot.block), marketId);
  if (!createdMarkets.length) {
    pushError(
      `Expected to find a MarketCreatedEvent with id (${marketId}) for a CushionUp, but it was missing.`,
      errors,
    );
    return errors; // Can't proceed
  } else {
    console.debug(`CushionUp event has a corresponding MarketCreatedEvent`);
  }

  // There should only be only event fired, but check anyway
  if (createdMarkets.length > 1) {
    pushError(
      `Expected to find only 1 MarketCreatedEvent with id (${marketId}) for a CushionUp, but there were ${createdMarkets.length}.`,
      errors,
    );
  }

  // The marketId is unique, so we are guaranteed that there is only one result
  const createdMarket = createdMarkets[0];

  if (!isValidMarketOwner(createdMarket.market.owner, castInt(createdMarket.block))) {
    pushError(`Expected market owner (${createdMarket.market.owner.toString()}) to be the Olympus operator contract, yield repurchase facility or emission manager`, errors);
  }

  // In the low cushion, the initial price is in terms of the quote token, and the quote token is OHM and the payout token is DAI. To get it into DAI (USD), we need to flip it.
  const initialPriceUsd: number = priceEvent.isHigh
    ? castFloat(createdMarket.market.initialPriceInQuoteToken)
    : 1 / castFloat(createdMarket.market.initialPriceInQuoteToken);

  // Check that the initial price is on the correct side of the cushion
  if (priceEvent.isHigh) {
    const highCushionPrice = castFloat(rangeSnapshot.highCushionPrice);
    // When high, the initial price should be higher than the cushion price
    if (initialPriceUsd < highCushionPrice) {
      pushError(
        `Expected the initial price of the market (${formatCurrency(
          initialPriceUsd,
        )}) to be > the upper cushion price (${formatCurrency(highCushionPrice)})`,
        errors,
      );
    } else {
      console.debug(
        `Upper market initial price (${initialPriceUsd}) is correctly > upper cushion price ${formatCurrency(
          highCushionPrice,
          2,
        )}`,
      );
    }
  } else {
    const lowCushionPrice = castFloat(rangeSnapshot.lowCushionPrice);
    // When low, the initial price should be lower than the cushion price
    if (initialPriceUsd > lowCushionPrice) {
      pushError(
        `Expected the initial price of the market (${formatCurrency(
          initialPriceUsd,
        )}) to be < the lower cushion price (${formatCurrency(lowCushionPrice)})`,
        errors,
      );
    } else {
      console.debug(
        `Lower market initial price (${formatCurrency(
          initialPriceUsd,
        )}) is correctly < lower cushion price ${formatCurrency(lowCushionPrice, 2)}`,
      );
    }
  }

  // The price of OHM should be available
  const ohmPrice = castFloatNullable(rangeSnapshot.ohmPrice);
  if (!ohmPrice) {
    pushError(`Expected RangeSnapshot to have OHM price, but it was not set.`, errors);
  } else {
    console.debug(`OHM price is set: ${formatCurrency(ohmPrice, 2)}`);
  }

  // The initial price for the market should be the same as the corresponding snapshot's OHM price (derived from Chainlink)
  if (ohmPrice && !numbersEqual(initialPriceUsd, ohmPrice, 2)) {
    pushError(
      `Expected the initial price of the created market (${formatCurrency(
        initialPriceUsd,
        2,
      )}) to match the price of OHM from Chainlink: ${formatCurrency(ohmPrice, 2)}`,
      errors,
    );
  } else {
    console.debug(`Snapshot OHM price and initial price match: ${formatCurrency(initialPriceUsd, 2)}`);
  }

  // Check the tokens
  if (priceEvent.isHigh) {
    // Market in the high cushion accepts DAI
    if (!isBytesEqual(createdMarket.market.quoteToken, ERC20_DAI)) {
      pushError(
        `Expected quote token (${createdMarket.market.quoteToken.toString()}) of upper cushion market to be DAI (${ERC20_DAI})`,
        errors,
      );
    } else {
      console.debug(`Upper market quote token is correctly DAI`);
    }

    // Market in the high cushion should pay out in OHM
    if (!isBytesEqual(createdMarket.market.payoutToken, ERC20_OHM_V2)) {
      pushError(
        `Expected payout token (${createdMarket.market.payoutToken.toString()}) of upper cushion market to be OHM V2 (${ERC20_OHM_V2})`,
        errors,
      );
    } else {
      console.debug(`Upper market payout token is correctly OHM`);
    }
  } else {
    // Market in the low cushion accepts OHM
    if (!isBytesEqual(createdMarket.market.quoteToken, ERC20_OHM_V2)) {
      pushError(
        `Expected quote token (${createdMarket.market.quoteToken.toString()}) of lower cushion market to be OHM V2 (${ERC20_OHM_V2})`,
        errors,
      );
    } else {
      console.debug(`Lower market quote token is correctly OHM`);
    }

    // Market in the low cushion should pay out in DAI
    if (!isBytesEqual(createdMarket.market.payoutToken, ERC20_DAI)) {
      pushError(
        `Expected payout token (${createdMarket.market.payoutToken.toString()}) of lower cushion market to be DAI (${ERC20_DAI})`,
        errors,
      );
    } else {
      console.debug(`Lower market payout token is correctly DAI`);
    }
  }

  const operatorCushionFactor = castFloatNullable(rangeSnapshot.operatorCushionFactor);
  if (operatorCushionFactor) {
    // bond market capacity = cushion factor * highCapacityOhm or lowCapacityReserve
    const expectedCapacity =
      operatorCushionFactor *
      castFloat(priceEvent.isHigh ? priceEvent.snapshot.highCapacityOhm : priceEvent.snapshot.lowCapacityReserve);
    const actualCapacity = castFloat(createdMarket.market.capacityInPayoutToken);

    if (!numbersEqual(expectedCapacity, actualCapacity, CAPACITY_DECIMALS)) {
      pushError(
        `Expected market capacity (${formatNumber(actualCapacity, CAPACITY_DECIMALS)} ${
          priceEvent.isHigh ? "OHM" : "DAI"
        }) to be: ${formatNumber(expectedCapacity, CAPACITY_DECIMALS)}`,
        errors,
      );
    } else {
      console.debug(`Market capacity is as expected: ${formatNumber(expectedCapacity, CAPACITY_DECIMALS)}`);
    }
  } else {
    pushError(`Expected the cushion factor to be set, but it wasn't`, errors);
  }

  return errors;
};

/**
 * Performs checks when a CushionDown event is received:
 * - Should have a corresponding market closed event
 * - The bond market should actually be closed
 * - The market was closed for the correct reasons
 *
 * This assumes that {marketClosedEvents} is filtered to records for the same block.
 *
 * CushionDown events do not have the bond market id, and the id is removed from the range
 * structure, so it cannot be tracked.
 *
 * @param priceEvent
 * @param rangeSnapshot
 * @param marketClosedEvents
 * @param wallUpEvents
 * @returns
 */
const checkCushionDown = (
  priceEvent: PriceEvent,
  rangeSnapshot: RangeSnapshot,
  marketClosedEvents: MarketClosedEvent[],
  wallUpEvents: PriceEvent[],
): string[] => {
  const errors: string[] = [];
  console.info(`\n\nCommencing CushionDown check`);
  console.debug(`Price event: ${JSON.stringify(priceEvent, null, 2)}`);

  // Check that a market closed event was fired in the same block
  const closedMarkets = filterClosedEvents(marketClosedEvents, castInt(rangeSnapshot.block));
  if (!closedMarkets.length) {
    pushError(`Expected to find a MarketClosedEvent for a CushionDown event, but it was missing.`, errors);
    return errors; // Can't proceed
  } else {
    console.debug(`CushionDown event has a corresponding MarketClosedEvent`);
  }

  // The marketId is unique, so we are guaranteed that there is only one result
  const closedMarket = closedMarkets[0];
  console.debug(`MarketClosedEvent: ${JSON.stringify(closedMarket, null, 2)}`);

  // Check that the market is actually closed
  if (!closedMarket.market.closedBlock) {
    pushError(`Expected market to be closed for a CushionDown event`, errors);
  } else {
    console.debug(`Market has been closed`);
  }

  // Check that the market was closed for the right reason(s)
  // Duration should have been exceeded, price outside wall, price in range or capacity exhausted
  const actualDuration: number | null = castFloatNullable(closedMarket.market.durationActualMilliseconds);
  const durationExceeded: boolean = actualDuration
    ? actualDuration >= castFloat(closedMarket.market.durationMilliseconds)
    : false;
  console.debug(`Duration Exceeded? ${durationExceeded}`);
  // Price should be outside the wall
  const ohmPrice: number | null = castFloatNullable(priceEvent.snapshot.ohmPrice);
  const priceOutsideWall: boolean = ohmPrice
    ? priceEvent.isHigh
      ? ohmPrice > castFloat(priceEvent.snapshot.highWallPrice)
      : ohmPrice < castFloat(priceEvent.snapshot.lowWallPrice)
    : false;
  console.debug(`Price Outside Wall? ${priceOutsideWall}`);
  // Price should be outside the range
  const priceInRange: boolean = ohmPrice
    ? priceEvent.isHigh
      ? ohmPrice < castFloat(priceEvent.snapshot.highCushionPrice)
      : ohmPrice > castFloat(priceEvent.snapshot.lowCushionPrice)
    : false;
  console.debug(`Price In Range? ${priceInRange}`);
  // Bond market capacity should be exhausted
  const capacityExhausted: boolean = numbersEqual(
    castFloat(priceEvent.isHigh ? priceEvent.snapshot.highCapacityOhm : priceEvent.snapshot.lowCapacityReserve),
    castFloat(closedMarket.market.soldInPayoutToken),
    CAPACITY_DECIMALS,
  );
  console.debug(`Capacity Exhausted? ${capacityExhausted}`);
  // The wall should have been manually regenerated
  const hasWallUpRegenerationEvent: boolean =
    wallUpEvents.filter(wallUpEvent => wallUpEvent.isHigh == priceEvent.isHigh).length > 0;
  console.debug(`Has WallUp event? ${hasWallUpRegenerationEvent}`);

  // If none of the above conditions are true, then the bond market was closed for an unknown reason, and we want to alert about that
  if (!durationExceeded && !priceInRange && !priceOutsideWall && !capacityExhausted && !hasWallUpRegenerationEvent) {
    pushError(
      `Expected market (${closedMarket.market.marketId}) to be closed due to one of the following (but it was not): duration exceeded, price outside wall, price in range, capacity exhausted, wall regeneration`,
      errors,
    );
  } else {
    console.debug(`Reason for market closure seems OK`);
  }

  return errors;
};

/**
 * Performs checks when a market created event is received:
 * - Should have a corresponding CushionUp event
 * - The owner of the market should be the treasury operator contract
 *
 * This assumes that {cushionUpEvents} is filtered to records for the same block.
 *
 * @param event
 * @param _rangeSnapshot
 * @param cushionUpEvents
 * @returns
 */
const checkMarketCreated = (
  event: MarketCreatedEvent,
  _rangeSnapshot: RangeSnapshot,
  cushionUpEvents: PriceEvent[],
): string[] => {
  const errors: string[] = [];
  console.info(`\n\nCommencing market created check`);

  const matchingCushionUpEvents = cushionUpEvents.filter(
    priceEvent =>
      castInt(event.market.marketId) ==
      castIntNullable(priceEvent.isHigh ? priceEvent.snapshot.highMarketId : priceEvent.snapshot.lowMarketId),
  );

  // The owner should be the operator contract or the yield repurchase facility
  if (!isValidMarketOwner(event.market.owner, castInt(event.block)) && !isYRFOwner(event.market.owner)) {
    pushError(
      `Market was created, but the owner (${event.market.owner}) is not the operator contract, yield repurchase facility or emission manager`,
      errors,
    );
  } else {
    console.debug(`Market owner is correctly the Olympus operator contract, yield repurchase facility or emission manager`);
  }

  // YRF and EmissionManager don't emit a CushionUp event, so we don't need to check for that
  if (!isYRFOwner(event.market.owner) && !isEmissionManagerOwner(event.market.owner)) {
    // If a market is created, but there was no CushionUp, it may have been created outside of RBS
    if (matchingCushionUpEvents.length == 0) {
      pushError(`Market was created, but there was no corresponding RBS CushionUp event`, errors);
    } else {
      console.debug(`MarketCreatedEvent has a corresponding CushionUp event`);
    }
  } else {
    console.debug(`Market owner is YRF or EmissionManager, so no CushionUp event is expected`);
  }

  return errors;
};

/**
 * Performs checks when a market closed event is received:
 * - Should have a corresponding CushionDown event
 *
 * This assumes that {cushionDownEvents} is filtered to records for the same block.
 *
 * CushionDown events do not have the bond market id, and the id is removed from the range
 * structure, so it cannot be tracked.
 *
 * @param event
 * @param _rangeSnapshot
 * @param cushionDownEvents
 * @returns
 */
const checkMarketClosed = (
  event: MarketClosedEvent,
  _rangeSnapshot: RangeSnapshot,
  cushionDownEvents: PriceEvent[],
): string[] => {
  const errors: string[] = [];
  console.info(`\n\nCommencing market closed check`);

  // If a market is closed, but there was no CushionUp, it may have been closed outside of RBS
  if (cushionDownEvents.length == 0) {
    pushError(`Market was closed, but there was no corresponding RBS CushionDown event`, errors);
  } else {
    console.debug(`MarketClosedEvent has a corresponding CushionDown event`);
  }

  return errors;
};

/**
 * Performs checks on a WallUp event (which occurs when a wall is being re-generated):
 *
 * Upper:
 * - Current price <= target price
 * - Upper cushion is closed
 *
 * Lower:
 * - Current price >= target price
 * - Lower cushion is closed
 *
 * Justification:
 * Walls should not regen unless the price is on the opposite side of the target value. I.e. if the upper wall regens, then current price <= target price for that block.
 */
const checkWallUp = (wallUpEvent: PriceEvent, rangeSnapshot: RangeSnapshot): string[] => {
  const errors: string[] = [];
  console.info("\n\nCommencing wall up check");

  // GraphQL sometimes returns numbers as strings (even though they are typed as numbers), so we force it to be a number
  const ohmPrice = castFloatNullable(rangeSnapshot.ohmPrice);
  if (!ohmPrice) {
    pushError(`Expected RangeSnapshot to have OHM price, but it was not set.`, errors);
    return errors;
  } else {
    console.debug(`OHM price is set: ${formatCurrency(ohmPrice, 2)}`);
  }

  // Check that the price makes sense
  if (wallUpEvent.isHigh) {
    const highWallPrice = castFloat(rangeSnapshot.highWallPrice);
    if (ohmPrice > highWallPrice) {
      pushError(
        `OHM price (${formatCurrency(ohmPrice)}) should be lower than upper wall price (${formatCurrency(
          highWallPrice,
        )})`,
        errors,
      );
    }
  } else {
    const lowWallPrice = castFloat(rangeSnapshot.lowWallPrice);
    if (ohmPrice < lowWallPrice) {
      pushError(
        `OHM price (${formatCurrency(ohmPrice)}) should be higher than lower wall price (${formatCurrency(
          lowWallPrice,
        )})`,
        errors,
      );
    }
  }

  // Check that the relevant bond market is closed
  if (wallUpEvent.isHigh) {
    if (rangeSnapshot.highMarketId) {
      pushError(`Upper bond market should be closed, but is open with id: ${rangeSnapshot.highMarketId}`, errors);
    }
  } else {
    if (rangeSnapshot.lowMarketId) {
      pushError(`Lower bond market should be closed, but is open with id: ${rangeSnapshot.lowMarketId}`, errors);
    }
  }

  return errors;
};

/**
 * Performs checks on a WallDown event (which occurs when the price breaks through the wall):
 *
 * Upper:
 * - Current price >= wall price / 1.02
 * - Cushion closed
 *
 * Lower:
 * - Current price <= wall price / 0.98
 * - Cushion closed
 *
 * Justification:
 *
 * For WallDown, the price check is not as strict given we can have a delay between the oracle and the actual price on the pool. Additionally, the cushions should only be impacted by the wall on the same side.
 *
 * For example, if the Lower Wall is $8.85, the cushion goes down due to capacity running out, and the oracle thinks the price is $8.90, then you could have a lot of swaps against the wall, push the LP price to $8.85 or lower and have a WallDown without triggering an oracle update since it has to move by 2% to refresh.
 */
const checkWallDown = (wallDownEvent: PriceEvent, rangeSnapshot: RangeSnapshot): string[] => {
  const errors: string[] = [];
  console.info("\n\nCommencing wall down check");

  const ohmPrice = castFloatNullable(rangeSnapshot.ohmPrice);
  if (!ohmPrice) {
    pushError(`Expected RangeSnapshot to have OHM price, but it was not set.`, errors);
    return errors;
  } else {
    console.debug(`OHM price is set: ${formatCurrency(ohmPrice, 2)}`);
  }

  // Check that the price makes sense
  if (wallDownEvent.isHigh) {
    const highWallPrice = castFloat(rangeSnapshot.highWallPrice) / (1 + ORACLE_UPDATE_THRESHOLD);
    if (ohmPrice < highWallPrice) {
      pushError(
        `OHM price (${formatCurrency(ohmPrice)}) should be higher than upper wall price (${formatCurrency(
          highWallPrice,
        )})`,
        errors,
      );
    }
  } else {
    const lowWallPrice = castFloat(rangeSnapshot.lowWallPrice) / (1 - ORACLE_UPDATE_THRESHOLD);
    if (ohmPrice > lowWallPrice) {
      pushError(
        `OHM price (${formatCurrency(ohmPrice)}) should be lower than lower wall price (${formatCurrency(
          lowWallPrice,
        )})`,
        errors,
      );
    }
  }

  // Check that bond markets are closed
  if (wallDownEvent.isHigh) {
    if (rangeSnapshot.highMarketId) {
      pushError(`Upper bond market should be closed, but is open with id: ${rangeSnapshot.highMarketId}`, errors);
    }
  } else {
    if (rangeSnapshot.lowMarketId) {
      pushError(`Lower bond market should be closed, but is open with id: ${rangeSnapshot.lowMarketId}`, errors);
    }
  }

  return errors;
};

export const checkBondMarkets = async (
  firestore: DocumentReference,
  mentionRoles: string[],
  webhookUrl: string,
  contractUrl?: string,
): Promise<void> => {
  console.info(`\n\n⏰ Checking Bond Market Parameters`);

  // Get the latest block
  const firestoreSnapshot = await firestore.get();
  const latestBlock = parseInt(firestoreSnapshot.get(`${FUNCTION_KEY}.${LATEST_BLOCK}`) || 0);
  let updatedLatestBlock = latestBlock;
  console.info(`Latest block is ${latestBlock}`);

  // Fetch range snapshots
  const rangeSnapshotClient = new Client({
    url: getRbsSubgraphUrl(),
    fetch,
  });
  // Snapshots are in ascending order
  console.debug(`Fetching RangeSnapshot records since block ${latestBlock}`);
  const rangeSnapshotResults = await rangeSnapshotClient
    .query(RangeSnapshotSinceBlockDocument, {
      sinceBlock: latestBlock.toString(),
    })
    .toPromise();
  // This previously checked for a 0 length array returned. However, if indexing lags slightly, we could get 0 records. Hence, it should not be an error.
  if (!rangeSnapshotResults.data) {
    throw new Error(`Did not receive results from RangeSnapshot GraphQL query. Error: ${rangeSnapshotResults.error}`);
  }

  const bondsClient = new Client({
    url: getBondsSubgraphUrl(),
    fetch,
  });

  // Fetch PriceEvents
  console.debug(`Fetching PriceEvent records since block ${latestBlock}`);
  const priceEventResults = await rangeSnapshotClient
    .query(RbsPriceEventsDocument, {
      latestBlock: latestBlock.toString(),
    })
    .toPromise();
  if (!priceEventResults.data) {
    throw new Error(`Did not receive results from PriceEvent GraphQL query. Error: ${priceEventResults.error}`);
  }
  const priceEvents = priceEventResults.data.priceEvents;

  // Fetch markets created (restricted to OHM)
  console.debug(`Fetching MarketCreatedEvent records since block ${latestBlock}`);
  const marketsCreatedResults = await bondsClient
    .query(MarketCreatedEventsDocument, {
      sinceBlock: latestBlock.toString(),
    })
    .toPromise();
  if (!marketsCreatedResults.data) {
    throw new Error(
      `Did not receive results from MarketCreatedEvents GraphQL query. Error: ${marketsCreatedResults.error}`,
    );
  }
  const marketCreatedEvents: MarketCreatedEvent[] = marketsCreatedResults.data.marketCreatedEvents;

  // Fetch markets closed (restricted to OHM)
  console.debug(`Fetching MarketClosedEvent records since block ${latestBlock}`);
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

  // Iterate over blocks and perform checks
  const rangeSnapshots: RangeSnapshot[] = rangeSnapshotResults.data.rangeSnapshots;
  console.info(`Processing ${rangeSnapshots.length} RangeSnapshot records`);
  rangeSnapshots.forEach(rangeSnapshot => {
    console.debug(`\n\nChecking RangeSnapshot at block ${rangeSnapshot.block}`);
    const rangeSnapshotBlock = castInt(rangeSnapshot.block);
    const cushionUpEventsAtBlock = filterPriceEvents(priceEvents, rangeSnapshotBlock, "CushionUp");
    const cushionDownEventsAtBlock = filterPriceEvents(priceEvents, rangeSnapshotBlock, "CushionDown");
    const wallUpEventsAtBlock = filterPriceEvents(priceEvents, rangeSnapshotBlock, "WallUp");
    const wallDownEventsAtBlock = filterPriceEvents(priceEvents, rangeSnapshotBlock, "WallDown");

    cushionUpEventsAtBlock.forEach(priceEvent => {
      const errors = checkCushionUp(priceEvent, rangeSnapshot, marketCreatedEvents);
      if (errors.length == 0) return;

      sendAlert(webhookUrl, getRoleMentions(mentionRoles), `🚨 CushionUp Discrepancies`, toUnorderedList(errors), [
        { name: "Upper/Lower Cushion", value: `${priceEvent.isHigh ? "Upper" : "Lower"}` },
        {
          name: "Market ID",
          value: `${priceEvent.isHigh ? priceEvent.snapshot.highMarketId : priceEvent.snapshot.lowMarketId}`,
        },
        { name: "Transaction", value: `${getEtherscanTransactionUrl(priceEvent.transaction.toString(), "Mainnet")}` },
        { name: "Block", value: `${priceEvent.block}` },
        ...getShutdownEmbedField(contractUrl),
      ]);
    });

    cushionDownEventsAtBlock.forEach(priceEvent => {
      const errors = checkCushionDown(priceEvent, rangeSnapshot, marketClosedEvents, wallUpEventsAtBlock);
      if (errors.length == 0) return;

      sendAlert(webhookUrl, getRoleMentions(mentionRoles), `🚨 CushionDown Discrepancies`, toUnorderedList(errors), [
        { name: "Upper/Lower Cushion", value: `${priceEvent.isHigh ? "Upper" : "Lower"}` },
        // marketId is not available
        { name: "Transaction", value: `${getEtherscanTransactionUrl(priceEvent.transaction.toString(), "Mainnet")}` },
        { name: "Block", value: `${priceEvent.block}` },
        ...getShutdownEmbedField(contractUrl),
      ]);
    });

    wallUpEventsAtBlock.forEach(priceEvent => {
      const errors = checkWallUp(priceEvent, rangeSnapshot);
      if (errors.length == 0) return;

      sendAlert(webhookUrl, getRoleMentions(mentionRoles), `🚨 WallUp Discrepancies`, toUnorderedList(errors), [
        { name: "Upper/Lower Cushion", value: `${priceEvent.isHigh ? "Upper" : "Lower"}` },
        // marketId is not available
        { name: "Transaction", value: `${getEtherscanTransactionUrl(priceEvent.transaction.toString(), "Mainnet")}` },
        { name: "Block", value: `${priceEvent.block}` },
        ...getShutdownEmbedField(contractUrl),
      ]);
    });

    wallDownEventsAtBlock.forEach(priceEvent => {
      const errors = checkWallDown(priceEvent, rangeSnapshot);
      if (errors.length == 0) return;

      sendAlert(webhookUrl, getRoleMentions(mentionRoles), `🚨 WallDown Discrepancies`, toUnorderedList(errors), [
        { name: "Upper/Lower Cushion", value: `${priceEvent.isHigh ? "Upper" : "Lower"}` },
        // marketId is not available
        { name: "Transaction", value: `${getEtherscanTransactionUrl(priceEvent.transaction.toString(), "Mainnet")}` },
        { name: "Block", value: `${priceEvent.block}` },
        ...getShutdownEmbedField(contractUrl),
      ]);
    });

    const marketCreatedEventsAtBlock = filterCreatedEvents(marketCreatedEvents, rangeSnapshotBlock);
    marketCreatedEventsAtBlock.forEach(marketEvent => {
      const errors = checkMarketCreated(marketEvent, rangeSnapshot, cushionUpEventsAtBlock);
      if (errors.length == 0) return;

      sendAlert(webhookUrl, getRoleMentions(mentionRoles), `🚨 CreatedMarket Discrepancies`, toUnorderedList(errors), [
        {
          name: "Market ID",
          value: `${marketEvent.market.marketId}`,
        },
        { name: "Block", value: `${marketEvent.block}` },
        ...getShutdownEmbedField(contractUrl),
      ]);
    });

    const marketClosedEventsAtBlock = filterClosedEvents(marketClosedEvents, rangeSnapshotBlock);
    marketClosedEventsAtBlock.forEach(marketEvent => {
      const errors = checkMarketClosed(marketEvent, rangeSnapshot, cushionDownEventsAtBlock);
      if (errors.length == 0) return;

      sendAlert(webhookUrl, getRoleMentions(mentionRoles), `🚨 ClosedMarket Discrepancies`, toUnorderedList(errors), [
        {
          name: "Market ID",
          value: `${marketEvent.market.marketId}`,
        },
        { name: "Block", value: `${marketEvent.block}` },
        ...getShutdownEmbedField(contractUrl),
      ]);
    });

    updatedLatestBlock = rangeSnapshotBlock;
  });

  // Update latest block
  await firestore.update({
    [`${FUNCTION_KEY}.${LATEST_BLOCK}`]: updatedLatestBlock,
  });
  console.info(`Updated latest block to ${updatedLatestBlock}`);
};
