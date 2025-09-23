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

export type Activation = {
  __typename?: "Activation";
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  contract: Contract;
  contractState: ContractState;
  id: Scalars["Bytes"];
  transactionHash: Scalars["Bytes"];
};

export type Activation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Activation_Filter>>>;
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
  contractState?: InputMaybe<Scalars["String"]>;
  contractState_?: InputMaybe<ContractState_Filter>;
  contractState_contains?: InputMaybe<Scalars["String"]>;
  contractState_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_gt?: InputMaybe<Scalars["String"]>;
  contractState_gte?: InputMaybe<Scalars["String"]>;
  contractState_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_lt?: InputMaybe<Scalars["String"]>;
  contractState_lte?: InputMaybe<Scalars["String"]>;
  contractState_not?: InputMaybe<Scalars["String"]>;
  contractState_not_contains?: InputMaybe<Scalars["String"]>;
  contractState_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_not_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  or?: InputMaybe<Array<InputMaybe<Activation_Filter>>>;
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

export enum Activation_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Contract = "contract",
  ContractState = "contractState",
  ContractStateActiveMarketId = "contractState__activeMarketId",
  ContractStateBacking = "contractState__backing",
  ContractStateBackingDecimal = "contractState__backingDecimal",
  ContractStateBaseEmissionRate = "contractState__baseEmissionRate",
  ContractStateBaseEmissionRateDecimal = "contractState__baseEmissionRateDecimal",
  ContractStateBeatCounter = "contractState__beatCounter",
  ContractStateBlockNumber = "contractState__blockNumber",
  ContractStateBlockTimestamp = "contractState__blockTimestamp",
  ContractStateBondAuctioneer = "contractState__bondAuctioneer",
  ContractStateBondTeller = "contractState__bondTeller",
  ContractStateId = "contractState__id",
  ContractStateIsActive = "contractState__isActive",
  ContractStateIsEnabled = "contractState__isEnabled",
  ContractStateMinimumPremium = "contractState__minimumPremium",
  ContractStateMinimumPremiumDecimal = "contractState__minimumPremiumDecimal",
  ContractStateRestartTimeframe = "contractState__restartTimeframe",
  ContractStateShutdownTimestamp = "contractState__shutdownTimestamp",
  ContractStateTransactionHash = "contractState__transactionHash",
  ContractStateVestingPeriod = "contractState__vestingPeriod",
  ContractAddress = "contract__address",
  ContractId = "contract__id",
  ContractMajorVersion = "contract__majorVersion",
  ContractMinorVersion = "contract__minorVersion",
  ContractVersion = "contract__version",
  Id = "id",
  TransactionHash = "transactionHash",
}

export enum Aggregation_Interval {
  Day = "day",
  Hour = "hour",
}

export type BackingChange = {
  __typename?: "BackingChange";
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  contract: Contract;
  contractState: ContractState;
  id: Scalars["Bytes"];
  newBacking: Scalars["BigInt"];
  transactionHash: Scalars["Bytes"];
};

export type BackingChange_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BackingChange_Filter>>>;
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
  contractState?: InputMaybe<Scalars["String"]>;
  contractState_?: InputMaybe<ContractState_Filter>;
  contractState_contains?: InputMaybe<Scalars["String"]>;
  contractState_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_gt?: InputMaybe<Scalars["String"]>;
  contractState_gte?: InputMaybe<Scalars["String"]>;
  contractState_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_lt?: InputMaybe<Scalars["String"]>;
  contractState_lte?: InputMaybe<Scalars["String"]>;
  contractState_not?: InputMaybe<Scalars["String"]>;
  contractState_not_contains?: InputMaybe<Scalars["String"]>;
  contractState_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_not_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  newBacking?: InputMaybe<Scalars["BigInt"]>;
  newBacking_gt?: InputMaybe<Scalars["BigInt"]>;
  newBacking_gte?: InputMaybe<Scalars["BigInt"]>;
  newBacking_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  newBacking_lt?: InputMaybe<Scalars["BigInt"]>;
  newBacking_lte?: InputMaybe<Scalars["BigInt"]>;
  newBacking_not?: InputMaybe<Scalars["BigInt"]>;
  newBacking_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<BackingChange_Filter>>>;
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

export enum BackingChange_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Contract = "contract",
  ContractState = "contractState",
  ContractStateActiveMarketId = "contractState__activeMarketId",
  ContractStateBacking = "contractState__backing",
  ContractStateBackingDecimal = "contractState__backingDecimal",
  ContractStateBaseEmissionRate = "contractState__baseEmissionRate",
  ContractStateBaseEmissionRateDecimal = "contractState__baseEmissionRateDecimal",
  ContractStateBeatCounter = "contractState__beatCounter",
  ContractStateBlockNumber = "contractState__blockNumber",
  ContractStateBlockTimestamp = "contractState__blockTimestamp",
  ContractStateBondAuctioneer = "contractState__bondAuctioneer",
  ContractStateBondTeller = "contractState__bondTeller",
  ContractStateId = "contractState__id",
  ContractStateIsActive = "contractState__isActive",
  ContractStateIsEnabled = "contractState__isEnabled",
  ContractStateMinimumPremium = "contractState__minimumPremium",
  ContractStateMinimumPremiumDecimal = "contractState__minimumPremiumDecimal",
  ContractStateRestartTimeframe = "contractState__restartTimeframe",
  ContractStateShutdownTimestamp = "contractState__shutdownTimestamp",
  ContractStateTransactionHash = "contractState__transactionHash",
  ContractStateVestingPeriod = "contractState__vestingPeriod",
  ContractAddress = "contract__address",
  ContractId = "contract__id",
  ContractMajorVersion = "contract__majorVersion",
  ContractMinorVersion = "contract__minorVersion",
  ContractVersion = "contract__version",
  Id = "id",
  NewBacking = "newBacking",
  TransactionHash = "transactionHash",
}

export type BackingUpdate = {
  __typename?: "BackingUpdate";
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  contract: Contract;
  contractState: ContractState;
  id: Scalars["Bytes"];
  newBacking: Scalars["BigInt"];
  newBackingDecimal: Scalars["BigDecimal"];
  reservesAdded: Scalars["BigInt"];
  reservesAddedDecimal: Scalars["BigDecimal"];
  supplyAdded: Scalars["BigInt"];
  supplyAddedDecimal: Scalars["BigDecimal"];
  transactionHash: Scalars["Bytes"];
};

