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

export type Contract = {
  __typename?: "Contract";
  address: Scalars["Bytes"];
  id: Scalars["ID"];
  majorVersion: Scalars["Int"];
  minorVersion: Scalars["Int"];
  reserveToken: Token;
  version: Scalars["String"];
};

export type Contract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["Bytes"]>;
  address_contains?: InputMaybe<Scalars["Bytes"]>;
  address_gt?: InputMaybe<Scalars["Bytes"]>;
  address_gte?: InputMaybe<Scalars["Bytes"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  address_lt?: InputMaybe<Scalars["Bytes"]>;
  address_lte?: InputMaybe<Scalars["Bytes"]>;
  address_not?: InputMaybe<Scalars["Bytes"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  and?: InputMaybe<Array<InputMaybe<Contract_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  majorVersion?: InputMaybe<Scalars["Int"]>;
  majorVersion_gt?: InputMaybe<Scalars["Int"]>;
  majorVersion_gte?: InputMaybe<Scalars["Int"]>;
  majorVersion_in?: InputMaybe<Array<Scalars["Int"]>>;
  majorVersion_lt?: InputMaybe<Scalars["Int"]>;
  majorVersion_lte?: InputMaybe<Scalars["Int"]>;
  majorVersion_not?: InputMaybe<Scalars["Int"]>;
  majorVersion_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  minorVersion?: InputMaybe<Scalars["Int"]>;
  minorVersion_gt?: InputMaybe<Scalars["Int"]>;
  minorVersion_gte?: InputMaybe<Scalars["Int"]>;
  minorVersion_in?: InputMaybe<Array<Scalars["Int"]>>;
  minorVersion_lt?: InputMaybe<Scalars["Int"]>;
  minorVersion_lte?: InputMaybe<Scalars["Int"]>;
  minorVersion_not?: InputMaybe<Scalars["Int"]>;
  minorVersion_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  or?: InputMaybe<Array<InputMaybe<Contract_Filter>>>;
  reserveToken?: InputMaybe<Scalars["String"]>;
  reserveToken_?: InputMaybe<Token_Filter>;
  reserveToken_contains?: InputMaybe<Scalars["String"]>;
  reserveToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserveToken_ends_with?: InputMaybe<Scalars["String"]>;
  reserveToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserveToken_gt?: InputMaybe<Scalars["String"]>;
  reserveToken_gte?: InputMaybe<Scalars["String"]>;
  reserveToken_in?: InputMaybe<Array<Scalars["String"]>>;
  reserveToken_lt?: InputMaybe<Scalars["String"]>;
  reserveToken_lte?: InputMaybe<Scalars["String"]>;
  reserveToken_not?: InputMaybe<Scalars["String"]>;
  reserveToken_not_contains?: InputMaybe<Scalars["String"]>;
  reserveToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  reserveToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  reserveToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  reserveToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  reserveToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  reserveToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  reserveToken_starts_with?: InputMaybe<Scalars["String"]>;
  reserveToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  version?: InputMaybe<Scalars["String"]>;
  version_contains?: InputMaybe<Scalars["String"]>;
  version_contains_nocase?: InputMaybe<Scalars["String"]>;
  version_ends_with?: InputMaybe<Scalars["String"]>;
  version_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  version_gt?: InputMaybe<Scalars["String"]>;
  version_gte?: InputMaybe<Scalars["String"]>;
  version_in?: InputMaybe<Array<Scalars["String"]>>;
  version_lt?: InputMaybe<Scalars["String"]>;
  version_lte?: InputMaybe<Scalars["String"]>;
  version_not?: InputMaybe<Scalars["String"]>;
  version_not_contains?: InputMaybe<Scalars["String"]>;
  version_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  version_not_ends_with?: InputMaybe<Scalars["String"]>;
  version_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  version_not_in?: InputMaybe<Array<Scalars["String"]>>;
  version_not_starts_with?: InputMaybe<Scalars["String"]>;
  version_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  version_starts_with?: InputMaybe<Scalars["String"]>;
  version_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Contract_OrderBy {
  Address = "address",
  Id = "id",
  MajorVersion = "majorVersion",
  MinorVersion = "minorVersion",
  ReserveToken = "reserveToken",
  ReserveTokenAddress = "reserveToken__address",
  ReserveTokenDecimals = "reserveToken__decimals",
  ReserveTokenId = "reserveToken__id",
  ReserveTokenName = "reserveToken__name",
  ReserveTokenSymbol = "reserveToken__symbol",
  Version = "version",
}

export type NextYieldSet = {
  __typename?: "NextYieldSet";
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  contract: Contract;
  id: Scalars["Bytes"];
  nextYield: Scalars["BigInt"];
  nextYieldDecimal: Scalars["BigDecimal"];
  transactionHash: Scalars["Bytes"];
};

export type NextYieldSet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NextYieldSet_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  contract?: InputMaybe<Scalars["String"]>;
  contract_?: InputMaybe<Contract_Filter>;
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
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  nextYield?: InputMaybe<Scalars["BigInt"]>;
  nextYieldDecimal?: InputMaybe<Scalars["BigDecimal"]>;
  nextYieldDecimal_gt?: InputMaybe<Scalars["BigDecimal"]>;
  nextYieldDecimal_gte?: InputMaybe<Scalars["BigDecimal"]>;
  nextYieldDecimal_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  nextYieldDecimal_lt?: InputMaybe<Scalars["BigDecimal"]>;
  nextYieldDecimal_lte?: InputMaybe<Scalars["BigDecimal"]>;
  nextYieldDecimal_not?: InputMaybe<Scalars["BigDecimal"]>;
  nextYieldDecimal_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  nextYield_gt?: InputMaybe<Scalars["BigInt"]>;
  nextYield_gte?: InputMaybe<Scalars["BigInt"]>;
  nextYield_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nextYield_lt?: InputMaybe<Scalars["BigInt"]>;
  nextYield_lte?: InputMaybe<Scalars["BigInt"]>;
  nextYield_not?: InputMaybe<Scalars["BigInt"]>;
  nextYield_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<NextYieldSet_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum NextYieldSet_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Contract = "contract",
  ContractAddress = "contract__address",
  ContractId = "contract__id",
  ContractMajorVersion = "contract__majorVersion",
  ContractMinorVersion = "contract__minorVersion",
  ContractVersion = "contract__version",
  Id = "id",
  NextYield = "nextYield",
  NextYieldDecimal = "nextYieldDecimal",
  TransactionHash = "transactionHash",
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
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  nextYieldSet?: Maybe<NextYieldSet>;
  nextYieldSets: Array<NextYieldSet>;
  repoMarket?: Maybe<RepoMarket>;
  repoMarkets: Array<RepoMarket>;
  shutdown?: Maybe<Shutdown>;
  shutdowns: Array<Shutdown>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contract_Filter>;
};

export type QueryNextYieldSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryNextYieldSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<NextYieldSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NextYieldSet_Filter>;
};

