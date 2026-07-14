import { Firestore } from "@google-cloud/firestore";

import { sendAlert } from "../discord";
import { MarketClosedEventsDocument } from "../graphql/bondMarket";
import { RepoMarketDocument, RepoMarketsCreatedSinceDocument, YrfSubgraphMetaDocument } from "../graphql/yrf";
import { performYRFMarketChecks } from "../handleYRFMarkets";
import { createGraphQLClient } from "../helpers/graphqlClient";

jest.mock("@google-cloud/firestore");
jest.mock("../discord", () => ({
  ...jest.requireActual("../discord"),
  sendAlert: jest.fn(),
}));
jest.mock("../helpers/graphqlClient");

const makeRepoMarket = (blockNumber: string, marketId: string) => ({
  id: `repo-${marketId}`,
  marketId,
  bidAmount: "100",
  bidAmountDecimal: "100",
  blockNumber,
  blockTimestamp: "1700000000",
  transactionHash: `0x${marketId}`,
  contract: {
    id: "contract",
    address: "0xcontract",
    version: "1",
    majorVersion: "1",
    minorVersion: "0",
    reserveToken: {
      id: "token",
      address: "0xtoken",
      name: "USD Stablecoin",
      symbol: "USDS",
      decimals: 18,
    },
  },
});

const makeClosedEvent = (block: string, marketId: string) => ({
  block,
  timestamp: "1700000000",
  market: { marketId },
});

describe("performYRFMarketChecks", () => {
  const firestoreGet = jest.fn();
  const firestoreUpdate = jest.fn();
  const query = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.GRAPHQL_API_KEY = "graph-api-key";
    firestoreGet.mockResolvedValue({ get: jest.fn(() => "0") });
    (Firestore as unknown as jest.Mock).mockImplementation(() => ({
      doc: jest.fn(() => ({ get: firestoreGet, update: firestoreUpdate })),
    }));
    (createGraphQLClient as jest.Mock).mockReturnValue({ query });
    (sendAlert as jest.Mock).mockResolvedValue(true);
  });

  it("checkpoints every created and closed event in query order", async () => {
    const repo101 = makeRepoMarket("101", "1");
    const repo102 = makeRepoMarket("102", "2");
    query.mockImplementation((document: unknown, variables: { marketId?: string }) => ({
      toPromise: jest
        .fn()
        .mockResolvedValue(
          document === RepoMarketsCreatedSinceDocument
            ? { data: { repoMarkets: [repo101, repo102] } }
            : document === MarketClosedEventsDocument
              ? { data: { marketClosedEvents: [makeClosedEvent("201", "1"), makeClosedEvent("202", "2")] } }
              : document === YrfSubgraphMetaDocument
                ? { data: { _meta: { block: { number: 300 } } } }
                : document === RepoMarketDocument
                  ? { data: { repoMarkets: [variables.marketId === "1" ? repo101 : repo102] } }
                  : { data: undefined },
        ),
    }));

    await performYRFMarketChecks("document", "collection", "webhook");

    expect(firestoreUpdate.mock.calls.map(([value]) => value)).toEqual([
      { "yrfMarkets.latestBlockCreated": 101 },
      { "yrfMarkets.latestBlockCreated": 102 },
      { "yrfMarkets.latestBlockClosed": 201 },
      { "yrfMarkets.latestBlockClosed": 202 },
    ]);
  });

  it("stops at a Discord rate limit after checkpointing the prior closed event", async () => {
    const repo1 = makeRepoMarket("101", "1");
    const repo2 = makeRepoMarket("102", "2");
    (sendAlert as jest.Mock).mockResolvedValueOnce(true).mockResolvedValueOnce(false);
    query.mockImplementation((document: unknown, variables: { marketId?: string }) => ({
      toPromise: jest
        .fn()
        .mockResolvedValue(
          document === RepoMarketsCreatedSinceDocument
            ? { data: { repoMarkets: [] } }
            : document === MarketClosedEventsDocument
              ? { data: { marketClosedEvents: [makeClosedEvent("201", "1"), makeClosedEvent("202", "2")] } }
              : document === YrfSubgraphMetaDocument
                ? { data: { _meta: { block: { number: 300 } } } }
                : document === RepoMarketDocument
                  ? { data: { repoMarkets: [variables.marketId === "1" ? repo1 : repo2] } }
                  : { data: undefined },
        ),
    }));

    await expect(performYRFMarketChecks("document", "collection", "webhook")).rejects.toThrow(
      "Discord rate-limited the YRF market closed alert at block 202",
    );

    expect(firestoreUpdate.mock.calls.map(([value]) => value)).toEqual([{ "yrfMarkets.latestBlockClosed": 201 }]);
  });

  it("does not checkpoint a closed event before the YRF subgraph has indexed it", async () => {
    query.mockImplementation((document: unknown) => ({
      toPromise: jest
        .fn()
        .mockResolvedValue(
          document === RepoMarketsCreatedSinceDocument
            ? { data: { repoMarkets: [] } }
            : document === MarketClosedEventsDocument
              ? { data: { marketClosedEvents: [makeClosedEvent("201", "1")] } }
              : document === YrfSubgraphMetaDocument
                ? { data: { _meta: { block: { number: 200 } } } }
                : { data: undefined },
        ),
    }));

    await expect(performYRFMarketChecks("document", "collection", "webhook")).rejects.toThrow(
      "YRF subgraph is indexed through block 200, before market closed event block 201",
    );

    expect(sendAlert).not.toHaveBeenCalled();
    expect(firestoreUpdate).not.toHaveBeenCalled();
  });
});
