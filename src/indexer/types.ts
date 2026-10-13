// Response shapes for the Olympus protocol indexer's REST routes.
//
// Numerics cross the wire as STRINGS — the indexer stores uint256-derived
// values that do not survive a JSON number — which is what the generated
// subgraph types said for `BigInt`/`BigDecimal` too, so the `castFloat`/
// `castInt` call sites are unchanged.
//
// `src/__tests__/indexer.contract.test.ts` asserts the deployed API really
// returns these fields. Nothing else can: a field renamed upstream would
// typecheck against this file and fail at runtime, in a cron, as an alert that
// quietly stops arriving.

export enum PriceEventType {
  CushionDown = "CushionDown",
  CushionUp = "CushionUp",
  WallDown = "WallDown",
  WallUp = "WallUp",
}

export type RangeSnapshot = {
  id: string;
  block: string;
  blockchain: string;
  cushionSpread: string;
  date: string;
  highActive: boolean;
  highCapacityOhm: string;
  highCushionPrice: string;
  highLastActiveTimestamp: string | null;
  highMarketId: string | null;
  highWallPrice: string;
  lowActive: boolean;
  lowCapacityReserve: string;
  lowCushionPrice: string;
  lowLastActiveTimestamp: string | null;
  lowMarketId: string | null;
  lowWallPrice: string;
  ohmMovingAveragePrice: string | null;
  ohmPrice: string | null;
  operatorCushionFactor: string;
  operatorReserveFactor: string;
  thresholdFactor: string;
  timestamp: string;
  treasuryDebtBalance: string;
  treasuryReserveAddress: string;
  treasuryReserveBalance: string;
  wallSpread: string;
};

export type PriceEvent = {
  id: string;
  block: string;
  blockchain: string;
  date: string;
  isHigh: boolean;
  timestamp: string;
  transaction: string;
  type: PriceEventType;
  snapshot: RangeSnapshot;
};

// The cushion-depletion route projects only the columns the depletion count
// needs, not a whole snapshot.
export type CapacitySnapshot = {
  id: string;
  block: string;
  date: string;
  highCapacityOhm: string;
  lowCapacityReserve: string;
  ohmPrice: string | null;
  timestamp: string;
};

export type Beat = {
  id: string;
  block: string;
  blockchain: string;
  date: string;
  timestamp: string;
  transaction: string;
};

export type MinimumTargetPriceChanged = {
  id: string;
  block: string;
  blockchain: string;
  date: string;
  minimumTargetPrice: string;
  timestamp: string;
  transaction: string;
};

export type BondMarket = {
  id: string;
  bondContract: string;
  bondType: string;
  capacityInPayoutToken: string;
  closedBlock: string | null;
  closedDate: string | null;
  closedTimestamp: string | null;
  createdBlock: string;
  createdDate: string;
  createdTimestamp: string;
  durationActualMilliseconds: string | null;
  durationMilliseconds: string;
  initialPriceInQuoteToken: string;
  marketId: string;
  maxPayoutInPayoutToken: string;
  minPriceInQuoteToken: string;
  owner: string;
  payoutToken: string;
  purchasedInQuoteToken: string;
  quoteToken: string;
  soldInPayoutToken: string;
  totalDebtInPayoutToken: string;
  vesting: string;
};

export type BondMarketEvent = {
  id: string;
  block: string;
  bondContract: string;
  bondType: string;
  date: string;
  timestamp: string;
  marketId: string;
  market: BondMarket;
};

type Token = {
  id: string;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
};

export type YrfRepoMarket = {
  id: string;
  marketId: string;
  bidAmount: string;
  bidAmountDecimal: string;
  blockNumber: string;
  blockTimestamp: string;
  transactionHash: string;
  contract: {
    id: string;
    address: string;
    version: string;
    majorVersion: number;
    minorVersion: number;
    reserveToken: Token;
  };
};

export type EmissionManagerSale = {
  id: string;
  marketId: string;
  saleAmount: string;
  saleAmountDecimal: string;
  blockNumber: string;
  blockTimestamp: string;
  transactionHash: string;
  contract: {
    id: string;
    address: string;
    version: string;
    majorVersion: number;
    minorVersion: number;
    gohmToken: Token;
    ohmToken: Token;
    reserveToken: Token;
    sReserveToken: Token;
  };
};

type CdEvent = {
  id: string;
  chainId: number;
  block: string;
  logIndex: number;
  txHash: string;
  timestamp: string;
};

// The routes return the deposit asset ADDRESS only. The subgraph documents
// pulled a nested `rDepositAsset { rAsset { symbol } }`; the symbol now comes
// from /v1/convertible-deposits/assets, resolved once per run (see
// `getDepositAssetSymbols`).
type WithDepositAsset = { depositAsset: string };

export type CdAsset = {
  id: string;
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
};

export type CdClaimAllYieldFailed = CdEvent & { facility: string };

export type CdBondMarketCreationFailed = CdEvent & {
  emissionManager: string;
  saleAmount: string;
  saleAmountDecimal: string;
};

export type CdClaimedYield = CdEvent &
  WithDepositAsset & {
    facility: string;
    amount: string;
    amountDecimal: string;
  };

export type CdAuctionParametersUpdated = CdEvent &
  WithDepositAsset & {
    auctioneer: string;
    target: string;
    targetDecimal: string;
    tickSize: string;
    tickSizeDecimal: string;
    minPrice: string;
    minPriceDecimal: string;
  };

export type CdAuctionResult = CdEvent &
  WithDepositAsset & {
    auctioneer: string;
    ohmConvertible: string;
    ohmConvertibleDecimal: string;
    target: string;
    targetDecimal: string;
    periodIndex: number;
  };
