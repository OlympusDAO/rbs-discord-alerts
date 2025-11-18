import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: string;
  BigInt: string;
  Bytes: Uint8Array;
  Int8: number;
  Timestamp: number;
};

export enum Aggregation_Interval {
  Day = "day",
  Hour = "hour",
}

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type BondPurchase = {
  __typename?: "BondPurchase";
  amountInQuoteToken: Scalars["BigDecimal"];
  block: Scalars["BigInt"];
  contract: Scalars["Bytes"];
  date: Scalars["String"];
  expiryDate: Scalars["String"];
  expiryTimestamp: Scalars["BigInt"];
  id: Scalars["ID"];
  marketId: Scalars["BigInt"];
  payoutInPayoutToken: Scalars["BigDecimal"];
  payoutToken: Scalars["Bytes"];
  quoteToken: Scalars["Bytes"];
  referrer: Scalars["Bytes"];
  timestamp: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
  type: BondType;
};

export type BondPurchase_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountInQuoteToken?: InputMaybe<Scalars["BigDecimal"]>;
  amountInQuoteToken_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountInQuoteToken_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountInQuoteToken_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountInQuoteToken_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountInQuoteToken_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountInQuoteToken_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountInQuoteToken_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  and?: InputMaybe<Array<InputMaybe<BondPurchase_Filter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  contract?: InputMaybe<Scalars["Bytes"]>;
  contract_contains?: InputMaybe<Scalars["Bytes"]>;
  contract_gt?: InputMaybe<Scalars["Bytes"]>;
  contract_gte?: InputMaybe<Scalars["Bytes"]>;
  contract_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  contract_lt?: InputMaybe<Scalars["Bytes"]>;
  contract_lte?: InputMaybe<Scalars["Bytes"]>;
  contract_not?: InputMaybe<Scalars["Bytes"]>;
  contract_not_contains?: InputMaybe<Scalars["Bytes"]>;
  contract_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  date?: InputMaybe<Scalars["String"]>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  expiryDate?: InputMaybe<Scalars["String"]>;
  expiryDate_contains?: InputMaybe<Scalars["String"]>;
  expiryDate_contains_nocase?: InputMaybe<Scalars["String"]>;
  expiryDate_ends_with?: InputMaybe<Scalars["String"]>;
  expiryDate_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  expiryDate_gt?: InputMaybe<Scalars["String"]>;
  expiryDate_gte?: InputMaybe<Scalars["String"]>;
  expiryDate_in?: InputMaybe<Array<Scalars["String"]>>;
  expiryDate_lt?: InputMaybe<Scalars["String"]>;
  expiryDate_lte?: InputMaybe<Scalars["String"]>;
  expiryDate_not?: InputMaybe<Scalars["String"]>;
  expiryDate_not_contains?: InputMaybe<Scalars["String"]>;
  expiryDate_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  expiryDate_not_ends_with?: InputMaybe<Scalars["String"]>;
  expiryDate_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  expiryDate_not_in?: InputMaybe<Array<Scalars["String"]>>;
  expiryDate_not_starts_with?: InputMaybe<Scalars["String"]>;
  expiryDate_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  expiryDate_starts_with?: InputMaybe<Scalars["String"]>;
  expiryDate_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  expiryTimestamp?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  expiryTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  marketId?: InputMaybe<Scalars["BigInt"]>;
  marketId_gt?: InputMaybe<Scalars["BigInt"]>;
  marketId_gte?: InputMaybe<Scalars["BigInt"]>;
  marketId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  marketId_lt?: InputMaybe<Scalars["BigInt"]>;
  marketId_lte?: InputMaybe<Scalars["BigInt"]>;
  marketId_not?: InputMaybe<Scalars["BigInt"]>;
  marketId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<BondPurchase_Filter>>>;
  payoutInPayoutToken?: InputMaybe<Scalars["BigDecimal"]>;
  payoutInPayoutToken_gt?: InputMaybe<Scalars["BigDecimal"]>;
  payoutInPayoutToken_gte?: InputMaybe<Scalars["BigDecimal"]>;
  payoutInPayoutToken_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  payoutInPayoutToken_lt?: InputMaybe<Scalars["BigDecimal"]>;
  payoutInPayoutToken_lte?: InputMaybe<Scalars["BigDecimal"]>;
  payoutInPayoutToken_not?: InputMaybe<Scalars["BigDecimal"]>;
  payoutInPayoutToken_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  payoutToken?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_contains?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_gt?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_gte?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  payoutToken_lt?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_lte?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_not?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  quoteToken?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_contains?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_gt?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_gte?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  quoteToken_lt?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_lte?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_not?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  referrer?: InputMaybe<Scalars["Bytes"]>;
  referrer_contains?: InputMaybe<Scalars["Bytes"]>;
  referrer_gt?: InputMaybe<Scalars["Bytes"]>;
  referrer_gte?: InputMaybe<Scalars["Bytes"]>;
  referrer_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  referrer_lt?: InputMaybe<Scalars["Bytes"]>;
  referrer_lte?: InputMaybe<Scalars["Bytes"]>;
  referrer_not?: InputMaybe<Scalars["Bytes"]>;
  referrer_not_contains?: InputMaybe<Scalars["Bytes"]>;
  referrer_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_gt?: InputMaybe<Scalars["Bytes"]>;
  transaction_gte?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_lt?: InputMaybe<Scalars["Bytes"]>;
  transaction_lte?: InputMaybe<Scalars["Bytes"]>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  type?: InputMaybe<BondType>;
  type_in?: InputMaybe<Array<BondType>>;
  type_not?: InputMaybe<BondType>;
  type_not_in?: InputMaybe<Array<BondType>>;
};