export type BackingUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BackingUpdate_Filter>>>;
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
  contractState?: InputMaybe<Scalars["String"]>;
  contractState_?: InputMaybe<ContractState_Filter>;
  contractState_contains?: InputMaybe<Scalars["String"]>;
  contractState_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_gt?: InputMaybe<Scalars["String"]>;
  contractState_gte?: InputMaybe<Scalars["String"]>;
  contractState_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_lt?: InputMaybe<Scalars["String"]>;
  contractState_lte?: InputMaybe<Scalars["String"]>;
  contractState_not?: InputMaybe<Scalars["String"]>;
  contractState_not_contains?: InputMaybe<Scalars["String"]>;
  contractState_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_not_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  newBacking?: InputMaybe<Scalars["BigInt"]>;
  newBackingDecimal?: InputMaybe<Scalars["BigDecimal"]>;
  newBackingDecimal_gt?: InputMaybe<Scalars["BigDecimal"]>;
  newBackingDecimal_gte?: InputMaybe<Scalars["BigDecimal"]>;
  newBackingDecimal_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  newBackingDecimal_lt?: InputMaybe<Scalars["BigDecimal"]>;
  newBackingDecimal_lte?: InputMaybe<Scalars["BigDecimal"]>;
  newBackingDecimal_not?: InputMaybe<Scalars["BigDecimal"]>;
  newBackingDecimal_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  newBacking_gt?: InputMaybe<Scalars["BigInt"]>;
  newBacking_gte?: InputMaybe<Scalars["BigInt"]>;
  newBacking_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  newBacking_lt?: InputMaybe<Scalars["BigInt"]>;
  newBacking_lte?: InputMaybe<Scalars["BigInt"]>;
  newBacking_not?: InputMaybe<Scalars["BigInt"]>;
  newBacking_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<BackingUpdate_Filter>>>;
  reservesAdded?: InputMaybe<Scalars["BigInt"]>;
  reservesAddedDecimal?: InputMaybe<Scalars["BigDecimal"]>;
  reservesAddedDecimal_gt?: InputMaybe<Scalars["BigDecimal"]>;
  reservesAddedDecimal_gte?: InputMaybe<Scalars["BigDecimal"]>;
  reservesAddedDecimal_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reservesAddedDecimal_lt?: InputMaybe<Scalars["BigDecimal"]>;
  reservesAddedDecimal_lte?: InputMaybe<Scalars["BigDecimal"]>;
  reservesAddedDecimal_not?: InputMaybe<Scalars["BigDecimal"]>;
  reservesAddedDecimal_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reservesAdded_gt?: InputMaybe<Scalars["BigInt"]>;
  reservesAdded_gte?: InputMaybe<Scalars["BigInt"]>;
  reservesAdded_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reservesAdded_lt?: InputMaybe<Scalars["BigInt"]>;
  reservesAdded_lte?: InputMaybe<Scalars["BigInt"]>;
  reservesAdded_not?: InputMaybe<Scalars["BigInt"]>;
  reservesAdded_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  supplyAdded?: InputMaybe<Scalars["BigInt"]>;
  supplyAddedDecimal?: InputMaybe<Scalars["BigDecimal"]>;
  supplyAddedDecimal_gt?: InputMaybe<Scalars["BigDecimal"]>;
  supplyAddedDecimal_gte?: InputMaybe<Scalars["BigDecimal"]>;
  supplyAddedDecimal_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  supplyAddedDecimal_lt?: InputMaybe<Scalars["BigDecimal"]>;
  supplyAddedDecimal_lte?: InputMaybe<Scalars["BigDecimal"]>;
  supplyAddedDecimal_not?: InputMaybe<Scalars["BigDecimal"]>;
  supplyAddedDecimal_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  supplyAdded_gt?: InputMaybe<Scalars["BigInt"]>;
  supplyAdded_gte?: InputMaybe<Scalars["BigInt"]>;
  supplyAdded_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  supplyAdded_lt?: InputMaybe<Scalars["BigInt"]>;
  supplyAdded_lte?: InputMaybe<Scalars["BigInt"]>;
  supplyAdded_not?: InputMaybe<Scalars["BigInt"]>;
  supplyAdded_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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

export enum BackingUpdate_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Contract = "contract",
  ContractState = "contractState",
  ContractStateActiveMarketId = "contractState__activeMarketId",
  ContractStateBacking = "contractState__backing",
  ContractStateBackingDecimal = "contractState__backingDecimal",
  ContractStateBaseEmissionRate = "contractState__baseEmissionRate",
  ContractStateBaseEmissionRateDecimal = "contractState__baseEmissionRateDecimal",
  ContractStateBeatCounter = "contractState__beatCounter",
  ContractStateBlockNumber = "contractState__blockNumber",
  ContractStateBlockTimestamp = "contractState__blockTimestamp",
  ContractStateBondAuctioneer = "contractState__bondAuctioneer",
  ContractStateBondTeller = "contractState__bondTeller",
  ContractStateId = "contractState__id",
  ContractStateIsActive = "contractState__isActive",
  ContractStateIsEnabled = "contractState__isEnabled",
  ContractStateMinimumPremium = "contractState__minimumPremium",
  ContractStateMinimumPremiumDecimal = "contractState__minimumPremiumDecimal",
  ContractStateRestartTimeframe = "contractState__restartTimeframe",
  ContractStateShutdownTimestamp = "contractState__shutdownTimestamp",
  ContractStateTransactionHash = "contractState__transactionHash",
  ContractStateVestingPeriod = "contractState__vestingPeriod",
  ContractAddress = "contract__address",
  ContractId = "contract__id",
  ContractMajorVersion = "contract__majorVersion",
  ContractMinorVersion = "contract__minorVersion",
  ContractVersion = "contract__version",
  Id = "id",
  NewBacking = "newBacking",
  NewBackingDecimal = "newBackingDecimal",
  ReservesAdded = "reservesAdded",
  ReservesAddedDecimal = "reservesAddedDecimal",
  SupplyAdded = "supplyAdded",
  SupplyAddedDecimal = "supplyAddedDecimal",
  TransactionHash = "transactionHash",
}

export type BaseRateChange = {
  __typename?: "BaseRateChange";
  add: Scalars["Boolean"];
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  changeBy: Scalars["BigInt"];
  changeByDecimal: Scalars["BigDecimal"];
  contract: Contract;
  contractState: ContractState;
  forNumBeats: Scalars["BigInt"];
  id: Scalars["Bytes"];
  transactionHash: Scalars["Bytes"];
};

export type BaseRateChange_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  add?: InputMaybe<Scalars["Boolean"]>;
  add_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  add_not?: InputMaybe<Scalars["Boolean"]>;
  add_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  and?: InputMaybe<Array<InputMaybe<BaseRateChange_Filter>>>;
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
  changeBy?: InputMaybe<Scalars["BigInt"]>;
  changeByDecimal?: InputMaybe<Scalars["BigDecimal"]>;
  changeByDecimal_gt?: InputMaybe<Scalars["BigDecimal"]>;
  changeByDecimal_gte?: InputMaybe<Scalars["BigDecimal"]>;
  changeByDecimal_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  changeByDecimal_lt?: InputMaybe<Scalars["BigDecimal"]>;
  changeByDecimal_lte?: InputMaybe<Scalars["BigDecimal"]>;
  changeByDecimal_not?: InputMaybe<Scalars["BigDecimal"]>;
  changeByDecimal_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  changeBy_gt?: InputMaybe<Scalars["BigInt"]>;
  changeBy_gte?: InputMaybe<Scalars["BigInt"]>;
  changeBy_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  changeBy_lt?: InputMaybe<Scalars["BigInt"]>;
  changeBy_lte?: InputMaybe<Scalars["BigInt"]>;
  changeBy_not?: InputMaybe<Scalars["BigInt"]>;
  changeBy_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  contract?: InputMaybe<Scalars["String"]>;
  contractState?: InputMaybe<Scalars["String"]>;
  contractState_?: InputMaybe<ContractState_Filter>;
  contractState_contains?: InputMaybe<Scalars["String"]>;
  contractState_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_gt?: InputMaybe<Scalars["String"]>;
  contractState_gte?: InputMaybe<Scalars["String"]>;
  contractState_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_lt?: InputMaybe<Scalars["String"]>;
  contractState_lte?: InputMaybe<Scalars["String"]>;
  contractState_not?: InputMaybe<Scalars["String"]>;
  contractState_not_contains?: InputMaybe<Scalars["String"]>;
  contractState_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_not_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  forNumBeats?: InputMaybe<Scalars["BigInt"]>;
  forNumBeats_gt?: InputMaybe<Scalars["BigInt"]>;
  forNumBeats_gte?: InputMaybe<Scalars["BigInt"]>;
  forNumBeats_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  forNumBeats_lt?: InputMaybe<Scalars["BigInt"]>;
  forNumBeats_lte?: InputMaybe<Scalars["BigInt"]>;
  forNumBeats_not?: InputMaybe<Scalars["BigInt"]>;
  forNumBeats_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  or?: InputMaybe<Array<InputMaybe<BaseRateChange_Filter>>>;
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