export type QueryRepoMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRepoMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RepoMarket_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RepoMarket_Filter>;
};

export type QueryShutdownArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryShutdownsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Shutdown_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Shutdown_Filter>;
};

export type QueryTokenArgs = {
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

export type RepoMarket = {
  __typename?: "RepoMarket";
  bidAmount: Scalars["BigInt"];
  bidAmountDecimal: Scalars["BigDecimal"];
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  contract: Contract;
  id: Scalars["Bytes"];
  marketId: Scalars["BigInt"];
  transactionHash: Scalars["Bytes"];
};

export type RepoMarket_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RepoMarket_Filter>>>;
  bidAmount?: InputMaybe<Scalars["BigInt"]>;
  bidAmountDecimal?: InputMaybe<Scalars["BigDecimal"]>;
  bidAmountDecimal_gt?: InputMaybe<Scalars["BigDecimal"]>;
  bidAmountDecimal_gte?: InputMaybe<Scalars["BigDecimal"]>;
  bidAmountDecimal_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  bidAmountDecimal_lt?: InputMaybe<Scalars["BigDecimal"]>;
  bidAmountDecimal_lte?: InputMaybe<Scalars["BigDecimal"]>;
  bidAmountDecimal_not?: InputMaybe<Scalars["BigDecimal"]>;
  bidAmountDecimal_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  bidAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  bidAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  bidAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bidAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  bidAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  bidAmount_not?: InputMaybe<Scalars["BigInt"]>;
  bidAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  contract?: InputMaybe<Scalars["String"]>;
  contract_?: InputMaybe<Contract_Filter>;
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
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  marketId?: InputMaybe<Scalars["BigInt"]>;
  marketId_gt?: InputMaybe<Scalars["BigInt"]>;
  marketId_gte?: InputMaybe<Scalars["BigInt"]>;
  marketId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  marketId_lt?: InputMaybe<Scalars["BigInt"]>;
  marketId_lte?: InputMaybe<Scalars["BigInt"]>;
  marketId_not?: InputMaybe<Scalars["BigInt"]>;
  marketId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<RepoMarket_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum RepoMarket_OrderBy {
  BidAmount = "bidAmount",
  BidAmountDecimal = "bidAmountDecimal",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Contract = "contract",
  ContractAddress = "contract__address",
  ContractId = "contract__id",
  ContractMajorVersion = "contract__majorVersion",
  ContractMinorVersion = "contract__minorVersion",
  ContractVersion = "contract__version",
  Id = "id",
  MarketId = "marketId",
  TransactionHash = "transactionHash",
}

export type Shutdown = {
  __typename?: "Shutdown";
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  contract: Contract;
  id: Scalars["Bytes"];
  transactionHash: Scalars["Bytes"];
};

export type Shutdown_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Shutdown_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  contract?: InputMaybe<Scalars["String"]>;
  contract_?: InputMaybe<Contract_Filter>;
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
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<Shutdown_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum Shutdown_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Contract = "contract",
  ContractAddress = "contract__address",
  ContractId = "contract__id",
  ContractMajorVersion = "contract__majorVersion",
  ContractMinorVersion = "contract__minorVersion",
  ContractVersion = "contract__version",
  Id = "id",
  TransactionHash = "transactionHash",
}

