// The consolidated Olympus protocol indexer's REST API. Replaces the RBS,
// bonds, YRF and emission-manager subgraphs on The Graph, and the convertible
// deposits Ponder deployment. Public and unauthenticated — no API key.
const DEFAULT_INDEXER_API = "https://api-production-ca6c.up.railway.app";

export const getIndexerUrl = (): string => (process.env.INDEXER_API_URL || DEFAULT_INDEXER_API).replace(/\/+$/, "");

export const ERC20_OHM_V2 = "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5".toLowerCase();
export const ERC20_DAI = "0x6b175474e89094c44da98b954eedeac495271d0f".toLowerCase();

export const YIELD_REPURCHASE_FACILITY_V1_0 = "0x30a967eb957e5b1ee053b75f1a57ea6bfb2e907e";
export const YIELD_REPURCHASE_FACILITY_V1_1 = "0xcaA3d3E653A626e2656d2E799564fE952D39d855";
export const YIELD_REPURCHASE_FACILITY_V1_2 = "0x271e35a8555a62F6bA76508E85dfD76D580B0692";

export const EMISSION_MANAGER_V1_0 = "0x50f441a3387625bDA8B8081cE3fd6C04CC48C0A2";
export const EMISSION_MANAGER_V1_2 = "0xA61b846D5D8b757e3d541E0e4F80390E28f0B6Ff";

export const YIELD_REPURCHASE_FACILITY_ALERT_STARTING_BLOCK = 23415000; // 2025-09-22
export const EMISSION_MANAGER_ALERT_STARTING_BLOCK = 23354000; // 2025-09-13

export const getConvertibleDepositsSubgraphUrl = (): string => {
  const url = process.env.CONVERTIBLE_DEPOSITS_SUBGRAPH_URL;
  if (!url) {
    throw new Error("CONVERTIBLE_DEPOSITS_SUBGRAPH_URL is not set");
  }
  return url;
};
