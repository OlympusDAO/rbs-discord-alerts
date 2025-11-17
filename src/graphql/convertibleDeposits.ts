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
  BigInt: string;
  JSON: any;
};

export type Meta = {
  __typename?: "Meta";
  status?: Maybe<Scalars["JSON"]>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  _meta?: Maybe<Meta>;
  asset?: Maybe<Asset>;
  assets: AssetPage;
  auctioneer?: Maybe<Auctioneer>;
  auctioneerDepositPeriod?: Maybe<AuctioneerDepositPeriod>;
  auctioneerDepositPeriodSnapshot?: Maybe<AuctioneerDepositPeriodSnapshot>;
  auctioneerDepositPeriodSnapshots: AuctioneerDepositPeriodSnapshotPage;
  auctioneerDepositPeriods: AuctioneerDepositPeriodPage;
  auctioneerSnapshot?: Maybe<AuctioneerSnapshot>;
  auctioneerSnapshots: AuctioneerSnapshotPage;
  auctioneers: AuctioneerPage;
  convertibleDepositAuctioneerAuctionParametersUpdated?: Maybe<ConvertibleDepositAuctioneerAuctionParametersUpdated>;
  convertibleDepositAuctioneerAuctionParametersUpdateds: ConvertibleDepositAuctioneerAuctionParametersUpdatedPage;
  convertibleDepositAuctioneerAuctionResult?: Maybe<ConvertibleDepositAuctioneerAuctionResult>;
  convertibleDepositAuctioneerAuctionResults: ConvertibleDepositAuctioneerAuctionResultPage;
  convertibleDepositAuctioneerAuctionTrackingPeriodUpdated?: Maybe<ConvertibleDepositAuctioneerAuctionTrackingPeriodUpdated>;
  convertibleDepositAuctioneerAuctionTrackingPeriodUpdateds: ConvertibleDepositAuctioneerAuctionTrackingPeriodUpdatedPage;
  convertibleDepositAuctioneerBid?: Maybe<ConvertibleDepositAuctioneerBid>;
  convertibleDepositAuctioneerBids: ConvertibleDepositAuctioneerBidPage;
  convertibleDepositAuctioneerDepositPeriodDisableQueued?: Maybe<ConvertibleDepositAuctioneerDepositPeriodDisableQueued>;
  convertibleDepositAuctioneerDepositPeriodDisableQueueds: ConvertibleDepositAuctioneerDepositPeriodDisableQueuedPage;
  convertibleDepositAuctioneerDepositPeriodDisabled?: Maybe<ConvertibleDepositAuctioneerDepositPeriodDisabled>;
  convertibleDepositAuctioneerDepositPeriodDisableds: ConvertibleDepositAuctioneerDepositPeriodDisabledPage;
  convertibleDepositAuctioneerDepositPeriodEnableQueued?: Maybe<ConvertibleDepositAuctioneerDepositPeriodEnableQueued>;
  convertibleDepositAuctioneerDepositPeriodEnableQueueds: ConvertibleDepositAuctioneerDepositPeriodEnableQueuedPage;
  convertibleDepositAuctioneerDepositPeriodEnabled?: Maybe<ConvertibleDepositAuctioneerDepositPeriodEnabled>;
  convertibleDepositAuctioneerDepositPeriodEnableds: ConvertibleDepositAuctioneerDepositPeriodEnabledPage;
  convertibleDepositAuctioneerDisabled?: Maybe<ConvertibleDepositAuctioneerDisabled>;
  convertibleDepositAuctioneerDisableds: ConvertibleDepositAuctioneerDisabledPage;
  convertibleDepositAuctioneerEnabled?: Maybe<ConvertibleDepositAuctioneerEnabled>;
  convertibleDepositAuctioneerEnableds: ConvertibleDepositAuctioneerEnabledPage;
  convertibleDepositAuctioneerTickStepUpdated?: Maybe<ConvertibleDepositAuctioneerTickStepUpdated>;
  convertibleDepositAuctioneerTickStepUpdateds: ConvertibleDepositAuctioneerTickStepUpdatedPage;
  convertibleDepositFacilityAssetCommitCancelled?: Maybe<ConvertibleDepositFacilityAssetCommitCancelled>;
  convertibleDepositFacilityAssetCommitCancelleds: ConvertibleDepositFacilityAssetCommitCancelledPage;
  convertibleDepositFacilityAssetCommitWithdrawn?: Maybe<ConvertibleDepositFacilityAssetCommitWithdrawn>;
  convertibleDepositFacilityAssetCommitWithdrawns: ConvertibleDepositFacilityAssetCommitWithdrawnPage;
  convertibleDepositFacilityAssetCommitted?: Maybe<ConvertibleDepositFacilityAssetCommitted>;
  convertibleDepositFacilityAssetCommitteds: ConvertibleDepositFacilityAssetCommittedPage;
  convertibleDepositFacilityAssetPeriodReclaimRateSet?: Maybe<ConvertibleDepositFacilityAssetPeriodReclaimRateSet>;
  convertibleDepositFacilityAssetPeriodReclaimRateSets: ConvertibleDepositFacilityAssetPeriodReclaimRateSetPage;
  convertibleDepositFacilityClaimAllYieldFailed?: Maybe<ConvertibleDepositFacilityClaimAllYieldFailed>;
  convertibleDepositFacilityClaimAllYieldFaileds: ConvertibleDepositFacilityClaimAllYieldFailedPage;
  convertibleDepositFacilityClaimedYield?: Maybe<ConvertibleDepositFacilityClaimedYield>;
  convertibleDepositFacilityClaimedYields: ConvertibleDepositFacilityClaimedYieldPage;
  convertibleDepositFacilityConvertedDeposit?: Maybe<ConvertibleDepositFacilityConvertedDeposit>;
  convertibleDepositFacilityConvertedDeposits: ConvertibleDepositFacilityConvertedDepositPage;
  convertibleDepositFacilityConvertedDepositss: ConvertibleDepositFacilityConvertedDepositsPage;
  convertibleDepositFacilityCreatedDeposit?: Maybe<ConvertibleDepositFacilityCreatedDeposit>;
  convertibleDepositFacilityCreatedDeposits: ConvertibleDepositFacilityCreatedDepositPage;
  convertibleDepositFacilityDisabled?: Maybe<ConvertibleDepositFacilityDisabled>;
  convertibleDepositFacilityDisableds: ConvertibleDepositFacilityDisabledPage;
  convertibleDepositFacilityEnabled?: Maybe<ConvertibleDepositFacilityEnabled>;
  convertibleDepositFacilityEnableds: ConvertibleDepositFacilityEnabledPage;
  convertibleDepositFacilityOperatorAuthorized?: Maybe<ConvertibleDepositFacilityOperatorAuthorized>;
  convertibleDepositFacilityOperatorAuthorizeds: ConvertibleDepositFacilityOperatorAuthorizedPage;
  convertibleDepositFacilityOperatorDeauthorized?: Maybe<ConvertibleDepositFacilityOperatorDeauthorized>;
  convertibleDepositFacilityOperatorDeauthorizeds: ConvertibleDepositFacilityOperatorDeauthorizedPage;
  convertibleDepositFacilityReclaimed?: Maybe<ConvertibleDepositFacilityReclaimed>;
  convertibleDepositFacilityReclaimeds: ConvertibleDepositFacilityReclaimedPage;
  convertibleDepositPosition?: Maybe<ConvertibleDepositPosition>;
  convertibleDepositPositions: ConvertibleDepositPositionPage;
  depositAsset?: Maybe<DepositAsset>;
  depositAssetPeriod?: Maybe<DepositAssetPeriod>;
  depositAssetPeriods: DepositAssetPeriodPage;
  depositAssets: DepositAssetPage;
  depositFacility?: Maybe<DepositFacility>;
  depositFacilityAsset?: Maybe<DepositFacilityAsset>;
  depositFacilityAssetPeriod?: Maybe<DepositFacilityAssetPeriod>;
  depositFacilityAssetPeriods: DepositFacilityAssetPeriodPage;
  depositFacilityAssetSnapshot?: Maybe<DepositFacilityAssetSnapshot>;
  depositFacilityAssetSnapshots: DepositFacilityAssetSnapshotPage;
  depositFacilityAssets: DepositFacilityAssetPage;
  depositFacilitys: DepositFacilityPage;
  depositRedemptionVault?: Maybe<DepositRedemptionVault>;
  depositRedemptionVaultAnnualInterestRateSet?: Maybe<DepositRedemptionVaultAnnualInterestRateSet>;
  depositRedemptionVaultAnnualInterestRateSets: DepositRedemptionVaultAnnualInterestRateSetPage;
  depositRedemptionVaultAssetConfiguration?: Maybe<DepositRedemptionVaultAssetConfiguration>;
  depositRedemptionVaultAssetConfigurations: DepositRedemptionVaultAssetConfigurationPage;
  depositRedemptionVaultClaimDefaultRewardPercentageSet?: Maybe<DepositRedemptionVaultClaimDefaultRewardPercentageSet>;
  depositRedemptionVaultClaimDefaultRewardPercentageSets: DepositRedemptionVaultClaimDefaultRewardPercentageSetPage;
  depositRedemptionVaultDisabled?: Maybe<DepositRedemptionVaultDisabled>;
  depositRedemptionVaultDisableds: DepositRedemptionVaultDisabledPage;
  depositRedemptionVaultEnabled?: Maybe<DepositRedemptionVaultEnabled>;
  depositRedemptionVaultEnableds: DepositRedemptionVaultEnabledPage;
  depositRedemptionVaultFacilityAuthorized?: Maybe<DepositRedemptionVaultFacilityAuthorized>;
  depositRedemptionVaultFacilityAuthorizeds: DepositRedemptionVaultFacilityAuthorizedPage;
  depositRedemptionVaultFacilityDeauthorized?: Maybe<DepositRedemptionVaultFacilityDeauthorized>;
  depositRedemptionVaultFacilityDeauthorizeds: DepositRedemptionVaultFacilityDeauthorizedPage;
  depositRedemptionVaultLoanCreated?: Maybe<DepositRedemptionVaultLoanCreated>;
  depositRedemptionVaultLoanCreateds: DepositRedemptionVaultLoanCreatedPage;
  depositRedemptionVaultLoanDefaulted?: Maybe<DepositRedemptionVaultLoanDefaulted>;
  depositRedemptionVaultLoanDefaulteds: DepositRedemptionVaultLoanDefaultedPage;
  depositRedemptionVaultLoanExtended?: Maybe<DepositRedemptionVaultLoanExtended>;
  depositRedemptionVaultLoanExtendeds: DepositRedemptionVaultLoanExtendedPage;
  depositRedemptionVaultLoanRepaid?: Maybe<DepositRedemptionVaultLoanRepaid>;
  depositRedemptionVaultLoanRepaids: DepositRedemptionVaultLoanRepaidPage;
  depositRedemptionVaultMaxBorrowPercentageSet?: Maybe<DepositRedemptionVaultMaxBorrowPercentageSet>;
  depositRedemptionVaultMaxBorrowPercentageSets: DepositRedemptionVaultMaxBorrowPercentageSetPage;
  depositRedemptionVaultRedemptionCancelled?: Maybe<DepositRedemptionVaultRedemptionCancelled>;
  depositRedemptionVaultRedemptionCancelleds: DepositRedemptionVaultRedemptionCancelledPage;
  depositRedemptionVaultRedemptionFinished?: Maybe<DepositRedemptionVaultRedemptionFinished>;
  depositRedemptionVaultRedemptionFinisheds: DepositRedemptionVaultRedemptionFinishedPage;
  depositRedemptionVaultRedemptionStarted?: Maybe<DepositRedemptionVaultRedemptionStarted>;
  depositRedemptionVaultRedemptionStarteds: DepositRedemptionVaultRedemptionStartedPage;
  depositRedemptionVaults: DepositRedemptionVaultPage;
  depositor?: Maybe<Depositor>;
  depositors: DepositorPage;
  emissionManager?: Maybe<EmissionManager>;
  emissionManagerBackingChanged?: Maybe<EmissionManagerBackingChanged>;
  emissionManagerBackingChangeds: EmissionManagerBackingChangedPage;
  emissionManagerBackingUpdated?: Maybe<EmissionManagerBackingUpdated>;
  emissionManagerBackingUpdateds: EmissionManagerBackingUpdatedPage;
  emissionManagerBaseRateChanged?: Maybe<EmissionManagerBaseRateChanged>;
  emissionManagerBaseRateChangeds: EmissionManagerBaseRateChangedPage;
  emissionManagerBondContractsSet?: Maybe<EmissionManagerBondContractsSet>;
  emissionManagerBondContractsSets: EmissionManagerBondContractsSetPage;
  emissionManagerBondMarketCapacityScalarChanged?: Maybe<EmissionManagerBondMarketCapacityScalarChanged>;
  emissionManagerBondMarketCapacityScalarChangeds: EmissionManagerBondMarketCapacityScalarChangedPage;
  emissionManagerBondMarketCreated?: Maybe<EmissionManagerBondMarketCreated>;
  emissionManagerBondMarketCreateds: EmissionManagerBondMarketCreatedPage;
  emissionManagerBondMarketCreationFailed?: Maybe<EmissionManagerBondMarketCreationFailed>;
  emissionManagerBondMarketCreationFaileds: EmissionManagerBondMarketCreationFailedPage;
  emissionManagerConvertibleDepositAuctioneerSet?: Maybe<EmissionManagerConvertibleDepositAuctioneerSet>;
  emissionManagerConvertibleDepositAuctioneerSets: EmissionManagerConvertibleDepositAuctioneerSetPage;
  emissionManagerDisabled?: Maybe<EmissionManagerDisabled>;
  emissionManagerDisableds: EmissionManagerDisabledPage;
  emissionManagerEnabled?: Maybe<EmissionManagerEnabled>;
  emissionManagerEnableds: EmissionManagerEnabledPage;
  emissionManagerMinPriceScalarChanged?: Maybe<EmissionManagerMinPriceScalarChanged>;
  emissionManagerMinPriceScalarChangeds: EmissionManagerMinPriceScalarChangedPage;
  emissionManagerMinimumPremiumChanged?: Maybe<EmissionManagerMinimumPremiumChanged>;
  emissionManagerMinimumPremiumChangeds: EmissionManagerMinimumPremiumChangedPage;
  emissionManagerRestartTimeframeChanged?: Maybe<EmissionManagerRestartTimeframeChanged>;
  emissionManagerRestartTimeframeChangeds: EmissionManagerRestartTimeframeChangedPage;
  emissionManagerTickSizeChanged?: Maybe<EmissionManagerTickSizeChanged>;
  emissionManagerTickSizeChangeds: EmissionManagerTickSizeChangedPage;
  emissionManagerVestingPeriodChanged?: Maybe<EmissionManagerVestingPeriodChanged>;
  emissionManagerVestingPeriodChangeds: EmissionManagerVestingPeriodChangedPage;
  emissionManagers: EmissionManagerPage;
  receiptToken?: Maybe<ReceiptToken>;
  receiptTokens: ReceiptTokenPage;
  redemption?: Maybe<Redemption>;
  redemptionLoan?: Maybe<RedemptionLoan>;
  redemptionLoans: RedemptionLoanPage;
  redemptions: RedemptionPage;
};

export type QueryAssetArgs = {
  address: Scalars["String"];
  chainId: Scalars["Float"];
};

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryAuctioneerArgs = {
  address: Scalars["String"];
  chainId: Scalars["Float"];
};

export type QueryAuctioneerDepositPeriodArgs = {
  auctioneer: Scalars["String"];
  chainId: Scalars["Float"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Float"];
};

export type QueryAuctioneerDepositPeriodSnapshotArgs = {
  auctioneer: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Float"];
};

export type QueryAuctioneerDepositPeriodSnapshotsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<AuctioneerDepositPeriodSnapshotFilter>;
};

export type QueryAuctioneerDepositPeriodsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<AuctioneerDepositPeriodFilter>;
};

export type QueryAuctioneerSnapshotArgs = {
  auctioneer: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
};

export type QueryAuctioneerSnapshotsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<AuctioneerSnapshotFilter>;
};

export type QueryAuctioneersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<AuctioneerFilter>;
};

export type QueryConvertibleDepositAuctioneerAuctionParametersUpdatedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositAuctioneerAuctionParametersUpdatedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerAuctionParametersUpdatedFilter>;
};

export type QueryConvertibleDepositAuctioneerAuctionResultArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositAuctioneerAuctionResultsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerAuctionResultFilter>;
};

export type QueryConvertibleDepositAuctioneerAuctionTrackingPeriodUpdatedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositAuctioneerAuctionTrackingPeriodUpdatedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerAuctionTrackingPeriodUpdatedFilter>;
};

export type QueryConvertibleDepositAuctioneerBidArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositAuctioneerBidsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerBidFilter>;
};

export type QueryConvertibleDepositAuctioneerDepositPeriodDisableQueuedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositAuctioneerDepositPeriodDisableQueuedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerDepositPeriodDisableQueuedFilter>;
};

export type QueryConvertibleDepositAuctioneerDepositPeriodDisabledArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositAuctioneerDepositPeriodDisabledsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerDepositPeriodDisabledFilter>;
};

export type QueryConvertibleDepositAuctioneerDepositPeriodEnableQueuedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositAuctioneerDepositPeriodEnableQueuedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerDepositPeriodEnableQueuedFilter>;
};

export type QueryConvertibleDepositAuctioneerDepositPeriodEnabledArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositAuctioneerDepositPeriodEnabledsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerDepositPeriodEnabledFilter>;
};

export type QueryConvertibleDepositAuctioneerDisabledArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositAuctioneerDisabledsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerDisabledFilter>;
};

export type QueryConvertibleDepositAuctioneerEnabledArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositAuctioneerEnabledsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerEnabledFilter>;
};

export type QueryConvertibleDepositAuctioneerTickStepUpdatedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositAuctioneerTickStepUpdatedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerTickStepUpdatedFilter>;
};

export type QueryConvertibleDepositFacilityAssetCommitCancelledArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositFacilityAssetCommitCancelledsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityAssetCommitCancelledFilter>;
};

export type QueryConvertibleDepositFacilityAssetCommitWithdrawnArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositFacilityAssetCommitWithdrawnsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityAssetCommitWithdrawnFilter>;
};

export type QueryConvertibleDepositFacilityAssetCommittedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositFacilityAssetCommittedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityAssetCommittedFilter>;
};

export type QueryConvertibleDepositFacilityAssetPeriodReclaimRateSetArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositFacilityAssetPeriodReclaimRateSetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityAssetPeriodReclaimRateSetFilter>;
};

export type QueryConvertibleDepositFacilityClaimAllYieldFailedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositFacilityClaimAllYieldFailedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityClaimAllYieldFailedFilter>;
};

export type QueryConvertibleDepositFacilityClaimedYieldArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositFacilityClaimedYieldsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityClaimedYieldFilter>;
};

export type QueryConvertibleDepositFacilityConvertedDepositArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositFacilityConvertedDepositsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityConvertedDepositFilter>;
};

export type QueryConvertibleDepositFacilityConvertedDepositssArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityConvertedDepositsFilter>;
};

export type QueryConvertibleDepositFacilityCreatedDepositArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositFacilityCreatedDepositsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityCreatedDepositFilter>;
};

export type QueryConvertibleDepositFacilityDisabledArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositFacilityDisabledsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityDisabledFilter>;
};

export type QueryConvertibleDepositFacilityEnabledArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositFacilityEnabledsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityEnabledFilter>;
};

export type QueryConvertibleDepositFacilityOperatorAuthorizedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositFacilityOperatorAuthorizedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityOperatorAuthorizedFilter>;
};

export type QueryConvertibleDepositFacilityOperatorDeauthorizedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositFacilityOperatorDeauthorizedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityOperatorDeauthorizedFilter>;
};

export type QueryConvertibleDepositFacilityReclaimedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryConvertibleDepositFacilityReclaimedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityReclaimedFilter>;
};

export type QueryConvertibleDepositPositionArgs = {
  chainId: Scalars["Float"];
  positionId: Scalars["BigInt"];
};

export type QueryConvertibleDepositPositionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositPositionFilter>;
};

export type QueryDepositAssetArgs = {
  asset: Scalars["String"];
  chainId: Scalars["Float"];
};

export type QueryDepositAssetPeriodArgs = {
  chainId: Scalars["Float"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Float"];
};

export type QueryDepositAssetPeriodsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositAssetPeriodFilter>;
};

export type QueryDepositAssetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositAssetFilter>;
};

export type QueryDepositFacilityArgs = {
  address: Scalars["String"];
  chainId: Scalars["Float"];
};

export type QueryDepositFacilityAssetArgs = {
  chainId: Scalars["Float"];
  depositAsset: Scalars["String"];
  facility: Scalars["String"];
};

export type QueryDepositFacilityAssetPeriodArgs = {
  chainId: Scalars["Float"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Float"];
  facility: Scalars["String"];
};

export type QueryDepositFacilityAssetPeriodsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositFacilityAssetPeriodFilter>;
};

export type QueryDepositFacilityAssetSnapshotArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  depositAsset: Scalars["String"];
  facility: Scalars["String"];
};

export type QueryDepositFacilityAssetSnapshotsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositFacilityAssetSnapshotFilter>;
};

export type QueryDepositFacilityAssetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositFacilityAssetFilter>;
};

export type QueryDepositFacilitysArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositFacilityFilter>;
};

export type QueryDepositRedemptionVaultArgs = {
  address: Scalars["String"];
  chainId: Scalars["Float"];
};

export type QueryDepositRedemptionVaultAnnualInterestRateSetArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryDepositRedemptionVaultAnnualInterestRateSetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultAnnualInterestRateSetFilter>;
};

export type QueryDepositRedemptionVaultAssetConfigurationArgs = {
  chainId: Scalars["Float"];
  depositAsset: Scalars["String"];
  facility: Scalars["String"];
  redemptionVault: Scalars["String"];
};

export type QueryDepositRedemptionVaultAssetConfigurationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultAssetConfigurationFilter>;
};

export type QueryDepositRedemptionVaultClaimDefaultRewardPercentageSetArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryDepositRedemptionVaultClaimDefaultRewardPercentageSetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultClaimDefaultRewardPercentageSetFilter>;
};

export type QueryDepositRedemptionVaultDisabledArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryDepositRedemptionVaultDisabledsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultDisabledFilter>;
};

export type QueryDepositRedemptionVaultEnabledArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryDepositRedemptionVaultEnabledsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultEnabledFilter>;
};

export type QueryDepositRedemptionVaultFacilityAuthorizedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryDepositRedemptionVaultFacilityAuthorizedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultFacilityAuthorizedFilter>;
};

export type QueryDepositRedemptionVaultFacilityDeauthorizedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryDepositRedemptionVaultFacilityDeauthorizedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultFacilityDeauthorizedFilter>;
};

export type QueryDepositRedemptionVaultLoanCreatedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryDepositRedemptionVaultLoanCreatedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultLoanCreatedFilter>;
};

export type QueryDepositRedemptionVaultLoanDefaultedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryDepositRedemptionVaultLoanDefaultedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultLoanDefaultedFilter>;
};

export type QueryDepositRedemptionVaultLoanExtendedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryDepositRedemptionVaultLoanExtendedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultLoanExtendedFilter>;
};

export type QueryDepositRedemptionVaultLoanRepaidArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryDepositRedemptionVaultLoanRepaidsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultLoanRepaidFilter>;
};

export type QueryDepositRedemptionVaultMaxBorrowPercentageSetArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryDepositRedemptionVaultMaxBorrowPercentageSetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultMaxBorrowPercentageSetFilter>;
};

export type QueryDepositRedemptionVaultRedemptionCancelledArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryDepositRedemptionVaultRedemptionCancelledsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultRedemptionCancelledFilter>;
};

export type QueryDepositRedemptionVaultRedemptionFinishedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryDepositRedemptionVaultRedemptionFinishedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultRedemptionFinishedFilter>;
};

