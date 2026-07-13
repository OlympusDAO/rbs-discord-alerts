import { Firestore } from "@google-cloud/firestore";

import { EMISSION_MANAGER_V1_2 } from "../constants";
import { sendAlert } from "../discord";
import {
  buildAuctionParametersUpdatedAlert,
  deriveAuctionPriceContext,
  performAuctionParametersUpdatedChecks,
} from "../handleAuctionParametersUpdated";
import { createGraphQLClient } from "../helpers/graphqlClient";

jest.mock("@google-cloud/firestore");
jest.mock("../discord", () => ({
  ...jest.requireActual("../discord"),
  getRelativeTimestamp: jest.fn(() => "relative date"),
  sendAlert: jest.fn(),
}));
jest.mock("../helpers/graphqlClient");

const event = {
  chainId: 1,
  block: "123",
  logIndex: 0,
  txHash: "0x1234567890abcdef",
  timestamp: "1700000000",
  auctioneer: "0xauctioneer",
  depositAsset: "0xasset",
  target: "1000000000",
  targetDecimal: "100",
  tickSize: "100000000",
  tickSizeDecimal: "0.1",
  minPrice: "12000000000000000000",
  minPriceDecimal: "12",
  rDepositAsset: {
    rAsset: {
      name: "Reserve Deposit Asset",
      symbol: "sUSDS",
    },
  },
};

const manager = {
  address: EMISSION_MANAGER_V1_2.toLowerCase(),
  convertibleDepositAuctioneer: event.auctioneer,
  backingDecimal: "5",
  minimumPremiumDecimal: "1",
  minPriceScalarDecimal: "1.2",
};

const getField = (fields: ReturnType<typeof buildAuctionParametersUpdatedAlert>["fields"], name: string) =>
  fields.find(field => field.name === name);

describe("CD auction tuning price context", () => {
  it("derives the OHM price and auction activation price from manager settings", () => {
    expect(deriveAuctionPriceContext(event, manager)).toEqual({
      ohmPrice: 10,
      auctionActivationPrice: 10,
    });
  });

  it("uses the existing two-decimal currency formatting", () => {
    const priceContext = deriveAuctionPriceContext(
      { ...event, minPriceDecimal: "12.345" },
      { ...manager, backingDecimal: "4.567", minimumPremiumDecimal: "0.5" },
    );
    const alert = buildAuctionParametersUpdatedAlert(event, priceContext);

    expect(getField(alert.fields, "OHM Price")?.value).toBe("$10.29");
    expect(getField(alert.fields, "Auction Activation Price")?.value).toBe("$6.85");
  });

  it("keeps active-auction context and labels the existing floor unambiguously", () => {
    const alert = buildAuctionParametersUpdatedAlert(event, deriveAuctionPriceContext(event, manager));

    expect(alert.description).toContain("parameters have been tuned");
    expect(getField(alert.fields, "OHM Price")?.value).toBe("$10.00");
    expect(getField(alert.fields, "Auction Activation Price")?.value).toBe("$10.00");
    expect(getField(alert.fields, "Day Target")?.value).toBe("100.00 OHM");
    expect(getField(alert.fields, "Auction Bid Floor")?.value).toBe("$12.00");
    expect(getField(alert.fields, "View Auction")).toBeDefined();
    expect(getField(alert.fields, "Min Price")).toBeUndefined();
  });

  it("shows prices but omits active-auction fields when market conditions disable the auction", () => {
    const disabledEvent = { ...event, target: "0", targetDecimal: "0" };
    const alert = buildAuctionParametersUpdatedAlert(disabledEvent, deriveAuctionPriceContext(disabledEvent, manager));

    expect(alert.description).toContain("disabled, due to market conditions");
    expect(getField(alert.fields, "OHM Price")?.value).toBe("$10.00");
    expect(getField(alert.fields, "Auction Activation Price")?.value).toBe("$10.00");
    expect(getField(alert.fields, "Day Target")).toBeUndefined();
    expect(getField(alert.fields, "Auction Bid Floor")).toBeUndefined();
    expect(getField(alert.fields, "View Auction")).toBeUndefined();
  });

  it("renders a zero-floor shutdown OHM price from its exact-block RBS snapshot", () => {
    const shutdownEvent = { ...event, target: "0", targetDecimal: "0", minPrice: "0", minPriceDecimal: "0" };
    const alert = buildAuctionParametersUpdatedAlert(
      shutdownEvent,
      deriveAuctionPriceContext(shutdownEvent, manager, 22.644609),
    );

    expect(getField(alert.fields, "OHM Price")?.value).toBe("$22.64");
    expect(getField(alert.fields, "Auction Activation Price")?.value).toBe("$10.00");
  });

  it("renders the OHM price as unavailable when the price scalar is non-positive", () => {
    const priceContext = deriveAuctionPriceContext(event, { ...manager, minPriceScalarDecimal: "0" });
    const alert = buildAuctionParametersUpdatedAlert(event, priceContext);

    expect(getField(alert.fields, "OHM Price")?.value).toBe("N/A");
  });
});