export enum BaseRateChange_OrderBy {
  Add = "add",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  ChangeBy = "changeBy",
  ChangeByDecimal = "changeByDecimal",
  Contract = "contract",
  ContractState = "contractState",
  ContractStateActiveMarketId = "contractState__activeMarketId",
  ContractStateBacking = "contractState__backing",
  ContractStateBackingDecimal = "contractState__backingDecimal",
  ContractStateBaseEmissionRate = "contractState__baseEmissionRate",
  ContractStateBaseEmissionRateDecimal = "contractState__baseEmissionRateDecimal",
  ContractStateBeatCounter = "contractState__beatCounter",
  ContractStateBlockNumber = "contractState__blockNumber",
  ContractStateBlockTimestamp = "contractState__blockTimestamp",
  ContractStateBondAuctioneer = "contractState__bondAuctioneer",
  ContractStateBondTeller = "contractState__bondTeller",
  ContractStateId = "contractState__id",
  ContractStateIsActive = "contractState__isActive",
  ContractStateIsEnabled = "contractState__isEnabled",
  ContractStateMinimumPremium = "contractState__minimumPremium",
  ContractStateMinimumPremiumDecimal = "contractState__minimumPremiumDecimal",
  ContractStateRestartTimeframe = "contractState__restartTimeframe",
  ContractStateShutdownTimestamp = "contractState__shutdownTimestamp",
  ContractStateTransactionHash = "contractState__transactionHash",
  ContractStateVestingPeriod = "contractState__vestingPeriod",
  ContractAddress = "contract__address",
  ContractId = "contract__id",
  ContractMajorVersion = "contract__majorVersion",
  ContractMinorVersion = "contract__minorVersion",
  ContractVersion = "contract__version",
  ForNumBeats = "forNumBeats",
  Id = "id",
  TransactionHash = "transactionHash",
}

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type BondContractsSet = {
  __typename?: "BondContractsSet";
  auctioneer: Scalars["Bytes"];
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  contract: Contract;
  contractState: ContractState;
  id: Scalars["Bytes"];
  teller: Scalars["Bytes"];
  transactionHash: Scalars["Bytes"];
};

export type BondContractsSet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BondContractsSet_Filter>>>;
  auctioneer?: InputMaybe<Scalars["Bytes"]>;
  auctioneer_contains?: InputMaybe<Scalars["Bytes"]>;
  auctioneer_gt?: InputMaybe<Scalars["Bytes"]>;
  auctioneer_gte?: InputMaybe<Scalars["Bytes"]>;
  auctioneer_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  auctioneer_lt?: InputMaybe<Scalars["Bytes"]>;
  auctioneer_lte?: InputMaybe<Scalars["Bytes"]>;
  auctioneer_not?: InputMaybe<Scalars["Bytes"]>;
  auctioneer_not_contains?: InputMaybe<Scalars["Bytes"]>;
  auctioneer_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
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
  contractState?: InputMaybe<Scalars["String"]>;
  contractState_?: InputMaybe<ContractState_Filter>;
  contractState_contains?: InputMaybe<Scalars["String"]>;
  contractState_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_gt?: InputMaybe<Scalars["String"]>;
  contractState_gte?: InputMaybe<Scalars["String"]>;
  contractState_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_lt?: InputMaybe<Scalars["String"]>;
  contractState_lte?: InputMaybe<Scalars["String"]>;
  contractState_not?: InputMaybe<Scalars["String"]>;
  contractState_not_contains?: InputMaybe<Scalars["String"]>;
  contractState_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_not_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  or?: InputMaybe<Array<InputMaybe<BondContractsSet_Filter>>>;
  teller?: InputMaybe<Scalars["Bytes"]>;
  teller_contains?: InputMaybe<Scalars["Bytes"]>;
  teller_gt?: InputMaybe<Scalars["Bytes"]>;
  teller_gte?: InputMaybe<Scalars["Bytes"]>;
  teller_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  teller_lt?: InputMaybe<Scalars["Bytes"]>;
  teller_lte?: InputMaybe<Scalars["Bytes"]>;
  teller_not?: InputMaybe<Scalars["Bytes"]>;
  teller_not_contains?: InputMaybe<Scalars["Bytes"]>;
  teller_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
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

export enum BondContractsSet_OrderBy {
  Auctioneer = "auctioneer",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Contract = "contract",
  ContractState = "contractState",
  ContractStateActiveMarketId = "contractState__activeMarketId",
  ContractStateBacking = "contractState__backing",
  ContractStateBackingDecimal = "contractState__backingDecimal",
  ContractStateBaseEmissionRate = "contractState__baseEmissionRate",
  ContractStateBaseEmissionRateDecimal = "contractState__baseEmissionRateDecimal",
  ContractStateBeatCounter = "contractState__beatCounter",
  ContractStateBlockNumber = "contractState__blockNumber",
  ContractStateBlockTimestamp = "contractState__blockTimestamp",
  ContractStateBondAuctioneer = "contractState__bondAuctioneer",
  ContractStateBondTeller = "contractState__bondTeller",
  ContractStateId = "contractState__id",
  ContractStateIsActive = "contractState__isActive",
  ContractStateIsEnabled = "contractState__isEnabled",
  ContractStateMinimumPremium = "contractState__minimumPremium",
  ContractStateMinimumPremiumDecimal = "contractState__minimumPremiumDecimal",
  ContractStateRestartTimeframe = "contractState__restartTimeframe",
  ContractStateShutdownTimestamp = "contractState__shutdownTimestamp",
  ContractStateTransactionHash = "contractState__transactionHash",
  ContractStateVestingPeriod = "contractState__vestingPeriod",
  ContractAddress = "contract__address",
  ContractId = "contract__id",
  ContractMajorVersion = "contract__majorVersion",
  ContractMinorVersion = "contract__minorVersion",
  ContractVersion = "contract__version",
  Id = "id",
  Teller = "teller",
  TransactionHash = "transactionHash",
}

export type Contract = {
  __typename?: "Contract";
  address: Scalars["Bytes"];
  gohmToken: Token;
  id: Scalars["ID"];
  majorVersion: Scalars["Int"];
  minorVersion: Scalars["Int"];
  ohmToken: Token;
  reserveToken: Token;
  sReserveToken: Token;
  states: Array<ContractState>;
  version: Scalars["String"];
};

export type ContractStatesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ContractState_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ContractState_Filter>;
};

export type ContractState = {
  __typename?: "ContractState";
  activations: Array<Activation>;
  activeMarketId: Scalars["BigInt"];
  backing: Scalars["BigInt"];
  backingChanges: Array<BackingChange>;
  backingDecimal: Scalars["BigDecimal"];
  backingUpdates: Array<BackingUpdate>;
  baseEmissionRate: Scalars["BigInt"];
  baseEmissionRateDecimal: Scalars["BigDecimal"];
  baseRateChanges: Array<BaseRateChange>;
  beatCounter: Scalars["Int"];
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  bondAuctioneer: Scalars["Bytes"];
  bondContractsSets: Array<BondContractsSet>;
  bondTeller: Scalars["Bytes"];
  contract: Contract;
  deactivations: Array<Deactivation>;
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  isEnabled: Scalars["Boolean"];
  minimumPremium: Scalars["BigInt"];
  minimumPremiumChanges: Array<MinimumPremiumChange>;
  minimumPremiumDecimal: Scalars["BigDecimal"];
  restartTimeframe: Scalars["BigInt"];
  restartTimeframeChanges: Array<RestartTimeframeChange>;
  salesCreated: Array<SaleCreated>;
  shutdownTimestamp: Scalars["BigInt"];
  transactionHash: Scalars["Bytes"];
  vestingPeriod: Scalars["BigInt"];
  vestingPeriodChanges: Array<VestingPeriodChange>;
};

export type ContractStateActivationsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Activation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Activation_Filter>;
};

export type ContractStateBackingChangesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BackingChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<BackingChange_Filter>;
};

export type ContractStateBackingUpdatesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BackingUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<BackingUpdate_Filter>;
};

export type ContractStateBaseRateChangesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BaseRateChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<BaseRateChange_Filter>;
};

export type ContractStateBondContractsSetsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BondContractsSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<BondContractsSet_Filter>;
};

export type ContractStateDeactivationsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deactivation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deactivation_Filter>;
};

export type ContractStateMinimumPremiumChangesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MinimumPremiumChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MinimumPremiumChange_Filter>;
};

export type ContractStateRestartTimeframeChangesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RestartTimeframeChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<RestartTimeframeChange_Filter>;
};

export type ContractStateSalesCreatedArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SaleCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SaleCreated_Filter>;
};

export type ContractStateVestingPeriodChangesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VestingPeriodChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VestingPeriodChange_Filter>;
};

export type ContractState_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activations_?: InputMaybe<Activation_Filter>;
  activeMarketId?: InputMaybe<Scalars["BigInt"]>;
  activeMarketId_gt?: InputMaybe<Scalars["BigInt"]>;
  activeMarketId_gte?: InputMaybe<Scalars["BigInt"]>;
  activeMarketId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  activeMarketId_lt?: InputMaybe<Scalars["BigInt"]>;
  activeMarketId_lte?: InputMaybe<Scalars["BigInt"]>;
  activeMarketId_not?: InputMaybe<Scalars["BigInt"]>;
  activeMarketId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<ContractState_Filter>>>;
  backing?: InputMaybe<Scalars["BigInt"]>;
  backingChanges_?: InputMaybe<BackingChange_Filter>;
  backingDecimal?: InputMaybe<Scalars["BigDecimal"]>;
  backingDecimal_gt?: InputMaybe<Scalars["BigDecimal"]>;
  backingDecimal_gte?: InputMaybe<Scalars["BigDecimal"]>;
  backingDecimal_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  backingDecimal_lt?: InputMaybe<Scalars["BigDecimal"]>;
  backingDecimal_lte?: InputMaybe<Scalars["BigDecimal"]>;
  backingDecimal_not?: InputMaybe<Scalars["BigDecimal"]>;
  backingDecimal_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  backingUpdates_?: InputMaybe<BackingUpdate_Filter>;
  backing_gt?: InputMaybe<Scalars["BigInt"]>;
  backing_gte?: InputMaybe<Scalars["BigInt"]>;
  backing_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  backing_lt?: InputMaybe<Scalars["BigInt"]>;
  backing_lte?: InputMaybe<Scalars["BigInt"]>;
  backing_not?: InputMaybe<Scalars["BigInt"]>;
  backing_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  baseEmissionRate?: InputMaybe<Scalars["BigInt"]>;
  baseEmissionRateDecimal?: InputMaybe<Scalars["BigDecimal"]>;
  baseEmissionRateDecimal_gt?: InputMaybe<Scalars["BigDecimal"]>;
  baseEmissionRateDecimal_gte?: InputMaybe<Scalars["BigDecimal"]>;
  baseEmissionRateDecimal_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  baseEmissionRateDecimal_lt?: InputMaybe<Scalars["BigDecimal"]>;
  baseEmissionRateDecimal_lte?: InputMaybe<Scalars["BigDecimal"]>;
  baseEmissionRateDecimal_not?: InputMaybe<Scalars["BigDecimal"]>;
  baseEmissionRateDecimal_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  baseEmissionRate_gt?: InputMaybe<Scalars["BigInt"]>;
  baseEmissionRate_gte?: InputMaybe<Scalars["BigInt"]>;
  baseEmissionRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  baseEmissionRate_lt?: InputMaybe<Scalars["BigInt"]>;
  baseEmissionRate_lte?: InputMaybe<Scalars["BigInt"]>;
  baseEmissionRate_not?: InputMaybe<Scalars["BigInt"]>;
  baseEmissionRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  baseRateChanges_?: InputMaybe<BaseRateChange_Filter>;
  beatCounter?: InputMaybe<Scalars["Int"]>;
  beatCounter_gt?: InputMaybe<Scalars["Int"]>;
  beatCounter_gte?: InputMaybe<Scalars["Int"]>;
  beatCounter_in?: InputMaybe<Array<Scalars["Int"]>>;
  beatCounter_lt?: InputMaybe<Scalars["Int"]>;
  beatCounter_lte?: InputMaybe<Scalars["Int"]>;
  beatCounter_not?: InputMaybe<Scalars["Int"]>;
  beatCounter_not_in?: InputMaybe<Array<Scalars["Int"]>>;
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
  bondAuctioneer?: InputMaybe<Scalars["Bytes"]>;
  bondAuctioneer_contains?: InputMaybe<Scalars["Bytes"]>;
  bondAuctioneer_gt?: InputMaybe<Scalars["Bytes"]>;
  bondAuctioneer_gte?: InputMaybe<Scalars["Bytes"]>;
  bondAuctioneer_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  bondAuctioneer_lt?: InputMaybe<Scalars["Bytes"]>;
  bondAuctioneer_lte?: InputMaybe<Scalars["Bytes"]>;
  bondAuctioneer_not?: InputMaybe<Scalars["Bytes"]>;
  bondAuctioneer_not_contains?: InputMaybe<Scalars["Bytes"]>;
  bondAuctioneer_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  bondContractsSets_?: InputMaybe<BondContractsSet_Filter>;
  bondTeller?: InputMaybe<Scalars["Bytes"]>;
  bondTeller_contains?: InputMaybe<Scalars["Bytes"]>;
  bondTeller_gt?: InputMaybe<Scalars["Bytes"]>;
  bondTeller_gte?: InputMaybe<Scalars["Bytes"]>;
  bondTeller_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  bondTeller_lt?: InputMaybe<Scalars["Bytes"]>;
  bondTeller_lte?: InputMaybe<Scalars["Bytes"]>;
  bondTeller_not?: InputMaybe<Scalars["Bytes"]>;
  bondTeller_not_contains?: InputMaybe<Scalars["Bytes"]>;
  bondTeller_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
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
  deactivations_?: InputMaybe<Deactivation_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isEnabled?: InputMaybe<Scalars["Boolean"]>;
  isEnabled_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isEnabled_not?: InputMaybe<Scalars["Boolean"]>;
  isEnabled_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  minimumPremium?: InputMaybe<Scalars["BigInt"]>;
  minimumPremiumChanges_?: InputMaybe<MinimumPremiumChange_Filter>;
  minimumPremiumDecimal?: InputMaybe<Scalars["BigDecimal"]>;
  minimumPremiumDecimal_gt?: InputMaybe<Scalars["BigDecimal"]>;
  minimumPremiumDecimal_gte?: InputMaybe<Scalars["BigDecimal"]>;
  minimumPremiumDecimal_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  minimumPremiumDecimal_lt?: InputMaybe<Scalars["BigDecimal"]>;
  minimumPremiumDecimal_lte?: InputMaybe<Scalars["BigDecimal"]>;
  minimumPremiumDecimal_not?: InputMaybe<Scalars["BigDecimal"]>;
  minimumPremiumDecimal_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  minimumPremium_gt?: InputMaybe<Scalars["BigInt"]>;
  minimumPremium_gte?: InputMaybe<Scalars["BigInt"]>;
  minimumPremium_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  minimumPremium_lt?: InputMaybe<Scalars["BigInt"]>;
  minimumPremium_lte?: InputMaybe<Scalars["BigInt"]>;
  minimumPremium_not?: InputMaybe<Scalars["BigInt"]>;
  minimumPremium_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<ContractState_Filter>>>;
  restartTimeframe?: InputMaybe<Scalars["BigInt"]>;
  restartTimeframeChanges_?: InputMaybe<RestartTimeframeChange_Filter>;
  restartTimeframe_gt?: InputMaybe<Scalars["BigInt"]>;
  restartTimeframe_gte?: InputMaybe<Scalars["BigInt"]>;
  restartTimeframe_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  restartTimeframe_lt?: InputMaybe<Scalars["BigInt"]>;
  restartTimeframe_lte?: InputMaybe<Scalars["BigInt"]>;
  restartTimeframe_not?: InputMaybe<Scalars["BigInt"]>;
  restartTimeframe_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  salesCreated_?: InputMaybe<SaleCreated_Filter>;
  shutdownTimestamp?: InputMaybe<Scalars["BigInt"]>;
  shutdownTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  shutdownTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  shutdownTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  shutdownTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  shutdownTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  shutdownTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  shutdownTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  vestingPeriod?: InputMaybe<Scalars["BigInt"]>;
  vestingPeriodChanges_?: InputMaybe<VestingPeriodChange_Filter>;
  vestingPeriod_gt?: InputMaybe<Scalars["BigInt"]>;
  vestingPeriod_gte?: InputMaybe<Scalars["BigInt"]>;
  vestingPeriod_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  vestingPeriod_lt?: InputMaybe<Scalars["BigInt"]>;
  vestingPeriod_lte?: InputMaybe<Scalars["BigInt"]>;
  vestingPeriod_not?: InputMaybe<Scalars["BigInt"]>;
  vestingPeriod_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum ContractState_OrderBy {
  Activations = "activations",
  ActiveMarketId = "activeMarketId",
  Backing = "backing",
  BackingChanges = "backingChanges",
  BackingDecimal = "backingDecimal",
  BackingUpdates = "backingUpdates",
  BaseEmissionRate = "baseEmissionRate",
  BaseEmissionRateDecimal = "baseEmissionRateDecimal",
  BaseRateChanges = "baseRateChanges",
  BeatCounter = "beatCounter",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  BondAuctioneer = "bondAuctioneer",
  BondContractsSets = "bondContractsSets",
  BondTeller = "bondTeller",
  Contract = "contract",
  ContractAddress = "contract__address",
  ContractId = "contract__id",
  ContractMajorVersion = "contract__majorVersion",
  ContractMinorVersion = "contract__minorVersion",
  ContractVersion = "contract__version",
  Deactivations = "deactivations",
  Id = "id",
  IsActive = "isActive",
  IsEnabled = "isEnabled",
  MinimumPremium = "minimumPremium",
  MinimumPremiumChanges = "minimumPremiumChanges",
  MinimumPremiumDecimal = "minimumPremiumDecimal",
  RestartTimeframe = "restartTimeframe",
  RestartTimeframeChanges = "restartTimeframeChanges",
  SalesCreated = "salesCreated",
  ShutdownTimestamp = "shutdownTimestamp",
  TransactionHash = "transactionHash",
  VestingPeriod = "vestingPeriod",
  VestingPeriodChanges = "vestingPeriodChanges",
}

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
  gohmToken?: InputMaybe<Scalars["String"]>;
  gohmToken_?: InputMaybe<Token_Filter>;
  gohmToken_contains?: InputMaybe<Scalars["String"]>;
  gohmToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  gohmToken_ends_with?: InputMaybe<Scalars["String"]>;
  gohmToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  gohmToken_gt?: InputMaybe<Scalars["String"]>;
  gohmToken_gte?: InputMaybe<Scalars["String"]>;
  gohmToken_in?: InputMaybe<Array<Scalars["String"]>>;
  gohmToken_lt?: InputMaybe<Scalars["String"]>;
  gohmToken_lte?: InputMaybe<Scalars["String"]>;
  gohmToken_not?: InputMaybe<Scalars["String"]>;
  gohmToken_not_contains?: InputMaybe<Scalars["String"]>;
  gohmToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  gohmToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  gohmToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  gohmToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  gohmToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  gohmToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  gohmToken_starts_with?: InputMaybe<Scalars["String"]>;
  gohmToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  ohmToken?: InputMaybe<Scalars["String"]>;
  ohmToken_?: InputMaybe<Token_Filter>;
  ohmToken_contains?: InputMaybe<Scalars["String"]>;
  ohmToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  ohmToken_ends_with?: InputMaybe<Scalars["String"]>;
  ohmToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  ohmToken_gt?: InputMaybe<Scalars["String"]>;
  ohmToken_gte?: InputMaybe<Scalars["String"]>;
  ohmToken_in?: InputMaybe<Array<Scalars["String"]>>;
  ohmToken_lt?: InputMaybe<Scalars["String"]>;
  ohmToken_lte?: InputMaybe<Scalars["String"]>;
  ohmToken_not?: InputMaybe<Scalars["String"]>;
  ohmToken_not_contains?: InputMaybe<Scalars["String"]>;
  ohmToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  ohmToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  ohmToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  ohmToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  ohmToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  ohmToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  ohmToken_starts_with?: InputMaybe<Scalars["String"]>;
  ohmToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  sReserveToken?: InputMaybe<Scalars["String"]>;
  sReserveToken_?: InputMaybe<Token_Filter>;
  sReserveToken_contains?: InputMaybe<Scalars["String"]>;
  sReserveToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  sReserveToken_ends_with?: InputMaybe<Scalars["String"]>;
  sReserveToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  sReserveToken_gt?: InputMaybe<Scalars["String"]>;
  sReserveToken_gte?: InputMaybe<Scalars["String"]>;
  sReserveToken_in?: InputMaybe<Array<Scalars["String"]>>;
  sReserveToken_lt?: InputMaybe<Scalars["String"]>;
  sReserveToken_lte?: InputMaybe<Scalars["String"]>;
  sReserveToken_not?: InputMaybe<Scalars["String"]>;
  sReserveToken_not_contains?: InputMaybe<Scalars["String"]>;
  sReserveToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  sReserveToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  sReserveToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  sReserveToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  sReserveToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  sReserveToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  sReserveToken_starts_with?: InputMaybe<Scalars["String"]>;
  sReserveToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  states_?: InputMaybe<ContractState_Filter>;
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
  GohmToken = "gohmToken",
  GohmTokenAddress = "gohmToken__address",
  GohmTokenDecimals = "gohmToken__decimals",
  GohmTokenId = "gohmToken__id",
  GohmTokenName = "gohmToken__name",
  GohmTokenSymbol = "gohmToken__symbol",
  Id = "id",
  MajorVersion = "majorVersion",
  MinorVersion = "minorVersion",
  OhmToken = "ohmToken",
  OhmTokenAddress = "ohmToken__address",
  OhmTokenDecimals = "ohmToken__decimals",
  OhmTokenId = "ohmToken__id",
  OhmTokenName = "ohmToken__name",
  OhmTokenSymbol = "ohmToken__symbol",
  ReserveToken = "reserveToken",
  ReserveTokenAddress = "reserveToken__address",
  ReserveTokenDecimals = "reserveToken__decimals",
  ReserveTokenId = "reserveToken__id",
  ReserveTokenName = "reserveToken__name",
  ReserveTokenSymbol = "reserveToken__symbol",
  SReserveToken = "sReserveToken",
  SReserveTokenAddress = "sReserveToken__address",
  SReserveTokenDecimals = "sReserveToken__decimals",
  SReserveTokenId = "sReserveToken__id",
  SReserveTokenName = "sReserveToken__name",
  SReserveTokenSymbol = "sReserveToken__symbol",
  States = "states",
  Version = "version",
}

