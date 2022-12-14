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
  BigDecimal: string;
  BigInt: string;
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

export type BondDiscount = {
  __typename?: "BondDiscount";
  dai_discount: Scalars["BigDecimal"];
  eth_discount: Scalars["BigDecimal"];
  frax_discount: Scalars["BigDecimal"];
  id: Scalars["ID"];
  lusd_discount: Scalars["BigDecimal"];
  ohmdai_discount: Scalars["BigDecimal"];
  ohmfrax_discount: Scalars["BigDecimal"];
  ohmlusd_discount: Scalars["BigDecimal"];
  timestamp: Scalars["BigInt"];
};

export type BondDiscount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  dai_discount?: InputMaybe<Scalars["BigDecimal"]>;
  dai_discount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  dai_discount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  dai_discount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dai_discount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  dai_discount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  dai_discount_not?: InputMaybe<Scalars["BigDecimal"]>;
  dai_discount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  eth_discount?: InputMaybe<Scalars["BigDecimal"]>;
  eth_discount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  eth_discount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  eth_discount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  eth_discount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  eth_discount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  eth_discount_not?: InputMaybe<Scalars["BigDecimal"]>;
  eth_discount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  frax_discount?: InputMaybe<Scalars["BigDecimal"]>;
  frax_discount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  frax_discount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  frax_discount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  frax_discount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  frax_discount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  frax_discount_not?: InputMaybe<Scalars["BigDecimal"]>;
  frax_discount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lusd_discount?: InputMaybe<Scalars["BigDecimal"]>;
  lusd_discount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  lusd_discount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  lusd_discount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lusd_discount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  lusd_discount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  lusd_discount_not?: InputMaybe<Scalars["BigDecimal"]>;
  lusd_discount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmdai_discount?: InputMaybe<Scalars["BigDecimal"]>;
  ohmdai_discount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmdai_discount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmdai_discount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmdai_discount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmdai_discount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmdai_discount_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmdai_discount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmfrax_discount?: InputMaybe<Scalars["BigDecimal"]>;
  ohmfrax_discount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmfrax_discount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmfrax_discount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmfrax_discount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmfrax_discount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmfrax_discount_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmfrax_discount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmlusd_discount?: InputMaybe<Scalars["BigDecimal"]>;
  ohmlusd_discount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmlusd_discount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmlusd_discount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmlusd_discount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmlusd_discount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmlusd_discount_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmlusd_discount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum BondDiscount_OrderBy {
  DaiDiscount = "dai_discount",
  EthDiscount = "eth_discount",
  FraxDiscount = "frax_discount",
  Id = "id",
  LusdDiscount = "lusd_discount",
  OhmdaiDiscount = "ohmdai_discount",
  OhmfraxDiscount = "ohmfrax_discount",
  OhmlusdDiscount = "ohmlusd_discount",
  Timestamp = "timestamp",
}

export type DailyBond = {
  __typename?: "DailyBond";
  amount: Scalars["BigDecimal"];
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  token: Token;
  value: Scalars["BigDecimal"];
};

export type DailyBond_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum DailyBond_OrderBy {
  Amount = "amount",
  Id = "id",
  Timestamp = "timestamp",
  Token = "token",
  Value = "value",
}

export type DailyStakingReward = {
  __typename?: "DailyStakingReward";
  amount: Scalars["BigDecimal"];
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  value: Scalars["BigDecimal"];
};

