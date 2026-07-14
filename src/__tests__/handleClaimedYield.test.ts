import { Firestore } from "@google-cloud/firestore";

import { sendAlert } from "../discord";
import { performClaimedYieldChecks } from "../handleClaimedYield";
import { createGraphQLClient } from "../helpers/graphqlClient";

jest.mock("@google-cloud/firestore");
jest.mock("../discord", () => ({
  ...jest.requireActual("../discord"),
  ...(() => {
    const sendAlert = jest.fn();
    return { sendAlert, createDiscordAlertSender: jest.fn(() => sendAlert) };
  })(),
}));
jest.mock("../helpers/graphqlClient");

const makeClaimedYieldEvent = (block: string) => ({
  block,
  timestamp: "1700000000",
  txHash: `0x${block}`,
  facility: "0xfacility",
  depositAsset: "0xasset",
  amountDecimal: "12.5",
  rDepositAsset: { rAsset: { symbol: "USDS" } },
});

describe("performClaimedYieldChecks", () => {
  const firestoreGet = jest.fn();
  const firestoreUpdate = jest.fn();
  const query = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.CONVERTIBLE_DEPOSITS_SUBGRAPH_URL = "https://example.com/subgraph";
    process.env.GRAPHQL_API_KEY = "graph-api-key";
    firestoreGet.mockResolvedValue({ get: jest.fn(() => "0") });
    (Firestore as unknown as jest.Mock).mockImplementation(() => ({
      doc: jest.fn(() => ({ get: firestoreGet, update: firestoreUpdate })),
    }));
    (createGraphQLClient as jest.Mock).mockReturnValue({ query });
  });

  it("retains earlier checkpoints when a later alert is rate-limited", async () => {
    query.mockReturnValue({
      toPromise: jest.fn().mockResolvedValue({
        data: {
          convertibleDepositFacilityClaimedYields: {
            items: [makeClaimedYieldEvent("201"), makeClaimedYieldEvent("202")],
          },
        },
      }),
    });
    (sendAlert as jest.Mock).mockResolvedValueOnce(true).mockResolvedValueOnce(false);

    await expect(performClaimedYieldChecks("document", "collection", "webhook")).rejects.toThrow("rate-limited");

    expect(firestoreUpdate).toHaveBeenCalledTimes(1);
    expect(firestoreUpdate).toHaveBeenCalledWith({
      "convertibleDepositFacilityClaimedYield.latestBlock": 201,
    });
  });
});