export type Deactivation = {
  __typename?: "Deactivation";
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  contract: Contract;
  contractState: ContractState;
  id: Scalars["Bytes"];
  transactionHash: Scalars["Bytes"];
};

export type Deactivation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Deactivation_Filter>>>;
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
  contractState?: InputMaybe<Scalars["String"]>;
  contractState_?: InputMaybe<ContractState_Filter>;
  contractState_contains?: InputMaybe<Scalars["String"]>;
  contractState_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_gt?: InputMaybe<Scalars["String"]>;
  contractState_gte?: InputMaybe<Scalars["String"]>;
  contractState_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_lt?: InputMaybe<Scalars["String"]>;
  contractState_lte?: InputMaybe<Scalars["String"]>;
  contractState_not?: InputMaybe<Scalars["String"]>;
  contractState_not_contains?: InputMaybe<Scalars["String"]>;
  contractState_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_not_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  or?: InputMaybe<Array<InputMaybe<Deactivation_Filter>>>;
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

export enum Deactivation_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Contract = "contract",
  ContractState = "contractState",
  ContractStateActiveMarketId = "contractState__activeMarketId",
  ContractStateBacking = "contractState__backing",
  ContractStateBackingDecimal = "contractState__backingDecimal",
  ContractStateBaseEmissionRate = "contractState__baseEmissionRate",
  ContractStateBaseEmissionRateDecimal = "contractState__baseEmissionRateDecimal",
  ContractStateBeatCounter = "contractState__beatCounter",
  ContractStateBlockNumber = "contractState__blockNumber",
  ContractStateBlockTimestamp = "contractState__blockTimestamp",
  ContractStateBondAuctioneer = "contractState__bondAuctioneer",
  ContractStateBondTeller = "contractState__bondTeller",
  ContractStateId = "contractState__id",
  ContractStateIsActive = "contractState__isActive",
  ContractStateIsEnabled = "contractState__isEnabled",
  ContractStateMinimumPremium = "contractState__minimumPremium",
  ContractStateMinimumPremiumDecimal = "contractState__minimumPremiumDecimal",
  ContractStateRestartTimeframe = "contractState__restartTimeframe",
  ContractStateShutdownTimestamp = "contractState__shutdownTimestamp",
  ContractStateTransactionHash = "contractState__transactionHash",
  ContractStateVestingPeriod = "contractState__vestingPeriod",
  ContractAddress = "contract__address",
  ContractId = "contract__id",
  ContractMajorVersion = "contract__majorVersion",
  ContractMinorVersion = "contract__minorVersion",
  ContractVersion = "contract__version",
  Id = "id",
  TransactionHash = "transactionHash",
}

