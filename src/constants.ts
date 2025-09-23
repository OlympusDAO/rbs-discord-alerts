const RBS_SUBGRAPH_URL =
  "https://gateway-arbitrum.network.thegraph.com/api/[api-key]/deployments/id/QmUFys1MZUhUfV9oKSynfpyfWHNrFw2b2Cg47deAo6tiHv"; // 1.7.1

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

// TODO switch to production URL
const YRF_SUBGRAPH_URL = "https://api.studio.thegraph.com/query/46563/olympus-yrf/version/latest";

export const getYRFSubgraphUrl = (): string => {
  return YRF_SUBGRAPH_URL;
};

export const ERC20_OHM_V2 = "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5".toLowerCase();
export const ERC20_DAI = "0x6b175474e89094c44da98b954eedeac495271d0f".toLowerCase();

export const YIELD_REPURCHASE_FACILITY_V1_0 = "0x30a967eb957e5b1ee053b75f1a57ea6bfb2e907e";
export const YIELD_REPURCHASE_FACILITY_V1_1 = "0xcaA3d3E653A626e2656d2E799564fE952D39d855";
export const YIELD_REPURCHASE_FACILITY_V1_2 = "0x271e35a8555a62F6bA76508E85dfD76D580B0692";

export const EMISSION_MANAGER_V1_0 = "0x50f441a3387625bDA8B8081cE3fd6C04CC48C0A2";

export const YIELD_REPURCHASE_FACILITY_ALERT_STARTING_BLOCK = 23415000; // 2025-09-22