export enum BondPurchase_OrderBy {
  AmountInQuoteToken = "amountInQuoteToken",
  Block = "block",
  Contract = "contract",
  Date = "date",
  ExpiryDate = "expiryDate",
  ExpiryTimestamp = "expiryTimestamp",
  Id = "id",
  MarketId = "marketId",
  PayoutInPayoutToken = "payoutInPayoutToken",
  PayoutToken = "payoutToken",
  QuoteToken = "quoteToken",
  Referrer = "referrer",
  Timestamp = "timestamp",
  Transaction = "transaction",
  Type = "type",
}

export enum BondType {
  FixedExpiry = "FixedExpiry",
  FixedTerm = "FixedTerm",
}

export type Market = {
  __typename?: "Market";
  bondContract: Scalars["Bytes"];
  bondType: BondType;
  capacityInPayoutToken: Scalars["BigDecimal"];
  closedBlock?: Maybe<Scalars["BigInt"]>;
  closedDate?: Maybe<Scalars["String"]>;
  closedTimestamp?: Maybe<Scalars["BigInt"]>;
  createdBlock: Scalars["BigInt"];
  createdDate: Scalars["String"];
  createdTimestamp: Scalars["BigInt"];
  durationActualMilliseconds?: Maybe<Scalars["BigInt"]>;
  durationMilliseconds: Scalars["BigInt"];
  id: Scalars["ID"];
  initialPriceInQuoteToken: Scalars["BigDecimal"];
  marketId: Scalars["BigInt"];
  maxPayoutInPayoutToken: Scalars["BigDecimal"];
  minPriceInQuoteToken: Scalars["BigDecimal"];
  owner: Scalars["Bytes"];
  payoutToken: Scalars["Bytes"];
  purchasedInQuoteToken: Scalars["BigDecimal"];
  quoteToken: Scalars["Bytes"];
  soldInPayoutToken: Scalars["BigDecimal"];
  totalDebtInPayoutToken: Scalars["BigDecimal"];
  vesting: Scalars["BigInt"];
};

export type MarketClosedEvent = {
  __typename?: "MarketClosedEvent";
  block: Scalars["BigInt"];
  bondContract: Scalars["Bytes"];
  bondType: BondType;
  date: Scalars["String"];
  id: Scalars["ID"];
  market: Market;
  timestamp: Scalars["BigInt"];
};