export type MinimumPremiumChange = {
  __typename?: "MinimumPremiumChange";
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  contract: Contract;
  contractState: ContractState;
  id: Scalars["Bytes"];
  newMinimumPremium: Scalars["BigInt"];
  newMinimumPremiumDecimal: Scalars["BigDecimal"];
  transactionHash: Scalars["Bytes"];
};

export type MinimumPremiumChange_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MinimumPremiumChange_Filter>>>;
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
  contractState?: InputMaybe<Scalars["String"]>;
  contractState_?: InputMaybe<ContractState_Filter>;
  contractState_contains?: InputMaybe<Scalars["String"]>;
  contractState_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_gt?: InputMaybe<Scalars["String"]>;
  contractState_gte?: InputMaybe<Scalars["String"]>;
  contractState_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_lt?: InputMaybe<Scalars["String"]>;
  contractState_lte?: InputMaybe<Scalars["String"]>;
  contractState_not?: InputMaybe<Scalars["String"]>;
  contractState_not_contains?: InputMaybe<Scalars["String"]>;
  contractState_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_not_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  newMinimumPremium?: InputMaybe<Scalars["BigInt"]>;
  newMinimumPremiumDecimal?: InputMaybe<Scalars["BigDecimal"]>;
  newMinimumPremiumDecimal_gt?: InputMaybe<Scalars["BigDecimal"]>;
  newMinimumPremiumDecimal_gte?: InputMaybe<Scalars["BigDecimal"]>;
  newMinimumPremiumDecimal_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  newMinimumPremiumDecimal_lt?: InputMaybe<Scalars["BigDecimal"]>;
  newMinimumPremiumDecimal_lte?: InputMaybe<Scalars["BigDecimal"]>;
  newMinimumPremiumDecimal_not?: InputMaybe<Scalars["BigDecimal"]>;
  newMinimumPremiumDecimal_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  newMinimumPremium_gt?: InputMaybe<Scalars["BigInt"]>;
  newMinimumPremium_gte?: InputMaybe<Scalars["BigInt"]>;
  newMinimumPremium_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  newMinimumPremium_lt?: InputMaybe<Scalars["BigInt"]>;
  newMinimumPremium_lte?: InputMaybe<Scalars["BigInt"]>;
  newMinimumPremium_not?: InputMaybe<Scalars["BigInt"]>;
  newMinimumPremium_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<MinimumPremiumChange_Filter>>>;
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

export enum MinimumPremiumChange_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Contract = "contract",
  ContractState = "contractState",
  ContractStateActiveMarketId = "contractState__activeMarketId",
  ContractStateBacking = "contractState__backing",
  ContractStateBackingDecimal = "contractState__backingDecimal",
  ContractStateBaseEmissionRate = "contractState__baseEmissionRate",
  ContractStateBaseEmissionRateDecimal = "contractState__baseEmissionRateDecimal",
  ContractStateBeatCounter = "contractState__beatCounter",
  ContractStateBlockNumber = "contractState__blockNumber",
  ContractStateBlockTimestamp = "contractState__blockTimestamp",
  ContractStateBondAuctioneer = "contractState__bondAuctioneer",
  ContractStateBondTeller = "contractState__bondTeller",
  ContractStateId = "contractState__id",
  ContractStateIsActive = "contractState__isActive",
  ContractStateIsEnabled = "contractState__isEnabled",
  ContractStateMinimumPremium = "contractState__minimumPremium",
  ContractStateMinimumPremiumDecimal = "contractState__minimumPremiumDecimal",
  ContractStateRestartTimeframe = "contractState__restartTimeframe",
  ContractStateShutdownTimestamp = "contractState__shutdownTimestamp",
  ContractStateTransactionHash = "contractState__transactionHash",
  ContractStateVestingPeriod = "contractState__vestingPeriod",
  ContractAddress = "contract__address",
  ContractId = "contract__id",
  ContractMajorVersion = "contract__majorVersion",
  ContractMinorVersion = "contract__minorVersion",
  ContractVersion = "contract__version",
  Id = "id",
  NewMinimumPremium = "newMinimumPremium",
  NewMinimumPremiumDecimal = "newMinimumPremiumDecimal",
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
  activation?: Maybe<Activation>;
  activations: Array<Activation>;
  backingChange?: Maybe<BackingChange>;
  backingChanges: Array<BackingChange>;
  backingUpdate?: Maybe<BackingUpdate>;
  backingUpdates: Array<BackingUpdate>;
  baseRateChange?: Maybe<BaseRateChange>;
  baseRateChanges: Array<BaseRateChange>;
  bondContractsSet?: Maybe<BondContractsSet>;
  bondContractsSets: Array<BondContractsSet>;
  contract?: Maybe<Contract>;
  contractState?: Maybe<ContractState>;
  contractStates: Array<ContractState>;
  contracts: Array<Contract>;
  deactivation?: Maybe<Deactivation>;
  deactivations: Array<Deactivation>;
  minimumPremiumChange?: Maybe<MinimumPremiumChange>;
  minimumPremiumChanges: Array<MinimumPremiumChange>;
  restartTimeframeChange?: Maybe<RestartTimeframeChange>;
  restartTimeframeChanges: Array<RestartTimeframeChange>;
  saleCreated?: Maybe<SaleCreated>;
  saleCreateds: Array<SaleCreated>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  vestingPeriodChange?: Maybe<VestingPeriodChange>;
  vestingPeriodChanges: Array<VestingPeriodChange>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryActivationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryActivationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Activation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Activation_Filter>;
};

export type QueryBackingChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBackingChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BackingChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BackingChange_Filter>;
};

export type QueryBackingUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBackingUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BackingUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BackingUpdate_Filter>;
};

export type QueryBaseRateChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBaseRateChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BaseRateChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BaseRateChange_Filter>;
};

export type QueryBondContractsSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBondContractsSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BondContractsSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BondContractsSet_Filter>;
};

export type QueryContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryContractStateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryContractStatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ContractState_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ContractState_Filter>;
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

export type QueryDeactivationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDeactivationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deactivation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deactivation_Filter>;
};

export type QueryMinimumPremiumChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMinimumPremiumChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MinimumPremiumChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MinimumPremiumChange_Filter>;
};

export type QueryRestartTimeframeChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRestartTimeframeChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RestartTimeframeChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RestartTimeframeChange_Filter>;
};

export type QuerySaleCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySaleCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SaleCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SaleCreated_Filter>;
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

export type QueryVestingPeriodChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVestingPeriodChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<VestingPeriodChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VestingPeriodChange_Filter>;
};

