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

export type BondSnapshot = {
  __typename?: "BondSnapshot";
  block: Scalars["BigInt"];
  capacity: Scalars["BigDecimal"];
  contractAddress: Scalars["Bytes"];
  contractId: Scalars["BigInt"];
  controlVariable: Scalars["BigInt"];
  date: Scalars["String"];
  debtDecayIntervalSeconds: Scalars["BigInt"];
  depositIntervalSeconds: Scalars["BigInt"];
  id: Scalars["ID"];
  isLive: Scalars["Boolean"];
  lastDecayDate: Scalars["String"];
  lastDecaySecondsAgo: Scalars["BigInt"];
  lastDecayTimestamp: Scalars["BigInt"];
  lastTuneDate: Scalars["String"];
  lastTuneDebt: Scalars["BigDecimal"];
  lastTuneSecondsAgo: Scalars["BigInt"];
  lastTuneTimestamp: Scalars["BigInt"];
  maxPayout: Scalars["BigDecimal"];
  minPrice: Scalars["BigDecimal"];
  nextDecayDate: Scalars["String"];
  nextDecayInSeconds: Scalars["BigInt"];
  nextTuneDate: Scalars["String"];
  nextTuneInSeconds: Scalars["BigInt"];
  owner: Scalars["Bytes"];
  payoutToken: Scalars["Bytes"];
  previousControlVariable: Scalars["BigInt"];
  price: Scalars["BigDecimal"];
  purchased: Scalars["BigDecimal"];
  quoteToken: Scalars["Bytes"];
  sold: Scalars["BigDecimal"];
  timestamp: Scalars["BigInt"];
  totalDebt: Scalars["BigDecimal"];
  tuneAdjustmentDelaySeconds: Scalars["BigInt"];
  tuneBelowCapacity: Scalars["BigDecimal"];
  tuneIntervalCapacity: Scalars["BigDecimal"];
  tuneIntervalSeconds: Scalars["BigInt"];
};