export type DailyStakingReward_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum DailyStakingReward_OrderBy {
  Amount = "amount",
  Id = "id",
  Timestamp = "timestamp",
  Value = "value",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type PriceSnapshot = {
  __typename?: "PriceSnapshot";
  block: Scalars["BigInt"];
  date: Scalars["String"];
  id: Scalars["ID"];
  priceGOhm: Scalars["BigDecimal"];
  priceOhm: Scalars["BigDecimal"];
  timestamp: Scalars["BigInt"];
};

export type PriceSnapshot_Filter = {
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
  priceGOhm?: InputMaybe<Scalars["BigDecimal"]>;
  priceGOhm_gt?: InputMaybe<Scalars["BigDecimal"]>;
  priceGOhm_gte?: InputMaybe<Scalars["BigDecimal"]>;
  priceGOhm_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  priceGOhm_lt?: InputMaybe<Scalars["BigDecimal"]>;
  priceGOhm_lte?: InputMaybe<Scalars["BigDecimal"]>;
  priceGOhm_not?: InputMaybe<Scalars["BigDecimal"]>;
  priceGOhm_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  priceOhm?: InputMaybe<Scalars["BigDecimal"]>;
  priceOhm_gt?: InputMaybe<Scalars["BigDecimal"]>;
  priceOhm_gte?: InputMaybe<Scalars["BigDecimal"]>;
  priceOhm_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  priceOhm_lt?: InputMaybe<Scalars["BigDecimal"]>;
  priceOhm_lte?: InputMaybe<Scalars["BigDecimal"]>;
  priceOhm_not?: InputMaybe<Scalars["BigDecimal"]>;
  priceOhm_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum PriceSnapshot_OrderBy {
  Block = "block",
  Date = "date",
  Id = "id",
  PriceGOhm = "priceGOhm",
  PriceOhm = "priceOhm",
  Timestamp = "timestamp",
}

export type ProtocolMetric = {
  __typename?: "ProtocolMetric";
  block: Scalars["BigInt"];
  currentAPY: Scalars["BigDecimal"];
  currentIndex: Scalars["BigDecimal"];
  date: Scalars["String"];
  gOhmPrice: Scalars["BigDecimal"];
  gOhmSyntheticSupply?: Maybe<Scalars["BigDecimal"]>;
  gOhmTotalSupply: Scalars["BigDecimal"];
  id: Scalars["ID"];
  marketCap?: Maybe<Scalars["BigDecimal"]>;
  nextDistributedOhm: Scalars["BigDecimal"];
  nextEpochRebase: Scalars["BigDecimal"];
  ohmCirculatingSupply?: Maybe<Scalars["BigDecimal"]>;
  ohmFloatingSupply?: Maybe<Scalars["BigDecimal"]>;
  ohmPrice: Scalars["BigDecimal"];
  ohmTotalSupply: Scalars["BigDecimal"];
  sOhmCirculatingSupply: Scalars["BigDecimal"];
  timestamp: Scalars["BigInt"];
  totalValueLocked: Scalars["BigDecimal"];
  treasuryLiquidBacking?: Maybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerGOhmSynthetic?: Maybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerOhmFloating?: Maybe<Scalars["BigDecimal"]>;
  treasuryMarketValue?: Maybe<Scalars["BigDecimal"]>;
};

export type ProtocolMetric_Filter = {
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
  currentAPY?: InputMaybe<Scalars["BigDecimal"]>;
  currentAPY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  currentAPY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  currentAPY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  currentAPY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  currentAPY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  currentAPY_not?: InputMaybe<Scalars["BigDecimal"]>;
  currentAPY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  currentIndex?: InputMaybe<Scalars["BigDecimal"]>;
  currentIndex_gt?: InputMaybe<Scalars["BigDecimal"]>;
  currentIndex_gte?: InputMaybe<Scalars["BigDecimal"]>;
  currentIndex_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  currentIndex_lt?: InputMaybe<Scalars["BigDecimal"]>;
  currentIndex_lte?: InputMaybe<Scalars["BigDecimal"]>;
  currentIndex_not?: InputMaybe<Scalars["BigDecimal"]>;
  currentIndex_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  gOhmPrice?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  gOhmPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  gOhmSyntheticSupply?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmSyntheticSupply_gt?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmSyntheticSupply_gte?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmSyntheticSupply_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  gOhmSyntheticSupply_lt?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmSyntheticSupply_lte?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmSyntheticSupply_not?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmSyntheticSupply_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  gOhmTotalSupply?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmTotalSupply_gt?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmTotalSupply_gte?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmTotalSupply_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  gOhmTotalSupply_lt?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmTotalSupply_lte?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmTotalSupply_not?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmTotalSupply_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  marketCap?: InputMaybe<Scalars["BigDecimal"]>;
  marketCap_gt?: InputMaybe<Scalars["BigDecimal"]>;
  marketCap_gte?: InputMaybe<Scalars["BigDecimal"]>;
  marketCap_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  marketCap_lt?: InputMaybe<Scalars["BigDecimal"]>;
  marketCap_lte?: InputMaybe<Scalars["BigDecimal"]>;
  marketCap_not?: InputMaybe<Scalars["BigDecimal"]>;
  marketCap_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  nextDistributedOhm?: InputMaybe<Scalars["BigDecimal"]>;
  nextDistributedOhm_gt?: InputMaybe<Scalars["BigDecimal"]>;
  nextDistributedOhm_gte?: InputMaybe<Scalars["BigDecimal"]>;
  nextDistributedOhm_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  nextDistributedOhm_lt?: InputMaybe<Scalars["BigDecimal"]>;
  nextDistributedOhm_lte?: InputMaybe<Scalars["BigDecimal"]>;
  nextDistributedOhm_not?: InputMaybe<Scalars["BigDecimal"]>;
  nextDistributedOhm_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  nextEpochRebase?: InputMaybe<Scalars["BigDecimal"]>;
  nextEpochRebase_gt?: InputMaybe<Scalars["BigDecimal"]>;
  nextEpochRebase_gte?: InputMaybe<Scalars["BigDecimal"]>;
  nextEpochRebase_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  nextEpochRebase_lt?: InputMaybe<Scalars["BigDecimal"]>;
  nextEpochRebase_lte?: InputMaybe<Scalars["BigDecimal"]>;
  nextEpochRebase_not?: InputMaybe<Scalars["BigDecimal"]>;
  nextEpochRebase_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmCirculatingSupply?: InputMaybe<Scalars["BigDecimal"]>;
  ohmCirculatingSupply_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmCirculatingSupply_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmCirculatingSupply_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmCirculatingSupply_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmCirculatingSupply_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmCirculatingSupply_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmCirculatingSupply_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmFloatingSupply?: InputMaybe<Scalars["BigDecimal"]>;
  ohmFloatingSupply_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmFloatingSupply_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmFloatingSupply_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmFloatingSupply_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmFloatingSupply_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmFloatingSupply_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmFloatingSupply_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmPrice?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmTotalSupply?: InputMaybe<Scalars["BigDecimal"]>;
  ohmTotalSupply_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmTotalSupply_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmTotalSupply_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmTotalSupply_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmTotalSupply_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmTotalSupply_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmTotalSupply_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sOhmCirculatingSupply?: InputMaybe<Scalars["BigDecimal"]>;
  sOhmCirculatingSupply_gt?: InputMaybe<Scalars["BigDecimal"]>;
  sOhmCirculatingSupply_gte?: InputMaybe<Scalars["BigDecimal"]>;
  sOhmCirculatingSupply_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sOhmCirculatingSupply_lt?: InputMaybe<Scalars["BigDecimal"]>;
  sOhmCirculatingSupply_lte?: InputMaybe<Scalars["BigDecimal"]>;
  sOhmCirculatingSupply_not?: InputMaybe<Scalars["BigDecimal"]>;
  sOhmCirculatingSupply_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueLocked?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLocked_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryLiquidBacking?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerGOhmSynthetic?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerGOhmSynthetic_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerGOhmSynthetic_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerGOhmSynthetic_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryLiquidBackingPerGOhmSynthetic_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerGOhmSynthetic_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerGOhmSynthetic_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerGOhmSynthetic_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryLiquidBackingPerOhmFloating?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerOhmFloating_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerOhmFloating_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerOhmFloating_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryLiquidBackingPerOhmFloating_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerOhmFloating_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerOhmFloating_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerOhmFloating_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryLiquidBacking_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBacking_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBacking_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryLiquidBacking_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBacking_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBacking_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBacking_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryMarketValue?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryMarketValue_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryMarketValue_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryMarketValue_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryMarketValue_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryMarketValue_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryMarketValue_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryMarketValue_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum ProtocolMetric_OrderBy {
  Block = "block",
  CurrentApy = "currentAPY",
  CurrentIndex = "currentIndex",
  Date = "date",
  GOhmPrice = "gOhmPrice",
  GOhmSyntheticSupply = "gOhmSyntheticSupply",
  GOhmTotalSupply = "gOhmTotalSupply",
  Id = "id",
  MarketCap = "marketCap",
  NextDistributedOhm = "nextDistributedOhm",
  NextEpochRebase = "nextEpochRebase",
  OhmCirculatingSupply = "ohmCirculatingSupply",
  OhmFloatingSupply = "ohmFloatingSupply",
  OhmPrice = "ohmPrice",
  OhmTotalSupply = "ohmTotalSupply",
  SOhmCirculatingSupply = "sOhmCirculatingSupply",
  Timestamp = "timestamp",
  TotalValueLocked = "totalValueLocked",
  TreasuryLiquidBacking = "treasuryLiquidBacking",
  TreasuryLiquidBackingPerGOhmSynthetic = "treasuryLiquidBackingPerGOhmSynthetic",
  TreasuryLiquidBackingPerOhmFloating = "treasuryLiquidBackingPerOhmFloating",
  TreasuryMarketValue = "treasuryMarketValue",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  bondDiscount?: Maybe<BondDiscount>;
  bondDiscounts: Array<BondDiscount>;
  dailyBond?: Maybe<DailyBond>;
  dailyBonds: Array<DailyBond>;
  dailyStakingReward?: Maybe<DailyStakingReward>;
  dailyStakingRewards: Array<DailyStakingReward>;
  priceSnapshot?: Maybe<PriceSnapshot>;
  priceSnapshots: Array<PriceSnapshot>;
  protocolMetric?: Maybe<ProtocolMetric>;
  protocolMetrics: Array<ProtocolMetric>;
  rebase?: Maybe<Rebase>;
  rebases: Array<Rebase>;
  token?: Maybe<Token>;
  tokenRecord?: Maybe<TokenRecord>;
  tokenRecords: Array<TokenRecord>;
  tokenSupplies: Array<TokenSupply>;
  tokenSupply?: Maybe<TokenSupply>;
  tokens: Array<Token>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryBondDiscountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBondDiscountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BondDiscount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BondDiscount_Filter>;
};

export type QueryDailyBondArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDailyBondsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DailyBond_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyBond_Filter>;
};

export type QueryDailyStakingRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDailyStakingRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DailyStakingReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyStakingReward_Filter>;
};

export type QueryPriceSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPriceSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceSnapshot_Filter>;
};

