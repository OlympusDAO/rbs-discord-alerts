import { buildQuery, queryIndexer, queryIndexerData } from "../helpers/indexerClient";
import type {
  CdAsset,
  CdAuctionParametersUpdated,
  CdAuctionResult,
  CdBondMarketCreationFailed,
  CdClaimAllYieldFailed,
  CdClaimedYield,
} from "./types";

const PAGE_LIMIT = 1000;
const ASSETS_LIMIT = 200;

/**
 * Auction parameter updates and results after a block.
 *
 * Was TWO Ponder queries — `AuctionParametersUpdatedSince` and
 * `AuctionResultSince` — over the same window.
 */
export const getAuctionEventsSince = (
  sinceBlock: number,
): Promise<{
  parametersUpdated: CdAuctionParametersUpdated[];
  results: CdAuctionResult[];
}> => queryIndexerData(`/v1/convertible-deposits/auction-events${buildQuery({ sinceBlock, limit: PAGE_LIMIT })}`);

/**
 * The failure events after a block.
 *
 * `claimAllYieldFailed` was `ClaimAllYieldFailedEventsSince`;
 * `bondMarketCreationFailed` backs the bond-market-creation-failed alert.
 */
export const getFailuresSince = (
  sinceBlock: number,
): Promise<{
  claimAllYieldFailed: CdClaimAllYieldFailed[];
  bondMarketCreationFailed: CdBondMarketCreationFailed[];
}> => queryIndexerData(`/v1/convertible-deposits/failures${buildQuery({ sinceBlock, limit: PAGE_LIMIT })}`);

/** Was `ConvertibleDepositFacilityClaimedYieldsSince`. */
export const getClaimedYieldsSince = (sinceBlock: number): Promise<CdClaimedYield[]> =>
  queryIndexerData(
    `/v1/convertible-deposits/claimed-yields${buildQuery({
      sinceBlock,
      order: "asc",
      limit: PAGE_LIMIT,
    })}`,
  );

/**
 * Deposit asset address -> symbol.
 *
 * The event routes return the asset ADDRESS; the Ponder documents pulled a
 * nested `rDepositAsset { rAsset { symbol } }` alongside each event. There are
 * a handful of assets, so one lookup per run replaces that join — and the
 * alerts keep the same "SYMBOL linked to Etherscan" text.
 */
export const getDepositAssetSymbols = async (): Promise<Map<string, string>> => {
  // The assets route caps `limit` at 200, not the 1000 the event routes allow —
  // passing 1000 is a 400, not a truncation. One deposit asset exists today.
  const assets = await queryIndexerData<CdAsset[]>(
    `/v1/convertible-deposits/assets${buildQuery({ limit: ASSETS_LIMIT })}`,
  );
  return new Map(assets.map(asset => [asset.address.toLowerCase(), asset.symbol]));
};

export const getConvertibleDepositsIndexedBlock = async (): Promise<number> =>
  (await queryIndexer<unknown>("/v1/convertible-deposits/_meta")).meta.block;
