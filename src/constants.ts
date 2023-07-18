const RBS_SUBGRAPH_URL =
  "https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/8L8ZJ5hqCZguKk2QyBRWWdsp2thmzHF2Egyj4TqC9NHc";

export const getRbsSubgraphUrl = (): string => {
  const apiKey = process.env.GRAPHQL_API_KEY;
  if (!apiKey) {
    throw new Error("GRAPHQL_API_KEY is not set");
  }
  return RBS_SUBGRAPH_URL.replace("[api-key]", apiKey);
};

// TODO replace with production URL
export const PRICE_SNAPSHOT_SUBGRAPH_URL = "https://api.studio.thegraph.com/query/46563/price-snapshot/1.1.2";

export const BONDS_SUBGRAPH_URL =
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

export const OPERATOR_CONTRACT_V1 = "0xbb47C3FFf4eF85703907d3ffca30de278b85df3f".toLowerCase();
export const OPERATOR_CONTRACT_V1_1 = "0x1Ce568DbB34B2631aCDB5B453c3195EA0070EC65".toLowerCase();
export const OPERATOR_CONTRACT_V1_1_BLOCK = 16148611;

export const HEART_CONTRACT_V1_1 = "0x1652b503E0F1CF38b6246Ed3b91CB3786Bb11656";
export const HEART_CONTRACT_V1_2 = "0x9C6220fE829d6FC889cde9b4966D2033C4EfFD48";