export type MarketClosedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketClosedEvent_Filter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bondContract?: InputMaybe<Scalars["Bytes"]>;
  bondContract_contains?: InputMaybe<Scalars["Bytes"]>;
  bondContract_gt?: InputMaybe<Scalars["Bytes"]>;
  bondContract_gte?: InputMaybe<Scalars["Bytes"]>;
  bondContract_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  bondContract_lt?: InputMaybe<Scalars["Bytes"]>;
  bondContract_lte?: InputMaybe<Scalars["Bytes"]>;
  bondContract_not?: InputMaybe<Scalars["Bytes"]>;
  bondContract_not_contains?: InputMaybe<Scalars["Bytes"]>;
  bondContract_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  bondType?: InputMaybe<BondType>;
  bondType_in?: InputMaybe<Array<BondType>>;
  bondType_not?: InputMaybe<BondType>;
  bondType_not_in?: InputMaybe<Array<BondType>>;
  date?: InputMaybe<Scalars["String"]>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  market?: InputMaybe<Scalars["String"]>;
  marketId?: InputMaybe<Scalars["BigInt"]>;
  marketId_gt?: InputMaybe<Scalars["BigInt"]>;
  marketId_gte?: InputMaybe<Scalars["BigInt"]>;
  marketId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  marketId_lt?: InputMaybe<Scalars["BigInt"]>;
  marketId_lte?: InputMaybe<Scalars["BigInt"]>;
  marketId_not?: InputMaybe<Scalars["BigInt"]>;
  marketId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<MarketClosedEvent_Filter>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum MarketClosedEvent_OrderBy {
  Block = "block",
  BondContract = "bondContract",
  BondType = "bondType",
  Date = "date",
  Id = "id",
  Market = "market",
  MarketBondContract = "market__bondContract",
  MarketBondType = "market__bondType",
  MarketCapacityInPayoutToken = "market__capacityInPayoutToken",
  MarketClosedBlock = "market__closedBlock",
  MarketClosedDate = "market__closedDate",
  MarketClosedTimestamp = "market__closedTimestamp",
  MarketCreatedBlock = "market__createdBlock",
  MarketCreatedDate = "market__createdDate",
  MarketCreatedTimestamp = "market__createdTimestamp",
  MarketDurationActualMilliseconds = "market__durationActualMilliseconds",
  MarketDurationMilliseconds = "market__durationMilliseconds",
  MarketId = "market__id",
  MarketInitialPriceInQuoteToken = "market__initialPriceInQuoteToken",
  MarketMarketId = "market__marketId",
  MarketMaxPayoutInPayoutToken = "market__maxPayoutInPayoutToken",
  MarketMinPriceInQuoteToken = "market__minPriceInQuoteToken",
  MarketOwner = "market__owner",
  MarketPayoutToken = "market__payoutToken",
  MarketPurchasedInQuoteToken = "market__purchasedInQuoteToken",
  MarketQuoteToken = "market__quoteToken",
  MarketSoldInPayoutToken = "market__soldInPayoutToken",
  MarketTotalDebtInPayoutToken = "market__totalDebtInPayoutToken",
  MarketVesting = "market__vesting",
  Timestamp = "timestamp",
}

export type MarketCreatedEvent = {
  __typename?: "MarketCreatedEvent";
  block: Scalars["BigInt"];
  bondContract: Scalars["Bytes"];
  bondType: BondType;
  date: Scalars["String"];
  id: Scalars["ID"];
  market: Market;
  timestamp: Scalars["BigInt"];
};