export type RestartTimeframeChange = {
  __typename?: "RestartTimeframeChange";
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  contract: Contract;
  contractState: ContractState;
  id: Scalars["Bytes"];
  newRestartTimeframe: Scalars["BigInt"];
  transactionHash: Scalars["Bytes"];
};

export type RestartTimeframeChange_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RestartTimeframeChange_Filter>>>;
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
  contractState?: InputMaybe<Scalars["String"]>;
  contractState_?: InputMaybe<ContractState_Filter>;
  contractState_contains?: InputMaybe<Scalars["String"]>;
  contractState_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_gt?: InputMaybe<Scalars["String"]>;
  contractState_gte?: InputMaybe<Scalars["String"]>;
  contractState_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_lt?: InputMaybe<Scalars["String"]>;
  contractState_lte?: InputMaybe<Scalars["String"]>;
  contractState_not?: InputMaybe<Scalars["String"]>;
  contractState_not_contains?: InputMaybe<Scalars["String"]>;
  contractState_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_not_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  newRestartTimeframe?: InputMaybe<Scalars["BigInt"]>;
  newRestartTimeframe_gt?: InputMaybe<Scalars["BigInt"]>;
  newRestartTimeframe_gte?: InputMaybe<Scalars["BigInt"]>;
  newRestartTimeframe_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  newRestartTimeframe_lt?: InputMaybe<Scalars["BigInt"]>;
  newRestartTimeframe_lte?: InputMaybe<Scalars["BigInt"]>;
  newRestartTimeframe_not?: InputMaybe<Scalars["BigInt"]>;
  newRestartTimeframe_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<RestartTimeframeChange_Filter>>>;
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

export enum RestartTimeframeChange_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Contract = "contract",
  ContractState = "contractState",
  ContractStateActiveMarketId = "contractState__activeMarketId",
  ContractStateBacking = "contractState__backing",
  ContractStateBackingDecimal = "contractState__backingDecimal",
  ContractStateBaseEmissionRate = "contractState__baseEmissionRate",
  ContractStateBaseEmissionRateDecimal = "contractState__baseEmissionRateDecimal",
  ContractStateBeatCounter = "contractState__beatCounter",
  ContractStateBlockNumber = "contractState__blockNumber",
  ContractStateBlockTimestamp = "contractState__blockTimestamp",
  ContractStateBondAuctioneer = "contractState__bondAuctioneer",
  ContractStateBondTeller = "contractState__bondTeller",
  ContractStateId = "contractState__id",
  ContractStateIsActive = "contractState__isActive",
  ContractStateIsEnabled = "contractState__isEnabled",
  ContractStateMinimumPremium = "contractState__minimumPremium",
  ContractStateMinimumPremiumDecimal = "contractState__minimumPremiumDecimal",
  ContractStateRestartTimeframe = "contractState__restartTimeframe",
  ContractStateShutdownTimestamp = "contractState__shutdownTimestamp",
  ContractStateTransactionHash = "contractState__transactionHash",
  ContractStateVestingPeriod = "contractState__vestingPeriod",
  ContractAddress = "contract__address",
  ContractId = "contract__id",
  ContractMajorVersion = "contract__majorVersion",
  ContractMinorVersion = "contract__minorVersion",
  ContractVersion = "contract__version",
  Id = "id",
  NewRestartTimeframe = "newRestartTimeframe",
  TransactionHash = "transactionHash",
}

export type SaleCreated = {
  __typename?: "SaleCreated";
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  contract: Contract;
  contractState: ContractState;
  id: Scalars["Bytes"];
  marketId: Scalars["BigInt"];
  saleAmount: Scalars["BigInt"];
  saleAmountDecimal: Scalars["BigDecimal"];
  transactionHash: Scalars["Bytes"];
};

export type SaleCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SaleCreated_Filter>>>;
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
  contractState?: InputMaybe<Scalars["String"]>;
  contractState_?: InputMaybe<ContractState_Filter>;
  contractState_contains?: InputMaybe<Scalars["String"]>;
  contractState_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_gt?: InputMaybe<Scalars["String"]>;
  contractState_gte?: InputMaybe<Scalars["String"]>;
  contractState_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_lt?: InputMaybe<Scalars["String"]>;
  contractState_lte?: InputMaybe<Scalars["String"]>;
  contractState_not?: InputMaybe<Scalars["String"]>;
  contractState_not_contains?: InputMaybe<Scalars["String"]>;
  contractState_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_not_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  or?: InputMaybe<Array<InputMaybe<SaleCreated_Filter>>>;
  saleAmount?: InputMaybe<Scalars["BigInt"]>;
  saleAmountDecimal?: InputMaybe<Scalars["BigDecimal"]>;
  saleAmountDecimal_gt?: InputMaybe<Scalars["BigDecimal"]>;
  saleAmountDecimal_gte?: InputMaybe<Scalars["BigDecimal"]>;
  saleAmountDecimal_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  saleAmountDecimal_lt?: InputMaybe<Scalars["BigDecimal"]>;
  saleAmountDecimal_lte?: InputMaybe<Scalars["BigDecimal"]>;
  saleAmountDecimal_not?: InputMaybe<Scalars["BigDecimal"]>;
  saleAmountDecimal_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  saleAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  saleAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  saleAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  saleAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  saleAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  saleAmount_not?: InputMaybe<Scalars["BigInt"]>;
  saleAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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

export enum SaleCreated_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Contract = "contract",
  ContractState = "contractState",
  ContractStateActiveMarketId = "contractState__activeMarketId",
  ContractStateBacking = "contractState__backing",
  ContractStateBackingDecimal = "contractState__backingDecimal",
  ContractStateBaseEmissionRate = "contractState__baseEmissionRate",
  ContractStateBaseEmissionRateDecimal = "contractState__baseEmissionRateDecimal",
  ContractStateBeatCounter = "contractState__beatCounter",
  ContractStateBlockNumber = "contractState__blockNumber",
  ContractStateBlockTimestamp = "contractState__blockTimestamp",
  ContractStateBondAuctioneer = "contractState__bondAuctioneer",
  ContractStateBondTeller = "contractState__bondTeller",
  ContractStateId = "contractState__id",
  ContractStateIsActive = "contractState__isActive",
  ContractStateIsEnabled = "contractState__isEnabled",
  ContractStateMinimumPremium = "contractState__minimumPremium",
  ContractStateMinimumPremiumDecimal = "contractState__minimumPremiumDecimal",
  ContractStateRestartTimeframe = "contractState__restartTimeframe",
  ContractStateShutdownTimestamp = "contractState__shutdownTimestamp",
  ContractStateTransactionHash = "contractState__transactionHash",
  ContractStateVestingPeriod = "contractState__vestingPeriod",
  ContractAddress = "contract__address",
  ContractId = "contract__id",
  ContractMajorVersion = "contract__majorVersion",
  ContractMinorVersion = "contract__minorVersion",
  ContractVersion = "contract__version",
  Id = "id",
  MarketId = "marketId",
  SaleAmount = "saleAmount",
  SaleAmountDecimal = "saleAmountDecimal",
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

export type VestingPeriodChange = {
  __typename?: "VestingPeriodChange";
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  contract: Contract;
  contractState: ContractState;
  id: Scalars["Bytes"];
  newVestingPeriod: Scalars["BigInt"];
  transactionHash: Scalars["Bytes"];
};

