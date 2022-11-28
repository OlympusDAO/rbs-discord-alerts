import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
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
  BigDecimal: number;
  BigInt: number;
  Bytes: Uint8Array;
};

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

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
  quoteToken: Scalars["Bytes"];
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
  marketId: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
};

export type MarketClosedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
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
  bondContract_in?: InputMaybe<Array<Scalars["Bytes"]>>;
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
  MarketId = "marketId",
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
  marketId: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
};

export type MarketCreatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
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
  bondContract_in?: InputMaybe<Array<Scalars["Bytes"]>>;
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
  MarketId = "marketId",
  Timestamp = "timestamp",
}

export type Market_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  bondContract?: InputMaybe<Scalars["Bytes"]>;
  bondContract_contains?: InputMaybe<Scalars["Bytes"]>;
  bondContract_in?: InputMaybe<Array<Scalars["Bytes"]>>;
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
  owner?: InputMaybe<Scalars["Bytes"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  owner_not?: InputMaybe<Scalars["Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  payoutToken?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_contains?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  payoutToken_not?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  payoutToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  quoteToken?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_contains?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  quoteToken_not?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
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
  QuoteToken = "quoteToken",
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

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  market?: Maybe<Market>;
  marketClosedEvent?: Maybe<MarketClosedEvent>;
  marketClosedEvents: Array<MarketClosedEvent>;
  marketCreatedEvent?: Maybe<MarketCreatedEvent>;
  marketCreatedEvents: Array<MarketCreatedEvent>;
  markets: Array<Market>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMarketClosedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMarketClosedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MarketClosedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketClosedEvent_Filter>;
};

export type SubscriptionMarketCreatedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMarketCreatedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MarketCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketCreatedEvent_Filter>;
};

export type SubscriptionMarketsArgs = {
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
    block: number;
    bondContract: Uint8Array;
    bondType: BondType;
    date: string;
    id: string;
    marketId: number;
    timestamp: number;
    market: {
      __typename?: "Market";
      bondContract: Uint8Array;
      bondType: BondType;
      capacityInPayoutToken: number;
      closedBlock?: number | null;
      closedDate?: string | null;
      closedTimestamp?: number | null;
      createdBlock: number;
      createdDate: string;
      createdTimestamp: number;
      durationActualMilliseconds?: number | null;
      durationMilliseconds: number;
      id: string;
      initialPriceInQuoteToken: number;
      marketId: number;
      maxPayoutInPayoutToken: number;
      minPriceInQuoteToken: number;
      owner: Uint8Array;
      payoutToken: Uint8Array;
      quoteToken: Uint8Array;
      totalDebtInPayoutToken: number;
      vesting: number;
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
    block: number;
    bondContract: Uint8Array;
    bondType: BondType;
    date: string;
    id: string;
    marketId: number;
    timestamp: number;
    market: {
      __typename?: "Market";
      bondContract: Uint8Array;
      bondType: BondType;
      capacityInPayoutToken: number;
      closedBlock?: number | null;
      closedDate?: string | null;
      closedTimestamp?: number | null;
      createdBlock: number;
      createdDate: string;
      createdTimestamp: number;
      durationActualMilliseconds?: number | null;
      durationMilliseconds: number;
      id: string;
      initialPriceInQuoteToken: number;
      marketId: number;
      maxPayoutInPayoutToken: number;
      minPriceInQuoteToken: number;
      owner: Uint8Array;
      payoutToken: Uint8Array;
      quoteToken: Uint8Array;
      totalDebtInPayoutToken: number;
      vesting: number;
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
                { kind: "Field", name: { kind: "Name", value: "marketId" } },
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
                      { kind: "Field", name: { kind: "Name", value: "quoteToken" } },
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
                { kind: "Field", name: { kind: "Name", value: "marketId" } },
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
                      { kind: "Field", name: { kind: "Name", value: "quoteToken" } },
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
