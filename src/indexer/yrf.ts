import { buildQuery, queryIndexer, queryIndexerData } from "../helpers/indexerClient";
import type { YrfRepoMarket } from "./types";

const PAGE_LIMIT = 1000;

/** Was `RepoMarketsCreatedSince`. */
export const getRepoMarketsSince = (sinceBlock: number): Promise<YrfRepoMarket[]> =>
  queryIndexerData(
    `/v1/yrf/repo-markets${buildQuery({
      sinceBlock,
      orderBy: "blockNumber",
      order: "asc",
      limit: PAGE_LIMIT,
    })}`,
  );

/** Was `RepoMarket`. */
export const getRepoMarket = (marketId: string): Promise<YrfRepoMarket[]> =>
  queryIndexerData(`/v1/yrf/repo-markets${buildQuery({ marketId, limit: 1 })}`);

/** Was `YRFSubgraphMeta`. */
export const getYrfIndexedBlock = async (): Promise<number> =>
  (await queryIndexer<unknown>("/v1/yrf/_meta")).meta.block;
