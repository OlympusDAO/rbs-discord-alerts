import { buildQuery, queryIndexer, queryIndexerData } from "../helpers/indexerClient";
import type { EmissionManagerSale } from "./types";

const PAGE_LIMIT = 1000;

/** Was `EmissionManagerMarketsCreatedSince`. */
export const getSalesSince = (sinceBlock: number): Promise<EmissionManagerSale[]> =>
  queryIndexerData(`/v1/emission-manager/sales${buildQuery({ sinceBlock, limit: PAGE_LIMIT })}`);

/** Was `EmissionManagerMarket`. */
export const getSale = (marketId: string): Promise<EmissionManagerSale[]> =>
  queryIndexerData(`/v1/emission-manager/sales${buildQuery({ marketId, limit: 1 })}`);

/** Was `EmissionManagerSubgraphMeta`. */
export const getEmissionManagerIndexedBlock = async (): Promise<number> =>
  (await queryIndexer<unknown>("/v1/emission-manager/_meta")).meta.block;