export type MarketCreatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketCreatedEvent_Filter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bondContract?: InputMaybe<Scalars["Bytes"]>;
  bondContract_contains?: InputMaybe<Scalars["Bytes"]>;
  bondContract_gt?: InputMaybe<Scalars["Bytes"]>;
  bondContract_gte?: InputMaybe<Scalars["Bytes"]>;
  bondContract_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  bondContract_lt?: InputMaybe<Scalars["Bytes"]>;
  bondContract_lte?: InputMaybe<Scalars["Bytes"]>;
  bondContract_not?: InputMaybe<Scalars["Bytes"]>;
  bondContract_not_contains?: InputMaybe<Scalars["Bytes"]>;
  bondContract_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  bondType?: InputMaybe<BondType>;
  bondType_in?: InputMaybe<Array<BondType>>;
  bondType_not?: InputMaybe<BondType>;
  bondType_not_in?: InputMaybe<Array<BondType>>;
  date?: InputMaybe<Scalars["String"]>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  market?: InputMaybe<Scalars["String"]>;
  marketId?: InputMaybe<Scalars["BigInt"]>;
  marketId_gt?: InputMaybe<Scalars["BigInt"]>;
  marketId_gte?: InputMaybe<Scalars["BigInt"]>;
  marketId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  marketId_lt?: InputMaybe<Scalars["BigInt"]>;
  marketId_lte?: InputMaybe<Scalars["BigInt"]>;
  marketId_not?: InputMaybe<Scalars["BigInt"]>;
  marketId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<MarketCreatedEvent_Filter>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum MarketCreatedEvent_OrderBy {
  Block = "block",
  BondContract = "bondContract",
  BondType = "bondType",
  Date = "date",
  Id = "id",
  Market = "market",
  MarketBondContract = "market__bondContract",
  MarketBondType = "market__bondType",
  MarketCapacityInPayoutToken = "market__capacityInPayoutToken",
  MarketClosedBlock = "market__closedBlock",
  MarketClosedDate = "market__closedDate",
  MarketClosedTimestamp = "market__closedTimestamp",
  MarketCreatedBlock = "market__createdBlock",
  MarketCreatedDate = "market__createdDate",
  MarketCreatedTimestamp = "market__createdTimestamp",
  MarketDurationActualMilliseconds = "market__durationActualMilliseconds",
  MarketDurationMilliseconds = "market__durationMilliseconds",
  MarketId = "market__id",
  MarketInitialPriceInQuoteToken = "market__initialPriceInQuoteToken",
  MarketMarketId = "market__marketId",
  MarketMaxPayoutInPayoutToken = "market__maxPayoutInPayoutToken",
  MarketMinPriceInQuoteToken = "market__minPriceInQuoteToken",
  MarketOwner = "market__owner",
  MarketPayoutToken = "market__payoutToken",
  MarketPurchasedInQuoteToken = "market__purchasedInQuoteToken",
  MarketQuoteToken = "market__quoteToken",
  MarketSoldInPayoutToken = "market__soldInPayoutToken",
  MarketTotalDebtInPayoutToken = "market__totalDebtInPayoutToken",
  MarketVesting = "market__vesting",
  Timestamp = "timestamp",
}