export type BondSnapshot_Filter = {
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
  capacity?: InputMaybe<Scalars["BigDecimal"]>;
  capacity_gt?: InputMaybe<Scalars["BigDecimal"]>;
  capacity_gte?: InputMaybe<Scalars["BigDecimal"]>;
  capacity_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  capacity_lt?: InputMaybe<Scalars["BigDecimal"]>;
  capacity_lte?: InputMaybe<Scalars["BigDecimal"]>;
  capacity_not?: InputMaybe<Scalars["BigDecimal"]>;
  capacity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  contractAddress?: InputMaybe<Scalars["Bytes"]>;
  contractAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  contractAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  contractAddress_not?: InputMaybe<Scalars["Bytes"]>;
  contractAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  contractAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  contractId?: InputMaybe<Scalars["BigInt"]>;
  contractId_gt?: InputMaybe<Scalars["BigInt"]>;
  contractId_gte?: InputMaybe<Scalars["BigInt"]>;
  contractId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  contractId_lt?: InputMaybe<Scalars["BigInt"]>;
  contractId_lte?: InputMaybe<Scalars["BigInt"]>;
  contractId_not?: InputMaybe<Scalars["BigInt"]>;
  contractId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  controlVariable?: InputMaybe<Scalars["BigInt"]>;
  controlVariable_gt?: InputMaybe<Scalars["BigInt"]>;
  controlVariable_gte?: InputMaybe<Scalars["BigInt"]>;
  controlVariable_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  controlVariable_lt?: InputMaybe<Scalars["BigInt"]>;
  controlVariable_lte?: InputMaybe<Scalars["BigInt"]>;
  controlVariable_not?: InputMaybe<Scalars["BigInt"]>;
  controlVariable_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  debtDecayIntervalSeconds?: InputMaybe<Scalars["BigInt"]>;
  debtDecayIntervalSeconds_gt?: InputMaybe<Scalars["BigInt"]>;
  debtDecayIntervalSeconds_gte?: InputMaybe<Scalars["BigInt"]>;
  debtDecayIntervalSeconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  debtDecayIntervalSeconds_lt?: InputMaybe<Scalars["BigInt"]>;
  debtDecayIntervalSeconds_lte?: InputMaybe<Scalars["BigInt"]>;
  debtDecayIntervalSeconds_not?: InputMaybe<Scalars["BigInt"]>;
  debtDecayIntervalSeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  depositIntervalSeconds?: InputMaybe<Scalars["BigInt"]>;
  depositIntervalSeconds_gt?: InputMaybe<Scalars["BigInt"]>;
  depositIntervalSeconds_gte?: InputMaybe<Scalars["BigInt"]>;
  depositIntervalSeconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  depositIntervalSeconds_lt?: InputMaybe<Scalars["BigInt"]>;
  depositIntervalSeconds_lte?: InputMaybe<Scalars["BigInt"]>;
  depositIntervalSeconds_not?: InputMaybe<Scalars["BigInt"]>;
  depositIntervalSeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isLive?: InputMaybe<Scalars["Boolean"]>;
  isLive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isLive_not?: InputMaybe<Scalars["Boolean"]>;
  isLive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  lastDecayDate?: InputMaybe<Scalars["String"]>;
  lastDecayDate_contains?: InputMaybe<Scalars["String"]>;
  lastDecayDate_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastDecayDate_ends_with?: InputMaybe<Scalars["String"]>;
  lastDecayDate_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastDecayDate_gt?: InputMaybe<Scalars["String"]>;
  lastDecayDate_gte?: InputMaybe<Scalars["String"]>;
  lastDecayDate_in?: InputMaybe<Array<Scalars["String"]>>;
  lastDecayDate_lt?: InputMaybe<Scalars["String"]>;
  lastDecayDate_lte?: InputMaybe<Scalars["String"]>;
  lastDecayDate_not?: InputMaybe<Scalars["String"]>;
  lastDecayDate_not_contains?: InputMaybe<Scalars["String"]>;
  lastDecayDate_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastDecayDate_not_ends_with?: InputMaybe<Scalars["String"]>;
  lastDecayDate_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastDecayDate_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lastDecayDate_not_starts_with?: InputMaybe<Scalars["String"]>;
  lastDecayDate_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lastDecayDate_starts_with?: InputMaybe<Scalars["String"]>;
  lastDecayDate_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lastDecaySecondsAgo?: InputMaybe<Scalars["BigInt"]>;
  lastDecaySecondsAgo_gt?: InputMaybe<Scalars["BigInt"]>;
  lastDecaySecondsAgo_gte?: InputMaybe<Scalars["BigInt"]>;
  lastDecaySecondsAgo_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastDecaySecondsAgo_lt?: InputMaybe<Scalars["BigInt"]>;
  lastDecaySecondsAgo_lte?: InputMaybe<Scalars["BigInt"]>;
  lastDecaySecondsAgo_not?: InputMaybe<Scalars["BigInt"]>;
  lastDecaySecondsAgo_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastDecayTimestamp?: InputMaybe<Scalars["BigInt"]>;
  lastDecayTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  lastDecayTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  lastDecayTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastDecayTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  lastDecayTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  lastDecayTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  lastDecayTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastTuneDate?: InputMaybe<Scalars["String"]>;
  lastTuneDate_contains?: InputMaybe<Scalars["String"]>;
  lastTuneDate_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastTuneDate_ends_with?: InputMaybe<Scalars["String"]>;
  lastTuneDate_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastTuneDate_gt?: InputMaybe<Scalars["String"]>;
  lastTuneDate_gte?: InputMaybe<Scalars["String"]>;
  lastTuneDate_in?: InputMaybe<Array<Scalars["String"]>>;
  lastTuneDate_lt?: InputMaybe<Scalars["String"]>;
  lastTuneDate_lte?: InputMaybe<Scalars["String"]>;
  lastTuneDate_not?: InputMaybe<Scalars["String"]>;
  lastTuneDate_not_contains?: InputMaybe<Scalars["String"]>;
  lastTuneDate_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastTuneDate_not_ends_with?: InputMaybe<Scalars["String"]>;
  lastTuneDate_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastTuneDate_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lastTuneDate_not_starts_with?: InputMaybe<Scalars["String"]>;
  lastTuneDate_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lastTuneDate_starts_with?: InputMaybe<Scalars["String"]>;
  lastTuneDate_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lastTuneDebt?: InputMaybe<Scalars["BigDecimal"]>;
  lastTuneDebt_gt?: InputMaybe<Scalars["BigDecimal"]>;
  lastTuneDebt_gte?: InputMaybe<Scalars["BigDecimal"]>;
  lastTuneDebt_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lastTuneDebt_lt?: InputMaybe<Scalars["BigDecimal"]>;
  lastTuneDebt_lte?: InputMaybe<Scalars["BigDecimal"]>;
  lastTuneDebt_not?: InputMaybe<Scalars["BigDecimal"]>;
  lastTuneDebt_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lastTuneSecondsAgo?: InputMaybe<Scalars["BigInt"]>;
  lastTuneSecondsAgo_gt?: InputMaybe<Scalars["BigInt"]>;
  lastTuneSecondsAgo_gte?: InputMaybe<Scalars["BigInt"]>;
  lastTuneSecondsAgo_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastTuneSecondsAgo_lt?: InputMaybe<Scalars["BigInt"]>;
  lastTuneSecondsAgo_lte?: InputMaybe<Scalars["BigInt"]>;
  lastTuneSecondsAgo_not?: InputMaybe<Scalars["BigInt"]>;
  lastTuneSecondsAgo_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastTuneTimestamp?: InputMaybe<Scalars["BigInt"]>;
  lastTuneTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  lastTuneTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  lastTuneTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lastTuneTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  lastTuneTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  lastTuneTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  lastTuneTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxPayout?: InputMaybe<Scalars["BigDecimal"]>;
  maxPayout_gt?: InputMaybe<Scalars["BigDecimal"]>;
  maxPayout_gte?: InputMaybe<Scalars["BigDecimal"]>;
  maxPayout_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  maxPayout_lt?: InputMaybe<Scalars["BigDecimal"]>;
  maxPayout_lte?: InputMaybe<Scalars["BigDecimal"]>;
  maxPayout_not?: InputMaybe<Scalars["BigDecimal"]>;
  maxPayout_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  minPrice?: InputMaybe<Scalars["BigDecimal"]>;
  minPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  minPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  minPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  minPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  minPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  minPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  minPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  nextDecayDate?: InputMaybe<Scalars["String"]>;
  nextDecayDate_contains?: InputMaybe<Scalars["String"]>;
  nextDecayDate_contains_nocase?: InputMaybe<Scalars["String"]>;
  nextDecayDate_ends_with?: InputMaybe<Scalars["String"]>;
  nextDecayDate_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  nextDecayDate_gt?: InputMaybe<Scalars["String"]>;
  nextDecayDate_gte?: InputMaybe<Scalars["String"]>;
  nextDecayDate_in?: InputMaybe<Array<Scalars["String"]>>;
  nextDecayDate_lt?: InputMaybe<Scalars["String"]>;
  nextDecayDate_lte?: InputMaybe<Scalars["String"]>;
  nextDecayDate_not?: InputMaybe<Scalars["String"]>;
  nextDecayDate_not_contains?: InputMaybe<Scalars["String"]>;
  nextDecayDate_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  nextDecayDate_not_ends_with?: InputMaybe<Scalars["String"]>;
  nextDecayDate_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  nextDecayDate_not_in?: InputMaybe<Array<Scalars["String"]>>;
  nextDecayDate_not_starts_with?: InputMaybe<Scalars["String"]>;
  nextDecayDate_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  nextDecayDate_starts_with?: InputMaybe<Scalars["String"]>;
  nextDecayDate_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  nextDecayInSeconds?: InputMaybe<Scalars["BigInt"]>;
  nextDecayInSeconds_gt?: InputMaybe<Scalars["BigInt"]>;
  nextDecayInSeconds_gte?: InputMaybe<Scalars["BigInt"]>;
  nextDecayInSeconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nextDecayInSeconds_lt?: InputMaybe<Scalars["BigInt"]>;
  nextDecayInSeconds_lte?: InputMaybe<Scalars["BigInt"]>;
  nextDecayInSeconds_not?: InputMaybe<Scalars["BigInt"]>;
  nextDecayInSeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nextTuneDate?: InputMaybe<Scalars["String"]>;
  nextTuneDate_contains?: InputMaybe<Scalars["String"]>;
  nextTuneDate_contains_nocase?: InputMaybe<Scalars["String"]>;
  nextTuneDate_ends_with?: InputMaybe<Scalars["String"]>;
  nextTuneDate_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  nextTuneDate_gt?: InputMaybe<Scalars["String"]>;
  nextTuneDate_gte?: InputMaybe<Scalars["String"]>;
  nextTuneDate_in?: InputMaybe<Array<Scalars["String"]>>;
  nextTuneDate_lt?: InputMaybe<Scalars["String"]>;
  nextTuneDate_lte?: InputMaybe<Scalars["String"]>;
  nextTuneDate_not?: InputMaybe<Scalars["String"]>;
  nextTuneDate_not_contains?: InputMaybe<Scalars["String"]>;
  nextTuneDate_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  nextTuneDate_not_ends_with?: InputMaybe<Scalars["String"]>;
  nextTuneDate_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  nextTuneDate_not_in?: InputMaybe<Array<Scalars["String"]>>;
  nextTuneDate_not_starts_with?: InputMaybe<Scalars["String"]>;
  nextTuneDate_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  nextTuneDate_starts_with?: InputMaybe<Scalars["String"]>;
  nextTuneDate_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  nextTuneInSeconds?: InputMaybe<Scalars["BigInt"]>;
  nextTuneInSeconds_gt?: InputMaybe<Scalars["BigInt"]>;
  nextTuneInSeconds_gte?: InputMaybe<Scalars["BigInt"]>;
  nextTuneInSeconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nextTuneInSeconds_lt?: InputMaybe<Scalars["BigInt"]>;
  nextTuneInSeconds_lte?: InputMaybe<Scalars["BigInt"]>;
  nextTuneInSeconds_not?: InputMaybe<Scalars["BigInt"]>;
  nextTuneInSeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  previousControlVariable?: InputMaybe<Scalars["BigInt"]>;
  previousControlVariable_gt?: InputMaybe<Scalars["BigInt"]>;
  previousControlVariable_gte?: InputMaybe<Scalars["BigInt"]>;
  previousControlVariable_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  previousControlVariable_lt?: InputMaybe<Scalars["BigInt"]>;
  previousControlVariable_lte?: InputMaybe<Scalars["BigInt"]>;
  previousControlVariable_not?: InputMaybe<Scalars["BigInt"]>;
  previousControlVariable_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  price?: InputMaybe<Scalars["BigDecimal"]>;
  price_gt?: InputMaybe<Scalars["BigDecimal"]>;
  price_gte?: InputMaybe<Scalars["BigDecimal"]>;
  price_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  price_lt?: InputMaybe<Scalars["BigDecimal"]>;
  price_lte?: InputMaybe<Scalars["BigDecimal"]>;
  price_not?: InputMaybe<Scalars["BigDecimal"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  purchased?: InputMaybe<Scalars["BigDecimal"]>;
  purchased_gt?: InputMaybe<Scalars["BigDecimal"]>;
  purchased_gte?: InputMaybe<Scalars["BigDecimal"]>;
  purchased_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  purchased_lt?: InputMaybe<Scalars["BigDecimal"]>;
  purchased_lte?: InputMaybe<Scalars["BigDecimal"]>;
  purchased_not?: InputMaybe<Scalars["BigDecimal"]>;
  purchased_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  quoteToken?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_contains?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  quoteToken_not?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  quoteToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sold?: InputMaybe<Scalars["BigDecimal"]>;
  sold_gt?: InputMaybe<Scalars["BigDecimal"]>;
  sold_gte?: InputMaybe<Scalars["BigDecimal"]>;
  sold_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sold_lt?: InputMaybe<Scalars["BigDecimal"]>;
  sold_lte?: InputMaybe<Scalars["BigDecimal"]>;
  sold_not?: InputMaybe<Scalars["BigDecimal"]>;
  sold_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalDebt?: InputMaybe<Scalars["BigDecimal"]>;
  totalDebt_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalDebt_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalDebt_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalDebt_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalDebt_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalDebt_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalDebt_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tuneAdjustmentDelaySeconds?: InputMaybe<Scalars["BigInt"]>;
  tuneAdjustmentDelaySeconds_gt?: InputMaybe<Scalars["BigInt"]>;
  tuneAdjustmentDelaySeconds_gte?: InputMaybe<Scalars["BigInt"]>;
  tuneAdjustmentDelaySeconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tuneAdjustmentDelaySeconds_lt?: InputMaybe<Scalars["BigInt"]>;
  tuneAdjustmentDelaySeconds_lte?: InputMaybe<Scalars["BigInt"]>;
  tuneAdjustmentDelaySeconds_not?: InputMaybe<Scalars["BigInt"]>;
  tuneAdjustmentDelaySeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tuneBelowCapacity?: InputMaybe<Scalars["BigDecimal"]>;
  tuneBelowCapacity_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tuneBelowCapacity_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tuneBelowCapacity_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tuneBelowCapacity_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tuneBelowCapacity_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tuneBelowCapacity_not?: InputMaybe<Scalars["BigDecimal"]>;
  tuneBelowCapacity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tuneIntervalCapacity?: InputMaybe<Scalars["BigDecimal"]>;
  tuneIntervalCapacity_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tuneIntervalCapacity_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tuneIntervalCapacity_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tuneIntervalCapacity_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tuneIntervalCapacity_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tuneIntervalCapacity_not?: InputMaybe<Scalars["BigDecimal"]>;
  tuneIntervalCapacity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tuneIntervalSeconds?: InputMaybe<Scalars["BigInt"]>;
  tuneIntervalSeconds_gt?: InputMaybe<Scalars["BigInt"]>;
  tuneIntervalSeconds_gte?: InputMaybe<Scalars["BigInt"]>;
  tuneIntervalSeconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tuneIntervalSeconds_lt?: InputMaybe<Scalars["BigInt"]>;
  tuneIntervalSeconds_lte?: InputMaybe<Scalars["BigInt"]>;
  tuneIntervalSeconds_not?: InputMaybe<Scalars["BigInt"]>;
  tuneIntervalSeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum BondSnapshot_OrderBy {
  Block = "block",
  Capacity = "capacity",
  ContractAddress = "contractAddress",
  ContractId = "contractId",
  ControlVariable = "controlVariable",
  Date = "date",
  DebtDecayIntervalSeconds = "debtDecayIntervalSeconds",
  DepositIntervalSeconds = "depositIntervalSeconds",
  Id = "id",
  IsLive = "isLive",
  LastDecayDate = "lastDecayDate",
  LastDecaySecondsAgo = "lastDecaySecondsAgo",
  LastDecayTimestamp = "lastDecayTimestamp",
  LastTuneDate = "lastTuneDate",
  LastTuneDebt = "lastTuneDebt",
  LastTuneSecondsAgo = "lastTuneSecondsAgo",
  LastTuneTimestamp = "lastTuneTimestamp",
  MaxPayout = "maxPayout",
  MinPrice = "minPrice",
  NextDecayDate = "nextDecayDate",
  NextDecayInSeconds = "nextDecayInSeconds",
  NextTuneDate = "nextTuneDate",
  NextTuneInSeconds = "nextTuneInSeconds",
  Owner = "owner",
  PayoutToken = "payoutToken",
  PreviousControlVariable = "previousControlVariable",
  Price = "price",
  Purchased = "purchased",
  QuoteToken = "quoteToken",
  Sold = "sold",
  Timestamp = "timestamp",
  TotalDebt = "totalDebt",
  TuneAdjustmentDelaySeconds = "tuneAdjustmentDelaySeconds",
  TuneBelowCapacity = "tuneBelowCapacity",
  TuneIntervalCapacity = "tuneIntervalCapacity",
  TuneIntervalSeconds = "tuneIntervalSeconds",
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
  id: Scalars["ID"];
  initialPriceInQuoteToken: Scalars["BigDecimal"];
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
  Date = "date",
  Id = "id",
  Market = "market",
  MarketId = "marketId",
  Timestamp = "timestamp",
}

export type MarketCreatedEvent = {
  __typename?: "MarketCreatedEvent";
  block: Scalars["BigInt"];
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
  Id = "id",
  InitialPriceInQuoteToken = "initialPriceInQuoteToken",
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
  bondSnapshot?: Maybe<BondSnapshot>;
  bondSnapshots: Array<BondSnapshot>;
  market?: Maybe<Market>;
  marketClosedEvent?: Maybe<MarketClosedEvent>;
  marketClosedEvents: Array<MarketClosedEvent>;
  marketCreatedEvent?: Maybe<MarketCreatedEvent>;
  marketCreatedEvents: Array<MarketCreatedEvent>;
  markets: Array<Market>;
  tunedEvent?: Maybe<TunedEvent>;
  tunedEvents: Array<TunedEvent>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryBondSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBondSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BondSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BondSnapshot_Filter>;
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

export type QueryTunedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTunedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TunedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TunedEvent_Filter>;
};

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  bondSnapshot?: Maybe<BondSnapshot>;
  bondSnapshots: Array<BondSnapshot>;
  market?: Maybe<Market>;
  marketClosedEvent?: Maybe<MarketClosedEvent>;
  marketClosedEvents: Array<MarketClosedEvent>;
  marketCreatedEvent?: Maybe<MarketCreatedEvent>;
  marketCreatedEvents: Array<MarketCreatedEvent>;
  markets: Array<Market>;
  tunedEvent?: Maybe<TunedEvent>;
  tunedEvents: Array<TunedEvent>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionBondSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBondSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BondSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BondSnapshot_Filter>;
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

export type SubscriptionTunedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTunedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TunedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TunedEvent_Filter>;
};

export type TunedEvent = {
  __typename?: "TunedEvent";
  block: Scalars["BigInt"];
  contractAddress: Scalars["Bytes"];
  contractId: Scalars["BigInt"];
  id: Scalars["ID"];
  newControlVariable: Scalars["BigInt"];
  previousControlVariable: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
};

export type TunedEvent_Filter = {
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
  contractAddress?: InputMaybe<Scalars["Bytes"]>;
  contractAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  contractAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  contractAddress_not?: InputMaybe<Scalars["Bytes"]>;
  contractAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  contractAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  contractId?: InputMaybe<Scalars["BigInt"]>;
  contractId_gt?: InputMaybe<Scalars["BigInt"]>;
  contractId_gte?: InputMaybe<Scalars["BigInt"]>;
  contractId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  contractId_lt?: InputMaybe<Scalars["BigInt"]>;
  contractId_lte?: InputMaybe<Scalars["BigInt"]>;
  contractId_not?: InputMaybe<Scalars["BigInt"]>;
  contractId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  newControlVariable?: InputMaybe<Scalars["BigInt"]>;
  newControlVariable_gt?: InputMaybe<Scalars["BigInt"]>;
  newControlVariable_gte?: InputMaybe<Scalars["BigInt"]>;
  newControlVariable_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  newControlVariable_lt?: InputMaybe<Scalars["BigInt"]>;
  newControlVariable_lte?: InputMaybe<Scalars["BigInt"]>;
  newControlVariable_not?: InputMaybe<Scalars["BigInt"]>;
  newControlVariable_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  previousControlVariable?: InputMaybe<Scalars["BigInt"]>;
  previousControlVariable_gt?: InputMaybe<Scalars["BigInt"]>;
  previousControlVariable_gte?: InputMaybe<Scalars["BigInt"]>;
  previousControlVariable_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  previousControlVariable_lt?: InputMaybe<Scalars["BigInt"]>;
  previousControlVariable_lte?: InputMaybe<Scalars["BigInt"]>;
  previousControlVariable_not?: InputMaybe<Scalars["BigInt"]>;
  previousControlVariable_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum TunedEvent_OrderBy {
  Block = "block",
  ContractAddress = "contractAddress",
  ContractId = "contractId",
  Id = "id",
  NewControlVariable = "newControlVariable",
  PreviousControlVariable = "previousControlVariable",
  Timestamp = "timestamp",
}

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
      id: string;
      initialPriceInQuoteToken: number;
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
      id: string;
      initialPriceInQuoteToken: number;
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
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "initialPriceInQuoteToken" } },
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
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "initialPriceInQuoteToken" } },
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