describe("performAuctionParametersUpdatedChecks", () => {
  const firestoreGet = jest.fn();
  const firestoreUpdate = jest.fn();
  const query = jest.fn();
  const rbsQuery = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.CONVERTIBLE_DEPOSITS_SUBGRAPH_URL = "https://example.com/subgraph";
    process.env.GRAPHQL_API_KEY = "graph-api-key";

    firestoreGet.mockResolvedValue({ get: jest.fn(() => "0") });
    (Firestore as unknown as jest.Mock).mockImplementation(() => ({
      doc: jest.fn(() => ({ get: firestoreGet, update: firestoreUpdate })),
    }));
    (createGraphQLClient as jest.Mock).mockImplementation((url: string) =>
      url === process.env.CONVERTIBLE_DEPOSITS_SUBGRAPH_URL ? { query } : { query: rbsQuery },
    );
  });

  const mockQueryResult = (data: unknown) => {
    query.mockReturnValue({ toPromise: jest.fn().mockResolvedValue(data) });
  };

  const mockRbsQueryResult = (data: unknown) => {
    rbsQuery.mockReturnValue({ toPromise: jest.fn().mockResolvedValue(data) });
  };

  it("passes the current lowercased manager address to the existing event request", async () => {
    mockQueryResult({
      data: {
        convertibleDepositAuctioneerAuctionParametersUpdateds: { items: [] },
        emissionManager: null,
      },
    });

    await performAuctionParametersUpdatedChecks("document", "collection", "webhook");

    expect(query).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        latestBlock: "0",
        chainId: 1,
        managerChainId: 1,
        emissionManagerAddress: EMISSION_MANAGER_V1_2.toLowerCase(),
      }),
    );
  });

  it("keeps using the auction floor for active events without querying RBS", async () => {
    mockQueryResult({
      data: {
        convertibleDepositAuctioneerAuctionParametersUpdateds: { items: [event] },
        emissionManager: manager,
      },
    });

    await performAuctionParametersUpdatedChecks("document", "collection", "webhook");

    expect(rbsQuery).not.toHaveBeenCalled();
    const fields = (sendAlert as jest.Mock).mock.calls[0][4];
    expect(getField(fields, "OHM Price")?.value).toBe("$10.00");
  });

  it("rejects events with no manager before sending or checkpointing", async () => {
    mockQueryResult({
      data: {
        convertibleDepositAuctioneerAuctionParametersUpdateds: { items: [event] },
        emissionManager: null,
      },
    });

    await expect(performAuctionParametersUpdatedChecks("document", "collection", "webhook")).rejects.toThrow(
      "Emission Manager",
    );
    expect(sendAlert).not.toHaveBeenCalled();
    expect(firestoreUpdate).not.toHaveBeenCalled();
  });

  it("rejects events from an auctioneer not configured on the manager", async () => {
    mockQueryResult({
      data: {
        convertibleDepositAuctioneerAuctionParametersUpdateds: { items: [event] },
        emissionManager: { ...manager, convertibleDepositAuctioneer: "0xother" },
      },
    });

    await expect(performAuctionParametersUpdatedChecks("document", "collection", "webhook")).rejects.toThrow(
      "auctioneer",
    );
    expect(sendAlert).not.toHaveBeenCalled();
    expect(firestoreUpdate).not.toHaveBeenCalled();
  });

  it("rejects malformed manager pricing settings before sending or checkpointing", async () => {
    mockQueryResult({
      data: {
        convertibleDepositAuctioneerAuctionParametersUpdateds: { items: [event] },
        emissionManager: { ...manager, backingDecimal: "invalid" },
      },
    });

    await expect(performAuctionParametersUpdatedChecks("document", "collection", "webhook")).rejects.toThrow(
      "invalid pricing settings",
    );
    expect(sendAlert).not.toHaveBeenCalled();
    expect(firestoreUpdate).not.toHaveBeenCalled();
  });

  it("uses the exact-block RBS snapshot when a shutdown event has no auction floor", async () => {
    const shutdownEvent = { ...event, target: "0", targetDecimal: "0", minPrice: "0", minPriceDecimal: "0" };
    mockQueryResult({
      data: {
        convertibleDepositAuctioneerAuctionParametersUpdateds: { items: [shutdownEvent] },
        emissionManager: manager,
      },
    });
    mockRbsQueryResult({
      data: {
        rangeSnapshots: [{ block: event.block, ohmPrice: "22.644609153148047151" }],
      },
    });

    await performAuctionParametersUpdatedChecks("document", "collection", "webhook");

    expect(rbsQuery).toHaveBeenCalledWith(expect.anything(), { block: event.block });
    const fields = (sendAlert as jest.Mock).mock.calls[0][4];
    expect(getField(fields, "OHM Price")?.value).toBe("$22.64");
    expect(firestoreUpdate).toHaveBeenCalledWith({ "auctionParametersUpdated.latestBlock": 123 });
  });

  it("rejects a shutdown event when its exact-block RBS snapshot is unavailable", async () => {
    const shutdownEvent = { ...event, target: "0", targetDecimal: "0", minPrice: "0", minPriceDecimal: "0" };
    mockQueryResult({
      data: {
        convertibleDepositAuctioneerAuctionParametersUpdateds: { items: [shutdownEvent] },
        emissionManager: manager,
      },
    });
    mockRbsQueryResult({ data: { rangeSnapshots: [] } });

    await expect(performAuctionParametersUpdatedChecks("document", "collection", "webhook")).rejects.toThrow(
      "OHM price snapshot",
    );
    expect(sendAlert).not.toHaveBeenCalled();
    expect(firestoreUpdate).not.toHaveBeenCalled();
  });

  it("preserves the existing GraphQL failure path", async () => {
    mockQueryResult({ data: undefined, error: new Error("query failed") });

    await expect(performAuctionParametersUpdatedChecks("document", "collection", "webhook")).rejects.toThrow(
      "Did not receive results from GraphQL query",
    );
    expect(sendAlert).not.toHaveBeenCalled();
    expect(firestoreUpdate).not.toHaveBeenCalled();
  });
});