export type QueryProtocolMetricArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProtocolMetricsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProtocolMetric_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolMetric_Filter>;
};

export type QueryRebaseArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRebasesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Rebase_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Rebase_Filter>;
};

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenRecordArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenRecordsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenRecord_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenRecord_Filter>;
};

export type QueryTokenSuppliesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenSupply_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenSupply_Filter>;
};

export type QueryTokenSupplyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type Rebase = {
  __typename?: "Rebase";
  amount: Scalars["BigDecimal"];
  contract: Scalars["String"];
  id: Scalars["ID"];
  percentage: Scalars["BigDecimal"];
  stakedOhms: Scalars["BigDecimal"];
  timestamp: Scalars["BigInt"];
  value: Scalars["BigDecimal"];
};

export type Rebase_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  contract?: InputMaybe<Scalars["String"]>;
  contract_contains?: InputMaybe<Scalars["String"]>;
  contract_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_ends_with?: InputMaybe<Scalars["String"]>;
  contract_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_gt?: InputMaybe<Scalars["String"]>;
  contract_gte?: InputMaybe<Scalars["String"]>;
  contract_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_lt?: InputMaybe<Scalars["String"]>;
  contract_lte?: InputMaybe<Scalars["String"]>;
  contract_not?: InputMaybe<Scalars["String"]>;
  contract_not_contains?: InputMaybe<Scalars["String"]>;
  contract_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with?: InputMaybe<Scalars["String"]>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contract_not_starts_with?: InputMaybe<Scalars["String"]>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contract_starts_with?: InputMaybe<Scalars["String"]>;
  contract_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  percentage?: InputMaybe<Scalars["BigDecimal"]>;
  percentage_gt?: InputMaybe<Scalars["BigDecimal"]>;
  percentage_gte?: InputMaybe<Scalars["BigDecimal"]>;
  percentage_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  percentage_lt?: InputMaybe<Scalars["BigDecimal"]>;
  percentage_lte?: InputMaybe<Scalars["BigDecimal"]>;
  percentage_not?: InputMaybe<Scalars["BigDecimal"]>;
  percentage_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  stakedOhms?: InputMaybe<Scalars["BigDecimal"]>;
  stakedOhms_gt?: InputMaybe<Scalars["BigDecimal"]>;
  stakedOhms_gte?: InputMaybe<Scalars["BigDecimal"]>;
  stakedOhms_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  stakedOhms_lt?: InputMaybe<Scalars["BigDecimal"]>;
  stakedOhms_lte?: InputMaybe<Scalars["BigDecimal"]>;
  stakedOhms_not?: InputMaybe<Scalars["BigDecimal"]>;
  stakedOhms_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum Rebase_OrderBy {
  Amount = "amount",
  Contract = "contract",
  Id = "id",
  Percentage = "percentage",
  StakedOhms = "stakedOhms",
  Timestamp = "timestamp",
  Value = "value",
}

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  bondDiscount?: Maybe<BondDiscount>;
  bondDiscounts: Array<BondDiscount>;
  dailyBond?: Maybe<DailyBond>;
  dailyBonds: Array<DailyBond>;
  dailyStakingReward?: Maybe<DailyStakingReward>;
  dailyStakingRewards: Array<DailyStakingReward>;
  priceSnapshot?: Maybe<PriceSnapshot>;
  priceSnapshots: Array<PriceSnapshot>;
  protocolMetric?: Maybe<ProtocolMetric>;
  protocolMetrics: Array<ProtocolMetric>;
  rebase?: Maybe<Rebase>;
  rebases: Array<Rebase>;
  token?: Maybe<Token>;
  tokenRecord?: Maybe<TokenRecord>;
  tokenRecords: Array<TokenRecord>;
  tokenSupplies: Array<TokenSupply>;
  tokenSupply?: Maybe<TokenSupply>;
  tokens: Array<Token>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionBondDiscountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBondDiscountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BondDiscount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BondDiscount_Filter>;
};

