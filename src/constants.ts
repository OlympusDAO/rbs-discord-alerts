const RBS_SUBGRAPH_URL =
  "https://gateway-arbitrum.network.thegraph.com/api/[api-key]/deployments/id/QmcXTHcqM7BWd9UpNJf3m4f43bqJFpDMb5x7V4kyKSwWpE"; // 1.4.0

export const getRbsSubgraphUrl = (): string => {
  const apiKey = process.env.GRAPHQL_API_KEY;
  if (!apiKey) {
    throw new Error("GRAPHQL_API_KEY is not set");
  }
  return RBS_SUBGRAPH_URL.replace("[api-key]", apiKey);
};

const PRICE_SNAPSHOT_SUBGRAPH_URL =
  "https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/AaQjjnQ2esBZXe3trmXvGzMCYcDgTgWNoikaadr8Rep1";

export const getPriceSnapshotSubgraphUrl = (): string => {
  const apiKey = process.env.GRAPHQL_API_KEY;
  if (!apiKey) {
    throw new Error("GRAPHQL_API_KEY is not set");
  }
  return PRICE_SNAPSHOT_SUBGRAPH_URL.replace("[api-key]", apiKey);
};

const BONDS_SUBGRAPH_URL =
  "https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/E4Mikyz3ec1MGGFYNuEDQ3F1qtcLashFKwyTvnbfa9Ss";

export const getBondsSubgraphUrl = (): string => {
  const apiKey = process.env.GRAPHQL_API_KEY;
  if (!apiKey) {
    throw new Error("GRAPHQL_API_KEY is not set");
  }
  return BONDS_SUBGRAPH_URL.replace("[api-key]", apiKey);
};

export const ERC20_OHM_V2 = "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5".toLowerCase();
export const ERC20_DAI = "0x6b175474e89094c44da98b954eedeac495271d0f".toLowerCase();
