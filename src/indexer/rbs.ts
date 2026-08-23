import { buildQuery, queryIndexer, queryIndexerData } from "../helpers/indexerClient";
import type { Beat, CapacitySnapshot, MinimumTargetPriceChanged, PriceEvent, RangeSnapshot } from "./types";

const PAGE_LIMIT = 1000;

/** RBS price events after a block, newest last. Was `RBSPriceEvents`. */
export const getPriceEventsSince = (sinceBlock: number): Promise<PriceEvent[]> =>
  queryIndexerData(`/v1/rbs/price-events${buildQuery({ sinceBlock, limit: PAGE_LIMIT })}`);

/** Was `MinimumTargetPriceChangedEvents`. */
export const getTargetPriceChangesSince = (sinceBlock: number): Promise<MinimumTargetPriceChanged[]> =>
  queryIndexerData(`/v1/rbs/target-price-changes${buildQuery({ sinceBlock, limit: PAGE_LIMIT })}`);

/** Was `LatestRangeSnapshot`. Answers null before the first snapshot exists. */
export const getLatestRangeSnapshot = (): Promise<RangeSnapshot | null> => queryIndexerData("/v1/rbs/snapshots/latest");

/** Was `RangeSnapshotSinceBlock`. */
export const getRangeSnapshotsSince = (sinceBlock: number): Promise<RangeSnapshot[]> =>
  queryIndexerData(`/v1/rbs/snapshots${buildQuery({ sinceBlock, order: "asc", limit: PAGE_LIMIT })}`);

/** Was `RangeSnapshotAtBlock`. */
export const getRangeSnapshotAtBlock = (atBlock: number): Promise<RangeSnapshot[]> =>
  queryIndexerData(`/v1/rbs/snapshots${buildQuery({ atBlock, order: "desc", limit: 1 })}`);

/** Was `BeatsSinceBlock`. */
export const getBeatsSince = (sinceBlock: number): Promise<Beat[]> =>
  queryIndexerData(`/v1/rbs/beats${buildQuery({ sinceBlock, limit: PAGE_LIMIT })}`);

/**
 * Snapshots whose cushion capacity fell below a threshold, both sides at once.
 *
 * Was TWO queries — `LowerCushionCapacityDepleted` and
 * `UpperCushionCapacityDepleted` — over the same window. The route returns
 * both, so the depletion count is now one request rather than two.
 */
export const getCushionDepletion = (
  sinceDate: string,
  belowCapacity: string,
): Promise<{ high: CapacitySnapshot[]; low: CapacitySnapshot[] }> =>
  queryIndexerData(
    `/v1/rbs/cushion-depletion${buildQuery({
      sinceDate,
      highCapacityBelow: belowCapacity,
      lowCapacityBelow: belowCapacity,
      limit: PAGE_LIMIT,
    })}`,
  );

/** The indexed head for the RBS domain. Was `_meta { block { number } }`. */
export const getRbsIndexedBlock = async (): Promise<number> =>
  (await queryIndexer<unknown>("/v1/rbs/_meta")).meta.block;