export type SubscriptionDailyBondArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDailyBondsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DailyBond_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyBond_Filter>;
};

export type SubscriptionDailyStakingRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDailyStakingRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DailyStakingReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyStakingReward_Filter>;
};

export type SubscriptionPriceSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPriceSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceSnapshot_Filter>;
};

export type SubscriptionProtocolMetricArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProtocolMetricsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProtocolMetric_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolMetric_Filter>;
};

export type SubscriptionRebaseArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRebasesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Rebase_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Rebase_Filter>;
};

export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenRecordArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenRecordsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenRecord_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenRecord_Filter>;
};

export type SubscriptionTokenSuppliesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenSupply_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenSupply_Filter>;
};

export type SubscriptionTokenSupplyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type Token = {
  __typename?: "Token";
  id: Scalars["ID"];
};

export type TokenRecord = {
  __typename?: "TokenRecord";
  balance: Scalars["BigDecimal"];
  block: Scalars["BigInt"];
  blockchain: Scalars["String"];
  category: Scalars["String"];
  date: Scalars["String"];
  id: Scalars["ID"];
  isBluechip: Scalars["Boolean"];
  isLiquid: Scalars["Boolean"];
  multiplier: Scalars["BigDecimal"];
  rate: Scalars["BigDecimal"];
  source: Scalars["String"];
  sourceAddress: Scalars["String"];
  timestamp: Scalars["BigInt"];
  token: Scalars["String"];
  tokenAddress: Scalars["String"];
  value: Scalars["BigDecimal"];
  valueExcludingOhm: Scalars["BigDecimal"];
};