export type VestingPeriodChange_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VestingPeriodChange_Filter>>>;
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
  contractState?: InputMaybe<Scalars["String"]>;
  contractState_?: InputMaybe<ContractState_Filter>;
  contractState_contains?: InputMaybe<Scalars["String"]>;
  contractState_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_gt?: InputMaybe<Scalars["String"]>;
  contractState_gte?: InputMaybe<Scalars["String"]>;
  contractState_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_lt?: InputMaybe<Scalars["String"]>;
  contractState_lte?: InputMaybe<Scalars["String"]>;
  contractState_not?: InputMaybe<Scalars["String"]>;
  contractState_not_contains?: InputMaybe<Scalars["String"]>;
  contractState_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with?: InputMaybe<Scalars["String"]>;
  contractState_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contractState_not_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contractState_starts_with?: InputMaybe<Scalars["String"]>;
  contractState_starts_with_nocase?: InputMaybe<Scalars["String"]>;
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
  newVestingPeriod?: InputMaybe<Scalars["BigInt"]>;
  newVestingPeriod_gt?: InputMaybe<Scalars["BigInt"]>;
  newVestingPeriod_gte?: InputMaybe<Scalars["BigInt"]>;
  newVestingPeriod_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  newVestingPeriod_lt?: InputMaybe<Scalars["BigInt"]>;
  newVestingPeriod_lte?: InputMaybe<Scalars["BigInt"]>;
  newVestingPeriod_not?: InputMaybe<Scalars["BigInt"]>;
  newVestingPeriod_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<VestingPeriodChange_Filter>>>;
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

export enum VestingPeriodChange_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Contract = "contract",
  ContractState = "contractState",
  ContractStateActiveMarketId = "contractState__activeMarketId",
  ContractStateBacking = "contractState__backing",
  ContractStateBackingDecimal = "contractState__backingDecimal",
  ContractStateBaseEmissionRate = "contractState__baseEmissionRate",
  ContractStateBaseEmissionRateDecimal = "contractState__baseEmissionRateDecimal",
  ContractStateBeatCounter = "contractState__beatCounter",
  ContractStateBlockNumber = "contractState__blockNumber",
  ContractStateBlockTimestamp = "contractState__blockTimestamp",
  ContractStateBondAuctioneer = "contractState__bondAuctioneer",
  ContractStateBondTeller = "contractState__bondTeller",
  ContractStateId = "contractState__id",
  ContractStateIsActive = "contractState__isActive",
  ContractStateIsEnabled = "contractState__isEnabled",
  ContractStateMinimumPremium = "contractState__minimumPremium",
  ContractStateMinimumPremiumDecimal = "contractState__minimumPremiumDecimal",
  ContractStateRestartTimeframe = "contractState__restartTimeframe",
  ContractStateShutdownTimestamp = "contractState__shutdownTimestamp",
  ContractStateTransactionHash = "contractState__transactionHash",
  ContractStateVestingPeriod = "contractState__vestingPeriod",
  ContractAddress = "contract__address",
  ContractId = "contract__id",
  ContractMajorVersion = "contract__majorVersion",
  ContractMinorVersion = "contract__minorVersion",
  ContractVersion = "contract__version",
  Id = "id",
  NewVestingPeriod = "newVestingPeriod",
  TransactionHash = "transactionHash",
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

export type TokenFieldsFragment = {
  __typename?: "Token";
  id: string;
  address: Uint8Array;
  name: string;
  symbol: string;
  decimals: number;
};

export type ContractFieldsFragment = {
  __typename?: "Contract";
  id: string;
  address: Uint8Array;
  version: string;
  majorVersion: number;
  minorVersion: number;
  gohmToken: { __typename?: "Token"; id: string; address: Uint8Array; name: string; symbol: string; decimals: number };
  ohmToken: { __typename?: "Token"; id: string; address: Uint8Array; name: string; symbol: string; decimals: number };
  reserveToken: {
    __typename?: "Token";
    id: string;
    address: Uint8Array;
    name: string;
    symbol: string;
    decimals: number;
  };
  sReserveToken: {
    __typename?: "Token";
    id: string;
    address: Uint8Array;
    name: string;
    symbol: string;
    decimals: number;
  };
};

export type SaleCreatedFieldsFragment = {
  __typename?: "SaleCreated";
  id: Uint8Array;
  marketId: string;
  saleAmount: string;
  saleAmountDecimal: string;
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
    gohmToken: {
      __typename?: "Token";
      id: string;
      address: Uint8Array;
      name: string;
      symbol: string;
      decimals: number;
    };
    ohmToken: { __typename?: "Token"; id: string; address: Uint8Array; name: string; symbol: string; decimals: number };
    reserveToken: {
      __typename?: "Token";
      id: string;
      address: Uint8Array;
      name: string;
      symbol: string;
      decimals: number;
    };
    sReserveToken: {
      __typename?: "Token";
      id: string;
      address: Uint8Array;
      name: string;
      symbol: string;
      decimals: number;
    };
  };
};

export type EmissionManagerMarketsCreatedSinceQueryVariables = Exact<{
  latestBlock: Scalars["BigInt"];
}>;

export type EmissionManagerMarketsCreatedSinceQuery = {
  __typename?: "Query";
  saleCreateds: Array<{
    __typename?: "SaleCreated";
    id: Uint8Array;
    marketId: string;
    saleAmount: string;
    saleAmountDecimal: string;
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
      gohmToken: {
        __typename?: "Token";
        id: string;
        address: Uint8Array;
        name: string;
        symbol: string;
        decimals: number;
      };
      ohmToken: {
        __typename?: "Token";
        id: string;
        address: Uint8Array;
        name: string;
        symbol: string;
        decimals: number;
      };
      reserveToken: {
        __typename?: "Token";
        id: string;
        address: Uint8Array;
        name: string;
        symbol: string;
        decimals: number;
      };
      sReserveToken: {
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

export type EmissionManagerMarketQueryVariables = Exact<{
  marketId: Scalars["BigInt"];
}>;

export type EmissionManagerMarketQuery = {
  __typename?: "Query";
  saleCreateds: Array<{
    __typename?: "SaleCreated";
    id: Uint8Array;
    marketId: string;
    saleAmount: string;
    saleAmountDecimal: string;
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
      gohmToken: {
        __typename?: "Token";
        id: string;
        address: Uint8Array;
        name: string;
        symbol: string;
        decimals: number;
      };
      ohmToken: {
        __typename?: "Token";
        id: string;
        address: Uint8Array;
        name: string;
        symbol: string;
        decimals: number;
      };
      reserveToken: {
        __typename?: "Token";
        id: string;
        address: Uint8Array;
        name: string;
        symbol: string;
        decimals: number;
      };
      sReserveToken: {
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

export const TokenFieldsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TokenFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
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
} as unknown as DocumentNode<TokenFieldsFragment, unknown>;
export const ContractFieldsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContractFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Contract" } },
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
            name: { kind: "Name", value: "gohmToken" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TokenFields" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "ohmToken" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TokenFields" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "reserveToken" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TokenFields" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "sReserveToken" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TokenFields" } }],
            },
          },
        ],
      },
    },
    ...TokenFieldsFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<ContractFieldsFragment, unknown>;
export const SaleCreatedFieldsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SaleCreatedFields" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SaleCreated" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "contract" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContractFields" } }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "marketId" } },
          { kind: "Field", name: { kind: "Name", value: "saleAmount" } },
          { kind: "Field", name: { kind: "Name", value: "saleAmountDecimal" } },
          { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
          { kind: "Field", name: { kind: "Name", value: "blockTimestamp" } },
          { kind: "Field", name: { kind: "Name", value: "transactionHash" } },
        ],
      },
    },
    ...ContractFieldsFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<SaleCreatedFieldsFragment, unknown>;
export const EmissionManagerMarketsCreatedSinceDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "EmissionManagerMarketsCreatedSince" },
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
            name: { kind: "Name", value: "saleCreateds" },
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
                      name: { kind: "Name", value: "blockNumber_gt" },
                      value: { kind: "Variable", name: { kind: "Name", value: "latestBlock" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SaleCreatedFields" } }],
            },
          },
        ],
      },
    },
    ...SaleCreatedFieldsFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<EmissionManagerMarketsCreatedSinceQuery, EmissionManagerMarketsCreatedSinceQueryVariables>;
export const EmissionManagerMarketDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "EmissionManagerMarket" },
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
            name: { kind: "Name", value: "saleCreateds" },
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
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SaleCreatedFields" } }],
            },
          },
        ],
      },
    },
    ...SaleCreatedFieldsFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<EmissionManagerMarketQuery, EmissionManagerMarketQueryVariables>;