export type QueryDepositRedemptionVaultRedemptionStartedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryDepositRedemptionVaultRedemptionStartedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultRedemptionStartedFilter>;
};

export type QueryDepositRedemptionVaultsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultFilter>;
};

export type QueryDepositorArgs = {
  address: Scalars["String"];
  chainId: Scalars["Float"];
};

export type QueryDepositorsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositorFilter>;
};

export type QueryEmissionManagerArgs = {
  address: Scalars["String"];
  chainId: Scalars["Float"];
};

export type QueryEmissionManagerBackingChangedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryEmissionManagerBackingChangedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerBackingChangedFilter>;
};

export type QueryEmissionManagerBackingUpdatedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryEmissionManagerBackingUpdatedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerBackingUpdatedFilter>;
};

export type QueryEmissionManagerBaseRateChangedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryEmissionManagerBaseRateChangedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerBaseRateChangedFilter>;
};

export type QueryEmissionManagerBondContractsSetArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryEmissionManagerBondContractsSetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerBondContractsSetFilter>;
};

export type QueryEmissionManagerBondMarketCapacityScalarChangedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryEmissionManagerBondMarketCapacityScalarChangedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerBondMarketCapacityScalarChangedFilter>;
};

export type QueryEmissionManagerBondMarketCreatedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryEmissionManagerBondMarketCreatedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerBondMarketCreatedFilter>;
};

export type QueryEmissionManagerBondMarketCreationFailedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryEmissionManagerBondMarketCreationFailedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerBondMarketCreationFailedFilter>;
};

export type QueryEmissionManagerConvertibleDepositAuctioneerSetArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryEmissionManagerConvertibleDepositAuctioneerSetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerConvertibleDepositAuctioneerSetFilter>;
};

export type QueryEmissionManagerDisabledArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryEmissionManagerDisabledsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerDisabledFilter>;
};

export type QueryEmissionManagerEnabledArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryEmissionManagerEnabledsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerEnabledFilter>;
};

export type QueryEmissionManagerMinPriceScalarChangedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryEmissionManagerMinPriceScalarChangedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerMinPriceScalarChangedFilter>;
};

export type QueryEmissionManagerMinimumPremiumChangedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryEmissionManagerMinimumPremiumChangedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerMinimumPremiumChangedFilter>;
};

export type QueryEmissionManagerRestartTimeframeChangedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryEmissionManagerRestartTimeframeChangedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerRestartTimeframeChangedFilter>;
};

export type QueryEmissionManagerTickSizeChangedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryEmissionManagerTickSizeChangedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerTickSizeChangedFilter>;
};

export type QueryEmissionManagerVestingPeriodChangedArgs = {
  block: Scalars["BigInt"];
  chainId: Scalars["Float"];
  logIndex: Scalars["Float"];
};

export type QueryEmissionManagerVestingPeriodChangedsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerVestingPeriodChangedFilter>;
};

export type QueryEmissionManagersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerFilter>;
};

export type QueryReceiptTokenArgs = {
  chainId: Scalars["Float"];
  receiptTokenId: Scalars["BigInt"];
  receiptTokenManager: Scalars["String"];
};

export type QueryReceiptTokensArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ReceiptTokenFilter>;
};

export type QueryRedemptionArgs = {
  chainId: Scalars["Float"];
  depositor: Scalars["String"];
  redemptionId: Scalars["Float"];
  redemptionVault: Scalars["String"];
};

export type QueryRedemptionLoanArgs = {
  chainId: Scalars["Float"];
  depositor: Scalars["String"];
  redemptionId: Scalars["Float"];
  redemptionVault: Scalars["String"];
};

export type QueryRedemptionLoansArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<RedemptionLoanFilter>;
};

export type QueryRedemptionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<RedemptionFilter>;
};

export type ViewPageInfo = {
  __typename?: "ViewPageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
};

export type Asset = {
  __typename?: "asset";
  address: Scalars["String"];
  chainId: Scalars["Int"];
  decimals: Scalars["Int"];
  depositAssets?: Maybe<DepositAssetPage>;
  name: Scalars["String"];
  symbol: Scalars["String"];
};

export type AssetDepositAssetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositAssetFilter>;
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  address?: InputMaybe<Scalars["String"]>;
  address_contains?: InputMaybe<Scalars["String"]>;
  address_ends_with?: InputMaybe<Scalars["String"]>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  address_not?: InputMaybe<Scalars["String"]>;
  address_not_contains?: InputMaybe<Scalars["String"]>;
  address_not_ends_with?: InputMaybe<Scalars["String"]>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  address_not_starts_with?: InputMaybe<Scalars["String"]>;
  address_starts_with?: InputMaybe<Scalars["String"]>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  decimals?: InputMaybe<Scalars["Int"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]>;
  decimals_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  decimals_lt?: InputMaybe<Scalars["Int"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]>;
  decimals_not?: InputMaybe<Scalars["Int"]>;
  decimals_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  symbol_contains?: InputMaybe<Scalars["String"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  symbol_not?: InputMaybe<Scalars["String"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]>;
};

export type AssetPage = {
  __typename?: "assetPage";
  items: Array<Asset>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type Auctioneer = {
  __typename?: "auctioneer";
  address: Scalars["String"];
  auctionParametersUpdatedEvents?: Maybe<ConvertibleDepositAuctioneerAuctionParametersUpdatedPage>;
  auctionResultEvents?: Maybe<ConvertibleDepositAuctioneerAuctionResultPage>;
  auctionTrackingPeriod: Scalars["Int"];
  auctionTrackingPeriodUpdatedEvents?: Maybe<ConvertibleDepositAuctioneerAuctionTrackingPeriodUpdatedPage>;
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  depositPeriodDisableQueuedEvents?: Maybe<ConvertibleDepositAuctioneerDepositPeriodDisableQueuedPage>;
  depositPeriodDisabledEvents?: Maybe<ConvertibleDepositAuctioneerDepositPeriodDisabledPage>;
  depositPeriodEnableQueuedEvents?: Maybe<ConvertibleDepositAuctioneerDepositPeriodEnableQueuedPage>;
  depositPeriodEnabledEvents?: Maybe<ConvertibleDepositAuctioneerDepositPeriodEnabledPage>;
  depositPeriods?: Maybe<AuctioneerDepositPeriodPage>;
  disabledEvents?: Maybe<ConvertibleDepositAuctioneerDisabledPage>;
  enabled: Scalars["Boolean"];
  enabledEvents?: Maybe<ConvertibleDepositAuctioneerEnabledPage>;
  majorVersion: Scalars["Int"];
  minorVersion: Scalars["Int"];
  rDepositAsset?: Maybe<DepositAsset>;
  rEmissionManagers?: Maybe<EmissionManagerPage>;
  snapshots?: Maybe<AuctioneerSnapshotPage>;
  tickStep: Scalars["BigInt"];
  tickStepDecimal: Scalars["String"];
  tickStepUpdatedEvents?: Maybe<ConvertibleDepositAuctioneerTickStepUpdatedPage>;
};

export type AuctioneerAuctionParametersUpdatedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerAuctionParametersUpdatedFilter>;
};

export type AuctioneerAuctionResultEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerAuctionResultFilter>;
};

export type AuctioneerAuctionTrackingPeriodUpdatedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerAuctionTrackingPeriodUpdatedFilter>;
};

export type AuctioneerDepositPeriodDisableQueuedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerDepositPeriodDisableQueuedFilter>;
};

export type AuctioneerDepositPeriodDisabledEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerDepositPeriodDisabledFilter>;
};

export type AuctioneerDepositPeriodEnableQueuedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerDepositPeriodEnableQueuedFilter>;
};

export type AuctioneerDepositPeriodEnabledEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerDepositPeriodEnabledFilter>;
};

export type AuctioneerDepositPeriodsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<AuctioneerDepositPeriodFilter>;
};

export type AuctioneerDisabledEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerDisabledFilter>;
};

export type AuctioneerEnabledEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerEnabledFilter>;
};

export type AuctioneerREmissionManagersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerFilter>;
};

export type AuctioneerSnapshotsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<AuctioneerSnapshotFilter>;
};

export type AuctioneerTickStepUpdatedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerTickStepUpdatedFilter>;
};

export type AuctioneerDepositPeriod = {
  __typename?: "auctioneerDepositPeriod";
  auctioneer: Scalars["String"];
  bidEvents?: Maybe<ConvertibleDepositAuctioneerBidPage>;
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  enabled: Scalars["Boolean"];
  rAssetPeriod?: Maybe<DepositAssetPeriod>;
  rAuctioneer?: Maybe<Auctioneer>;
  snapshots?: Maybe<AuctioneerDepositPeriodSnapshotPage>;
};

export type AuctioneerDepositPeriodBidEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerBidFilter>;
};

export type AuctioneerDepositPeriodSnapshotsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<AuctioneerDepositPeriodSnapshotFilter>;
};

export type AuctioneerDepositPeriodFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuctioneerDepositPeriodFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuctioneerDepositPeriodFilter>>>;
  auctioneer?: InputMaybe<Scalars["String"]>;
  auctioneer_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not?: InputMaybe<Scalars["String"]>;
  auctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  auctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  enabled?: InputMaybe<Scalars["Boolean"]>;
  enabled_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  enabled_not?: InputMaybe<Scalars["Boolean"]>;
  enabled_not_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
};

export type AuctioneerDepositPeriodPage = {
  __typename?: "auctioneerDepositPeriodPage";
  items: Array<AuctioneerDepositPeriod>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type AuctioneerDepositPeriodSnapshot = {
  __typename?: "auctioneerDepositPeriodSnapshot";
  auctioneer: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  currentTickCapacity: Scalars["BigInt"];
  currentTickCapacityDecimal: Scalars["String"];
  currentTickPrice: Scalars["BigInt"];
  currentTickPriceDecimal: Scalars["String"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  rAssetPeriod?: Maybe<DepositAssetPeriod>;
  rAuctioneer?: Maybe<Auctioneer>;
  rAuctioneerDepositPeriod?: Maybe<AuctioneerDepositPeriod>;
  rAuctioneerSnapshot?: Maybe<AuctioneerSnapshot>;
  timestamp: Scalars["BigInt"];
};

export type AuctioneerDepositPeriodSnapshotFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuctioneerDepositPeriodSnapshotFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuctioneerDepositPeriodSnapshotFilter>>>;
  auctioneer?: InputMaybe<Scalars["String"]>;
  auctioneer_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not?: InputMaybe<Scalars["String"]>;
  auctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  auctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  currentTickCapacity?: InputMaybe<Scalars["BigInt"]>;
  currentTickCapacityDecimal?: InputMaybe<Scalars["String"]>;
  currentTickCapacityDecimal_contains?: InputMaybe<Scalars["String"]>;
  currentTickCapacityDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  currentTickCapacityDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  currentTickCapacityDecimal_not?: InputMaybe<Scalars["String"]>;
  currentTickCapacityDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  currentTickCapacityDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  currentTickCapacityDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  currentTickCapacityDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  currentTickCapacityDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  currentTickCapacity_gt?: InputMaybe<Scalars["BigInt"]>;
  currentTickCapacity_gte?: InputMaybe<Scalars["BigInt"]>;
  currentTickCapacity_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  currentTickCapacity_lt?: InputMaybe<Scalars["BigInt"]>;
  currentTickCapacity_lte?: InputMaybe<Scalars["BigInt"]>;
  currentTickCapacity_not?: InputMaybe<Scalars["BigInt"]>;
  currentTickCapacity_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  currentTickPrice?: InputMaybe<Scalars["BigInt"]>;
  currentTickPriceDecimal?: InputMaybe<Scalars["String"]>;
  currentTickPriceDecimal_contains?: InputMaybe<Scalars["String"]>;
  currentTickPriceDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  currentTickPriceDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  currentTickPriceDecimal_not?: InputMaybe<Scalars["String"]>;
  currentTickPriceDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  currentTickPriceDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  currentTickPriceDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  currentTickPriceDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  currentTickPriceDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  currentTickPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  currentTickPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  currentTickPrice_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  currentTickPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  currentTickPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  currentTickPrice_not?: InputMaybe<Scalars["BigInt"]>;
  currentTickPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
};

export type AuctioneerDepositPeriodSnapshotPage = {
  __typename?: "auctioneerDepositPeriodSnapshotPage";
  items: Array<AuctioneerDepositPeriodSnapshot>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type AuctioneerFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuctioneerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuctioneerFilter>>>;
  address?: InputMaybe<Scalars["String"]>;
  address_contains?: InputMaybe<Scalars["String"]>;
  address_ends_with?: InputMaybe<Scalars["String"]>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  address_not?: InputMaybe<Scalars["String"]>;
  address_not_contains?: InputMaybe<Scalars["String"]>;
  address_not_ends_with?: InputMaybe<Scalars["String"]>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  address_not_starts_with?: InputMaybe<Scalars["String"]>;
  address_starts_with?: InputMaybe<Scalars["String"]>;
  auctionTrackingPeriod?: InputMaybe<Scalars["Int"]>;
  auctionTrackingPeriod_gt?: InputMaybe<Scalars["Int"]>;
  auctionTrackingPeriod_gte?: InputMaybe<Scalars["Int"]>;
  auctionTrackingPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  auctionTrackingPeriod_lt?: InputMaybe<Scalars["Int"]>;
  auctionTrackingPeriod_lte?: InputMaybe<Scalars["Int"]>;
  auctionTrackingPeriod_not?: InputMaybe<Scalars["Int"]>;
  auctionTrackingPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  enabled?: InputMaybe<Scalars["Boolean"]>;
  enabled_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  enabled_not?: InputMaybe<Scalars["Boolean"]>;
  enabled_not_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  majorVersion?: InputMaybe<Scalars["Int"]>;
  majorVersion_gt?: InputMaybe<Scalars["Int"]>;
  majorVersion_gte?: InputMaybe<Scalars["Int"]>;
  majorVersion_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  majorVersion_lt?: InputMaybe<Scalars["Int"]>;
  majorVersion_lte?: InputMaybe<Scalars["Int"]>;
  majorVersion_not?: InputMaybe<Scalars["Int"]>;
  majorVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  minorVersion?: InputMaybe<Scalars["Int"]>;
  minorVersion_gt?: InputMaybe<Scalars["Int"]>;
  minorVersion_gte?: InputMaybe<Scalars["Int"]>;
  minorVersion_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  minorVersion_lt?: InputMaybe<Scalars["Int"]>;
  minorVersion_lte?: InputMaybe<Scalars["Int"]>;
  minorVersion_not?: InputMaybe<Scalars["Int"]>;
  minorVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  tickStep?: InputMaybe<Scalars["BigInt"]>;
  tickStepDecimal?: InputMaybe<Scalars["String"]>;
  tickStepDecimal_contains?: InputMaybe<Scalars["String"]>;
  tickStepDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  tickStepDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tickStepDecimal_not?: InputMaybe<Scalars["String"]>;
  tickStepDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  tickStepDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  tickStepDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tickStepDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  tickStepDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  tickStep_gt?: InputMaybe<Scalars["BigInt"]>;
  tickStep_gte?: InputMaybe<Scalars["BigInt"]>;
  tickStep_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  tickStep_lt?: InputMaybe<Scalars["BigInt"]>;
  tickStep_lte?: InputMaybe<Scalars["BigInt"]>;
  tickStep_not?: InputMaybe<Scalars["BigInt"]>;
  tickStep_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
};

export type AuctioneerPage = {
  __typename?: "auctioneerPage";
  items: Array<Auctioneer>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type AuctioneerSnapshot = {
  __typename?: "auctioneerSnapshot";
  auctioneer: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  dayInitTimestamp: Scalars["BigInt"];
  depositPeriodSnapshots?: Maybe<AuctioneerDepositPeriodSnapshotPage>;
  isAuctionActive: Scalars["Boolean"];
  minPrice: Scalars["BigInt"];
  minPriceDecimal: Scalars["String"];
  ohmSold: Scalars["BigInt"];
  ohmSoldDecimal: Scalars["String"];
  rAuctioneer?: Maybe<Auctioneer>;
  target: Scalars["BigInt"];
  targetDecimal: Scalars["String"];
  tickSize: Scalars["BigInt"];
  tickSizeDecimal: Scalars["String"];
  timestamp: Scalars["BigInt"];
};

export type AuctioneerSnapshotDepositPeriodSnapshotsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<AuctioneerDepositPeriodSnapshotFilter>;
};

export type AuctioneerSnapshotFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuctioneerSnapshotFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuctioneerSnapshotFilter>>>;
  auctioneer?: InputMaybe<Scalars["String"]>;
  auctioneer_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not?: InputMaybe<Scalars["String"]>;
  auctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  auctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  dayInitTimestamp?: InputMaybe<Scalars["BigInt"]>;
  dayInitTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  dayInitTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  dayInitTimestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  dayInitTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  dayInitTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  dayInitTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  dayInitTimestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  isAuctionActive?: InputMaybe<Scalars["Boolean"]>;
  isAuctionActive_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  isAuctionActive_not?: InputMaybe<Scalars["Boolean"]>;
  isAuctionActive_not_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  minPrice?: InputMaybe<Scalars["BigInt"]>;
  minPriceDecimal?: InputMaybe<Scalars["String"]>;
  minPriceDecimal_contains?: InputMaybe<Scalars["String"]>;
  minPriceDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  minPriceDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  minPriceDecimal_not?: InputMaybe<Scalars["String"]>;
  minPriceDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  minPriceDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  minPriceDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  minPriceDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  minPriceDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  minPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  minPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  minPrice_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  minPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  minPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  minPrice_not?: InputMaybe<Scalars["BigInt"]>;
  minPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  ohmSold?: InputMaybe<Scalars["BigInt"]>;
  ohmSoldDecimal?: InputMaybe<Scalars["String"]>;
  ohmSoldDecimal_contains?: InputMaybe<Scalars["String"]>;
  ohmSoldDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  ohmSoldDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  ohmSoldDecimal_not?: InputMaybe<Scalars["String"]>;
  ohmSoldDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  ohmSoldDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  ohmSoldDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  ohmSoldDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  ohmSoldDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  ohmSold_gt?: InputMaybe<Scalars["BigInt"]>;
  ohmSold_gte?: InputMaybe<Scalars["BigInt"]>;
  ohmSold_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  ohmSold_lt?: InputMaybe<Scalars["BigInt"]>;
  ohmSold_lte?: InputMaybe<Scalars["BigInt"]>;
  ohmSold_not?: InputMaybe<Scalars["BigInt"]>;
  ohmSold_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  target?: InputMaybe<Scalars["BigInt"]>;
  targetDecimal?: InputMaybe<Scalars["String"]>;
  targetDecimal_contains?: InputMaybe<Scalars["String"]>;
  targetDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  targetDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  targetDecimal_not?: InputMaybe<Scalars["String"]>;
  targetDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  targetDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  targetDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  targetDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  targetDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  target_gt?: InputMaybe<Scalars["BigInt"]>;
  target_gte?: InputMaybe<Scalars["BigInt"]>;
  target_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  target_lt?: InputMaybe<Scalars["BigInt"]>;
  target_lte?: InputMaybe<Scalars["BigInt"]>;
  target_not?: InputMaybe<Scalars["BigInt"]>;
  target_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  tickSize?: InputMaybe<Scalars["BigInt"]>;
  tickSizeDecimal?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_contains?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tickSizeDecimal_not?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tickSizeDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  tickSize_gt?: InputMaybe<Scalars["BigInt"]>;
  tickSize_gte?: InputMaybe<Scalars["BigInt"]>;
  tickSize_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  tickSize_lt?: InputMaybe<Scalars["BigInt"]>;
  tickSize_lte?: InputMaybe<Scalars["BigInt"]>;
  tickSize_not?: InputMaybe<Scalars["BigInt"]>;
  tickSize_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
};

