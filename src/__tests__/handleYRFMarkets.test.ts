import { Firestore } from "@google-cloud/firestore";

import { sendAlert } from "../discord";
import { performYRFMarketChecks } from "../handleYRFMarkets";
import { getBondMarketEventsSince, getBondsIndexedBlock } from "../indexer/bonds";
import { getRepoMarket, getRepoMarketsSince, getYrfIndexedBlock } from "../indexer/yrf";

jest.mock("@google-cloud/firestore");
jest.mock("../discord", () => ({
  ...jest.requireActual("../discord"),
  ...(() => {
    const sendAlert = jest.fn();
    return { sendAlert, createDiscordAlertSender: jest.fn(() => sendAlert) };
  })(),
}));
jest.mock("../indexer/bonds");
jest.mock("../indexer/yrf");

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
    majorVersion: 1,
    minorVersion: 0,
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

// The bonds route answers both collections in one response; these tests only
// exercise the closed half, so `created` is always empty.
const marketEvents = (closed: ReturnType<typeof makeClosedEvent>[]) => ({ created: [], closed });

describe("performYRFMarketChecks", () => {
  const firestoreGet = jest.fn();
  const firestoreUpdate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    firestoreGet.mockResolvedValue({ get: jest.fn(() => "1") });
    (Firestore as unknown as jest.Mock).mockImplementation(() => ({
      doc: jest.fn(() => ({ get: firestoreGet, update: firestoreUpdate })),
    }));
    (sendAlert as jest.Mock).mockResolvedValue(true);
    (getYrfIndexedBlock as jest.Mock).mockResolvedValue(300);
    (getBondsIndexedBlock as jest.Mock).mockResolvedValue(300);
  });

  it("checkpoints every created and closed event in query order", async () => {
    const repo101 = makeRepoMarket("101", "1");
    const repo102 = makeRepoMarket("102", "2");
    (getRepoMarketsSince as jest.Mock).mockResolvedValue([repo101, repo102]);
    (getBondMarketEventsSince as jest.Mock).mockResolvedValue(
      marketEvents([makeClosedEvent("201", "1"), makeClosedEvent("202", "2")]),
    );
    (getRepoMarket as jest.Mock).mockImplementation(async (marketId: string) => [marketId === "1" ? repo101 : repo102]);

    await performYRFMarketChecks("document", "collection", "webhook");

    expect(firestoreUpdate.mock.calls.map(([value]) => value)).toEqual([
      { "yrfMarkets.latestBlockCreated": 101 },
      { "yrfMarkets.latestBlockCreated": 102 },
      { "yrfMarkets.latestBlockClosed": 201 },
      { "yrfMarkets.latestBlockClosed": 202 },
    ]);
  });

  it("processes created and closed events in combined block order", async () => {
    const repo = makeRepoMarket("200", "1");
    (getRepoMarketsSince as jest.Mock).mockResolvedValue([repo]);
    (getBondMarketEventsSince as jest.Mock).mockResolvedValue(marketEvents([makeClosedEvent("150", "1")]));
    (getRepoMarket as jest.Mock).mockResolvedValue([repo]);

    await performYRFMarketChecks("document", "collection", "webhook");

    expect((sendAlert as jest.Mock).mock.calls.map(call => call[2])).toEqual([
      "🏛️ YRF Market Closed",
      "🏛️ YRF Market Created",
    ]);
    expect(firestoreUpdate.mock.calls.map(([value]) => value)).toEqual([
      { "yrfMarkets.latestBlockClosed": 150 },
      { "yrfMarkets.latestBlockCreated": 200 },
    ]);
  });

  it("stops at a Discord rate limit after checkpointing the prior closed event", async () => {
    const repo1 = makeRepoMarket("101", "1");
    const repo2 = makeRepoMarket("102", "2");
    (sendAlert as jest.Mock).mockResolvedValueOnce(true).mockResolvedValueOnce(false);
    (getRepoMarketsSince as jest.Mock).mockResolvedValue([]);
    (getBondMarketEventsSince as jest.Mock).mockResolvedValue(
      marketEvents([makeClosedEvent("201", "1"), makeClosedEvent("202", "2")]),
    );
    (getRepoMarket as jest.Mock).mockImplementation(async (marketId: string) => [marketId === "1" ? repo1 : repo2]);

    await expect(performYRFMarketChecks("document", "collection", "webhook")).rejects.toThrow(
      "Discord rate-limited the YRF market closed alert at block 202",
    );

    expect(firestoreUpdate.mock.calls.map(([value]) => value)).toEqual([{ "yrfMarkets.latestBlockClosed": 201 }]);
  });

  it("does not checkpoint a closed event before YRF has indexed it", async () => {
    (getRepoMarketsSince as jest.Mock).mockResolvedValue([]);
    (getBondMarketEventsSince as jest.Mock).mockResolvedValue(marketEvents([makeClosedEvent("201", "1")]));
    (getYrfIndexedBlock as jest.Mock).mockResolvedValue(200);

    await expect(performYRFMarketChecks("document", "collection", "webhook")).rejects.toThrow(
      "YRF is indexed through block 200, before market closed event block 201",
    );

    expect(sendAlert).not.toHaveBeenCalled();
    expect(firestoreUpdate).not.toHaveBeenCalled();
  });
});