export type TokenRecord_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  balance?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  category?: InputMaybe<Scalars["String"]>;
  category_contains?: InputMaybe<Scalars["String"]>;
  category_contains_nocase?: InputMaybe<Scalars["String"]>;
  category_ends_with?: InputMaybe<Scalars["String"]>;
  category_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  category_gt?: InputMaybe<Scalars["String"]>;
  category_gte?: InputMaybe<Scalars["String"]>;
  category_in?: InputMaybe<Array<Scalars["String"]>>;
  category_lt?: InputMaybe<Scalars["String"]>;
  category_lte?: InputMaybe<Scalars["String"]>;
  category_not?: InputMaybe<Scalars["String"]>;
  category_not_contains?: InputMaybe<Scalars["String"]>;
  category_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  category_not_ends_with?: InputMaybe<Scalars["String"]>;
  category_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  category_not_in?: InputMaybe<Array<Scalars["String"]>>;
  category_not_starts_with?: InputMaybe<Scalars["String"]>;
  category_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  category_starts_with?: InputMaybe<Scalars["String"]>;
  category_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  isBluechip?: InputMaybe<Scalars["Boolean"]>;
  isBluechip_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isBluechip_not?: InputMaybe<Scalars["Boolean"]>;
  isBluechip_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isLiquid?: InputMaybe<Scalars["Boolean"]>;
  isLiquid_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isLiquid_not?: InputMaybe<Scalars["Boolean"]>;
  isLiquid_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  multiplier?: InputMaybe<Scalars["BigDecimal"]>;
  multiplier_gt?: InputMaybe<Scalars["BigDecimal"]>;
  multiplier_gte?: InputMaybe<Scalars["BigDecimal"]>;
  multiplier_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  multiplier_lt?: InputMaybe<Scalars["BigDecimal"]>;
  multiplier_lte?: InputMaybe<Scalars["BigDecimal"]>;
  multiplier_not?: InputMaybe<Scalars["BigDecimal"]>;
  multiplier_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rate?: InputMaybe<Scalars["BigDecimal"]>;
  rate_gt?: InputMaybe<Scalars["BigDecimal"]>;
  rate_gte?: InputMaybe<Scalars["BigDecimal"]>;
  rate_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rate_lt?: InputMaybe<Scalars["BigDecimal"]>;
  rate_lte?: InputMaybe<Scalars["BigDecimal"]>;
  rate_not?: InputMaybe<Scalars["BigDecimal"]>;
  rate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  source?: InputMaybe<Scalars["String"]>;
  sourceAddress?: InputMaybe<Scalars["String"]>;
  sourceAddress_contains?: InputMaybe<Scalars["String"]>;
  sourceAddress_contains_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_ends_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_gt?: InputMaybe<Scalars["String"]>;
  sourceAddress_gte?: InputMaybe<Scalars["String"]>;
  sourceAddress_in?: InputMaybe<Array<Scalars["String"]>>;
  sourceAddress_lt?: InputMaybe<Scalars["String"]>;
  sourceAddress_lte?: InputMaybe<Scalars["String"]>;
  sourceAddress_not?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_contains?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_ends_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_in?: InputMaybe<Array<Scalars["String"]>>;
  sourceAddress_not_starts_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_starts_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  source_contains?: InputMaybe<Scalars["String"]>;
  source_contains_nocase?: InputMaybe<Scalars["String"]>;
  source_ends_with?: InputMaybe<Scalars["String"]>;
  source_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  source_gt?: InputMaybe<Scalars["String"]>;
  source_gte?: InputMaybe<Scalars["String"]>;
  source_in?: InputMaybe<Array<Scalars["String"]>>;
  source_lt?: InputMaybe<Scalars["String"]>;
  source_lte?: InputMaybe<Scalars["String"]>;
  source_not?: InputMaybe<Scalars["String"]>;
  source_not_contains?: InputMaybe<Scalars["String"]>;
  source_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  source_not_ends_with?: InputMaybe<Scalars["String"]>;
  source_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  source_not_in?: InputMaybe<Array<Scalars["String"]>>;
  source_not_starts_with?: InputMaybe<Scalars["String"]>;
  source_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  source_starts_with?: InputMaybe<Scalars["String"]>;
  source_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  tokenAddress?: InputMaybe<Scalars["String"]>;
  tokenAddress_contains?: InputMaybe<Scalars["String"]>;
  tokenAddress_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_ends_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_gt?: InputMaybe<Scalars["String"]>;
  tokenAddress_gte?: InputMaybe<Scalars["String"]>;
  tokenAddress_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenAddress_lt?: InputMaybe<Scalars["String"]>;
  tokenAddress_lte?: InputMaybe<Scalars["String"]>;
  tokenAddress_not?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_contains?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenAddress_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_starts_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  valueExcludingOhm?: InputMaybe<Scalars["BigDecimal"]>;
  valueExcludingOhm_gt?: InputMaybe<Scalars["BigDecimal"]>;
  valueExcludingOhm_gte?: InputMaybe<Scalars["BigDecimal"]>;
  valueExcludingOhm_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueExcludingOhm_lt?: InputMaybe<Scalars["BigDecimal"]>;
  valueExcludingOhm_lte?: InputMaybe<Scalars["BigDecimal"]>;
  valueExcludingOhm_not?: InputMaybe<Scalars["BigDecimal"]>;
  valueExcludingOhm_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum TokenRecord_OrderBy {
  Balance = "balance",
  Block = "block",
  Blockchain = "blockchain",
  Category = "category",
  Date = "date",
  Id = "id",
  IsBluechip = "isBluechip",
  IsLiquid = "isLiquid",
  Multiplier = "multiplier",
  Rate = "rate",
  Source = "source",
  SourceAddress = "sourceAddress",
  Timestamp = "timestamp",
  Token = "token",
  TokenAddress = "tokenAddress",
  Value = "value",
  ValueExcludingOhm = "valueExcludingOhm",
}