export type Market_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Market_Filter>>>;
  bondContract?: InputMaybe<Scalars["Bytes"]>;
  bondContract_contains?: InputMaybe<Scalars["Bytes"]>;
  bondContract_gt?: InputMaybe<Scalars["Bytes"]>;
  bondContract_gte?: InputMaybe<Scalars["Bytes"]>;
  bondContract_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  bondContract_lt?: InputMaybe<Scalars["Bytes"]>;
  bondContract_lte?: InputMaybe<Scalars["Bytes"]>;
  bondContract_not?: InputMaybe<Scalars["Bytes"]>;
  bondContract_not_contains?: InputMaybe<Scalars["Bytes"]>;
  bondContract_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  bondType?: InputMaybe<BondType>;
  bondType_in?: InputMaybe<Array<BondType>>;
  bondType_not?: InputMaybe<BondType>;
  bondType_not_in?: InputMaybe<Array<BondType>>;
  capacityInPayoutToken?: InputMaybe<Scalars["BigDecimal"]>;
  capacityInPayoutToken_gt?: InputMaybe<Scalars["BigDecimal"]>;
  capacityInPayoutToken_gte?: InputMaybe<Scalars["BigDecimal"]>;
  capacityInPayoutToken_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  capacityInPayoutToken_lt?: InputMaybe<Scalars["BigDecimal"]>;
  capacityInPayoutToken_lte?: InputMaybe<Scalars["BigDecimal"]>;
  capacityInPayoutToken_not?: InputMaybe<Scalars["BigDecimal"]>;
  capacityInPayoutToken_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  closedBlock?: InputMaybe<Scalars["BigInt"]>;
  closedBlock_gt?: InputMaybe<Scalars["BigInt"]>;
  closedBlock_gte?: InputMaybe<Scalars["BigInt"]>;
  closedBlock_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closedBlock_lt?: InputMaybe<Scalars["BigInt"]>;
  closedBlock_lte?: InputMaybe<Scalars["BigInt"]>;
  closedBlock_not?: InputMaybe<Scalars["BigInt"]>;
  closedBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closedDate?: InputMaybe<Scalars["String"]>;
  closedDate_contains?: InputMaybe<Scalars["String"]>;
  closedDate_contains_nocase?: InputMaybe<Scalars["String"]>;
  closedDate_ends_with?: InputMaybe<Scalars["String"]>;
  closedDate_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  closedDate_gt?: InputMaybe<Scalars["String"]>;
  closedDate_gte?: InputMaybe<Scalars["String"]>;
  closedDate_in?: InputMaybe<Array<Scalars["String"]>>;
  closedDate_lt?: InputMaybe<Scalars["String"]>;
  closedDate_lte?: InputMaybe<Scalars["String"]>;
  closedDate_not?: InputMaybe<Scalars["String"]>;
  closedDate_not_contains?: InputMaybe<Scalars["String"]>;
  closedDate_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  closedDate_not_ends_with?: InputMaybe<Scalars["String"]>;
  closedDate_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  closedDate_not_in?: InputMaybe<Array<Scalars["String"]>>;
  closedDate_not_starts_with?: InputMaybe<Scalars["String"]>;
  closedDate_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  closedDate_starts_with?: InputMaybe<Scalars["String"]>;
  closedDate_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  closedTimestamp?: InputMaybe<Scalars["BigInt"]>;
  closedTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  closedTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  closedTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closedTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  closedTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  closedTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  closedTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdBlock?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_gt?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_gte?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdBlock_lt?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_lte?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_not?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdDate?: InputMaybe<Scalars["String"]>;
  createdDate_contains?: InputMaybe<Scalars["String"]>;
  createdDate_contains_nocase?: InputMaybe<Scalars["String"]>;
  createdDate_ends_with?: InputMaybe<Scalars["String"]>;
  createdDate_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  createdDate_gt?: InputMaybe<Scalars["String"]>;
  createdDate_gte?: InputMaybe<Scalars["String"]>;
  createdDate_in?: InputMaybe<Array<Scalars["String"]>>;
  createdDate_lt?: InputMaybe<Scalars["String"]>;
  createdDate_lte?: InputMaybe<Scalars["String"]>;
  createdDate_not?: InputMaybe<Scalars["String"]>;
  createdDate_not_contains?: InputMaybe<Scalars["String"]>;
  createdDate_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  createdDate_not_ends_with?: InputMaybe<Scalars["String"]>;
  createdDate_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  createdDate_not_in?: InputMaybe<Array<Scalars["String"]>>;
  createdDate_not_starts_with?: InputMaybe<Scalars["String"]>;
  createdDate_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  createdDate_starts_with?: InputMaybe<Scalars["String"]>;
  createdDate_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  createdTimestamp?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  durationActualMilliseconds?: InputMaybe<Scalars["BigInt"]>;
  durationActualMilliseconds_gt?: InputMaybe<Scalars["BigInt"]>;
  durationActualMilliseconds_gte?: InputMaybe<Scalars["BigInt"]>;
  durationActualMilliseconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  durationActualMilliseconds_lt?: InputMaybe<Scalars["BigInt"]>;
  durationActualMilliseconds_lte?: InputMaybe<Scalars["BigInt"]>;
  durationActualMilliseconds_not?: InputMaybe<Scalars["BigInt"]>;
  durationActualMilliseconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  durationMilliseconds?: InputMaybe<Scalars["BigInt"]>;
  durationMilliseconds_gt?: InputMaybe<Scalars["BigInt"]>;
  durationMilliseconds_gte?: InputMaybe<Scalars["BigInt"]>;
  durationMilliseconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  durationMilliseconds_lt?: InputMaybe<Scalars["BigInt"]>;
  durationMilliseconds_lte?: InputMaybe<Scalars["BigInt"]>;
  durationMilliseconds_not?: InputMaybe<Scalars["BigInt"]>;
  durationMilliseconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  initialPriceInQuoteToken?: InputMaybe<Scalars["BigDecimal"]>;
  initialPriceInQuoteToken_gt?: InputMaybe<Scalars["BigDecimal"]>;
  initialPriceInQuoteToken_gte?: InputMaybe<Scalars["BigDecimal"]>;
  initialPriceInQuoteToken_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  initialPriceInQuoteToken_lt?: InputMaybe<Scalars["BigDecimal"]>;
  initialPriceInQuoteToken_lte?: InputMaybe<Scalars["BigDecimal"]>;
  initialPriceInQuoteToken_not?: InputMaybe<Scalars["BigDecimal"]>;
  initialPriceInQuoteToken_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  marketId?: InputMaybe<Scalars["BigInt"]>;
  marketId_gt?: InputMaybe<Scalars["BigInt"]>;
  marketId_gte?: InputMaybe<Scalars["BigInt"]>;
  marketId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  marketId_lt?: InputMaybe<Scalars["BigInt"]>;
  marketId_lte?: InputMaybe<Scalars["BigInt"]>;
  marketId_not?: InputMaybe<Scalars["BigInt"]>;
  marketId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxPayoutInPayoutToken?: InputMaybe<Scalars["BigDecimal"]>;
  maxPayoutInPayoutToken_gt?: InputMaybe<Scalars["BigDecimal"]>;
  maxPayoutInPayoutToken_gte?: InputMaybe<Scalars["BigDecimal"]>;
  maxPayoutInPayoutToken_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  maxPayoutInPayoutToken_lt?: InputMaybe<Scalars["BigDecimal"]>;
  maxPayoutInPayoutToken_lte?: InputMaybe<Scalars["BigDecimal"]>;
  maxPayoutInPayoutToken_not?: InputMaybe<Scalars["BigDecimal"]>;
  maxPayoutInPayoutToken_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  minPriceInQuoteToken?: InputMaybe<Scalars["BigDecimal"]>;
  minPriceInQuoteToken_gt?: InputMaybe<Scalars["BigDecimal"]>;
  minPriceInQuoteToken_gte?: InputMaybe<Scalars["BigDecimal"]>;
  minPriceInQuoteToken_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  minPriceInQuoteToken_lt?: InputMaybe<Scalars["BigDecimal"]>;
  minPriceInQuoteToken_lte?: InputMaybe<Scalars["BigDecimal"]>;
  minPriceInQuoteToken_not?: InputMaybe<Scalars["BigDecimal"]>;
  minPriceInQuoteToken_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  or?: InputMaybe<Array<InputMaybe<Market_Filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  payoutToken?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_contains?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_gt?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_gte?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  payoutToken_lt?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_lte?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_not?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  purchasedInQuoteToken?: InputMaybe<Scalars["BigDecimal"]>;
  purchasedInQuoteToken_gt?: InputMaybe<Scalars["BigDecimal"]>;
  purchasedInQuoteToken_gte?: InputMaybe<Scalars["BigDecimal"]>;
  purchasedInQuoteToken_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  purchasedInQuoteToken_lt?: InputMaybe<Scalars["BigDecimal"]>;
  purchasedInQuoteToken_lte?: InputMaybe<Scalars["BigDecimal"]>;
  purchasedInQuoteToken_not?: InputMaybe<Scalars["BigDecimal"]>;
  purchasedInQuoteToken_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  quoteToken?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_contains?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_gt?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_gte?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  quoteToken_lt?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_lte?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_not?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  soldInPayoutToken?: InputMaybe<Scalars["BigDecimal"]>;
  soldInPayoutToken_gt?: InputMaybe<Scalars["BigDecimal"]>;
  soldInPayoutToken_gte?: InputMaybe<Scalars["BigDecimal"]>;
  soldInPayoutToken_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  soldInPayoutToken_lt?: InputMaybe<Scalars["BigDecimal"]>;
  soldInPayoutToken_lte?: InputMaybe<Scalars["BigDecimal"]>;
  soldInPayoutToken_not?: InputMaybe<Scalars["BigDecimal"]>;
  soldInPayoutToken_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalDebtInPayoutToken?: InputMaybe<Scalars["BigDecimal"]>;
  totalDebtInPayoutToken_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalDebtInPayoutToken_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalDebtInPayoutToken_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalDebtInPayoutToken_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalDebtInPayoutToken_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalDebtInPayoutToken_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalDebtInPayoutToken_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  vesting?: InputMaybe<Scalars["BigInt"]>;
  vesting_gt?: InputMaybe<Scalars["BigInt"]>;
  vesting_gte?: InputMaybe<Scalars["BigInt"]>;
  vesting_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  vesting_lt?: InputMaybe<Scalars["BigInt"]>;
  vesting_lte?: InputMaybe<Scalars["BigInt"]>;
  vesting_not?: InputMaybe<Scalars["BigInt"]>;
  vesting_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Market_OrderBy {
  BondContract = "bondContract",
  BondType = "bondType",
  CapacityInPayoutToken = "capacityInPayoutToken",
  ClosedBlock = "closedBlock",
  ClosedDate = "closedDate",
  ClosedTimestamp = "closedTimestamp",
  CreatedBlock = "createdBlock",
  CreatedDate = "createdDate",
  CreatedTimestamp = "createdTimestamp",
  DurationActualMilliseconds = "durationActualMilliseconds",
  DurationMilliseconds = "durationMilliseconds",
  Id = "id",
  InitialPriceInQuoteToken = "initialPriceInQuoteToken",
  MarketId = "marketId",
  MaxPayoutInPayoutToken = "maxPayoutInPayoutToken",
  MinPriceInQuoteToken = "minPriceInQuoteToken",
  Owner = "owner",
  PayoutToken = "payoutToken",
  PurchasedInQuoteToken = "purchasedInQuoteToken",
  QuoteToken = "quoteToken",
  SoldInPayoutToken = "soldInPayoutToken",
  TotalDebtInPayoutToken = "totalDebtInPayoutToken",
  Vesting = "vesting",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  bondPurchase?: Maybe<BondPurchase>;
  bondPurchases: Array<BondPurchase>;
  market?: Maybe<Market>;
  marketClosedEvent?: Maybe<MarketClosedEvent>;
  marketClosedEvents: Array<MarketClosedEvent>;
  marketCreatedEvent?: Maybe<MarketCreatedEvent>;
  marketCreatedEvents: Array<MarketCreatedEvent>;
  markets: Array<Market>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryBondPurchaseArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBondPurchasesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BondPurchase_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BondPurchase_Filter>;
};