export type Token = {
  __typename?: "Token";
  address: Scalars["Bytes"];
  decimals: Scalars["Int"];
  id: Scalars["ID"];
  name: Scalars["String"];
  symbol: Scalars["String"];
};

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["Bytes"]>;
  address_contains?: InputMaybe<Scalars["Bytes"]>;
  address_gt?: InputMaybe<Scalars["Bytes"]>;
  address_gte?: InputMaybe<Scalars["Bytes"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  address_lt?: InputMaybe<Scalars["Bytes"]>;
  address_lte?: InputMaybe<Scalars["Bytes"]>;
  address_not?: InputMaybe<Scalars["Bytes"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  decimals?: InputMaybe<Scalars["Int"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  decimals_lt?: InputMaybe<Scalars["Int"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]>;
  decimals_not?: InputMaybe<Scalars["Int"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  symbol?: InputMaybe<Scalars["String"]>;
  symbol_contains?: InputMaybe<Scalars["String"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_gt?: InputMaybe<Scalars["String"]>;
  symbol_gte?: InputMaybe<Scalars["String"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]>;
  symbol_lte?: InputMaybe<Scalars["String"]>;
  symbol_not?: InputMaybe<Scalars["String"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Token_OrderBy {
  Address = "address",
  Decimals = "decimals",
  Id = "id",
  Name = "name",
  Symbol = "symbol",
}

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

export type RepoMarketsCreatedSinceQueryVariables = Exact<{
  latestBlock: Scalars["BigInt"];
}>;

export type RepoMarketsCreatedSinceQuery = {
  __typename?: "Query";
  repoMarkets: Array<{
    __typename?: "RepoMarket";
    id: Uint8Array;
    marketId: string;
    bidAmount: string;
    bidAmountDecimal: string;
    blockNumber: string;
    blockTimestamp: string;
    transactionHash: Uint8Array;
    contract: {
      __typename?: "Contract";
      id: string;
      address: Uint8Array;
      version: string;
      majorVersion: number;
      minorVersion: number;
      reserveToken: {
        __typename?: "Token";
        id: string;
        address: Uint8Array;
        name: string;
        symbol: string;
        decimals: number;
      };
    };
  }>;
};

export type RepoMarketQueryVariables = Exact<{
  marketId: Scalars["BigInt"];
}>;

export type RepoMarketQuery = {
  __typename?: "Query";
  repoMarkets: Array<{
    __typename?: "RepoMarket";
    id: Uint8Array;
    marketId: string;
    bidAmount: string;
    bidAmountDecimal: string;
    blockNumber: string;
    blockTimestamp: string;
    transactionHash: Uint8Array;
    contract: {
      __typename?: "Contract";
      id: string;
      address: Uint8Array;
      version: string;
      majorVersion: number;
      minorVersion: number;
      reserveToken: {
        __typename?: "Token";
        id: string;
        address: Uint8Array;
        name: string;
        symbol: string;
        decimals: number;
      };
    };
  }>;
};

export const RepoMarketsCreatedSinceDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "RepoMarketsCreatedSince" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "latestBlock" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "BigInt" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "repoMarkets" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "EnumValue", value: "blockNumber" },
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
                      name: { kind: "Name", value: "blockTimestamp_gt" },
                      value: { kind: "Variable", name: { kind: "Name", value: "latestBlock" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contract" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "address" } },
                      { kind: "Field", name: { kind: "Name", value: "version" } },
                      { kind: "Field", name: { kind: "Name", value: "majorVersion" } },
                      { kind: "Field", name: { kind: "Name", value: "minorVersion" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "reserveToken" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "address" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "symbol" } },
                            { kind: "Field", name: { kind: "Name", value: "decimals" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "marketId" } },
                { kind: "Field", name: { kind: "Name", value: "bidAmount" } },
                { kind: "Field", name: { kind: "Name", value: "bidAmountDecimal" } },
                { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
                { kind: "Field", name: { kind: "Name", value: "blockTimestamp" } },
                { kind: "Field", name: { kind: "Name", value: "transactionHash" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RepoMarketsCreatedSinceQuery, RepoMarketsCreatedSinceQueryVariables>;
export const RepoMarketDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "RepoMarket" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "marketId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "BigInt" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "repoMarkets" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "marketId" },
                      value: { kind: "Variable", name: { kind: "Name", value: "marketId" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contract" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "address" } },
                      { kind: "Field", name: { kind: "Name", value: "version" } },
                      { kind: "Field", name: { kind: "Name", value: "majorVersion" } },
                      { kind: "Field", name: { kind: "Name", value: "minorVersion" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "reserveToken" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "address" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "symbol" } },
                            { kind: "Field", name: { kind: "Name", value: "decimals" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "marketId" } },
                { kind: "Field", name: { kind: "Name", value: "bidAmount" } },
                { kind: "Field", name: { kind: "Name", value: "bidAmountDecimal" } },
                { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
                { kind: "Field", name: { kind: "Name", value: "blockTimestamp" } },
                { kind: "Field", name: { kind: "Name", value: "transactionHash" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RepoMarketQuery, RepoMarketQueryVariables>;