export type TokenSupply = {
  __typename?: "TokenSupply";
  balance: Scalars["BigDecimal"];
  block: Scalars["BigInt"];
  date: Scalars["String"];
  id: Scalars["ID"];
  pool?: Maybe<Scalars["String"]>;
  poolAddress?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  sourceAddress?: Maybe<Scalars["String"]>;
  supplyBalance: Scalars["BigDecimal"];
  timestamp: Scalars["BigInt"];
  token: Scalars["String"];
  tokenAddress: Scalars["String"];
  type: Scalars["String"];
};

export type TokenSupply_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  balance?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  pool?: InputMaybe<Scalars["String"]>;
  poolAddress?: InputMaybe<Scalars["String"]>;
  poolAddress_contains?: InputMaybe<Scalars["String"]>;
  poolAddress_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolAddress_ends_with?: InputMaybe<Scalars["String"]>;
  poolAddress_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAddress_gt?: InputMaybe<Scalars["String"]>;
  poolAddress_gte?: InputMaybe<Scalars["String"]>;
  poolAddress_in?: InputMaybe<Array<Scalars["String"]>>;
  poolAddress_lt?: InputMaybe<Scalars["String"]>;
  poolAddress_lte?: InputMaybe<Scalars["String"]>;
  poolAddress_not?: InputMaybe<Scalars["String"]>;
  poolAddress_not_contains?: InputMaybe<Scalars["String"]>;
  poolAddress_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolAddress_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAddress_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolAddress_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAddress_starts_with?: InputMaybe<Scalars["String"]>;
  poolAddress_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  source?: InputMaybe<Scalars["String"]>;
  sourceAddress?: InputMaybe<Scalars["String"]>;
  sourceAddress_contains?: InputMaybe<Scalars["String"]>;
  sourceAddress_contains_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_ends_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_gt?: InputMaybe<Scalars["String"]>;
  sourceAddress_gte?: InputMaybe<Scalars["String"]>;
  sourceAddress_in?: InputMaybe<Array<Scalars["String"]>>;
  sourceAddress_lt?: InputMaybe<Scalars["String"]>;
  sourceAddress_lte?: InputMaybe<Scalars["String"]>;
  sourceAddress_not?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_contains?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_ends_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_in?: InputMaybe<Array<Scalars["String"]>>;
  sourceAddress_not_starts_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_starts_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  source_contains?: InputMaybe<Scalars["String"]>;
  source_contains_nocase?: InputMaybe<Scalars["String"]>;
  source_ends_with?: InputMaybe<Scalars["String"]>;
  source_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  source_gt?: InputMaybe<Scalars["String"]>;
  source_gte?: InputMaybe<Scalars["String"]>;
  source_in?: InputMaybe<Array<Scalars["String"]>>;
  source_lt?: InputMaybe<Scalars["String"]>;
  source_lte?: InputMaybe<Scalars["String"]>;
  source_not?: InputMaybe<Scalars["String"]>;
  source_not_contains?: InputMaybe<Scalars["String"]>;
  source_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  source_not_ends_with?: InputMaybe<Scalars["String"]>;
  source_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  source_not_in?: InputMaybe<Array<Scalars["String"]>>;
  source_not_starts_with?: InputMaybe<Scalars["String"]>;
  source_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  source_starts_with?: InputMaybe<Scalars["String"]>;
  source_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  supplyBalance?: InputMaybe<Scalars["BigDecimal"]>;
  supplyBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  supplyBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  supplyBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  supplyBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  supplyBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  supplyBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  supplyBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  tokenAddress?: InputMaybe<Scalars["String"]>;
  tokenAddress_contains?: InputMaybe<Scalars["String"]>;
  tokenAddress_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_ends_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_gt?: InputMaybe<Scalars["String"]>;
  tokenAddress_gte?: InputMaybe<Scalars["String"]>;
  tokenAddress_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenAddress_lt?: InputMaybe<Scalars["String"]>;
  tokenAddress_lte?: InputMaybe<Scalars["String"]>;
  tokenAddress_not?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_contains?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenAddress_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_starts_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  type_contains?: InputMaybe<Scalars["String"]>;
  type_contains_nocase?: InputMaybe<Scalars["String"]>;
  type_ends_with?: InputMaybe<Scalars["String"]>;
  type_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  type_gt?: InputMaybe<Scalars["String"]>;
  type_gte?: InputMaybe<Scalars["String"]>;
  type_in?: InputMaybe<Array<Scalars["String"]>>;
  type_lt?: InputMaybe<Scalars["String"]>;
  type_lte?: InputMaybe<Scalars["String"]>;
  type_not?: InputMaybe<Scalars["String"]>;
  type_not_contains?: InputMaybe<Scalars["String"]>;
  type_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  type_not_ends_with?: InputMaybe<Scalars["String"]>;
  type_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  type_not_in?: InputMaybe<Array<Scalars["String"]>>;
  type_not_starts_with?: InputMaybe<Scalars["String"]>;
  type_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  type_starts_with?: InputMaybe<Scalars["String"]>;
  type_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum TokenSupply_OrderBy {
  Balance = "balance",
  Block = "block",
  Date = "date",
  Id = "id",
  Pool = "pool",
  PoolAddress = "poolAddress",
  Source = "source",
  SourceAddress = "sourceAddress",
  SupplyBalance = "supplyBalance",
  Timestamp = "timestamp",
  Token = "token",
  TokenAddress = "tokenAddress",
  Type = "type",
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
};

export enum Token_OrderBy {
  Id = "id",
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

export type LatestPriceSnapshotQueryVariables = Exact<{ [key: string]: never }>;

export type LatestPriceSnapshotQuery = {
  __typename?: "Query";
  priceSnapshots: Array<{
    __typename?: "PriceSnapshot";
    id: string;
    block: string;
    date: string;
    timestamp: string;
    priceGOhm: string;
    priceOhm: string;
  }>;
};

export const LatestPriceSnapshotDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "LatestPriceSnapshot" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "priceSnapshots" },
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
              { kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "IntValue", value: "1" } },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "block" } },
                { kind: "Field", name: { kind: "Name", value: "date" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                { kind: "Field", name: { kind: "Name", value: "priceGOhm" } },
                { kind: "Field", name: { kind: "Name", value: "priceOhm" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LatestPriceSnapshotQuery, LatestPriceSnapshotQueryVariables>;