export type QueryMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMarketClosedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMarketClosedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MarketClosedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketClosedEvent_Filter>;
};

export type QueryMarketCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMarketCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MarketCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketCreatedEvent_Filter>;
};

export type QueryMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Market_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Market_Filter>;
};

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars["Bytes"]>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type MarketCreatedEventsQueryVariables = Exact<{
  sinceBlock: Scalars["BigInt"];
}>;

export type MarketCreatedEventsQuery = {
  __typename?: "Query";
  marketCreatedEvents: Array<{
    __typename?: "MarketCreatedEvent";
    block: string;
    bondContract: Uint8Array;
    bondType: BondType;
    date: string;
    id: string;
    timestamp: string;
    market: {
      __typename?: "Market";
      bondContract: Uint8Array;
      bondType: BondType;
      capacityInPayoutToken: string;
      closedBlock?: string | null;
      closedDate?: string | null;
      closedTimestamp?: string | null;
      createdBlock: string;
      createdDate: string;
      createdTimestamp: string;
      durationActualMilliseconds?: string | null;
      durationMilliseconds: string;
      id: string;
      initialPriceInQuoteToken: string;
      marketId: string;
      maxPayoutInPayoutToken: string;
      minPriceInQuoteToken: string;
      owner: Uint8Array;
      payoutToken: Uint8Array;
      purchasedInQuoteToken: string;
      quoteToken: Uint8Array;
      soldInPayoutToken: string;
      totalDebtInPayoutToken: string;
      vesting: string;
    };
  }>;
};

