const RBS_SUBGRAPH_URL = "https://api.studio.thegraph.com/query/37737/olympus-rbs/1.2.3";

export const getRbsSubgraphUrl = (): string => {
  const apiKey = process.env.GRAPHQL_API_KEY;
  if (!apiKey) {
    throw new Error("GRAPHQL_API_KEY is not set");
  }
  return RBS_SUBGRAPH_URL.replace("[api-key]", apiKey);
};

export const PRICE_SNAPSHOT_SUBGRAPH_URL = "https://api.thegraph.com/subgraphs/name/olympusdao/price-snapshot";

export const BONDS_SUBGRAPH_URL = "https://api.studio.thegraph.com/query/37737/bonds/0.0.59"; // Subgraph Studio

export const ERC20_OHM_V2 = "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5".toLowerCase();
export const ERC20_DAI = "0x6b175474e89094c44da98b954eedeac495271d0f".toLowerCase();

export const OPERATOR_CONTRACT_V1 = "0xbb47C3FFf4eF85703907d3ffca30de278b85df3f".toLowerCase();
export const OPERATOR_CONTRACT_V1_1 = "0x1Ce568DbB34B2631aCDB5B453c3195EA0070EC65".toLowerCase();
export const OPERATOR_CONTRACT_V1_1_BLOCK = 16148611;

export const HEART_CONTRACT_V1_1 = "0x1652b503E0F1CF38b6246Ed3b91CB3786Bb11656";
