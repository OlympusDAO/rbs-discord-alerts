import { buildQuery, queryIndexer, queryIndexerData } from "../helpers/indexerClient";
import type { BondMarketEvent } from "./types";

const PAGE_LIMIT = 1000;

/**
 * Bond market created and closed events after a block.
 *
 * Was TWO queries — `MarketCreatedEvents` and `MarketClosedEvents` — over the
 * same block window. The route returns both, each with its nested market.
 */
export const getBondMarketEventsSince = (
  sinceBlock: number,
): Promise<{ created: BondMarketEvent[]; closed: BondMarketEvent[] }> =>
  queryIndexerData(`/v1/bonds/market-events${buildQuery({ sinceBlock, limit: PAGE_LIMIT })}`);

export const getBondsIndexedBlock = async (): Promise<number> =>
  (await queryIndexer<unknown>("/v1/bonds/_meta")).meta.block;