export type MarketClosedEventsQueryVariables = Exact<{
  sinceBlock: Scalars["BigInt"];
}>;

export type MarketClosedEventsQuery = {
  __typename?: "Query";
  marketClosedEvents: Array<{
    __typename?: "MarketClosedEvent";
    block: string;
    bondContract: Uint8Array;
    bondType: BondType;
    date: string;
    id: string;
    timestamp: string;
    market: {
      __typename?: "Market";
      bondContract: Uint8Array;
      bondType: BondType;
      capacityInPayoutToken: string;
      closedBlock?: string | null;
      closedDate?: string | null;
      closedTimestamp?: string | null;
      createdBlock: string;
      createdDate: string;
      createdTimestamp: string;
      durationActualMilliseconds?: string | null;
      durationMilliseconds: string;
      id: string;
      initialPriceInQuoteToken: string;
      marketId: string;
      maxPayoutInPayoutToken: string;
      minPriceInQuoteToken: string;
      owner: Uint8Array;
      payoutToken: Uint8Array;
      purchasedInQuoteToken: string;
      quoteToken: Uint8Array;
      soldInPayoutToken: string;
      totalDebtInPayoutToken: string;
      vesting: string;
    };
  }>;
};

export const MarketCreatedEventsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "MarketCreatedEvents" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sinceBlock" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "BigInt" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "marketCreatedEvents" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "EnumValue", value: "block" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: { kind: "EnumValue", value: "desc" },
              },
              { kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "IntValue", value: "1000" } },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "block_gt" },
                      value: { kind: "Variable", name: { kind: "Name", value: "sinceBlock" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "block" } },
                { kind: "Field", name: { kind: "Name", value: "bondContract" } },
                { kind: "Field", name: { kind: "Name", value: "bondType" } },
                { kind: "Field", name: { kind: "Name", value: "date" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "market" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "bondContract" } },
                      { kind: "Field", name: { kind: "Name", value: "bondType" } },
                      { kind: "Field", name: { kind: "Name", value: "capacityInPayoutToken" } },
                      { kind: "Field", name: { kind: "Name", value: "closedBlock" } },
                      { kind: "Field", name: { kind: "Name", value: "closedDate" } },
                      { kind: "Field", name: { kind: "Name", value: "closedTimestamp" } },
                      { kind: "Field", name: { kind: "Name", value: "createdBlock" } },
                      { kind: "Field", name: { kind: "Name", value: "createdDate" } },
                      { kind: "Field", name: { kind: "Name", value: "createdTimestamp" } },
                      { kind: "Field", name: { kind: "Name", value: "durationActualMilliseconds" } },
                      { kind: "Field", name: { kind: "Name", value: "durationMilliseconds" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "initialPriceInQuoteToken" } },
                      { kind: "Field", name: { kind: "Name", value: "marketId" } },
                      { kind: "Field", name: { kind: "Name", value: "maxPayoutInPayoutToken" } },
                      { kind: "Field", name: { kind: "Name", value: "minPriceInQuoteToken" } },
                      { kind: "Field", name: { kind: "Name", value: "owner" } },
                      { kind: "Field", name: { kind: "Name", value: "payoutToken" } },
                      { kind: "Field", name: { kind: "Name", value: "purchasedInQuoteToken" } },
                      { kind: "Field", name: { kind: "Name", value: "quoteToken" } },
                      { kind: "Field", name: { kind: "Name", value: "soldInPayoutToken" } },
                      { kind: "Field", name: { kind: "Name", value: "totalDebtInPayoutToken" } },
                      { kind: "Field", name: { kind: "Name", value: "vesting" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MarketCreatedEventsQuery, MarketCreatedEventsQueryVariables>;
export const MarketClosedEventsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "MarketClosedEvents" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sinceBlock" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "BigInt" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "marketClosedEvents" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "EnumValue", value: "block" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: { kind: "EnumValue", value: "desc" },
              },
              { kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "IntValue", value: "1000" } },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "block_gt" },
                      value: { kind: "Variable", name: { kind: "Name", value: "sinceBlock" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "block" } },
                { kind: "Field", name: { kind: "Name", value: "bondContract" } },
                { kind: "Field", name: { kind: "Name", value: "bondType" } },
                { kind: "Field", name: { kind: "Name", value: "date" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "market" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "bondContract" } },
                      { kind: "Field", name: { kind: "Name", value: "bondType" } },
                      { kind: "Field", name: { kind: "Name", value: "capacityInPayoutToken" } },
                      { kind: "Field", name: { kind: "Name", value: "closedBlock" } },
                      { kind: "Field", name: { kind: "Name", value: "closedDate" } },
                      { kind: "Field", name: { kind: "Name", value: "closedTimestamp" } },
                      { kind: "Field", name: { kind: "Name", value: "createdBlock" } },
                      { kind: "Field", name: { kind: "Name", value: "createdDate" } },
                      { kind: "Field", name: { kind: "Name", value: "createdTimestamp" } },
                      { kind: "Field", name: { kind: "Name", value: "durationActualMilliseconds" } },
                      { kind: "Field", name: { kind: "Name", value: "durationMilliseconds" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "initialPriceInQuoteToken" } },
                      { kind: "Field", name: { kind: "Name", value: "marketId" } },
                      { kind: "Field", name: { kind: "Name", value: "maxPayoutInPayoutToken" } },
                      { kind: "Field", name: { kind: "Name", value: "minPriceInQuoteToken" } },
                      { kind: "Field", name: { kind: "Name", value: "owner" } },
                      { kind: "Field", name: { kind: "Name", value: "payoutToken" } },
                      { kind: "Field", name: { kind: "Name", value: "purchasedInQuoteToken" } },
                      { kind: "Field", name: { kind: "Name", value: "quoteToken" } },
                      { kind: "Field", name: { kind: "Name", value: "soldInPayoutToken" } },
                      { kind: "Field", name: { kind: "Name", value: "totalDebtInPayoutToken" } },
                      { kind: "Field", name: { kind: "Name", value: "vesting" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MarketClosedEventsQuery, MarketClosedEventsQueryVariables>;