export type AuctioneerSnapshotPage = {
  __typename?: "auctioneerSnapshotPage";
  items: Array<AuctioneerSnapshot>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositAuctioneerAuctionParametersUpdated = {
  __typename?: "convertibleDepositAuctioneerAuctionParametersUpdated";
  auctioneer: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  logIndex: Scalars["Int"];
  minPrice: Scalars["BigInt"];
  minPriceDecimal: Scalars["String"];
  rAuctioneer?: Maybe<Auctioneer>;
  rDepositAsset?: Maybe<DepositAsset>;
  target: Scalars["BigInt"];
  targetDecimal: Scalars["String"];
  tickSize: Scalars["BigInt"];
  tickSizeDecimal: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositAuctioneerAuctionParametersUpdatedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerAuctionParametersUpdatedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerAuctionParametersUpdatedFilter>>>;
  auctioneer?: InputMaybe<Scalars["String"]>;
  auctioneer_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not?: InputMaybe<Scalars["String"]>;
  auctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  auctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  minPrice?: InputMaybe<Scalars["BigInt"]>;
  minPriceDecimal?: InputMaybe<Scalars["String"]>;
  minPriceDecimal_contains?: InputMaybe<Scalars["String"]>;
  minPriceDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  minPriceDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  minPriceDecimal_not?: InputMaybe<Scalars["String"]>;
  minPriceDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  minPriceDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  minPriceDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  minPriceDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  minPriceDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  minPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  minPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  minPrice_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  minPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  minPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  minPrice_not?: InputMaybe<Scalars["BigInt"]>;
  minPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  target?: InputMaybe<Scalars["BigInt"]>;
  targetDecimal?: InputMaybe<Scalars["String"]>;
  targetDecimal_contains?: InputMaybe<Scalars["String"]>;
  targetDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  targetDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  targetDecimal_not?: InputMaybe<Scalars["String"]>;
  targetDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  targetDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  targetDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  targetDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  targetDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  target_gt?: InputMaybe<Scalars["BigInt"]>;
  target_gte?: InputMaybe<Scalars["BigInt"]>;
  target_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  target_lt?: InputMaybe<Scalars["BigInt"]>;
  target_lte?: InputMaybe<Scalars["BigInt"]>;
  target_not?: InputMaybe<Scalars["BigInt"]>;
  target_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  tickSize?: InputMaybe<Scalars["BigInt"]>;
  tickSizeDecimal?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_contains?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tickSizeDecimal_not?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tickSizeDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  tickSize_gt?: InputMaybe<Scalars["BigInt"]>;
  tickSize_gte?: InputMaybe<Scalars["BigInt"]>;
  tickSize_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  tickSize_lt?: InputMaybe<Scalars["BigInt"]>;
  tickSize_lte?: InputMaybe<Scalars["BigInt"]>;
  tickSize_not?: InputMaybe<Scalars["BigInt"]>;
  tickSize_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositAuctioneerAuctionParametersUpdatedPage = {
  __typename?: "convertibleDepositAuctioneerAuctionParametersUpdatedPage";
  items: Array<ConvertibleDepositAuctioneerAuctionParametersUpdated>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositAuctioneerAuctionResult = {
  __typename?: "convertibleDepositAuctioneerAuctionResult";
  auctioneer: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  logIndex: Scalars["Int"];
  ohmConvertible: Scalars["BigInt"];
  ohmConvertibleDecimal: Scalars["String"];
  periodIndex: Scalars["Int"];
  rAuctioneer?: Maybe<Auctioneer>;
  rDepositAsset?: Maybe<DepositAsset>;
  target: Scalars["BigInt"];
  targetDecimal: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositAuctioneerAuctionResultFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerAuctionResultFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerAuctionResultFilter>>>;
  auctioneer?: InputMaybe<Scalars["String"]>;
  auctioneer_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not?: InputMaybe<Scalars["String"]>;
  auctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  auctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  ohmConvertible?: InputMaybe<Scalars["BigInt"]>;
  ohmConvertibleDecimal?: InputMaybe<Scalars["String"]>;
  ohmConvertibleDecimal_contains?: InputMaybe<Scalars["String"]>;
  ohmConvertibleDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  ohmConvertibleDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  ohmConvertibleDecimal_not?: InputMaybe<Scalars["String"]>;
  ohmConvertibleDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  ohmConvertibleDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  ohmConvertibleDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  ohmConvertibleDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  ohmConvertibleDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  ohmConvertible_gt?: InputMaybe<Scalars["BigInt"]>;
  ohmConvertible_gte?: InputMaybe<Scalars["BigInt"]>;
  ohmConvertible_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  ohmConvertible_lt?: InputMaybe<Scalars["BigInt"]>;
  ohmConvertible_lte?: InputMaybe<Scalars["BigInt"]>;
  ohmConvertible_not?: InputMaybe<Scalars["BigInt"]>;
  ohmConvertible_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  periodIndex?: InputMaybe<Scalars["Int"]>;
  periodIndex_gt?: InputMaybe<Scalars["Int"]>;
  periodIndex_gte?: InputMaybe<Scalars["Int"]>;
  periodIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  periodIndex_lt?: InputMaybe<Scalars["Int"]>;
  periodIndex_lte?: InputMaybe<Scalars["Int"]>;
  periodIndex_not?: InputMaybe<Scalars["Int"]>;
  periodIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  target?: InputMaybe<Scalars["BigInt"]>;
  targetDecimal?: InputMaybe<Scalars["String"]>;
  targetDecimal_contains?: InputMaybe<Scalars["String"]>;
  targetDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  targetDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  targetDecimal_not?: InputMaybe<Scalars["String"]>;
  targetDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  targetDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  targetDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  targetDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  targetDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  target_gt?: InputMaybe<Scalars["BigInt"]>;
  target_gte?: InputMaybe<Scalars["BigInt"]>;
  target_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  target_lt?: InputMaybe<Scalars["BigInt"]>;
  target_lte?: InputMaybe<Scalars["BigInt"]>;
  target_not?: InputMaybe<Scalars["BigInt"]>;
  target_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositAuctioneerAuctionResultPage = {
  __typename?: "convertibleDepositAuctioneerAuctionResultPage";
  items: Array<ConvertibleDepositAuctioneerAuctionResult>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositAuctioneerAuctionTrackingPeriodUpdated = {
  __typename?: "convertibleDepositAuctioneerAuctionTrackingPeriodUpdated";
  auctionTrackingPeriod: Scalars["Int"];
  auctioneer: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  logIndex: Scalars["Int"];
  rAuctioneer?: Maybe<Auctioneer>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositAuctioneerAuctionTrackingPeriodUpdatedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerAuctionTrackingPeriodUpdatedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerAuctionTrackingPeriodUpdatedFilter>>>;
  auctionTrackingPeriod?: InputMaybe<Scalars["Int"]>;
  auctionTrackingPeriod_gt?: InputMaybe<Scalars["Int"]>;
  auctionTrackingPeriod_gte?: InputMaybe<Scalars["Int"]>;
  auctionTrackingPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  auctionTrackingPeriod_lt?: InputMaybe<Scalars["Int"]>;
  auctionTrackingPeriod_lte?: InputMaybe<Scalars["Int"]>;
  auctionTrackingPeriod_not?: InputMaybe<Scalars["Int"]>;
  auctionTrackingPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  auctioneer?: InputMaybe<Scalars["String"]>;
  auctioneer_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not?: InputMaybe<Scalars["String"]>;
  auctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  auctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositAuctioneerAuctionTrackingPeriodUpdatedPage = {
  __typename?: "convertibleDepositAuctioneerAuctionTrackingPeriodUpdatedPage";
  items: Array<ConvertibleDepositAuctioneerAuctionTrackingPeriodUpdated>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositAuctioneerBid = {
  __typename?: "convertibleDepositAuctioneerBid";
  auctioneer: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  convertedAmount: Scalars["BigInt"];
  convertedAmountDecimal: Scalars["String"];
  depositAmount: Scalars["BigInt"];
  depositAmountDecimal: Scalars["String"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  depositor: Scalars["String"];
  logIndex: Scalars["Int"];
  positionId: Scalars["BigInt"];
  rAssetPeriod?: Maybe<DepositAssetPeriod>;
  rAuctioneer?: Maybe<Auctioneer>;
  rAuctioneerDepositPeriod?: Maybe<AuctioneerDepositPeriod>;
  rDepositor?: Maybe<Depositor>;
  rPosition?: Maybe<ConvertibleDepositPosition>;
  tickCapacity: Scalars["BigInt"];
  tickCapacityDecimal: Scalars["String"];
  tickPrice: Scalars["BigInt"];
  tickPriceDecimal: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositAuctioneerBidFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerBidFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerBidFilter>>>;
  auctioneer?: InputMaybe<Scalars["String"]>;
  auctioneer_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not?: InputMaybe<Scalars["String"]>;
  auctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  auctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  convertedAmount?: InputMaybe<Scalars["BigInt"]>;
  convertedAmountDecimal?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  convertedAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  convertedAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  convertedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  convertedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  convertedAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  convertedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  convertedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  convertedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  convertedAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAmount?: InputMaybe<Scalars["BigInt"]>;
  depositAmountDecimal?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  depositAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_not?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositor?: InputMaybe<Scalars["String"]>;
  depositor_contains?: InputMaybe<Scalars["String"]>;
  depositor_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not?: InputMaybe<Scalars["String"]>;
  depositor_not_contains?: InputMaybe<Scalars["String"]>;
  depositor_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositor_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  positionId?: InputMaybe<Scalars["BigInt"]>;
  positionId_gt?: InputMaybe<Scalars["BigInt"]>;
  positionId_gte?: InputMaybe<Scalars["BigInt"]>;
  positionId_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  positionId_lt?: InputMaybe<Scalars["BigInt"]>;
  positionId_lte?: InputMaybe<Scalars["BigInt"]>;
  positionId_not?: InputMaybe<Scalars["BigInt"]>;
  positionId_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  tickCapacity?: InputMaybe<Scalars["BigInt"]>;
  tickCapacityDecimal?: InputMaybe<Scalars["String"]>;
  tickCapacityDecimal_contains?: InputMaybe<Scalars["String"]>;
  tickCapacityDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  tickCapacityDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tickCapacityDecimal_not?: InputMaybe<Scalars["String"]>;
  tickCapacityDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  tickCapacityDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  tickCapacityDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tickCapacityDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  tickCapacityDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  tickCapacity_gt?: InputMaybe<Scalars["BigInt"]>;
  tickCapacity_gte?: InputMaybe<Scalars["BigInt"]>;
  tickCapacity_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  tickCapacity_lt?: InputMaybe<Scalars["BigInt"]>;
  tickCapacity_lte?: InputMaybe<Scalars["BigInt"]>;
  tickCapacity_not?: InputMaybe<Scalars["BigInt"]>;
  tickCapacity_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  tickPrice?: InputMaybe<Scalars["BigInt"]>;
  tickPriceDecimal?: InputMaybe<Scalars["String"]>;
  tickPriceDecimal_contains?: InputMaybe<Scalars["String"]>;
  tickPriceDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  tickPriceDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tickPriceDecimal_not?: InputMaybe<Scalars["String"]>;
  tickPriceDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  tickPriceDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  tickPriceDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tickPriceDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  tickPriceDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  tickPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  tickPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  tickPrice_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  tickPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  tickPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  tickPrice_not?: InputMaybe<Scalars["BigInt"]>;
  tickPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositAuctioneerBidPage = {
  __typename?: "convertibleDepositAuctioneerBidPage";
  items: Array<ConvertibleDepositAuctioneerBid>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositAuctioneerDepositPeriodDisableQueued = {
  __typename?: "convertibleDepositAuctioneerDepositPeriodDisableQueued";
  auctioneer: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  logIndex: Scalars["Int"];
  rAssetPeriod?: Maybe<DepositAssetPeriod>;
  rAuctioneer?: Maybe<Auctioneer>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositAuctioneerDepositPeriodDisableQueuedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerDepositPeriodDisableQueuedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerDepositPeriodDisableQueuedFilter>>>;
  auctioneer?: InputMaybe<Scalars["String"]>;
  auctioneer_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not?: InputMaybe<Scalars["String"]>;
  auctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  auctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositAuctioneerDepositPeriodDisableQueuedPage = {
  __typename?: "convertibleDepositAuctioneerDepositPeriodDisableQueuedPage";
  items: Array<ConvertibleDepositAuctioneerDepositPeriodDisableQueued>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositAuctioneerDepositPeriodDisabled = {
  __typename?: "convertibleDepositAuctioneerDepositPeriodDisabled";
  auctioneer: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  logIndex: Scalars["Int"];
  rAssetPeriod?: Maybe<DepositAssetPeriod>;
  rAuctioneer?: Maybe<Auctioneer>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositAuctioneerDepositPeriodDisabledFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerDepositPeriodDisabledFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerDepositPeriodDisabledFilter>>>;
  auctioneer?: InputMaybe<Scalars["String"]>;
  auctioneer_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not?: InputMaybe<Scalars["String"]>;
  auctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  auctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositAuctioneerDepositPeriodDisabledPage = {
  __typename?: "convertibleDepositAuctioneerDepositPeriodDisabledPage";
  items: Array<ConvertibleDepositAuctioneerDepositPeriodDisabled>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositAuctioneerDepositPeriodEnableQueued = {
  __typename?: "convertibleDepositAuctioneerDepositPeriodEnableQueued";
  auctioneer: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  logIndex: Scalars["Int"];
  rAssetPeriod?: Maybe<DepositAssetPeriod>;
  rAuctioneer?: Maybe<Auctioneer>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositAuctioneerDepositPeriodEnableQueuedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerDepositPeriodEnableQueuedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerDepositPeriodEnableQueuedFilter>>>;
  auctioneer?: InputMaybe<Scalars["String"]>;
  auctioneer_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not?: InputMaybe<Scalars["String"]>;
  auctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  auctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositAuctioneerDepositPeriodEnableQueuedPage = {
  __typename?: "convertibleDepositAuctioneerDepositPeriodEnableQueuedPage";
  items: Array<ConvertibleDepositAuctioneerDepositPeriodEnableQueued>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositAuctioneerDepositPeriodEnabled = {
  __typename?: "convertibleDepositAuctioneerDepositPeriodEnabled";
  auctioneer: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  logIndex: Scalars["Int"];
  rAssetPeriod?: Maybe<DepositAssetPeriod>;
  rAuctioneer?: Maybe<Auctioneer>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositAuctioneerDepositPeriodEnabledFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerDepositPeriodEnabledFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerDepositPeriodEnabledFilter>>>;
  auctioneer?: InputMaybe<Scalars["String"]>;
  auctioneer_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not?: InputMaybe<Scalars["String"]>;
  auctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  auctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositAuctioneerDepositPeriodEnabledPage = {
  __typename?: "convertibleDepositAuctioneerDepositPeriodEnabledPage";
  items: Array<ConvertibleDepositAuctioneerDepositPeriodEnabled>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositAuctioneerDisabled = {
  __typename?: "convertibleDepositAuctioneerDisabled";
  auctioneer: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  logIndex: Scalars["Int"];
  rAuctioneer?: Maybe<Auctioneer>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositAuctioneerDisabledFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerDisabledFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerDisabledFilter>>>;
  auctioneer?: InputMaybe<Scalars["String"]>;
  auctioneer_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not?: InputMaybe<Scalars["String"]>;
  auctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  auctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositAuctioneerDisabledPage = {
  __typename?: "convertibleDepositAuctioneerDisabledPage";
  items: Array<ConvertibleDepositAuctioneerDisabled>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositAuctioneerEnabled = {
  __typename?: "convertibleDepositAuctioneerEnabled";
  auctioneer: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  logIndex: Scalars["Int"];
  rAuctioneer?: Maybe<Auctioneer>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositAuctioneerEnabledFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerEnabledFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerEnabledFilter>>>;
  auctioneer?: InputMaybe<Scalars["String"]>;
  auctioneer_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not?: InputMaybe<Scalars["String"]>;
  auctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  auctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositAuctioneerEnabledPage = {
  __typename?: "convertibleDepositAuctioneerEnabledPage";
  items: Array<ConvertibleDepositAuctioneerEnabled>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositAuctioneerTickStepUpdated = {
  __typename?: "convertibleDepositAuctioneerTickStepUpdated";
  auctioneer: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  logIndex: Scalars["Int"];
  newTickStep: Scalars["BigInt"];
  newTickStepDecimal: Scalars["String"];
  rAuctioneer?: Maybe<Auctioneer>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositAuctioneerTickStepUpdatedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerTickStepUpdatedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositAuctioneerTickStepUpdatedFilter>>>;
  auctioneer?: InputMaybe<Scalars["String"]>;
  auctioneer_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not?: InputMaybe<Scalars["String"]>;
  auctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  auctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  auctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  auctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  auctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  newTickStep?: InputMaybe<Scalars["BigInt"]>;
  newTickStepDecimal?: InputMaybe<Scalars["String"]>;
  newTickStepDecimal_contains?: InputMaybe<Scalars["String"]>;
  newTickStepDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  newTickStepDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  newTickStepDecimal_not?: InputMaybe<Scalars["String"]>;
  newTickStepDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  newTickStepDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  newTickStepDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  newTickStepDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  newTickStepDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  newTickStep_gt?: InputMaybe<Scalars["BigInt"]>;
  newTickStep_gte?: InputMaybe<Scalars["BigInt"]>;
  newTickStep_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  newTickStep_lt?: InputMaybe<Scalars["BigInt"]>;
  newTickStep_lte?: InputMaybe<Scalars["BigInt"]>;
  newTickStep_not?: InputMaybe<Scalars["BigInt"]>;
  newTickStep_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositAuctioneerTickStepUpdatedPage = {
  __typename?: "convertibleDepositAuctioneerTickStepUpdatedPage";
  items: Array<ConvertibleDepositAuctioneerTickStepUpdated>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositFacilityAssetCommitCancelled = {
  __typename?: "convertibleDepositFacilityAssetCommitCancelled";
  amount: Scalars["BigInt"];
  amountDecimal: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  committedAmount: Scalars["BigInt"];
  committedAmountDecimal: Scalars["String"];
  depositAsset: Scalars["String"];
  facility: Scalars["String"];
  logIndex: Scalars["Int"];
  operator: Scalars["String"];
  rDepositAsset?: Maybe<DepositAsset>;
  rFacility?: Maybe<DepositFacility>;
  rFacilityAsset?: Maybe<DepositFacilityAsset>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositFacilityAssetCommitCancelledFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityAssetCommitCancelledFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityAssetCommitCancelledFilter>>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amountDecimal?: InputMaybe<Scalars["String"]>;
  amountDecimal_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  committedAmount?: InputMaybe<Scalars["BigInt"]>;
  committedAmountDecimal?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  committedAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  committedAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  committedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  committedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  operator?: InputMaybe<Scalars["String"]>;
  operator_contains?: InputMaybe<Scalars["String"]>;
  operator_ends_with?: InputMaybe<Scalars["String"]>;
  operator_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  operator_not?: InputMaybe<Scalars["String"]>;
  operator_not_contains?: InputMaybe<Scalars["String"]>;
  operator_not_ends_with?: InputMaybe<Scalars["String"]>;
  operator_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  operator_not_starts_with?: InputMaybe<Scalars["String"]>;
  operator_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositFacilityAssetCommitCancelledPage = {
  __typename?: "convertibleDepositFacilityAssetCommitCancelledPage";
  items: Array<ConvertibleDepositFacilityAssetCommitCancelled>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositFacilityAssetCommitWithdrawn = {
  __typename?: "convertibleDepositFacilityAssetCommitWithdrawn";
  amount: Scalars["BigInt"];
  amountDecimal: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  committedAmount: Scalars["BigInt"];
  committedAmountDecimal: Scalars["String"];
  depositAsset: Scalars["String"];
  facility: Scalars["String"];
  logIndex: Scalars["Int"];
  operator: Scalars["String"];
  rDepositAsset?: Maybe<DepositAsset>;
  rFacility?: Maybe<DepositFacility>;
  rFacilityAsset?: Maybe<DepositFacilityAsset>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositFacilityAssetCommitWithdrawnFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityAssetCommitWithdrawnFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityAssetCommitWithdrawnFilter>>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amountDecimal?: InputMaybe<Scalars["String"]>;
  amountDecimal_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  committedAmount?: InputMaybe<Scalars["BigInt"]>;
  committedAmountDecimal?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  committedAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  committedAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  committedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  committedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  operator?: InputMaybe<Scalars["String"]>;
  operator_contains?: InputMaybe<Scalars["String"]>;
  operator_ends_with?: InputMaybe<Scalars["String"]>;
  operator_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  operator_not?: InputMaybe<Scalars["String"]>;
  operator_not_contains?: InputMaybe<Scalars["String"]>;
  operator_not_ends_with?: InputMaybe<Scalars["String"]>;
  operator_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  operator_not_starts_with?: InputMaybe<Scalars["String"]>;
  operator_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositFacilityAssetCommitWithdrawnPage = {
  __typename?: "convertibleDepositFacilityAssetCommitWithdrawnPage";
  items: Array<ConvertibleDepositFacilityAssetCommitWithdrawn>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositFacilityAssetCommitted = {
  __typename?: "convertibleDepositFacilityAssetCommitted";
  amount: Scalars["BigInt"];
  amountDecimal: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  committedAmount: Scalars["BigInt"];
  committedAmountDecimal: Scalars["String"];
  depositAsset: Scalars["String"];
  facility: Scalars["String"];
  logIndex: Scalars["Int"];
  operator: Scalars["String"];
  rDepositAsset?: Maybe<DepositAsset>;
  rFacility?: Maybe<DepositFacility>;
  rFacilityAsset?: Maybe<DepositFacilityAsset>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositFacilityAssetCommittedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityAssetCommittedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityAssetCommittedFilter>>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amountDecimal?: InputMaybe<Scalars["String"]>;
  amountDecimal_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  committedAmount?: InputMaybe<Scalars["BigInt"]>;
  committedAmountDecimal?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  committedAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  committedAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  committedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  committedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  operator?: InputMaybe<Scalars["String"]>;
  operator_contains?: InputMaybe<Scalars["String"]>;
  operator_ends_with?: InputMaybe<Scalars["String"]>;
  operator_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  operator_not?: InputMaybe<Scalars["String"]>;
  operator_not_contains?: InputMaybe<Scalars["String"]>;
  operator_not_ends_with?: InputMaybe<Scalars["String"]>;
  operator_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  operator_not_starts_with?: InputMaybe<Scalars["String"]>;
  operator_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositFacilityAssetCommittedPage = {
  __typename?: "convertibleDepositFacilityAssetCommittedPage";
  items: Array<ConvertibleDepositFacilityAssetCommitted>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositFacilityAssetPeriodReclaimRateSet = {
  __typename?: "convertibleDepositFacilityAssetPeriodReclaimRateSet";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  facility: Scalars["String"];
  facilityAssetPeriod?: Maybe<DepositFacilityAssetPeriod>;
  logIndex: Scalars["Int"];
  rDepositAsset?: Maybe<DepositAsset>;
  rFacility?: Maybe<DepositFacility>;
  reclaimRate: Scalars["BigInt"];
  reclaimRateDecimal: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositFacilityAssetPeriodReclaimRateSetFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityAssetPeriodReclaimRateSetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityAssetPeriodReclaimRateSetFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  reclaimRate?: InputMaybe<Scalars["BigInt"]>;
  reclaimRateDecimal?: InputMaybe<Scalars["String"]>;
  reclaimRateDecimal_contains?: InputMaybe<Scalars["String"]>;
  reclaimRateDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  reclaimRateDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  reclaimRateDecimal_not?: InputMaybe<Scalars["String"]>;
  reclaimRateDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  reclaimRateDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  reclaimRateDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  reclaimRateDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  reclaimRateDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  reclaimRate_gt?: InputMaybe<Scalars["BigInt"]>;
  reclaimRate_gte?: InputMaybe<Scalars["BigInt"]>;
  reclaimRate_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  reclaimRate_lt?: InputMaybe<Scalars["BigInt"]>;
  reclaimRate_lte?: InputMaybe<Scalars["BigInt"]>;
  reclaimRate_not?: InputMaybe<Scalars["BigInt"]>;
  reclaimRate_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositFacilityAssetPeriodReclaimRateSetPage = {
  __typename?: "convertibleDepositFacilityAssetPeriodReclaimRateSetPage";
  items: Array<ConvertibleDepositFacilityAssetPeriodReclaimRateSet>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositFacilityClaimAllYieldFailed = {
  __typename?: "convertibleDepositFacilityClaimAllYieldFailed";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  facility: Scalars["String"];
  logIndex: Scalars["Int"];
  rFacility?: Maybe<DepositFacility>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositFacilityClaimAllYieldFailedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityClaimAllYieldFailedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityClaimAllYieldFailedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositFacilityClaimAllYieldFailedPage = {
  __typename?: "convertibleDepositFacilityClaimAllYieldFailedPage";
  items: Array<ConvertibleDepositFacilityClaimAllYieldFailed>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositFacilityClaimedYield = {
  __typename?: "convertibleDepositFacilityClaimedYield";
  amount: Scalars["BigInt"];
  amountDecimal: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  facility: Scalars["String"];
  logIndex: Scalars["Int"];
  rDepositAsset?: Maybe<DepositAsset>;
  rFacility?: Maybe<DepositFacility>;
  rFacilityAsset?: Maybe<DepositFacilityAsset>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositFacilityClaimedYieldFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityClaimedYieldFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityClaimedYieldFilter>>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amountDecimal?: InputMaybe<Scalars["String"]>;
  amountDecimal_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositFacilityClaimedYieldPage = {
  __typename?: "convertibleDepositFacilityClaimedYieldPage";
  items: Array<ConvertibleDepositFacilityClaimedYield>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositFacilityConvertedDeposit = {
  __typename?: "convertibleDepositFacilityConvertedDeposit";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  convertedAmount: Scalars["BigInt"];
  convertedAmountDecimal: Scalars["String"];
  depositAmount: Scalars["BigInt"];
  depositAmountDecimal: Scalars["String"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  depositor: Scalars["String"];
  facility: Scalars["String"];
  facilityAssetPeriod?: Maybe<DepositFacilityAssetPeriod>;
  logIndex: Scalars["Int"];
  parentEventBlock: Scalars["BigInt"];
  parentEventChainId: Scalars["Int"];
  parentEventLogIndex: Scalars["Int"];
  positionId: Scalars["BigInt"];
  rDepositAsset?: Maybe<DepositAsset>;
  rDepositor?: Maybe<Depositor>;
  rFacility?: Maybe<DepositFacility>;
  rParentEvent?: Maybe<ConvertibleDepositFacilityConvertedDeposits>;
  rPosition?: Maybe<ConvertibleDepositPosition>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositFacilityConvertedDepositFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityConvertedDepositFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityConvertedDepositFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  convertedAmount?: InputMaybe<Scalars["BigInt"]>;
  convertedAmountDecimal?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  convertedAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  convertedAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  convertedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  convertedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  convertedAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  convertedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  convertedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  convertedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  convertedAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAmount?: InputMaybe<Scalars["BigInt"]>;
  depositAmountDecimal?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  depositAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_not?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositor?: InputMaybe<Scalars["String"]>;
  depositor_contains?: InputMaybe<Scalars["String"]>;
  depositor_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not?: InputMaybe<Scalars["String"]>;
  depositor_not_contains?: InputMaybe<Scalars["String"]>;
  depositor_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositor_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  parentEventBlock?: InputMaybe<Scalars["BigInt"]>;
  parentEventBlock_gt?: InputMaybe<Scalars["BigInt"]>;
  parentEventBlock_gte?: InputMaybe<Scalars["BigInt"]>;
  parentEventBlock_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  parentEventBlock_lt?: InputMaybe<Scalars["BigInt"]>;
  parentEventBlock_lte?: InputMaybe<Scalars["BigInt"]>;
  parentEventBlock_not?: InputMaybe<Scalars["BigInt"]>;
  parentEventBlock_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  parentEventChainId?: InputMaybe<Scalars["Int"]>;
  parentEventChainId_gt?: InputMaybe<Scalars["Int"]>;
  parentEventChainId_gte?: InputMaybe<Scalars["Int"]>;
  parentEventChainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  parentEventChainId_lt?: InputMaybe<Scalars["Int"]>;
  parentEventChainId_lte?: InputMaybe<Scalars["Int"]>;
  parentEventChainId_not?: InputMaybe<Scalars["Int"]>;
  parentEventChainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  parentEventLogIndex?: InputMaybe<Scalars["Int"]>;
  parentEventLogIndex_gt?: InputMaybe<Scalars["Int"]>;
  parentEventLogIndex_gte?: InputMaybe<Scalars["Int"]>;
  parentEventLogIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  parentEventLogIndex_lt?: InputMaybe<Scalars["Int"]>;
  parentEventLogIndex_lte?: InputMaybe<Scalars["Int"]>;
  parentEventLogIndex_not?: InputMaybe<Scalars["Int"]>;
  parentEventLogIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  positionId?: InputMaybe<Scalars["BigInt"]>;
  positionId_gt?: InputMaybe<Scalars["BigInt"]>;
  positionId_gte?: InputMaybe<Scalars["BigInt"]>;
  positionId_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  positionId_lt?: InputMaybe<Scalars["BigInt"]>;
  positionId_lte?: InputMaybe<Scalars["BigInt"]>;
  positionId_not?: InputMaybe<Scalars["BigInt"]>;
  positionId_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositFacilityConvertedDepositPage = {
  __typename?: "convertibleDepositFacilityConvertedDepositPage";
  items: Array<ConvertibleDepositFacilityConvertedDeposit>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositFacilityConvertedDeposits = {
  __typename?: "convertibleDepositFacilityConvertedDeposits";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  convertedAmount: Scalars["BigInt"];
  convertedAmountDecimal: Scalars["String"];
  convertedDeposits?: Maybe<ConvertibleDepositFacilityConvertedDepositPage>;
  depositAmount: Scalars["BigInt"];
  depositAmountDecimal: Scalars["String"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  facility: Scalars["String"];
  facilityAssetPeriod?: Maybe<DepositFacilityAssetPeriod>;
  logIndex: Scalars["Int"];
  rDepositAsset?: Maybe<DepositAsset>;
  rFacility?: Maybe<DepositFacility>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositFacilityConvertedDepositsConvertedDepositsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityConvertedDepositFilter>;
};

export type ConvertibleDepositFacilityConvertedDepositsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityConvertedDepositsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityConvertedDepositsFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  convertedAmount?: InputMaybe<Scalars["BigInt"]>;
  convertedAmountDecimal?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  convertedAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  convertedAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  convertedAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  convertedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  convertedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  convertedAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  convertedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  convertedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  convertedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  convertedAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAmount?: InputMaybe<Scalars["BigInt"]>;
  depositAmountDecimal?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  depositAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_not?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositFacilityConvertedDepositsPage = {
  __typename?: "convertibleDepositFacilityConvertedDepositsPage";
  items: Array<ConvertibleDepositFacilityConvertedDeposits>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositFacilityCreatedDeposit = {
  __typename?: "convertibleDepositFacilityCreatedDeposit";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositAmount: Scalars["BigInt"];
  depositAmountDecimal: Scalars["String"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  depositor: Scalars["String"];
  facility: Scalars["String"];
  facilityAssetPeriod?: Maybe<DepositFacilityAssetPeriod>;
  logIndex: Scalars["Int"];
  positionId: Scalars["BigInt"];
  rDepositAsset?: Maybe<DepositAsset>;
  rDepositor?: Maybe<Depositor>;
  rFacility?: Maybe<DepositFacility>;
  rPosition?: Maybe<ConvertibleDepositPosition>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositFacilityCreatedDepositFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityCreatedDepositFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityCreatedDepositFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAmount?: InputMaybe<Scalars["BigInt"]>;
  depositAmountDecimal?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  depositAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_not?: InputMaybe<Scalars["BigInt"]>;
  depositAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositor?: InputMaybe<Scalars["String"]>;
  depositor_contains?: InputMaybe<Scalars["String"]>;
  depositor_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not?: InputMaybe<Scalars["String"]>;
  depositor_not_contains?: InputMaybe<Scalars["String"]>;
  depositor_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositor_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  positionId?: InputMaybe<Scalars["BigInt"]>;
  positionId_gt?: InputMaybe<Scalars["BigInt"]>;
  positionId_gte?: InputMaybe<Scalars["BigInt"]>;
  positionId_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  positionId_lt?: InputMaybe<Scalars["BigInt"]>;
  positionId_lte?: InputMaybe<Scalars["BigInt"]>;
  positionId_not?: InputMaybe<Scalars["BigInt"]>;
  positionId_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositFacilityCreatedDepositPage = {
  __typename?: "convertibleDepositFacilityCreatedDepositPage";
  items: Array<ConvertibleDepositFacilityCreatedDeposit>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositFacilityDisabled = {
  __typename?: "convertibleDepositFacilityDisabled";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  facility: Scalars["String"];
  logIndex: Scalars["Int"];
  rFacility?: Maybe<DepositFacility>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositFacilityDisabledFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityDisabledFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityDisabledFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositFacilityDisabledPage = {
  __typename?: "convertibleDepositFacilityDisabledPage";
  items: Array<ConvertibleDepositFacilityDisabled>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositFacilityEnabled = {
  __typename?: "convertibleDepositFacilityEnabled";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  facility: Scalars["String"];
  logIndex: Scalars["Int"];
  rFacility?: Maybe<DepositFacility>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositFacilityEnabledFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityEnabledFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityEnabledFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositFacilityEnabledPage = {
  __typename?: "convertibleDepositFacilityEnabledPage";
  items: Array<ConvertibleDepositFacilityEnabled>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositFacilityOperatorAuthorized = {
  __typename?: "convertibleDepositFacilityOperatorAuthorized";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  facility: Scalars["String"];
  logIndex: Scalars["Int"];
  operator: Scalars["String"];
  rFacility?: Maybe<DepositFacility>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositFacilityOperatorAuthorizedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityOperatorAuthorizedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityOperatorAuthorizedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  operator?: InputMaybe<Scalars["String"]>;
  operator_contains?: InputMaybe<Scalars["String"]>;
  operator_ends_with?: InputMaybe<Scalars["String"]>;
  operator_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  operator_not?: InputMaybe<Scalars["String"]>;
  operator_not_contains?: InputMaybe<Scalars["String"]>;
  operator_not_ends_with?: InputMaybe<Scalars["String"]>;
  operator_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  operator_not_starts_with?: InputMaybe<Scalars["String"]>;
  operator_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositFacilityOperatorAuthorizedPage = {
  __typename?: "convertibleDepositFacilityOperatorAuthorizedPage";
  items: Array<ConvertibleDepositFacilityOperatorAuthorized>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositFacilityOperatorDeauthorized = {
  __typename?: "convertibleDepositFacilityOperatorDeauthorized";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  facility: Scalars["String"];
  logIndex: Scalars["Int"];
  operator: Scalars["String"];
  rFacility?: Maybe<DepositFacility>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositFacilityOperatorDeauthorizedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityOperatorDeauthorizedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityOperatorDeauthorizedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  operator?: InputMaybe<Scalars["String"]>;
  operator_contains?: InputMaybe<Scalars["String"]>;
  operator_ends_with?: InputMaybe<Scalars["String"]>;
  operator_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  operator_not?: InputMaybe<Scalars["String"]>;
  operator_not_contains?: InputMaybe<Scalars["String"]>;
  operator_not_ends_with?: InputMaybe<Scalars["String"]>;
  operator_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  operator_not_starts_with?: InputMaybe<Scalars["String"]>;
  operator_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositFacilityOperatorDeauthorizedPage = {
  __typename?: "convertibleDepositFacilityOperatorDeauthorizedPage";
  items: Array<ConvertibleDepositFacilityOperatorDeauthorized>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositFacilityReclaimed = {
  __typename?: "convertibleDepositFacilityReclaimed";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  depositor: Scalars["String"];
  facility: Scalars["String"];
  facilityAssetPeriod?: Maybe<DepositFacilityAssetPeriod>;
  forfeitedAmount: Scalars["BigInt"];
  forfeitedAmountDecimal: Scalars["String"];
  logIndex: Scalars["Int"];
  rDepositAsset?: Maybe<DepositAsset>;
  rDepositor?: Maybe<Depositor>;
  rFacility?: Maybe<DepositFacility>;
  reclaimedAmount: Scalars["BigInt"];
  reclaimedAmountDecimal: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositFacilityReclaimedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityReclaimedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositFacilityReclaimedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositor?: InputMaybe<Scalars["String"]>;
  depositor_contains?: InputMaybe<Scalars["String"]>;
  depositor_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not?: InputMaybe<Scalars["String"]>;
  depositor_not_contains?: InputMaybe<Scalars["String"]>;
  depositor_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositor_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  forfeitedAmount?: InputMaybe<Scalars["BigInt"]>;
  forfeitedAmountDecimal?: InputMaybe<Scalars["String"]>;
  forfeitedAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  forfeitedAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  forfeitedAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  forfeitedAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  forfeitedAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  forfeitedAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  forfeitedAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  forfeitedAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  forfeitedAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  forfeitedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  forfeitedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  forfeitedAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  forfeitedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  forfeitedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  forfeitedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  forfeitedAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  reclaimedAmount?: InputMaybe<Scalars["BigInt"]>;
  reclaimedAmountDecimal?: InputMaybe<Scalars["String"]>;
  reclaimedAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  reclaimedAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  reclaimedAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  reclaimedAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  reclaimedAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  reclaimedAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  reclaimedAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  reclaimedAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  reclaimedAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  reclaimedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  reclaimedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  reclaimedAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  reclaimedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  reclaimedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  reclaimedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  reclaimedAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositFacilityReclaimedPage = {
  __typename?: "convertibleDepositFacilityReclaimedPage";
  items: Array<ConvertibleDepositFacilityReclaimed>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ConvertibleDepositPosition = {
  __typename?: "convertibleDepositPosition";
  bidEvents?: Maybe<ConvertibleDepositAuctioneerBidPage>;
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  conversionPrice?: Maybe<Scalars["BigInt"]>;
  conversionPriceDecimal?: Maybe<Scalars["String"]>;
  convertedDepositEvents?: Maybe<ConvertibleDepositFacilityConvertedDepositPage>;
  createdDepositEvents?: Maybe<ConvertibleDepositFacilityCreatedDepositPage>;
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  depositor: Scalars["String"];
  facility: Scalars["String"];
  initialAmount: Scalars["BigInt"];
  initialAmountDecimal: Scalars["String"];
  positionId: Scalars["BigInt"];
  rAssetPeriod?: Maybe<DepositAssetPeriod>;
  rDepositor?: Maybe<Depositor>;
  rFacility?: Maybe<DepositFacility>;
  rReceiptToken?: Maybe<ReceiptToken>;
  receiptTokenId: Scalars["BigInt"];
  receiptTokenManager: Scalars["String"];
  remainingAmount: Scalars["BigInt"];
  remainingAmountDecimal: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type ConvertibleDepositPositionBidEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerBidFilter>;
};

export type ConvertibleDepositPositionConvertedDepositEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityConvertedDepositFilter>;
};

export type ConvertibleDepositPositionCreatedDepositEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityCreatedDepositFilter>;
};

export type ConvertibleDepositPositionFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConvertibleDepositPositionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConvertibleDepositPositionFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  conversionPrice?: InputMaybe<Scalars["BigInt"]>;
  conversionPriceDecimal?: InputMaybe<Scalars["String"]>;
  conversionPriceDecimal_contains?: InputMaybe<Scalars["String"]>;
  conversionPriceDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  conversionPriceDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  conversionPriceDecimal_not?: InputMaybe<Scalars["String"]>;
  conversionPriceDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  conversionPriceDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  conversionPriceDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  conversionPriceDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  conversionPriceDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  conversionPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  conversionPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  conversionPrice_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  conversionPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  conversionPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  conversionPrice_not?: InputMaybe<Scalars["BigInt"]>;
  conversionPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositor?: InputMaybe<Scalars["String"]>;
  depositor_contains?: InputMaybe<Scalars["String"]>;
  depositor_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not?: InputMaybe<Scalars["String"]>;
  depositor_not_contains?: InputMaybe<Scalars["String"]>;
  depositor_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositor_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  initialAmount?: InputMaybe<Scalars["BigInt"]>;
  initialAmountDecimal?: InputMaybe<Scalars["String"]>;
  initialAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  initialAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  initialAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  initialAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  initialAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  initialAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  initialAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  initialAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  initialAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  initialAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  initialAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  initialAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  initialAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  initialAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  initialAmount_not?: InputMaybe<Scalars["BigInt"]>;
  initialAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  positionId?: InputMaybe<Scalars["BigInt"]>;
  positionId_gt?: InputMaybe<Scalars["BigInt"]>;
  positionId_gte?: InputMaybe<Scalars["BigInt"]>;
  positionId_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  positionId_lt?: InputMaybe<Scalars["BigInt"]>;
  positionId_lte?: InputMaybe<Scalars["BigInt"]>;
  positionId_not?: InputMaybe<Scalars["BigInt"]>;
  positionId_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  receiptTokenId?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  receiptTokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_not?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  receiptTokenManager?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_contains?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_ends_with?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  receiptTokenManager_not?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_not_contains?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  receiptTokenManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_starts_with?: InputMaybe<Scalars["String"]>;
  remainingAmount?: InputMaybe<Scalars["BigInt"]>;
  remainingAmountDecimal?: InputMaybe<Scalars["String"]>;
  remainingAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  remainingAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  remainingAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  remainingAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  remainingAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  remainingAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  remainingAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  remainingAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  remainingAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  remainingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  remainingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  remainingAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  remainingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  remainingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  remainingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  remainingAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ConvertibleDepositPositionPage = {
  __typename?: "convertibleDepositPositionPage";
  items: Array<ConvertibleDepositPosition>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositAsset = {
  __typename?: "depositAsset";
  asset: Scalars["String"];
  auctioneers?: Maybe<AuctioneerPage>;
  chainId: Scalars["Int"];
  enabled: Scalars["Boolean"];
  periods?: Maybe<DepositAssetPeriodPage>;
  rAsset?: Maybe<Asset>;
};

export type DepositAssetAuctioneersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<AuctioneerFilter>;
};

export type DepositAssetPeriodsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositAssetPeriodFilter>;
};

export type DepositAssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositAssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositAssetFilter>>>;
  asset?: InputMaybe<Scalars["String"]>;
  asset_contains?: InputMaybe<Scalars["String"]>;
  asset_ends_with?: InputMaybe<Scalars["String"]>;
  asset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  asset_not?: InputMaybe<Scalars["String"]>;
  asset_not_contains?: InputMaybe<Scalars["String"]>;
  asset_not_ends_with?: InputMaybe<Scalars["String"]>;
  asset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  asset_not_starts_with?: InputMaybe<Scalars["String"]>;
  asset_starts_with?: InputMaybe<Scalars["String"]>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  enabled?: InputMaybe<Scalars["Boolean"]>;
  enabled_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  enabled_not?: InputMaybe<Scalars["Boolean"]>;
  enabled_not_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
};

export type DepositAssetPage = {
  __typename?: "depositAssetPage";
  items: Array<DepositAsset>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositAssetPeriod = {
  __typename?: "depositAssetPeriod";
  auctioneerDepositPeriods?: Maybe<AuctioneerDepositPeriodPage>;
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  enabled: Scalars["Boolean"];
  positions?: Maybe<ConvertibleDepositPositionPage>;
  rDepositAsset?: Maybe<DepositAsset>;
  receiptTokens?: Maybe<ReceiptTokenPage>;
  redemptions?: Maybe<RedemptionPage>;
};

export type DepositAssetPeriodAuctioneerDepositPeriodsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<AuctioneerDepositPeriodFilter>;
};

export type DepositAssetPeriodPositionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositPositionFilter>;
};

export type DepositAssetPeriodReceiptTokensArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ReceiptTokenFilter>;
};

export type DepositAssetPeriodRedemptionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<RedemptionFilter>;
};

export type DepositAssetPeriodFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositAssetPeriodFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositAssetPeriodFilter>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  enabled?: InputMaybe<Scalars["Boolean"]>;
  enabled_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  enabled_not?: InputMaybe<Scalars["Boolean"]>;
  enabled_not_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
};

export type DepositAssetPeriodPage = {
  __typename?: "depositAssetPeriodPage";
  items: Array<DepositAssetPeriod>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositFacility = {
  __typename?: "depositFacility";
  address: Scalars["String"];
  assetSnapshots?: Maybe<DepositFacilityAssetSnapshotPage>;
  assets?: Maybe<DepositFacilityAssetPage>;
  chainId: Scalars["Int"];
  claimAllYieldFailedEvents?: Maybe<ConvertibleDepositFacilityClaimAllYieldFailedPage>;
  disabledEvents?: Maybe<ConvertibleDepositFacilityDisabledPage>;
  enabled: Scalars["Boolean"];
  enabledEvents?: Maybe<ConvertibleDepositFacilityEnabledPage>;
  operatorAuthorizedEvents?: Maybe<ConvertibleDepositFacilityOperatorAuthorizedPage>;
  operatorDeauthorizedEvents?: Maybe<ConvertibleDepositFacilityOperatorDeauthorizedPage>;
  positions?: Maybe<ConvertibleDepositPositionPage>;
};

export type DepositFacilityAssetSnapshotsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositFacilityAssetSnapshotFilter>;
};

export type DepositFacilityAssetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositFacilityAssetFilter>;
};

export type DepositFacilityClaimAllYieldFailedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityClaimAllYieldFailedFilter>;
};

export type DepositFacilityDisabledEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityDisabledFilter>;
};

export type DepositFacilityEnabledEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityEnabledFilter>;
};

export type DepositFacilityOperatorAuthorizedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityOperatorAuthorizedFilter>;
};

export type DepositFacilityOperatorDeauthorizedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityOperatorDeauthorizedFilter>;
};

export type DepositFacilityPositionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositPositionFilter>;
};

export type DepositFacilityAsset = {
  __typename?: "depositFacilityAsset";
  chainId: Scalars["Int"];
  claimedYieldEvents?: Maybe<ConvertibleDepositFacilityClaimedYieldPage>;
  commitCancelledEvents?: Maybe<ConvertibleDepositFacilityAssetCommitCancelledPage>;
  commitWithdrawnEvents?: Maybe<ConvertibleDepositFacilityAssetCommitWithdrawnPage>;
  committedAmount: Scalars["BigInt"];
  committedAmountDecimal: Scalars["String"];
  committedEvents?: Maybe<ConvertibleDepositFacilityAssetCommittedPage>;
  depositAsset: Scalars["String"];
  facility: Scalars["String"];
  periods?: Maybe<DepositFacilityAssetPeriodPage>;
  rDepositAsset?: Maybe<DepositAsset>;
  rFacility?: Maybe<DepositFacility>;
};

export type DepositFacilityAssetClaimedYieldEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityClaimedYieldFilter>;
};

export type DepositFacilityAssetCommitCancelledEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityAssetCommitCancelledFilter>;
};

export type DepositFacilityAssetCommitWithdrawnEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityAssetCommitWithdrawnFilter>;
};

export type DepositFacilityAssetCommittedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityAssetCommittedFilter>;
};

export type DepositFacilityAssetPeriodsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositFacilityAssetPeriodFilter>;
};

export type DepositFacilityAssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositFacilityAssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositFacilityAssetFilter>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  committedAmount?: InputMaybe<Scalars["BigInt"]>;
  committedAmountDecimal?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  committedAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  committedAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  committedAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  committedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  committedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  committedAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositFacilityAssetPage = {
  __typename?: "depositFacilityAssetPage";
  items: Array<DepositFacilityAsset>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositFacilityAssetPeriod = {
  __typename?: "depositFacilityAssetPeriod";
  chainId: Scalars["Int"];
  convertedDepositsEvents?: Maybe<ConvertibleDepositFacilityConvertedDepositsPage>;
  createdDepositEvents?: Maybe<ConvertibleDepositFacilityCreatedDepositPage>;
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  facility: Scalars["String"];
  rAssetPeriod?: Maybe<DepositAssetPeriod>;
  rFacility?: Maybe<DepositFacility>;
  rFacilityAsset?: Maybe<DepositFacilityAsset>;
  reclaimRate: Scalars["BigInt"];
  reclaimRateDecimal: Scalars["String"];
  reclaimedEvents?: Maybe<ConvertibleDepositFacilityReclaimedPage>;
};

export type DepositFacilityAssetPeriodConvertedDepositsEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityConvertedDepositsFilter>;
};

export type DepositFacilityAssetPeriodCreatedDepositEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityCreatedDepositFilter>;
};

export type DepositFacilityAssetPeriodReclaimedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityReclaimedFilter>;
};

export type DepositFacilityAssetPeriodFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositFacilityAssetPeriodFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositFacilityAssetPeriodFilter>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  reclaimRate?: InputMaybe<Scalars["BigInt"]>;
  reclaimRateDecimal?: InputMaybe<Scalars["String"]>;
  reclaimRateDecimal_contains?: InputMaybe<Scalars["String"]>;
  reclaimRateDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  reclaimRateDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  reclaimRateDecimal_not?: InputMaybe<Scalars["String"]>;
  reclaimRateDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  reclaimRateDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  reclaimRateDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  reclaimRateDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  reclaimRateDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  reclaimRate_gt?: InputMaybe<Scalars["BigInt"]>;
  reclaimRate_gte?: InputMaybe<Scalars["BigInt"]>;
  reclaimRate_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  reclaimRate_lt?: InputMaybe<Scalars["BigInt"]>;
  reclaimRate_lte?: InputMaybe<Scalars["BigInt"]>;
  reclaimRate_not?: InputMaybe<Scalars["BigInt"]>;
  reclaimRate_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
};

export type DepositFacilityAssetPeriodPage = {
  __typename?: "depositFacilityAssetPeriodPage";
  items: Array<DepositFacilityAssetPeriod>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositFacilityAssetSnapshot = {
  __typename?: "depositFacilityAssetSnapshot";
  block: Scalars["BigInt"];
  borrowedAmount: Scalars["BigInt"];
  borrowedAmountDecimal: Scalars["String"];
  chainId: Scalars["Int"];
  claimableYield: Scalars["BigInt"];
  claimableYieldDecimal: Scalars["String"];
  depositAsset: Scalars["String"];
  facility: Scalars["String"];
  pendingRedemption: Scalars["BigInt"];
  pendingRedemptionDecimal: Scalars["String"];
  rDepositAsset?: Maybe<DepositAsset>;
  rFacility?: Maybe<DepositFacility>;
  timestamp: Scalars["BigInt"];
  totalDeposited: Scalars["BigInt"];
  totalDepositedDecimal: Scalars["String"];
};

export type DepositFacilityAssetSnapshotFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositFacilityAssetSnapshotFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositFacilityAssetSnapshotFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  borrowedAmount?: InputMaybe<Scalars["BigInt"]>;
  borrowedAmountDecimal?: InputMaybe<Scalars["String"]>;
  borrowedAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  borrowedAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  borrowedAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  borrowedAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  borrowedAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  borrowedAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  borrowedAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  borrowedAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  borrowedAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  borrowedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  borrowedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  borrowedAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  borrowedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  borrowedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  borrowedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  borrowedAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  claimableYield?: InputMaybe<Scalars["BigInt"]>;
  claimableYieldDecimal?: InputMaybe<Scalars["String"]>;
  claimableYieldDecimal_contains?: InputMaybe<Scalars["String"]>;
  claimableYieldDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  claimableYieldDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  claimableYieldDecimal_not?: InputMaybe<Scalars["String"]>;
  claimableYieldDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  claimableYieldDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  claimableYieldDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  claimableYieldDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  claimableYieldDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  claimableYield_gt?: InputMaybe<Scalars["BigInt"]>;
  claimableYield_gte?: InputMaybe<Scalars["BigInt"]>;
  claimableYield_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  claimableYield_lt?: InputMaybe<Scalars["BigInt"]>;
  claimableYield_lte?: InputMaybe<Scalars["BigInt"]>;
  claimableYield_not?: InputMaybe<Scalars["BigInt"]>;
  claimableYield_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  pendingRedemption?: InputMaybe<Scalars["BigInt"]>;
  pendingRedemptionDecimal?: InputMaybe<Scalars["String"]>;
  pendingRedemptionDecimal_contains?: InputMaybe<Scalars["String"]>;
  pendingRedemptionDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  pendingRedemptionDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  pendingRedemptionDecimal_not?: InputMaybe<Scalars["String"]>;
  pendingRedemptionDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  pendingRedemptionDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  pendingRedemptionDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  pendingRedemptionDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  pendingRedemptionDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  pendingRedemption_gt?: InputMaybe<Scalars["BigInt"]>;
  pendingRedemption_gte?: InputMaybe<Scalars["BigInt"]>;
  pendingRedemption_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  pendingRedemption_lt?: InputMaybe<Scalars["BigInt"]>;
  pendingRedemption_lte?: InputMaybe<Scalars["BigInt"]>;
  pendingRedemption_not?: InputMaybe<Scalars["BigInt"]>;
  pendingRedemption_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  totalDeposited?: InputMaybe<Scalars["BigInt"]>;
  totalDepositedDecimal?: InputMaybe<Scalars["String"]>;
  totalDepositedDecimal_contains?: InputMaybe<Scalars["String"]>;
  totalDepositedDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  totalDepositedDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  totalDepositedDecimal_not?: InputMaybe<Scalars["String"]>;
  totalDepositedDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  totalDepositedDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  totalDepositedDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  totalDepositedDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  totalDepositedDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  totalDeposited_gt?: InputMaybe<Scalars["BigInt"]>;
  totalDeposited_gte?: InputMaybe<Scalars["BigInt"]>;
  totalDeposited_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  totalDeposited_lt?: InputMaybe<Scalars["BigInt"]>;
  totalDeposited_lte?: InputMaybe<Scalars["BigInt"]>;
  totalDeposited_not?: InputMaybe<Scalars["BigInt"]>;
  totalDeposited_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
};

export type DepositFacilityAssetSnapshotPage = {
  __typename?: "depositFacilityAssetSnapshotPage";
  items: Array<DepositFacilityAssetSnapshot>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositFacilityFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositFacilityFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositFacilityFilter>>>;
  address?: InputMaybe<Scalars["String"]>;
  address_contains?: InputMaybe<Scalars["String"]>;
  address_ends_with?: InputMaybe<Scalars["String"]>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  address_not?: InputMaybe<Scalars["String"]>;
  address_not_contains?: InputMaybe<Scalars["String"]>;
  address_not_ends_with?: InputMaybe<Scalars["String"]>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  address_not_starts_with?: InputMaybe<Scalars["String"]>;
  address_starts_with?: InputMaybe<Scalars["String"]>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  enabled?: InputMaybe<Scalars["Boolean"]>;
  enabled_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  enabled_not?: InputMaybe<Scalars["Boolean"]>;
  enabled_not_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
};

export type DepositFacilityPage = {
  __typename?: "depositFacilityPage";
  items: Array<DepositFacility>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVault = {
  __typename?: "depositRedemptionVault";
  address: Scalars["String"];
  assetConfigurations?: Maybe<DepositRedemptionVaultAssetConfigurationPage>;
  chainId: Scalars["Int"];
  claimDefaultRewardPercentage: Scalars["BigInt"];
  claimDefaultRewardPercentageDecimal: Scalars["String"];
  claimDefaultRewardPercentageSetEvents?: Maybe<DepositRedemptionVaultClaimDefaultRewardPercentageSetPage>;
  disabledEvents?: Maybe<DepositRedemptionVaultDisabledPage>;
  enabled: Scalars["Boolean"];
  enabledEvents?: Maybe<DepositRedemptionVaultEnabledPage>;
  facilityAuthorizedEvents?: Maybe<DepositRedemptionVaultFacilityAuthorizedPage>;
  facilityDeauthorizedEvents?: Maybe<DepositRedemptionVaultFacilityDeauthorizedPage>;
  redemptions?: Maybe<RedemptionPage>;
};

export type DepositRedemptionVaultAssetConfigurationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultAssetConfigurationFilter>;
};

export type DepositRedemptionVaultClaimDefaultRewardPercentageSetEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultClaimDefaultRewardPercentageSetFilter>;
};

export type DepositRedemptionVaultDisabledEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultDisabledFilter>;
};

export type DepositRedemptionVaultEnabledEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultEnabledFilter>;
};

export type DepositRedemptionVaultFacilityAuthorizedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultFacilityAuthorizedFilter>;
};

export type DepositRedemptionVaultFacilityDeauthorizedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultFacilityDeauthorizedFilter>;
};

export type DepositRedemptionVaultRedemptionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<RedemptionFilter>;
};

export type DepositRedemptionVaultAnnualInterestRateSet = {
  __typename?: "depositRedemptionVaultAnnualInterestRateSet";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  facility: Scalars["String"];
  logIndex: Scalars["Int"];
  rAssetConfiguration?: Maybe<DepositRedemptionVaultAssetConfiguration>;
  rDepositAsset?: Maybe<DepositAsset>;
  rFacility?: Maybe<DepositFacility>;
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  rate: Scalars["BigInt"];
  rateDecimal: Scalars["String"];
  redemptionVault: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type DepositRedemptionVaultAnnualInterestRateSetFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultAnnualInterestRateSetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultAnnualInterestRateSetFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  rate?: InputMaybe<Scalars["BigInt"]>;
  rateDecimal?: InputMaybe<Scalars["String"]>;
  rateDecimal_contains?: InputMaybe<Scalars["String"]>;
  rateDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  rateDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  rateDecimal_not?: InputMaybe<Scalars["String"]>;
  rateDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  rateDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  rateDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  rateDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  rateDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  rate_gt?: InputMaybe<Scalars["BigInt"]>;
  rate_gte?: InputMaybe<Scalars["BigInt"]>;
  rate_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  rate_lt?: InputMaybe<Scalars["BigInt"]>;
  rate_lte?: InputMaybe<Scalars["BigInt"]>;
  rate_not?: InputMaybe<Scalars["BigInt"]>;
  rate_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositRedemptionVaultAnnualInterestRateSetPage = {
  __typename?: "depositRedemptionVaultAnnualInterestRateSetPage";
  items: Array<DepositRedemptionVaultAnnualInterestRateSet>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVaultAssetConfiguration = {
  __typename?: "depositRedemptionVaultAssetConfiguration";
  annualInterestRateSetEvents?: Maybe<DepositRedemptionVaultAnnualInterestRateSetPage>;
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  facility: Scalars["String"];
  interestRate: Scalars["BigInt"];
  interestRateDecimal: Scalars["String"];
  maxBorrowPercentage: Scalars["BigInt"];
  maxBorrowPercentageDecimal: Scalars["String"];
  maxBorrowPercentageSetEvents?: Maybe<DepositRedemptionVaultMaxBorrowPercentageSetPage>;
  rDepositAsset?: Maybe<DepositAsset>;
  rFacility?: Maybe<DepositFacility>;
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  redemptionVault: Scalars["String"];
};

export type DepositRedemptionVaultAssetConfigurationAnnualInterestRateSetEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultAnnualInterestRateSetFilter>;
};

export type DepositRedemptionVaultAssetConfigurationMaxBorrowPercentageSetEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultMaxBorrowPercentageSetFilter>;
};

export type DepositRedemptionVaultAssetConfigurationFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultAssetConfigurationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultAssetConfigurationFilter>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  interestRate?: InputMaybe<Scalars["BigInt"]>;
  interestRateDecimal?: InputMaybe<Scalars["String"]>;
  interestRateDecimal_contains?: InputMaybe<Scalars["String"]>;
  interestRateDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  interestRateDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  interestRateDecimal_not?: InputMaybe<Scalars["String"]>;
  interestRateDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  interestRateDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  interestRateDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  interestRateDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  interestRateDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  interestRate_gt?: InputMaybe<Scalars["BigInt"]>;
  interestRate_gte?: InputMaybe<Scalars["BigInt"]>;
  interestRate_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  interestRate_lt?: InputMaybe<Scalars["BigInt"]>;
  interestRate_lte?: InputMaybe<Scalars["BigInt"]>;
  interestRate_not?: InputMaybe<Scalars["BigInt"]>;
  interestRate_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  maxBorrowPercentage?: InputMaybe<Scalars["BigInt"]>;
  maxBorrowPercentageDecimal?: InputMaybe<Scalars["String"]>;
  maxBorrowPercentageDecimal_contains?: InputMaybe<Scalars["String"]>;
  maxBorrowPercentageDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  maxBorrowPercentageDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  maxBorrowPercentageDecimal_not?: InputMaybe<Scalars["String"]>;
  maxBorrowPercentageDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  maxBorrowPercentageDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  maxBorrowPercentageDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  maxBorrowPercentageDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  maxBorrowPercentageDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  maxBorrowPercentage_gt?: InputMaybe<Scalars["BigInt"]>;
  maxBorrowPercentage_gte?: InputMaybe<Scalars["BigInt"]>;
  maxBorrowPercentage_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  maxBorrowPercentage_lt?: InputMaybe<Scalars["BigInt"]>;
  maxBorrowPercentage_lte?: InputMaybe<Scalars["BigInt"]>;
  maxBorrowPercentage_not?: InputMaybe<Scalars["BigInt"]>;
  maxBorrowPercentage_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositRedemptionVaultAssetConfigurationPage = {
  __typename?: "depositRedemptionVaultAssetConfigurationPage";
  items: Array<DepositRedemptionVaultAssetConfiguration>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVaultClaimDefaultRewardPercentageSet = {
  __typename?: "depositRedemptionVaultClaimDefaultRewardPercentageSet";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  logIndex: Scalars["Int"];
  percent: Scalars["BigInt"];
  percentDecimal: Scalars["String"];
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  redemptionVault: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type DepositRedemptionVaultClaimDefaultRewardPercentageSetFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultClaimDefaultRewardPercentageSetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultClaimDefaultRewardPercentageSetFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  percent?: InputMaybe<Scalars["BigInt"]>;
  percentDecimal?: InputMaybe<Scalars["String"]>;
  percentDecimal_contains?: InputMaybe<Scalars["String"]>;
  percentDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  percentDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  percentDecimal_not?: InputMaybe<Scalars["String"]>;
  percentDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  percentDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  percentDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  percentDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  percentDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  percent_gt?: InputMaybe<Scalars["BigInt"]>;
  percent_gte?: InputMaybe<Scalars["BigInt"]>;
  percent_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  percent_lt?: InputMaybe<Scalars["BigInt"]>;
  percent_lte?: InputMaybe<Scalars["BigInt"]>;
  percent_not?: InputMaybe<Scalars["BigInt"]>;
  percent_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositRedemptionVaultClaimDefaultRewardPercentageSetPage = {
  __typename?: "depositRedemptionVaultClaimDefaultRewardPercentageSetPage";
  items: Array<DepositRedemptionVaultClaimDefaultRewardPercentageSet>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVaultDisabled = {
  __typename?: "depositRedemptionVaultDisabled";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  logIndex: Scalars["Int"];
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  redemptionVault: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type DepositRedemptionVaultDisabledFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultDisabledFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultDisabledFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositRedemptionVaultDisabledPage = {
  __typename?: "depositRedemptionVaultDisabledPage";
  items: Array<DepositRedemptionVaultDisabled>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVaultEnabled = {
  __typename?: "depositRedemptionVaultEnabled";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  logIndex: Scalars["Int"];
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  redemptionVault: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type DepositRedemptionVaultEnabledFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultEnabledFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultEnabledFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositRedemptionVaultEnabledPage = {
  __typename?: "depositRedemptionVaultEnabledPage";
  items: Array<DepositRedemptionVaultEnabled>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVaultFacilityAuthorized = {
  __typename?: "depositRedemptionVaultFacilityAuthorized";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  facility: Scalars["String"];
  logIndex: Scalars["Int"];
  rFacility?: Maybe<DepositFacility>;
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  redemptionVault: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type DepositRedemptionVaultFacilityAuthorizedFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultFacilityAuthorizedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultFacilityAuthorizedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositRedemptionVaultFacilityAuthorizedPage = {
  __typename?: "depositRedemptionVaultFacilityAuthorizedPage";
  items: Array<DepositRedemptionVaultFacilityAuthorized>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVaultFacilityDeauthorized = {
  __typename?: "depositRedemptionVaultFacilityDeauthorized";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  facility: Scalars["String"];
  logIndex: Scalars["Int"];
  rFacility?: Maybe<DepositFacility>;
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  redemptionVault: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type DepositRedemptionVaultFacilityDeauthorizedFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultFacilityDeauthorizedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultFacilityDeauthorizedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositRedemptionVaultFacilityDeauthorizedPage = {
  __typename?: "depositRedemptionVaultFacilityDeauthorizedPage";
  items: Array<DepositRedemptionVaultFacilityDeauthorized>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVaultFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultFilter>>>;
  address?: InputMaybe<Scalars["String"]>;
  address_contains?: InputMaybe<Scalars["String"]>;
  address_ends_with?: InputMaybe<Scalars["String"]>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  address_not?: InputMaybe<Scalars["String"]>;
  address_not_contains?: InputMaybe<Scalars["String"]>;
  address_not_ends_with?: InputMaybe<Scalars["String"]>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  address_not_starts_with?: InputMaybe<Scalars["String"]>;
  address_starts_with?: InputMaybe<Scalars["String"]>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  claimDefaultRewardPercentage?: InputMaybe<Scalars["BigInt"]>;
  claimDefaultRewardPercentageDecimal?: InputMaybe<Scalars["String"]>;
  claimDefaultRewardPercentageDecimal_contains?: InputMaybe<Scalars["String"]>;
  claimDefaultRewardPercentageDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  claimDefaultRewardPercentageDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  claimDefaultRewardPercentageDecimal_not?: InputMaybe<Scalars["String"]>;
  claimDefaultRewardPercentageDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  claimDefaultRewardPercentageDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  claimDefaultRewardPercentageDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  claimDefaultRewardPercentageDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  claimDefaultRewardPercentageDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  claimDefaultRewardPercentage_gt?: InputMaybe<Scalars["BigInt"]>;
  claimDefaultRewardPercentage_gte?: InputMaybe<Scalars["BigInt"]>;
  claimDefaultRewardPercentage_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  claimDefaultRewardPercentage_lt?: InputMaybe<Scalars["BigInt"]>;
  claimDefaultRewardPercentage_lte?: InputMaybe<Scalars["BigInt"]>;
  claimDefaultRewardPercentage_not?: InputMaybe<Scalars["BigInt"]>;
  claimDefaultRewardPercentage_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  enabled?: InputMaybe<Scalars["Boolean"]>;
  enabled_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  enabled_not?: InputMaybe<Scalars["Boolean"]>;
  enabled_not_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
};

export type DepositRedemptionVaultLoanCreated = {
  __typename?: "depositRedemptionVaultLoanCreated";
  amount: Scalars["BigInt"];
  amountDecimal: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositor: Scalars["String"];
  facility: Scalars["String"];
  logIndex: Scalars["Int"];
  rDepositor?: Maybe<Depositor>;
  rFacility?: Maybe<DepositFacility>;
  rRedemption?: Maybe<Redemption>;
  rRedemptionLoan?: Maybe<RedemptionLoan>;
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  redemptionId: Scalars["Int"];
  redemptionVault: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type DepositRedemptionVaultLoanCreatedFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultLoanCreatedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultLoanCreatedFilter>>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amountDecimal?: InputMaybe<Scalars["String"]>;
  amountDecimal_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositor?: InputMaybe<Scalars["String"]>;
  depositor_contains?: InputMaybe<Scalars["String"]>;
  depositor_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not?: InputMaybe<Scalars["String"]>;
  depositor_not_contains?: InputMaybe<Scalars["String"]>;
  depositor_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositor_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionId?: InputMaybe<Scalars["Int"]>;
  redemptionId_gt?: InputMaybe<Scalars["Int"]>;
  redemptionId_gte?: InputMaybe<Scalars["Int"]>;
  redemptionId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionId_lt?: InputMaybe<Scalars["Int"]>;
  redemptionId_lte?: InputMaybe<Scalars["Int"]>;
  redemptionId_not?: InputMaybe<Scalars["Int"]>;
  redemptionId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositRedemptionVaultLoanCreatedPage = {
  __typename?: "depositRedemptionVaultLoanCreatedPage";
  items: Array<DepositRedemptionVaultLoanCreated>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVaultLoanDefaulted = {
  __typename?: "depositRedemptionVaultLoanDefaulted";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositor: Scalars["String"];
  interest: Scalars["BigInt"];
  interestDecimal: Scalars["String"];
  logIndex: Scalars["Int"];
  principal: Scalars["BigInt"];
  principalDecimal: Scalars["String"];
  rDepositor?: Maybe<Depositor>;
  rRedemption?: Maybe<Redemption>;
  rRedemptionLoan?: Maybe<RedemptionLoan>;
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  redemptionId: Scalars["Int"];
  redemptionVault: Scalars["String"];
  remainingCollateral: Scalars["BigInt"];
  remainingCollateralDecimal: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type DepositRedemptionVaultLoanDefaultedFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultLoanDefaultedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultLoanDefaultedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositor?: InputMaybe<Scalars["String"]>;
  depositor_contains?: InputMaybe<Scalars["String"]>;
  depositor_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not?: InputMaybe<Scalars["String"]>;
  depositor_not_contains?: InputMaybe<Scalars["String"]>;
  depositor_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositor_starts_with?: InputMaybe<Scalars["String"]>;
  interest?: InputMaybe<Scalars["BigInt"]>;
  interestDecimal?: InputMaybe<Scalars["String"]>;
  interestDecimal_contains?: InputMaybe<Scalars["String"]>;
  interestDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  interestDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  interestDecimal_not?: InputMaybe<Scalars["String"]>;
  interestDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  interestDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  interestDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  interestDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  interestDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  interest_gt?: InputMaybe<Scalars["BigInt"]>;
  interest_gte?: InputMaybe<Scalars["BigInt"]>;
  interest_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  interest_lt?: InputMaybe<Scalars["BigInt"]>;
  interest_lte?: InputMaybe<Scalars["BigInt"]>;
  interest_not?: InputMaybe<Scalars["BigInt"]>;
  interest_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  principal?: InputMaybe<Scalars["BigInt"]>;
  principalDecimal?: InputMaybe<Scalars["String"]>;
  principalDecimal_contains?: InputMaybe<Scalars["String"]>;
  principalDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  principalDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  principalDecimal_not?: InputMaybe<Scalars["String"]>;
  principalDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  principalDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  principalDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  principalDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  principalDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  principal_gt?: InputMaybe<Scalars["BigInt"]>;
  principal_gte?: InputMaybe<Scalars["BigInt"]>;
  principal_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  principal_lt?: InputMaybe<Scalars["BigInt"]>;
  principal_lte?: InputMaybe<Scalars["BigInt"]>;
  principal_not?: InputMaybe<Scalars["BigInt"]>;
  principal_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  redemptionId?: InputMaybe<Scalars["Int"]>;
  redemptionId_gt?: InputMaybe<Scalars["Int"]>;
  redemptionId_gte?: InputMaybe<Scalars["Int"]>;
  redemptionId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionId_lt?: InputMaybe<Scalars["Int"]>;
  redemptionId_lte?: InputMaybe<Scalars["Int"]>;
  redemptionId_not?: InputMaybe<Scalars["Int"]>;
  redemptionId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
  remainingCollateral?: InputMaybe<Scalars["BigInt"]>;
  remainingCollateralDecimal?: InputMaybe<Scalars["String"]>;
  remainingCollateralDecimal_contains?: InputMaybe<Scalars["String"]>;
  remainingCollateralDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  remainingCollateralDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  remainingCollateralDecimal_not?: InputMaybe<Scalars["String"]>;
  remainingCollateralDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  remainingCollateralDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  remainingCollateralDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  remainingCollateralDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  remainingCollateralDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  remainingCollateral_gt?: InputMaybe<Scalars["BigInt"]>;
  remainingCollateral_gte?: InputMaybe<Scalars["BigInt"]>;
  remainingCollateral_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  remainingCollateral_lt?: InputMaybe<Scalars["BigInt"]>;
  remainingCollateral_lte?: InputMaybe<Scalars["BigInt"]>;
  remainingCollateral_not?: InputMaybe<Scalars["BigInt"]>;
  remainingCollateral_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositRedemptionVaultLoanDefaultedPage = {
  __typename?: "depositRedemptionVaultLoanDefaultedPage";
  items: Array<DepositRedemptionVaultLoanDefaulted>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVaultLoanExtended = {
  __typename?: "depositRedemptionVaultLoanExtended";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositor: Scalars["String"];
  logIndex: Scalars["Int"];
  newDueDate: Scalars["BigInt"];
  rDepositor?: Maybe<Depositor>;
  rRedemption?: Maybe<Redemption>;
  rRedemptionLoan?: Maybe<RedemptionLoan>;
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  redemptionId: Scalars["Int"];
  redemptionVault: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type DepositRedemptionVaultLoanExtendedFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultLoanExtendedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultLoanExtendedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositor?: InputMaybe<Scalars["String"]>;
  depositor_contains?: InputMaybe<Scalars["String"]>;
  depositor_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not?: InputMaybe<Scalars["String"]>;
  depositor_not_contains?: InputMaybe<Scalars["String"]>;
  depositor_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositor_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  newDueDate?: InputMaybe<Scalars["BigInt"]>;
  newDueDate_gt?: InputMaybe<Scalars["BigInt"]>;
  newDueDate_gte?: InputMaybe<Scalars["BigInt"]>;
  newDueDate_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  newDueDate_lt?: InputMaybe<Scalars["BigInt"]>;
  newDueDate_lte?: InputMaybe<Scalars["BigInt"]>;
  newDueDate_not?: InputMaybe<Scalars["BigInt"]>;
  newDueDate_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  redemptionId?: InputMaybe<Scalars["Int"]>;
  redemptionId_gt?: InputMaybe<Scalars["Int"]>;
  redemptionId_gte?: InputMaybe<Scalars["Int"]>;
  redemptionId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionId_lt?: InputMaybe<Scalars["Int"]>;
  redemptionId_lte?: InputMaybe<Scalars["Int"]>;
  redemptionId_not?: InputMaybe<Scalars["Int"]>;
  redemptionId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositRedemptionVaultLoanExtendedPage = {
  __typename?: "depositRedemptionVaultLoanExtendedPage";
  items: Array<DepositRedemptionVaultLoanExtended>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVaultLoanRepaid = {
  __typename?: "depositRedemptionVaultLoanRepaid";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositor: Scalars["String"];
  interest: Scalars["BigInt"];
  interestDecimal: Scalars["String"];
  logIndex: Scalars["Int"];
  principal: Scalars["BigInt"];
  principalDecimal: Scalars["String"];
  rDepositor?: Maybe<Depositor>;
  rRedemption?: Maybe<Redemption>;
  rRedemptionLoan?: Maybe<RedemptionLoan>;
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  redemptionId: Scalars["Int"];
  redemptionVault: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type DepositRedemptionVaultLoanRepaidFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultLoanRepaidFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultLoanRepaidFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositor?: InputMaybe<Scalars["String"]>;
  depositor_contains?: InputMaybe<Scalars["String"]>;
  depositor_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not?: InputMaybe<Scalars["String"]>;
  depositor_not_contains?: InputMaybe<Scalars["String"]>;
  depositor_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositor_starts_with?: InputMaybe<Scalars["String"]>;
  interest?: InputMaybe<Scalars["BigInt"]>;
  interestDecimal?: InputMaybe<Scalars["String"]>;
  interestDecimal_contains?: InputMaybe<Scalars["String"]>;
  interestDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  interestDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  interestDecimal_not?: InputMaybe<Scalars["String"]>;
  interestDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  interestDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  interestDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  interestDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  interestDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  interest_gt?: InputMaybe<Scalars["BigInt"]>;
  interest_gte?: InputMaybe<Scalars["BigInt"]>;
  interest_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  interest_lt?: InputMaybe<Scalars["BigInt"]>;
  interest_lte?: InputMaybe<Scalars["BigInt"]>;
  interest_not?: InputMaybe<Scalars["BigInt"]>;
  interest_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  principal?: InputMaybe<Scalars["BigInt"]>;
  principalDecimal?: InputMaybe<Scalars["String"]>;
  principalDecimal_contains?: InputMaybe<Scalars["String"]>;
  principalDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  principalDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  principalDecimal_not?: InputMaybe<Scalars["String"]>;
  principalDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  principalDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  principalDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  principalDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  principalDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  principal_gt?: InputMaybe<Scalars["BigInt"]>;
  principal_gte?: InputMaybe<Scalars["BigInt"]>;
  principal_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  principal_lt?: InputMaybe<Scalars["BigInt"]>;
  principal_lte?: InputMaybe<Scalars["BigInt"]>;
  principal_not?: InputMaybe<Scalars["BigInt"]>;
  principal_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  redemptionId?: InputMaybe<Scalars["Int"]>;
  redemptionId_gt?: InputMaybe<Scalars["Int"]>;
  redemptionId_gte?: InputMaybe<Scalars["Int"]>;
  redemptionId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionId_lt?: InputMaybe<Scalars["Int"]>;
  redemptionId_lte?: InputMaybe<Scalars["Int"]>;
  redemptionId_not?: InputMaybe<Scalars["Int"]>;
  redemptionId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositRedemptionVaultLoanRepaidPage = {
  __typename?: "depositRedemptionVaultLoanRepaidPage";
  items: Array<DepositRedemptionVaultLoanRepaid>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVaultMaxBorrowPercentageSet = {
  __typename?: "depositRedemptionVaultMaxBorrowPercentageSet";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  facility: Scalars["String"];
  logIndex: Scalars["Int"];
  percent: Scalars["BigInt"];
  percentDecimal: Scalars["String"];
  rAssetConfiguration?: Maybe<DepositRedemptionVaultAssetConfiguration>;
  rDepositAsset?: Maybe<DepositAsset>;
  rFacility?: Maybe<DepositFacility>;
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  redemptionVault: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type DepositRedemptionVaultMaxBorrowPercentageSetFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultMaxBorrowPercentageSetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultMaxBorrowPercentageSetFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  percent?: InputMaybe<Scalars["BigInt"]>;
  percentDecimal?: InputMaybe<Scalars["String"]>;
  percentDecimal_contains?: InputMaybe<Scalars["String"]>;
  percentDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  percentDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  percentDecimal_not?: InputMaybe<Scalars["String"]>;
  percentDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  percentDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  percentDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  percentDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  percentDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  percent_gt?: InputMaybe<Scalars["BigInt"]>;
  percent_gte?: InputMaybe<Scalars["BigInt"]>;
  percent_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  percent_lt?: InputMaybe<Scalars["BigInt"]>;
  percent_lte?: InputMaybe<Scalars["BigInt"]>;
  percent_not?: InputMaybe<Scalars["BigInt"]>;
  percent_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositRedemptionVaultMaxBorrowPercentageSetPage = {
  __typename?: "depositRedemptionVaultMaxBorrowPercentageSetPage";
  items: Array<DepositRedemptionVaultMaxBorrowPercentageSet>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVaultPage = {
  __typename?: "depositRedemptionVaultPage";
  items: Array<DepositRedemptionVault>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVaultRedemptionCancelled = {
  __typename?: "depositRedemptionVaultRedemptionCancelled";
  amount: Scalars["BigInt"];
  amountDecimal: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  depositor: Scalars["String"];
  logIndex: Scalars["Int"];
  rDepositAsset?: Maybe<DepositAsset>;
  rDepositor?: Maybe<Depositor>;
  rRedemption?: Maybe<Redemption>;
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  redemptionId: Scalars["Int"];
  redemptionVault: Scalars["String"];
  remainingAmount: Scalars["BigInt"];
  remainingAmountDecimal: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type DepositRedemptionVaultRedemptionCancelledFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultRedemptionCancelledFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultRedemptionCancelledFilter>>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amountDecimal?: InputMaybe<Scalars["String"]>;
  amountDecimal_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositor?: InputMaybe<Scalars["String"]>;
  depositor_contains?: InputMaybe<Scalars["String"]>;
  depositor_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not?: InputMaybe<Scalars["String"]>;
  depositor_not_contains?: InputMaybe<Scalars["String"]>;
  depositor_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositor_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionId?: InputMaybe<Scalars["Int"]>;
  redemptionId_gt?: InputMaybe<Scalars["Int"]>;
  redemptionId_gte?: InputMaybe<Scalars["Int"]>;
  redemptionId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionId_lt?: InputMaybe<Scalars["Int"]>;
  redemptionId_lte?: InputMaybe<Scalars["Int"]>;
  redemptionId_not?: InputMaybe<Scalars["Int"]>;
  redemptionId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
  remainingAmount?: InputMaybe<Scalars["BigInt"]>;
  remainingAmountDecimal?: InputMaybe<Scalars["String"]>;
  remainingAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  remainingAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  remainingAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  remainingAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  remainingAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  remainingAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  remainingAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  remainingAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  remainingAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  remainingAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  remainingAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  remainingAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  remainingAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  remainingAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  remainingAmount_not?: InputMaybe<Scalars["BigInt"]>;
  remainingAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositRedemptionVaultRedemptionCancelledPage = {
  __typename?: "depositRedemptionVaultRedemptionCancelledPage";
  items: Array<DepositRedemptionVaultRedemptionCancelled>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVaultRedemptionFinished = {
  __typename?: "depositRedemptionVaultRedemptionFinished";
  amount: Scalars["BigInt"];
  amountDecimal: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositor: Scalars["String"];
  logIndex: Scalars["Int"];
  rDepositor?: Maybe<Depositor>;
  rRedemption?: Maybe<Redemption>;
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  redemptionId: Scalars["Int"];
  redemptionVault: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type DepositRedemptionVaultRedemptionFinishedFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultRedemptionFinishedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultRedemptionFinishedFilter>>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amountDecimal?: InputMaybe<Scalars["String"]>;
  amountDecimal_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositor?: InputMaybe<Scalars["String"]>;
  depositor_contains?: InputMaybe<Scalars["String"]>;
  depositor_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not?: InputMaybe<Scalars["String"]>;
  depositor_not_contains?: InputMaybe<Scalars["String"]>;
  depositor_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositor_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionId?: InputMaybe<Scalars["Int"]>;
  redemptionId_gt?: InputMaybe<Scalars["Int"]>;
  redemptionId_gte?: InputMaybe<Scalars["Int"]>;
  redemptionId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionId_lt?: InputMaybe<Scalars["Int"]>;
  redemptionId_lte?: InputMaybe<Scalars["Int"]>;
  redemptionId_not?: InputMaybe<Scalars["Int"]>;
  redemptionId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositRedemptionVaultRedemptionFinishedPage = {
  __typename?: "depositRedemptionVaultRedemptionFinishedPage";
  items: Array<DepositRedemptionVaultRedemptionFinished>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DepositRedemptionVaultRedemptionStarted = {
  __typename?: "depositRedemptionVaultRedemptionStarted";
  amount: Scalars["BigInt"];
  amountDecimal: Scalars["String"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  depositor: Scalars["String"];
  facility: Scalars["String"];
  logIndex: Scalars["Int"];
  rDepositAsset?: Maybe<DepositAsset>;
  rDepositor?: Maybe<Depositor>;
  rFacility?: Maybe<DepositFacility>;
  rRedemption?: Maybe<Redemption>;
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  redemptionId: Scalars["Int"];
  redemptionVault: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type DepositRedemptionVaultRedemptionStartedFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultRedemptionStartedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositRedemptionVaultRedemptionStartedFilter>>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amountDecimal?: InputMaybe<Scalars["String"]>;
  amountDecimal_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositor?: InputMaybe<Scalars["String"]>;
  depositor_contains?: InputMaybe<Scalars["String"]>;
  depositor_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not?: InputMaybe<Scalars["String"]>;
  depositor_not_contains?: InputMaybe<Scalars["String"]>;
  depositor_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositor_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionId?: InputMaybe<Scalars["Int"]>;
  redemptionId_gt?: InputMaybe<Scalars["Int"]>;
  redemptionId_gte?: InputMaybe<Scalars["Int"]>;
  redemptionId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionId_lt?: InputMaybe<Scalars["Int"]>;
  redemptionId_lte?: InputMaybe<Scalars["Int"]>;
  redemptionId_not?: InputMaybe<Scalars["Int"]>;
  redemptionId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type DepositRedemptionVaultRedemptionStartedPage = {
  __typename?: "depositRedemptionVaultRedemptionStartedPage";
  items: Array<DepositRedemptionVaultRedemptionStarted>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type Depositor = {
  __typename?: "depositor";
  address: Scalars["String"];
  bidEvents?: Maybe<ConvertibleDepositAuctioneerBidPage>;
  chainId: Scalars["Int"];
  convertedDepositEvents?: Maybe<ConvertibleDepositFacilityConvertedDepositPage>;
  createdDepositEvents?: Maybe<ConvertibleDepositFacilityCreatedDepositPage>;
  loanCreatedEvents?: Maybe<DepositRedemptionVaultLoanCreatedPage>;
  loanDefaultedEvents?: Maybe<DepositRedemptionVaultLoanDefaultedPage>;
  loanExtendedEvents?: Maybe<DepositRedemptionVaultLoanExtendedPage>;
  loanRepaidEvents?: Maybe<DepositRedemptionVaultLoanRepaidPage>;
  positions?: Maybe<ConvertibleDepositPositionPage>;
  reclaimedEvents?: Maybe<ConvertibleDepositFacilityReclaimedPage>;
  redemptionCancelledEvents?: Maybe<DepositRedemptionVaultRedemptionCancelledPage>;
  redemptionFinishedEvents?: Maybe<DepositRedemptionVaultRedemptionFinishedPage>;
  redemptionStartedEvents?: Maybe<DepositRedemptionVaultRedemptionStartedPage>;
  redemptions?: Maybe<RedemptionPage>;
};

export type DepositorBidEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositAuctioneerBidFilter>;
};

export type DepositorConvertedDepositEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityConvertedDepositFilter>;
};

export type DepositorCreatedDepositEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityCreatedDepositFilter>;
};

export type DepositorLoanCreatedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultLoanCreatedFilter>;
};

export type DepositorLoanDefaultedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultLoanDefaultedFilter>;
};

export type DepositorLoanExtendedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultLoanExtendedFilter>;
};

export type DepositorLoanRepaidEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultLoanRepaidFilter>;
};

export type DepositorPositionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositPositionFilter>;
};

export type DepositorReclaimedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositFacilityReclaimedFilter>;
};

export type DepositorRedemptionCancelledEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultRedemptionCancelledFilter>;
};

export type DepositorRedemptionFinishedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultRedemptionFinishedFilter>;
};

export type DepositorRedemptionStartedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultRedemptionStartedFilter>;
};

export type DepositorRedemptionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<RedemptionFilter>;
};

export type DepositorFilter = {
  AND?: InputMaybe<Array<InputMaybe<DepositorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DepositorFilter>>>;
  address?: InputMaybe<Scalars["String"]>;
  address_contains?: InputMaybe<Scalars["String"]>;
  address_ends_with?: InputMaybe<Scalars["String"]>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  address_not?: InputMaybe<Scalars["String"]>;
  address_not_contains?: InputMaybe<Scalars["String"]>;
  address_not_ends_with?: InputMaybe<Scalars["String"]>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  address_not_starts_with?: InputMaybe<Scalars["String"]>;
  address_starts_with?: InputMaybe<Scalars["String"]>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type DepositorPage = {
  __typename?: "depositorPage";
  items: Array<Depositor>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManager = {
  __typename?: "emissionManager";
  address: Scalars["String"];
  backing: Scalars["BigInt"];
  backingChangedEvents?: Maybe<EmissionManagerBackingChangedPage>;
  backingDecimal: Scalars["String"];
  backingUpdatedEvents?: Maybe<EmissionManagerBackingUpdatedPage>;
  baseEmissionRate: Scalars["BigInt"];
  baseEmissionRateDecimal: Scalars["String"];
  baseRateChangedEvents?: Maybe<EmissionManagerBaseRateChangedPage>;
  bondContractsSetEvents?: Maybe<EmissionManagerBondContractsSetPage>;
  bondMarketAuctioneer: Scalars["String"];
  bondMarketCapacityScalar: Scalars["BigInt"];
  bondMarketCapacityScalarChangedEvents?: Maybe<EmissionManagerBondMarketCapacityScalarChangedPage>;
  bondMarketCapacityScalarDecimal: Scalars["String"];
  bondMarketCreatedEvents?: Maybe<EmissionManagerBondMarketCreatedPage>;
  bondMarketCreationFailedEvents?: Maybe<EmissionManagerBondMarketCreationFailedPage>;
  bondMarketTeller: Scalars["String"];
  chainId: Scalars["Int"];
  convertibleDepositAuctioneer: Scalars["String"];
  convertibleDepositAuctioneerSetEvents?: Maybe<EmissionManagerConvertibleDepositAuctioneerSetPage>;
  disabledEvents?: Maybe<EmissionManagerDisabledPage>;
  enabled: Scalars["Boolean"];
  enabledEvents?: Maybe<EmissionManagerEnabledPage>;
  minPriceScalar: Scalars["BigInt"];
  minPriceScalarChangedEvents?: Maybe<EmissionManagerMinPriceScalarChangedPage>;
  minPriceScalarDecimal: Scalars["String"];
  minimumPremium: Scalars["BigInt"];
  minimumPremiumChangedEvents?: Maybe<EmissionManagerMinimumPremiumChangedPage>;
  minimumPremiumDecimal: Scalars["String"];
  rConvertibleDepositAuctioneer?: Maybe<Auctioneer>;
  rReserveAsset?: Maybe<Asset>;
  reserveAsset: Scalars["String"];
  restartTimeframe: Scalars["BigInt"];
  restartTimeframeChangedEvents?: Maybe<EmissionManagerRestartTimeframeChangedPage>;
  tickSize: Scalars["BigInt"];
  tickSizeChangedEvents?: Maybe<EmissionManagerTickSizeChangedPage>;
  tickSizeDecimal: Scalars["String"];
  vestingPeriod: Scalars["BigInt"];
  vestingPeriodChangedEvents?: Maybe<EmissionManagerVestingPeriodChangedPage>;
};

export type EmissionManagerBackingChangedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerBackingChangedFilter>;
};

export type EmissionManagerBackingUpdatedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerBackingUpdatedFilter>;
};

export type EmissionManagerBaseRateChangedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerBaseRateChangedFilter>;
};

export type EmissionManagerBondContractsSetEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerBondContractsSetFilter>;
};

export type EmissionManagerBondMarketCapacityScalarChangedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerBondMarketCapacityScalarChangedFilter>;
};

export type EmissionManagerBondMarketCreatedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerBondMarketCreatedFilter>;
};

export type EmissionManagerBondMarketCreationFailedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerBondMarketCreationFailedFilter>;
};

export type EmissionManagerConvertibleDepositAuctioneerSetEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerConvertibleDepositAuctioneerSetFilter>;
};

export type EmissionManagerDisabledEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerDisabledFilter>;
};

export type EmissionManagerEnabledEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerEnabledFilter>;
};

export type EmissionManagerMinPriceScalarChangedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerMinPriceScalarChangedFilter>;
};

export type EmissionManagerMinimumPremiumChangedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerMinimumPremiumChangedFilter>;
};

export type EmissionManagerRestartTimeframeChangedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerRestartTimeframeChangedFilter>;
};

export type EmissionManagerTickSizeChangedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerTickSizeChangedFilter>;
};

export type EmissionManagerVestingPeriodChangedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<EmissionManagerVestingPeriodChangedFilter>;
};

export type EmissionManagerBackingChanged = {
  __typename?: "emissionManagerBackingChanged";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  emissionManager: Scalars["String"];
  logIndex: Scalars["Int"];
  newBacking: Scalars["BigInt"];
  newBackingDecimal: Scalars["String"];
  rEmissionManager?: Maybe<EmissionManager>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type EmissionManagerBackingChangedFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerBackingChangedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerBackingChangedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  emissionManager?: InputMaybe<Scalars["String"]>;
  emissionManager_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not?: InputMaybe<Scalars["String"]>;
  emissionManager_not_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  newBacking?: InputMaybe<Scalars["BigInt"]>;
  newBackingDecimal?: InputMaybe<Scalars["String"]>;
  newBackingDecimal_contains?: InputMaybe<Scalars["String"]>;
  newBackingDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  newBackingDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  newBackingDecimal_not?: InputMaybe<Scalars["String"]>;
  newBackingDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  newBackingDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  newBackingDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  newBackingDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  newBackingDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  newBacking_gt?: InputMaybe<Scalars["BigInt"]>;
  newBacking_gte?: InputMaybe<Scalars["BigInt"]>;
  newBacking_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  newBacking_lt?: InputMaybe<Scalars["BigInt"]>;
  newBacking_lte?: InputMaybe<Scalars["BigInt"]>;
  newBacking_not?: InputMaybe<Scalars["BigInt"]>;
  newBacking_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type EmissionManagerBackingChangedPage = {
  __typename?: "emissionManagerBackingChangedPage";
  items: Array<EmissionManagerBackingChanged>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManagerBackingUpdated = {
  __typename?: "emissionManagerBackingUpdated";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  emissionManager: Scalars["String"];
  logIndex: Scalars["Int"];
  newBacking: Scalars["BigInt"];
  newBackingDecimal: Scalars["String"];
  rEmissionManager?: Maybe<EmissionManager>;
  reservesAdded: Scalars["BigInt"];
  reservesAddedDecimal: Scalars["String"];
  supplyAdded: Scalars["BigInt"];
  supplyAddedDecimal: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type EmissionManagerBackingUpdatedFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerBackingUpdatedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerBackingUpdatedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  emissionManager?: InputMaybe<Scalars["String"]>;
  emissionManager_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not?: InputMaybe<Scalars["String"]>;
  emissionManager_not_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  newBacking?: InputMaybe<Scalars["BigInt"]>;
  newBackingDecimal?: InputMaybe<Scalars["String"]>;
  newBackingDecimal_contains?: InputMaybe<Scalars["String"]>;
  newBackingDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  newBackingDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  newBackingDecimal_not?: InputMaybe<Scalars["String"]>;
  newBackingDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  newBackingDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  newBackingDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  newBackingDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  newBackingDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  newBacking_gt?: InputMaybe<Scalars["BigInt"]>;
  newBacking_gte?: InputMaybe<Scalars["BigInt"]>;
  newBacking_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  newBacking_lt?: InputMaybe<Scalars["BigInt"]>;
  newBacking_lte?: InputMaybe<Scalars["BigInt"]>;
  newBacking_not?: InputMaybe<Scalars["BigInt"]>;
  newBacking_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  reservesAdded?: InputMaybe<Scalars["BigInt"]>;
  reservesAddedDecimal?: InputMaybe<Scalars["String"]>;
  reservesAddedDecimal_contains?: InputMaybe<Scalars["String"]>;
  reservesAddedDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  reservesAddedDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  reservesAddedDecimal_not?: InputMaybe<Scalars["String"]>;
  reservesAddedDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  reservesAddedDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  reservesAddedDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  reservesAddedDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  reservesAddedDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  reservesAdded_gt?: InputMaybe<Scalars["BigInt"]>;
  reservesAdded_gte?: InputMaybe<Scalars["BigInt"]>;
  reservesAdded_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  reservesAdded_lt?: InputMaybe<Scalars["BigInt"]>;
  reservesAdded_lte?: InputMaybe<Scalars["BigInt"]>;
  reservesAdded_not?: InputMaybe<Scalars["BigInt"]>;
  reservesAdded_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  supplyAdded?: InputMaybe<Scalars["BigInt"]>;
  supplyAddedDecimal?: InputMaybe<Scalars["String"]>;
  supplyAddedDecimal_contains?: InputMaybe<Scalars["String"]>;
  supplyAddedDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  supplyAddedDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  supplyAddedDecimal_not?: InputMaybe<Scalars["String"]>;
  supplyAddedDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  supplyAddedDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  supplyAddedDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  supplyAddedDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  supplyAddedDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  supplyAdded_gt?: InputMaybe<Scalars["BigInt"]>;
  supplyAdded_gte?: InputMaybe<Scalars["BigInt"]>;
  supplyAdded_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  supplyAdded_lt?: InputMaybe<Scalars["BigInt"]>;
  supplyAdded_lte?: InputMaybe<Scalars["BigInt"]>;
  supplyAdded_not?: InputMaybe<Scalars["BigInt"]>;
  supplyAdded_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type EmissionManagerBackingUpdatedPage = {
  __typename?: "emissionManagerBackingUpdatedPage";
  items: Array<EmissionManagerBackingUpdated>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManagerBaseRateChanged = {
  __typename?: "emissionManagerBaseRateChanged";
  add: Scalars["Boolean"];
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  changeBy: Scalars["BigInt"];
  changeByDecimal: Scalars["String"];
  emissionManager: Scalars["String"];
  forNumBeats: Scalars["BigInt"];
  logIndex: Scalars["Int"];
  rEmissionManager?: Maybe<EmissionManager>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type EmissionManagerBaseRateChangedFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerBaseRateChangedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerBaseRateChangedFilter>>>;
  add?: InputMaybe<Scalars["Boolean"]>;
  add_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  add_not?: InputMaybe<Scalars["Boolean"]>;
  add_not_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  changeBy?: InputMaybe<Scalars["BigInt"]>;
  changeByDecimal?: InputMaybe<Scalars["String"]>;
  changeByDecimal_contains?: InputMaybe<Scalars["String"]>;
  changeByDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  changeByDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  changeByDecimal_not?: InputMaybe<Scalars["String"]>;
  changeByDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  changeByDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  changeByDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  changeByDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  changeByDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  changeBy_gt?: InputMaybe<Scalars["BigInt"]>;
  changeBy_gte?: InputMaybe<Scalars["BigInt"]>;
  changeBy_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  changeBy_lt?: InputMaybe<Scalars["BigInt"]>;
  changeBy_lte?: InputMaybe<Scalars["BigInt"]>;
  changeBy_not?: InputMaybe<Scalars["BigInt"]>;
  changeBy_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  emissionManager?: InputMaybe<Scalars["String"]>;
  emissionManager_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not?: InputMaybe<Scalars["String"]>;
  emissionManager_not_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager_starts_with?: InputMaybe<Scalars["String"]>;
  forNumBeats?: InputMaybe<Scalars["BigInt"]>;
  forNumBeats_gt?: InputMaybe<Scalars["BigInt"]>;
  forNumBeats_gte?: InputMaybe<Scalars["BigInt"]>;
  forNumBeats_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  forNumBeats_lt?: InputMaybe<Scalars["BigInt"]>;
  forNumBeats_lte?: InputMaybe<Scalars["BigInt"]>;
  forNumBeats_not?: InputMaybe<Scalars["BigInt"]>;
  forNumBeats_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type EmissionManagerBaseRateChangedPage = {
  __typename?: "emissionManagerBaseRateChangedPage";
  items: Array<EmissionManagerBaseRateChanged>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManagerBondContractsSet = {
  __typename?: "emissionManagerBondContractsSet";
  block: Scalars["BigInt"];
  bondMarketAuctioneer: Scalars["String"];
  bondMarketTeller: Scalars["String"];
  chainId: Scalars["Int"];
  emissionManager: Scalars["String"];
  logIndex: Scalars["Int"];
  rAuctioneer?: Maybe<Auctioneer>;
  rEmissionManager?: Maybe<EmissionManager>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type EmissionManagerBondContractsSetFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerBondContractsSetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerBondContractsSetFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  bondMarketAuctioneer?: InputMaybe<Scalars["String"]>;
  bondMarketAuctioneer_contains?: InputMaybe<Scalars["String"]>;
  bondMarketAuctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  bondMarketAuctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bondMarketAuctioneer_not?: InputMaybe<Scalars["String"]>;
  bondMarketAuctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  bondMarketAuctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  bondMarketAuctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bondMarketAuctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  bondMarketAuctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  bondMarketTeller?: InputMaybe<Scalars["String"]>;
  bondMarketTeller_contains?: InputMaybe<Scalars["String"]>;
  bondMarketTeller_ends_with?: InputMaybe<Scalars["String"]>;
  bondMarketTeller_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bondMarketTeller_not?: InputMaybe<Scalars["String"]>;
  bondMarketTeller_not_contains?: InputMaybe<Scalars["String"]>;
  bondMarketTeller_not_ends_with?: InputMaybe<Scalars["String"]>;
  bondMarketTeller_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bondMarketTeller_not_starts_with?: InputMaybe<Scalars["String"]>;
  bondMarketTeller_starts_with?: InputMaybe<Scalars["String"]>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  emissionManager?: InputMaybe<Scalars["String"]>;
  emissionManager_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not?: InputMaybe<Scalars["String"]>;
  emissionManager_not_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type EmissionManagerBondContractsSetPage = {
  __typename?: "emissionManagerBondContractsSetPage";
  items: Array<EmissionManagerBondContractsSet>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManagerBondMarketCapacityScalarChanged = {
  __typename?: "emissionManagerBondMarketCapacityScalarChanged";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  emissionManager: Scalars["String"];
  logIndex: Scalars["Int"];
  newBondMarketCapacityScalar: Scalars["BigInt"];
  newBondMarketCapacityScalarDecimal: Scalars["String"];
  rEmissionManager?: Maybe<EmissionManager>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type EmissionManagerBondMarketCapacityScalarChangedFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerBondMarketCapacityScalarChangedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerBondMarketCapacityScalarChangedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  emissionManager?: InputMaybe<Scalars["String"]>;
  emissionManager_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not?: InputMaybe<Scalars["String"]>;
  emissionManager_not_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  newBondMarketCapacityScalar?: InputMaybe<Scalars["BigInt"]>;
  newBondMarketCapacityScalarDecimal?: InputMaybe<Scalars["String"]>;
  newBondMarketCapacityScalarDecimal_contains?: InputMaybe<Scalars["String"]>;
  newBondMarketCapacityScalarDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  newBondMarketCapacityScalarDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  newBondMarketCapacityScalarDecimal_not?: InputMaybe<Scalars["String"]>;
  newBondMarketCapacityScalarDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  newBondMarketCapacityScalarDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  newBondMarketCapacityScalarDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  newBondMarketCapacityScalarDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  newBondMarketCapacityScalarDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  newBondMarketCapacityScalar_gt?: InputMaybe<Scalars["BigInt"]>;
  newBondMarketCapacityScalar_gte?: InputMaybe<Scalars["BigInt"]>;
  newBondMarketCapacityScalar_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  newBondMarketCapacityScalar_lt?: InputMaybe<Scalars["BigInt"]>;
  newBondMarketCapacityScalar_lte?: InputMaybe<Scalars["BigInt"]>;
  newBondMarketCapacityScalar_not?: InputMaybe<Scalars["BigInt"]>;
  newBondMarketCapacityScalar_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type EmissionManagerBondMarketCapacityScalarChangedPage = {
  __typename?: "emissionManagerBondMarketCapacityScalarChangedPage";
  items: Array<EmissionManagerBondMarketCapacityScalarChanged>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManagerBondMarketCreated = {
  __typename?: "emissionManagerBondMarketCreated";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  emissionManager: Scalars["String"];
  logIndex: Scalars["Int"];
  marketId: Scalars["BigInt"];
  rEmissionManager?: Maybe<EmissionManager>;
  saleAmount: Scalars["BigInt"];
  saleAmountDecimal: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type EmissionManagerBondMarketCreatedFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerBondMarketCreatedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerBondMarketCreatedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  emissionManager?: InputMaybe<Scalars["String"]>;
  emissionManager_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not?: InputMaybe<Scalars["String"]>;
  emissionManager_not_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  marketId?: InputMaybe<Scalars["BigInt"]>;
  marketId_gt?: InputMaybe<Scalars["BigInt"]>;
  marketId_gte?: InputMaybe<Scalars["BigInt"]>;
  marketId_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  marketId_lt?: InputMaybe<Scalars["BigInt"]>;
  marketId_lte?: InputMaybe<Scalars["BigInt"]>;
  marketId_not?: InputMaybe<Scalars["BigInt"]>;
  marketId_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  saleAmount?: InputMaybe<Scalars["BigInt"]>;
  saleAmountDecimal?: InputMaybe<Scalars["String"]>;
  saleAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  saleAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  saleAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  saleAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  saleAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  saleAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  saleAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  saleAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  saleAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  saleAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  saleAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  saleAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  saleAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  saleAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  saleAmount_not?: InputMaybe<Scalars["BigInt"]>;
  saleAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type EmissionManagerBondMarketCreatedPage = {
  __typename?: "emissionManagerBondMarketCreatedPage";
  items: Array<EmissionManagerBondMarketCreated>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManagerBondMarketCreationFailed = {
  __typename?: "emissionManagerBondMarketCreationFailed";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  emissionManager: Scalars["String"];
  logIndex: Scalars["Int"];
  rEmissionManager?: Maybe<EmissionManager>;
  saleAmount: Scalars["BigInt"];
  saleAmountDecimal: Scalars["String"];
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type EmissionManagerBondMarketCreationFailedFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerBondMarketCreationFailedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerBondMarketCreationFailedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  emissionManager?: InputMaybe<Scalars["String"]>;
  emissionManager_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not?: InputMaybe<Scalars["String"]>;
  emissionManager_not_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  saleAmount?: InputMaybe<Scalars["BigInt"]>;
  saleAmountDecimal?: InputMaybe<Scalars["String"]>;
  saleAmountDecimal_contains?: InputMaybe<Scalars["String"]>;
  saleAmountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  saleAmountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  saleAmountDecimal_not?: InputMaybe<Scalars["String"]>;
  saleAmountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  saleAmountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  saleAmountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  saleAmountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  saleAmountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  saleAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  saleAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  saleAmount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  saleAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  saleAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  saleAmount_not?: InputMaybe<Scalars["BigInt"]>;
  saleAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type EmissionManagerBondMarketCreationFailedPage = {
  __typename?: "emissionManagerBondMarketCreationFailedPage";
  items: Array<EmissionManagerBondMarketCreationFailed>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManagerConvertibleDepositAuctioneerSet = {
  __typename?: "emissionManagerConvertibleDepositAuctioneerSet";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  convertibleDepositAuctioneer: Scalars["String"];
  emissionManager: Scalars["String"];
  logIndex: Scalars["Int"];
  rAuctioneer?: Maybe<Auctioneer>;
  rEmissionManager?: Maybe<EmissionManager>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type EmissionManagerConvertibleDepositAuctioneerSetFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerConvertibleDepositAuctioneerSetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerConvertibleDepositAuctioneerSetFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  convertibleDepositAuctioneer?: InputMaybe<Scalars["String"]>;
  convertibleDepositAuctioneer_contains?: InputMaybe<Scalars["String"]>;
  convertibleDepositAuctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  convertibleDepositAuctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  convertibleDepositAuctioneer_not?: InputMaybe<Scalars["String"]>;
  convertibleDepositAuctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  convertibleDepositAuctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  convertibleDepositAuctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  convertibleDepositAuctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  convertibleDepositAuctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager?: InputMaybe<Scalars["String"]>;
  emissionManager_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not?: InputMaybe<Scalars["String"]>;
  emissionManager_not_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type EmissionManagerConvertibleDepositAuctioneerSetPage = {
  __typename?: "emissionManagerConvertibleDepositAuctioneerSetPage";
  items: Array<EmissionManagerConvertibleDepositAuctioneerSet>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManagerDisabled = {
  __typename?: "emissionManagerDisabled";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  emissionManager: Scalars["String"];
  logIndex: Scalars["Int"];
  rEmissionManager?: Maybe<EmissionManager>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type EmissionManagerDisabledFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerDisabledFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerDisabledFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  emissionManager?: InputMaybe<Scalars["String"]>;
  emissionManager_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not?: InputMaybe<Scalars["String"]>;
  emissionManager_not_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type EmissionManagerDisabledPage = {
  __typename?: "emissionManagerDisabledPage";
  items: Array<EmissionManagerDisabled>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManagerEnabled = {
  __typename?: "emissionManagerEnabled";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  emissionManager: Scalars["String"];
  logIndex: Scalars["Int"];
  rEmissionManager?: Maybe<EmissionManager>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type EmissionManagerEnabledFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerEnabledFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerEnabledFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  emissionManager?: InputMaybe<Scalars["String"]>;
  emissionManager_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not?: InputMaybe<Scalars["String"]>;
  emissionManager_not_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type EmissionManagerEnabledPage = {
  __typename?: "emissionManagerEnabledPage";
  items: Array<EmissionManagerEnabled>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManagerFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerFilter>>>;
  address?: InputMaybe<Scalars["String"]>;
  address_contains?: InputMaybe<Scalars["String"]>;
  address_ends_with?: InputMaybe<Scalars["String"]>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  address_not?: InputMaybe<Scalars["String"]>;
  address_not_contains?: InputMaybe<Scalars["String"]>;
  address_not_ends_with?: InputMaybe<Scalars["String"]>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  address_not_starts_with?: InputMaybe<Scalars["String"]>;
  address_starts_with?: InputMaybe<Scalars["String"]>;
  backing?: InputMaybe<Scalars["BigInt"]>;
  backingDecimal?: InputMaybe<Scalars["String"]>;
  backingDecimal_contains?: InputMaybe<Scalars["String"]>;
  backingDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  backingDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  backingDecimal_not?: InputMaybe<Scalars["String"]>;
  backingDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  backingDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  backingDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  backingDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  backingDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  backing_gt?: InputMaybe<Scalars["BigInt"]>;
  backing_gte?: InputMaybe<Scalars["BigInt"]>;
  backing_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  backing_lt?: InputMaybe<Scalars["BigInt"]>;
  backing_lte?: InputMaybe<Scalars["BigInt"]>;
  backing_not?: InputMaybe<Scalars["BigInt"]>;
  backing_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  baseEmissionRate?: InputMaybe<Scalars["BigInt"]>;
  baseEmissionRateDecimal?: InputMaybe<Scalars["String"]>;
  baseEmissionRateDecimal_contains?: InputMaybe<Scalars["String"]>;
  baseEmissionRateDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  baseEmissionRateDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  baseEmissionRateDecimal_not?: InputMaybe<Scalars["String"]>;
  baseEmissionRateDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  baseEmissionRateDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  baseEmissionRateDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  baseEmissionRateDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  baseEmissionRateDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  baseEmissionRate_gt?: InputMaybe<Scalars["BigInt"]>;
  baseEmissionRate_gte?: InputMaybe<Scalars["BigInt"]>;
  baseEmissionRate_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  baseEmissionRate_lt?: InputMaybe<Scalars["BigInt"]>;
  baseEmissionRate_lte?: InputMaybe<Scalars["BigInt"]>;
  baseEmissionRate_not?: InputMaybe<Scalars["BigInt"]>;
  baseEmissionRate_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  bondMarketAuctioneer?: InputMaybe<Scalars["String"]>;
  bondMarketAuctioneer_contains?: InputMaybe<Scalars["String"]>;
  bondMarketAuctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  bondMarketAuctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bondMarketAuctioneer_not?: InputMaybe<Scalars["String"]>;
  bondMarketAuctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  bondMarketAuctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  bondMarketAuctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bondMarketAuctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  bondMarketAuctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  bondMarketCapacityScalar?: InputMaybe<Scalars["BigInt"]>;
  bondMarketCapacityScalarDecimal?: InputMaybe<Scalars["String"]>;
  bondMarketCapacityScalarDecimal_contains?: InputMaybe<Scalars["String"]>;
  bondMarketCapacityScalarDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  bondMarketCapacityScalarDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bondMarketCapacityScalarDecimal_not?: InputMaybe<Scalars["String"]>;
  bondMarketCapacityScalarDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  bondMarketCapacityScalarDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  bondMarketCapacityScalarDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bondMarketCapacityScalarDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  bondMarketCapacityScalarDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  bondMarketCapacityScalar_gt?: InputMaybe<Scalars["BigInt"]>;
  bondMarketCapacityScalar_gte?: InputMaybe<Scalars["BigInt"]>;
  bondMarketCapacityScalar_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  bondMarketCapacityScalar_lt?: InputMaybe<Scalars["BigInt"]>;
  bondMarketCapacityScalar_lte?: InputMaybe<Scalars["BigInt"]>;
  bondMarketCapacityScalar_not?: InputMaybe<Scalars["BigInt"]>;
  bondMarketCapacityScalar_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  bondMarketTeller?: InputMaybe<Scalars["String"]>;
  bondMarketTeller_contains?: InputMaybe<Scalars["String"]>;
  bondMarketTeller_ends_with?: InputMaybe<Scalars["String"]>;
  bondMarketTeller_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bondMarketTeller_not?: InputMaybe<Scalars["String"]>;
  bondMarketTeller_not_contains?: InputMaybe<Scalars["String"]>;
  bondMarketTeller_not_ends_with?: InputMaybe<Scalars["String"]>;
  bondMarketTeller_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bondMarketTeller_not_starts_with?: InputMaybe<Scalars["String"]>;
  bondMarketTeller_starts_with?: InputMaybe<Scalars["String"]>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  convertibleDepositAuctioneer?: InputMaybe<Scalars["String"]>;
  convertibleDepositAuctioneer_contains?: InputMaybe<Scalars["String"]>;
  convertibleDepositAuctioneer_ends_with?: InputMaybe<Scalars["String"]>;
  convertibleDepositAuctioneer_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  convertibleDepositAuctioneer_not?: InputMaybe<Scalars["String"]>;
  convertibleDepositAuctioneer_not_contains?: InputMaybe<Scalars["String"]>;
  convertibleDepositAuctioneer_not_ends_with?: InputMaybe<Scalars["String"]>;
  convertibleDepositAuctioneer_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  convertibleDepositAuctioneer_not_starts_with?: InputMaybe<Scalars["String"]>;
  convertibleDepositAuctioneer_starts_with?: InputMaybe<Scalars["String"]>;
  enabled?: InputMaybe<Scalars["Boolean"]>;
  enabled_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  enabled_not?: InputMaybe<Scalars["Boolean"]>;
  enabled_not_in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  minPriceScalar?: InputMaybe<Scalars["BigInt"]>;
  minPriceScalarDecimal?: InputMaybe<Scalars["String"]>;
  minPriceScalarDecimal_contains?: InputMaybe<Scalars["String"]>;
  minPriceScalarDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  minPriceScalarDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  minPriceScalarDecimal_not?: InputMaybe<Scalars["String"]>;
  minPriceScalarDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  minPriceScalarDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  minPriceScalarDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  minPriceScalarDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  minPriceScalarDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  minPriceScalar_gt?: InputMaybe<Scalars["BigInt"]>;
  minPriceScalar_gte?: InputMaybe<Scalars["BigInt"]>;
  minPriceScalar_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  minPriceScalar_lt?: InputMaybe<Scalars["BigInt"]>;
  minPriceScalar_lte?: InputMaybe<Scalars["BigInt"]>;
  minPriceScalar_not?: InputMaybe<Scalars["BigInt"]>;
  minPriceScalar_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  minimumPremium?: InputMaybe<Scalars["BigInt"]>;
  minimumPremiumDecimal?: InputMaybe<Scalars["String"]>;
  minimumPremiumDecimal_contains?: InputMaybe<Scalars["String"]>;
  minimumPremiumDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  minimumPremiumDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  minimumPremiumDecimal_not?: InputMaybe<Scalars["String"]>;
  minimumPremiumDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  minimumPremiumDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  minimumPremiumDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  minimumPremiumDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  minimumPremiumDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  minimumPremium_gt?: InputMaybe<Scalars["BigInt"]>;
  minimumPremium_gte?: InputMaybe<Scalars["BigInt"]>;
  minimumPremium_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  minimumPremium_lt?: InputMaybe<Scalars["BigInt"]>;
  minimumPremium_lte?: InputMaybe<Scalars["BigInt"]>;
  minimumPremium_not?: InputMaybe<Scalars["BigInt"]>;
  minimumPremium_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  reserveAsset?: InputMaybe<Scalars["String"]>;
  reserveAsset_contains?: InputMaybe<Scalars["String"]>;
  reserveAsset_ends_with?: InputMaybe<Scalars["String"]>;
  reserveAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  reserveAsset_not?: InputMaybe<Scalars["String"]>;
  reserveAsset_not_contains?: InputMaybe<Scalars["String"]>;
  reserveAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  reserveAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  reserveAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  reserveAsset_starts_with?: InputMaybe<Scalars["String"]>;
  restartTimeframe?: InputMaybe<Scalars["BigInt"]>;
  restartTimeframe_gt?: InputMaybe<Scalars["BigInt"]>;
  restartTimeframe_gte?: InputMaybe<Scalars["BigInt"]>;
  restartTimeframe_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  restartTimeframe_lt?: InputMaybe<Scalars["BigInt"]>;
  restartTimeframe_lte?: InputMaybe<Scalars["BigInt"]>;
  restartTimeframe_not?: InputMaybe<Scalars["BigInt"]>;
  restartTimeframe_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  tickSize?: InputMaybe<Scalars["BigInt"]>;
  tickSizeDecimal?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_contains?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tickSizeDecimal_not?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tickSizeDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  tickSizeDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  tickSize_gt?: InputMaybe<Scalars["BigInt"]>;
  tickSize_gte?: InputMaybe<Scalars["BigInt"]>;
  tickSize_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  tickSize_lt?: InputMaybe<Scalars["BigInt"]>;
  tickSize_lte?: InputMaybe<Scalars["BigInt"]>;
  tickSize_not?: InputMaybe<Scalars["BigInt"]>;
  tickSize_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  vestingPeriod?: InputMaybe<Scalars["BigInt"]>;
  vestingPeriod_gt?: InputMaybe<Scalars["BigInt"]>;
  vestingPeriod_gte?: InputMaybe<Scalars["BigInt"]>;
  vestingPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  vestingPeriod_lt?: InputMaybe<Scalars["BigInt"]>;
  vestingPeriod_lte?: InputMaybe<Scalars["BigInt"]>;
  vestingPeriod_not?: InputMaybe<Scalars["BigInt"]>;
  vestingPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
};

export type EmissionManagerMinPriceScalarChanged = {
  __typename?: "emissionManagerMinPriceScalarChanged";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  emissionManager: Scalars["String"];
  logIndex: Scalars["Int"];
  newMinPriceScalar: Scalars["BigInt"];
  newMinPriceScalarDecimal: Scalars["String"];
  rEmissionManager?: Maybe<EmissionManager>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type EmissionManagerMinPriceScalarChangedFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerMinPriceScalarChangedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerMinPriceScalarChangedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  emissionManager?: InputMaybe<Scalars["String"]>;
  emissionManager_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not?: InputMaybe<Scalars["String"]>;
  emissionManager_not_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  newMinPriceScalar?: InputMaybe<Scalars["BigInt"]>;
  newMinPriceScalarDecimal?: InputMaybe<Scalars["String"]>;
  newMinPriceScalarDecimal_contains?: InputMaybe<Scalars["String"]>;
  newMinPriceScalarDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  newMinPriceScalarDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  newMinPriceScalarDecimal_not?: InputMaybe<Scalars["String"]>;
  newMinPriceScalarDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  newMinPriceScalarDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  newMinPriceScalarDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  newMinPriceScalarDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  newMinPriceScalarDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  newMinPriceScalar_gt?: InputMaybe<Scalars["BigInt"]>;
  newMinPriceScalar_gte?: InputMaybe<Scalars["BigInt"]>;
  newMinPriceScalar_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  newMinPriceScalar_lt?: InputMaybe<Scalars["BigInt"]>;
  newMinPriceScalar_lte?: InputMaybe<Scalars["BigInt"]>;
  newMinPriceScalar_not?: InputMaybe<Scalars["BigInt"]>;
  newMinPriceScalar_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type EmissionManagerMinPriceScalarChangedPage = {
  __typename?: "emissionManagerMinPriceScalarChangedPage";
  items: Array<EmissionManagerMinPriceScalarChanged>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManagerMinimumPremiumChanged = {
  __typename?: "emissionManagerMinimumPremiumChanged";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  emissionManager: Scalars["String"];
  logIndex: Scalars["Int"];
  newMinimumPremium: Scalars["BigInt"];
  newMinimumPremiumDecimal: Scalars["String"];
  rEmissionManager?: Maybe<EmissionManager>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type EmissionManagerMinimumPremiumChangedFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerMinimumPremiumChangedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerMinimumPremiumChangedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  emissionManager?: InputMaybe<Scalars["String"]>;
  emissionManager_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not?: InputMaybe<Scalars["String"]>;
  emissionManager_not_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  newMinimumPremium?: InputMaybe<Scalars["BigInt"]>;
  newMinimumPremiumDecimal?: InputMaybe<Scalars["String"]>;
  newMinimumPremiumDecimal_contains?: InputMaybe<Scalars["String"]>;
  newMinimumPremiumDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  newMinimumPremiumDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  newMinimumPremiumDecimal_not?: InputMaybe<Scalars["String"]>;
  newMinimumPremiumDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  newMinimumPremiumDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  newMinimumPremiumDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  newMinimumPremiumDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  newMinimumPremiumDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  newMinimumPremium_gt?: InputMaybe<Scalars["BigInt"]>;
  newMinimumPremium_gte?: InputMaybe<Scalars["BigInt"]>;
  newMinimumPremium_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  newMinimumPremium_lt?: InputMaybe<Scalars["BigInt"]>;
  newMinimumPremium_lte?: InputMaybe<Scalars["BigInt"]>;
  newMinimumPremium_not?: InputMaybe<Scalars["BigInt"]>;
  newMinimumPremium_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type EmissionManagerMinimumPremiumChangedPage = {
  __typename?: "emissionManagerMinimumPremiumChangedPage";
  items: Array<EmissionManagerMinimumPremiumChanged>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManagerPage = {
  __typename?: "emissionManagerPage";
  items: Array<EmissionManager>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManagerRestartTimeframeChanged = {
  __typename?: "emissionManagerRestartTimeframeChanged";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  emissionManager: Scalars["String"];
  logIndex: Scalars["Int"];
  newRestartTimeframe: Scalars["BigInt"];
  rEmissionManager?: Maybe<EmissionManager>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type EmissionManagerRestartTimeframeChangedFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerRestartTimeframeChangedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerRestartTimeframeChangedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  emissionManager?: InputMaybe<Scalars["String"]>;
  emissionManager_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not?: InputMaybe<Scalars["String"]>;
  emissionManager_not_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  newRestartTimeframe?: InputMaybe<Scalars["BigInt"]>;
  newRestartTimeframe_gt?: InputMaybe<Scalars["BigInt"]>;
  newRestartTimeframe_gte?: InputMaybe<Scalars["BigInt"]>;
  newRestartTimeframe_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  newRestartTimeframe_lt?: InputMaybe<Scalars["BigInt"]>;
  newRestartTimeframe_lte?: InputMaybe<Scalars["BigInt"]>;
  newRestartTimeframe_not?: InputMaybe<Scalars["BigInt"]>;
  newRestartTimeframe_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type EmissionManagerRestartTimeframeChangedPage = {
  __typename?: "emissionManagerRestartTimeframeChangedPage";
  items: Array<EmissionManagerRestartTimeframeChanged>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManagerTickSizeChanged = {
  __typename?: "emissionManagerTickSizeChanged";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  emissionManager: Scalars["String"];
  logIndex: Scalars["Int"];
  newTickSize: Scalars["BigInt"];
  newTickSizeDecimal: Scalars["String"];
  rEmissionManager?: Maybe<EmissionManager>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type EmissionManagerTickSizeChangedFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerTickSizeChangedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerTickSizeChangedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  emissionManager?: InputMaybe<Scalars["String"]>;
  emissionManager_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not?: InputMaybe<Scalars["String"]>;
  emissionManager_not_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  newTickSize?: InputMaybe<Scalars["BigInt"]>;
  newTickSizeDecimal?: InputMaybe<Scalars["String"]>;
  newTickSizeDecimal_contains?: InputMaybe<Scalars["String"]>;
  newTickSizeDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  newTickSizeDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  newTickSizeDecimal_not?: InputMaybe<Scalars["String"]>;
  newTickSizeDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  newTickSizeDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  newTickSizeDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  newTickSizeDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  newTickSizeDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  newTickSize_gt?: InputMaybe<Scalars["BigInt"]>;
  newTickSize_gte?: InputMaybe<Scalars["BigInt"]>;
  newTickSize_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  newTickSize_lt?: InputMaybe<Scalars["BigInt"]>;
  newTickSize_lte?: InputMaybe<Scalars["BigInt"]>;
  newTickSize_not?: InputMaybe<Scalars["BigInt"]>;
  newTickSize_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type EmissionManagerTickSizeChangedPage = {
  __typename?: "emissionManagerTickSizeChangedPage";
  items: Array<EmissionManagerTickSizeChanged>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EmissionManagerVestingPeriodChanged = {
  __typename?: "emissionManagerVestingPeriodChanged";
  block: Scalars["BigInt"];
  chainId: Scalars["Int"];
  emissionManager: Scalars["String"];
  logIndex: Scalars["Int"];
  newVestingPeriod: Scalars["BigInt"];
  rEmissionManager?: Maybe<EmissionManager>;
  timestamp: Scalars["BigInt"];
  txHash: Scalars["String"];
};

export type EmissionManagerVestingPeriodChangedFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmissionManagerVestingPeriodChangedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmissionManagerVestingPeriodChangedFilter>>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  emissionManager?: InputMaybe<Scalars["String"]>;
  emissionManager_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not?: InputMaybe<Scalars["String"]>;
  emissionManager_not_contains?: InputMaybe<Scalars["String"]>;
  emissionManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  emissionManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  emissionManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  emissionManager_starts_with?: InputMaybe<Scalars["String"]>;
  logIndex?: InputMaybe<Scalars["Int"]>;
  logIndex_gt?: InputMaybe<Scalars["Int"]>;
  logIndex_gte?: InputMaybe<Scalars["Int"]>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  logIndex_lt?: InputMaybe<Scalars["Int"]>;
  logIndex_lte?: InputMaybe<Scalars["Int"]>;
  logIndex_not?: InputMaybe<Scalars["Int"]>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  newVestingPeriod?: InputMaybe<Scalars["BigInt"]>;
  newVestingPeriod_gt?: InputMaybe<Scalars["BigInt"]>;
  newVestingPeriod_gte?: InputMaybe<Scalars["BigInt"]>;
  newVestingPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  newVestingPeriod_lt?: InputMaybe<Scalars["BigInt"]>;
  newVestingPeriod_lte?: InputMaybe<Scalars["BigInt"]>;
  newVestingPeriod_not?: InputMaybe<Scalars["BigInt"]>;
  newVestingPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  txHash?: InputMaybe<Scalars["String"]>;
  txHash_contains?: InputMaybe<Scalars["String"]>;
  txHash_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not?: InputMaybe<Scalars["String"]>;
  txHash_not_contains?: InputMaybe<Scalars["String"]>;
  txHash_not_ends_with?: InputMaybe<Scalars["String"]>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  txHash_not_starts_with?: InputMaybe<Scalars["String"]>;
  txHash_starts_with?: InputMaybe<Scalars["String"]>;
};

export type EmissionManagerVestingPeriodChangedPage = {
  __typename?: "emissionManagerVestingPeriodChangedPage";
  items: Array<EmissionManagerVestingPeriodChanged>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ReceiptToken = {
  __typename?: "receiptToken";
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  facility: Scalars["String"];
  positions?: Maybe<ConvertibleDepositPositionPage>;
  rAssetPeriod?: Maybe<DepositAssetPeriod>;
  rFacility?: Maybe<DepositFacility>;
  receiptTokenId: Scalars["BigInt"];
  receiptTokenManager: Scalars["String"];
  redemptions?: Maybe<RedemptionPage>;
};

export type ReceiptTokenPositionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<ConvertibleDepositPositionFilter>;
};

export type ReceiptTokenRedemptionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<RedemptionFilter>;
};

export type ReceiptTokenFilter = {
  AND?: InputMaybe<Array<InputMaybe<ReceiptTokenFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ReceiptTokenFilter>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  receiptTokenId?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  receiptTokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_not?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  receiptTokenManager?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_contains?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_ends_with?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  receiptTokenManager_not?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_not_contains?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  receiptTokenManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_starts_with?: InputMaybe<Scalars["String"]>;
};

export type ReceiptTokenPage = {
  __typename?: "receiptTokenPage";
  items: Array<ReceiptToken>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type Redemption = {
  __typename?: "redemption";
  amount: Scalars["BigInt"];
  amountDecimal: Scalars["String"];
  cancelledEvents?: Maybe<DepositRedemptionVaultRedemptionCancelledPage>;
  chainId: Scalars["Int"];
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  depositor: Scalars["String"];
  facility: Scalars["String"];
  finishedEvents?: Maybe<DepositRedemptionVaultRedemptionFinishedPage>;
  loans?: Maybe<RedemptionLoanPage>;
  positionId?: Maybe<Scalars["BigInt"]>;
  rAssetPeriod?: Maybe<DepositAssetPeriod>;
  rDepositor?: Maybe<Depositor>;
  rFacility?: Maybe<DepositFacility>;
  rPosition?: Maybe<ConvertibleDepositPosition>;
  rReceiptToken?: Maybe<ReceiptToken>;
  rRedemptionVault?: Maybe<DepositRedemptionVault>;
  receiptTokenId: Scalars["BigInt"];
  receiptTokenManager: Scalars["String"];
  redeemableAt: Scalars["BigInt"];
  redemptionId: Scalars["Int"];
  redemptionVault: Scalars["String"];
  startedEvents?: Maybe<DepositRedemptionVaultRedemptionStartedPage>;
};

export type RedemptionCancelledEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultRedemptionCancelledFilter>;
};

export type RedemptionFinishedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultRedemptionFinishedFilter>;
};

export type RedemptionLoansArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<RedemptionLoanFilter>;
};

export type RedemptionStartedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultRedemptionStartedFilter>;
};

export type RedemptionFilter = {
  AND?: InputMaybe<Array<InputMaybe<RedemptionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RedemptionFilter>>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amountDecimal?: InputMaybe<Scalars["String"]>;
  amountDecimal_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  amountDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  amountDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositor?: InputMaybe<Scalars["String"]>;
  depositor_contains?: InputMaybe<Scalars["String"]>;
  depositor_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not?: InputMaybe<Scalars["String"]>;
  depositor_not_contains?: InputMaybe<Scalars["String"]>;
  depositor_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositor_starts_with?: InputMaybe<Scalars["String"]>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  positionId?: InputMaybe<Scalars["BigInt"]>;
  positionId_gt?: InputMaybe<Scalars["BigInt"]>;
  positionId_gte?: InputMaybe<Scalars["BigInt"]>;
  positionId_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  positionId_lt?: InputMaybe<Scalars["BigInt"]>;
  positionId_lte?: InputMaybe<Scalars["BigInt"]>;
  positionId_not?: InputMaybe<Scalars["BigInt"]>;
  positionId_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  receiptTokenId?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  receiptTokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_not?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  receiptTokenManager?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_contains?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_ends_with?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  receiptTokenManager_not?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_not_contains?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  receiptTokenManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_starts_with?: InputMaybe<Scalars["String"]>;
  redeemableAt?: InputMaybe<Scalars["BigInt"]>;
  redeemableAt_gt?: InputMaybe<Scalars["BigInt"]>;
  redeemableAt_gte?: InputMaybe<Scalars["BigInt"]>;
  redeemableAt_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  redeemableAt_lt?: InputMaybe<Scalars["BigInt"]>;
  redeemableAt_lte?: InputMaybe<Scalars["BigInt"]>;
  redeemableAt_not?: InputMaybe<Scalars["BigInt"]>;
  redeemableAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  redemptionId?: InputMaybe<Scalars["Int"]>;
  redemptionId_gt?: InputMaybe<Scalars["Int"]>;
  redemptionId_gte?: InputMaybe<Scalars["Int"]>;
  redemptionId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionId_lt?: InputMaybe<Scalars["Int"]>;
  redemptionId_lte?: InputMaybe<Scalars["Int"]>;
  redemptionId_not?: InputMaybe<Scalars["Int"]>;
  redemptionId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
};

export type RedemptionLoan = {
  __typename?: "redemptionLoan";
  chainId: Scalars["Int"];
  createdAt: Scalars["BigInt"];
  createdEvents?: Maybe<DepositRedemptionVaultLoanCreatedPage>;
  defaultedEvents?: Maybe<DepositRedemptionVaultLoanDefaultedPage>;
  depositAsset: Scalars["String"];
  depositPeriod: Scalars["Int"];
  depositor: Scalars["String"];
  dueDate: Scalars["BigInt"];
  extendedEvents?: Maybe<DepositRedemptionVaultLoanExtendedPage>;
  facility: Scalars["String"];
  initialPrincipal: Scalars["BigInt"];
  initialPrincipalDecimal: Scalars["String"];
  interest: Scalars["BigInt"];
  interestDecimal: Scalars["String"];
  principal: Scalars["BigInt"];
  principalDecimal: Scalars["String"];
  rRedemption?: Maybe<Redemption>;
  receiptTokenId: Scalars["BigInt"];
  receiptTokenManager: Scalars["String"];
  redemptionId: Scalars["Int"];
  redemptionVault: Scalars["String"];
  repaidEvents?: Maybe<DepositRedemptionVaultLoanRepaidPage>;
  status: Scalars["String"];
};

export type RedemptionLoanCreatedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultLoanCreatedFilter>;
};

export type RedemptionLoanDefaultedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultLoanDefaultedFilter>;
};

export type RedemptionLoanExtendedEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultLoanExtendedFilter>;
};

export type RedemptionLoanRepaidEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  orderDirection?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<DepositRedemptionVaultLoanRepaidFilter>;
};

export type RedemptionLoanFilter = {
  AND?: InputMaybe<Array<InputMaybe<RedemptionLoanFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RedemptionLoanFilter>>>;
  chainId?: InputMaybe<Scalars["Int"]>;
  chainId_gt?: InputMaybe<Scalars["Int"]>;
  chainId_gte?: InputMaybe<Scalars["Int"]>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  chainId_lt?: InputMaybe<Scalars["Int"]>;
  chainId_lte?: InputMaybe<Scalars["Int"]>;
  chainId_not?: InputMaybe<Scalars["Int"]>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  createdAt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  depositAsset?: InputMaybe<Scalars["String"]>;
  depositAsset_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not?: InputMaybe<Scalars["String"]>;
  depositAsset_not_contains?: InputMaybe<Scalars["String"]>;
  depositAsset_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositAsset_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositAsset_starts_with?: InputMaybe<Scalars["String"]>;
  depositPeriod?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_gte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositPeriod_lt?: InputMaybe<Scalars["Int"]>;
  depositPeriod_lte?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not?: InputMaybe<Scalars["Int"]>;
  depositPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  depositor?: InputMaybe<Scalars["String"]>;
  depositor_contains?: InputMaybe<Scalars["String"]>;
  depositor_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not?: InputMaybe<Scalars["String"]>;
  depositor_not_contains?: InputMaybe<Scalars["String"]>;
  depositor_not_ends_with?: InputMaybe<Scalars["String"]>;
  depositor_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  depositor_not_starts_with?: InputMaybe<Scalars["String"]>;
  depositor_starts_with?: InputMaybe<Scalars["String"]>;
  dueDate?: InputMaybe<Scalars["BigInt"]>;
  dueDate_gt?: InputMaybe<Scalars["BigInt"]>;
  dueDate_gte?: InputMaybe<Scalars["BigInt"]>;
  dueDate_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  dueDate_lt?: InputMaybe<Scalars["BigInt"]>;
  dueDate_lte?: InputMaybe<Scalars["BigInt"]>;
  dueDate_not?: InputMaybe<Scalars["BigInt"]>;
  dueDate_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  facility?: InputMaybe<Scalars["String"]>;
  facility_contains?: InputMaybe<Scalars["String"]>;
  facility_ends_with?: InputMaybe<Scalars["String"]>;
  facility_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not?: InputMaybe<Scalars["String"]>;
  facility_not_contains?: InputMaybe<Scalars["String"]>;
  facility_not_ends_with?: InputMaybe<Scalars["String"]>;
  facility_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  facility_not_starts_with?: InputMaybe<Scalars["String"]>;
  facility_starts_with?: InputMaybe<Scalars["String"]>;
  initialPrincipal?: InputMaybe<Scalars["BigInt"]>;
  initialPrincipalDecimal?: InputMaybe<Scalars["String"]>;
  initialPrincipalDecimal_contains?: InputMaybe<Scalars["String"]>;
  initialPrincipalDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  initialPrincipalDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  initialPrincipalDecimal_not?: InputMaybe<Scalars["String"]>;
  initialPrincipalDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  initialPrincipalDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  initialPrincipalDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  initialPrincipalDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  initialPrincipalDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  initialPrincipal_gt?: InputMaybe<Scalars["BigInt"]>;
  initialPrincipal_gte?: InputMaybe<Scalars["BigInt"]>;
  initialPrincipal_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  initialPrincipal_lt?: InputMaybe<Scalars["BigInt"]>;
  initialPrincipal_lte?: InputMaybe<Scalars["BigInt"]>;
  initialPrincipal_not?: InputMaybe<Scalars["BigInt"]>;
  initialPrincipal_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  interest?: InputMaybe<Scalars["BigInt"]>;
  interestDecimal?: InputMaybe<Scalars["String"]>;
  interestDecimal_contains?: InputMaybe<Scalars["String"]>;
  interestDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  interestDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  interestDecimal_not?: InputMaybe<Scalars["String"]>;
  interestDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  interestDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  interestDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  interestDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  interestDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  interest_gt?: InputMaybe<Scalars["BigInt"]>;
  interest_gte?: InputMaybe<Scalars["BigInt"]>;
  interest_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  interest_lt?: InputMaybe<Scalars["BigInt"]>;
  interest_lte?: InputMaybe<Scalars["BigInt"]>;
  interest_not?: InputMaybe<Scalars["BigInt"]>;
  interest_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  principal?: InputMaybe<Scalars["BigInt"]>;
  principalDecimal?: InputMaybe<Scalars["String"]>;
  principalDecimal_contains?: InputMaybe<Scalars["String"]>;
  principalDecimal_ends_with?: InputMaybe<Scalars["String"]>;
  principalDecimal_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  principalDecimal_not?: InputMaybe<Scalars["String"]>;
  principalDecimal_not_contains?: InputMaybe<Scalars["String"]>;
  principalDecimal_not_ends_with?: InputMaybe<Scalars["String"]>;
  principalDecimal_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  principalDecimal_not_starts_with?: InputMaybe<Scalars["String"]>;
  principalDecimal_starts_with?: InputMaybe<Scalars["String"]>;
  principal_gt?: InputMaybe<Scalars["BigInt"]>;
  principal_gte?: InputMaybe<Scalars["BigInt"]>;
  principal_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  principal_lt?: InputMaybe<Scalars["BigInt"]>;
  principal_lte?: InputMaybe<Scalars["BigInt"]>;
  principal_not?: InputMaybe<Scalars["BigInt"]>;
  principal_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  receiptTokenId?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  receiptTokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_not?: InputMaybe<Scalars["BigInt"]>;
  receiptTokenId_not_in?: InputMaybe<Array<InputMaybe<Scalars["BigInt"]>>>;
  receiptTokenManager?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_contains?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_ends_with?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  receiptTokenManager_not?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_not_contains?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_not_ends_with?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  receiptTokenManager_not_starts_with?: InputMaybe<Scalars["String"]>;
  receiptTokenManager_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionId?: InputMaybe<Scalars["Int"]>;
  redemptionId_gt?: InputMaybe<Scalars["Int"]>;
  redemptionId_gte?: InputMaybe<Scalars["Int"]>;
  redemptionId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionId_lt?: InputMaybe<Scalars["Int"]>;
  redemptionId_lte?: InputMaybe<Scalars["Int"]>;
  redemptionId_not?: InputMaybe<Scalars["Int"]>;
  redemptionId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  redemptionVault?: InputMaybe<Scalars["String"]>;
  redemptionVault_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_contains?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_ends_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  redemptionVault_not_starts_with?: InputMaybe<Scalars["String"]>;
  redemptionVault_starts_with?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  status_contains?: InputMaybe<Scalars["String"]>;
  status_ends_with?: InputMaybe<Scalars["String"]>;
  status_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  status_not?: InputMaybe<Scalars["String"]>;
  status_not_contains?: InputMaybe<Scalars["String"]>;
  status_not_ends_with?: InputMaybe<Scalars["String"]>;
  status_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  status_not_starts_with?: InputMaybe<Scalars["String"]>;
  status_starts_with?: InputMaybe<Scalars["String"]>;
};

export type RedemptionLoanPage = {
  __typename?: "redemptionLoanPage";
  items: Array<RedemptionLoan>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type RedemptionPage = {
  __typename?: "redemptionPage";
  items: Array<Redemption>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ClaimAllYieldFailedEventsSinceQueryVariables = Exact<{
  latestBlock: Scalars["BigInt"];
  chainId: Scalars["Int"];
}>;

export type ClaimAllYieldFailedEventsSinceQuery = {
  __typename?: "Query";
  convertibleDepositFacilityClaimAllYieldFaileds: {
    __typename?: "convertibleDepositFacilityClaimAllYieldFailedPage";
    items: Array<{
      __typename?: "convertibleDepositFacilityClaimAllYieldFailed";
      chainId: number;
      block: string;
      logIndex: number;
      txHash: string;
      timestamp: string;
      facility: string;
    }>;
  };
};

export type AuctionParametersUpdatedSinceQueryVariables = Exact<{
  latestBlock: Scalars["BigInt"];
  chainId: Scalars["Int"];
}>;

export type AuctionParametersUpdatedSinceQuery = {
  __typename?: "Query";
  convertibleDepositAuctioneerAuctionParametersUpdateds: {
    __typename?: "convertibleDepositAuctioneerAuctionParametersUpdatedPage";
    items: Array<{
      __typename?: "convertibleDepositAuctioneerAuctionParametersUpdated";
      chainId: number;
      block: string;
      logIndex: number;
      txHash: string;
      timestamp: string;
      auctioneer: string;
      depositAsset: string;
      target: string;
      targetDecimal: string;
      tickSize: string;
      tickSizeDecimal: string;
      minPrice: string;
      minPriceDecimal: string;
    }>;
  };
};

export type BondMarketCreationFailedSinceQueryVariables = Exact<{
  latestBlock: Scalars["BigInt"];
  chainId: Scalars["Int"];
}>;

export type BondMarketCreationFailedSinceQuery = {
  __typename?: "Query";
  emissionManagerBondMarketCreationFaileds: {
    __typename?: "emissionManagerBondMarketCreationFailedPage";
    items: Array<{
      __typename?: "emissionManagerBondMarketCreationFailed";
      chainId: number;
      block: string;
      logIndex: number;
      txHash: string;
      timestamp: string;
      emissionManager: string;
      saleAmount: string;
      saleAmountDecimal: string;
    }>;
  };
};

export const ClaimAllYieldFailedEventsSinceDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ClaimAllYieldFailedEventsSince" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "latestBlock" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "BigInt" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "chainId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Int" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "convertibleDepositFacilityClaimAllYieldFaileds" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "StringValue", value: "block", block: false },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: { kind: "StringValue", value: "asc", block: false },
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
                      value: { kind: "Variable", name: { kind: "Name", value: "latestBlock" } },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "chainId" },
                      value: { kind: "Variable", name: { kind: "Name", value: "chainId" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "chainId" } },
                      { kind: "Field", name: { kind: "Name", value: "block" } },
                      { kind: "Field", name: { kind: "Name", value: "logIndex" } },
                      { kind: "Field", name: { kind: "Name", value: "txHash" } },
                      { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                      { kind: "Field", name: { kind: "Name", value: "facility" } },
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
} as unknown as DocumentNode<ClaimAllYieldFailedEventsSinceQuery, ClaimAllYieldFailedEventsSinceQueryVariables>;
export const AuctionParametersUpdatedSinceDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AuctionParametersUpdatedSince" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "latestBlock" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "BigInt" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "chainId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Int" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "convertibleDepositAuctioneerAuctionParametersUpdateds" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "StringValue", value: "block", block: false },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: { kind: "StringValue", value: "asc", block: false },
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
                      value: { kind: "Variable", name: { kind: "Name", value: "latestBlock" } },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "chainId" },
                      value: { kind: "Variable", name: { kind: "Name", value: "chainId" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "chainId" } },
                      { kind: "Field", name: { kind: "Name", value: "block" } },
                      { kind: "Field", name: { kind: "Name", value: "logIndex" } },
                      { kind: "Field", name: { kind: "Name", value: "txHash" } },
                      { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                      { kind: "Field", name: { kind: "Name", value: "auctioneer" } },
                      { kind: "Field", name: { kind: "Name", value: "depositAsset" } },
                      { kind: "Field", name: { kind: "Name", value: "target" } },
                      { kind: "Field", name: { kind: "Name", value: "targetDecimal" } },
                      { kind: "Field", name: { kind: "Name", value: "tickSize" } },
                      { kind: "Field", name: { kind: "Name", value: "tickSizeDecimal" } },
                      { kind: "Field", name: { kind: "Name", value: "minPrice" } },
                      { kind: "Field", name: { kind: "Name", value: "minPriceDecimal" } },
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
} as unknown as DocumentNode<AuctionParametersUpdatedSinceQuery, AuctionParametersUpdatedSinceQueryVariables>;
export const BondMarketCreationFailedSinceDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "BondMarketCreationFailedSince" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "latestBlock" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "BigInt" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "chainId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Int" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emissionManagerBondMarketCreationFaileds" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "StringValue", value: "block", block: false },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: { kind: "StringValue", value: "asc", block: false },
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
                      value: { kind: "Variable", name: { kind: "Name", value: "latestBlock" } },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "chainId" },
                      value: { kind: "Variable", name: { kind: "Name", value: "chainId" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "chainId" } },
                      { kind: "Field", name: { kind: "Name", value: "block" } },
                      { kind: "Field", name: { kind: "Name", value: "logIndex" } },
                      { kind: "Field", name: { kind: "Name", value: "txHash" } },
                      { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                      { kind: "Field", name: { kind: "Name", value: "emissionManager" } },
                      { kind: "Field", name: { kind: "Name", value: "saleAmount" } },
                      { kind: "Field", name: { kind: "Name", value: "saleAmountDecimal" } },
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
} as unknown as DocumentNode<BondMarketCreationFailedSinceQuery, BondMarketCreationFailedSinceQueryVariables>;
