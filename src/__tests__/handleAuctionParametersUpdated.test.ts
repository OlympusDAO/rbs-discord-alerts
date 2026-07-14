import { Firestore } from "@google-cloud/firestore";

import { EMISSION_MANAGER_V1_2 } from "../constants";
import { sendAlert } from "../discord";
import {
  buildAuctionParametersUpdatedAlert,
  deriveAuctionPriceContext,
  type EmissionManagerPriceState,
  performAuctionParametersUpdatedChecks,
} from "../handleAuctionParametersUpdated";
import { getEmissionManagerStateAtBlock } from "../helpers/ethereumRpcClient";
import { createGraphQLClient } from "../helpers/graphqlClient";

jest.mock("@google-cloud/firestore");
jest.mock("../discord", () => ({
  ...jest.requireActual("../discord"),
  getRelativeTimestamp: jest.fn(() => "relative date"),
  sendAlert: jest.fn(),
}));
jest.mock("../helpers/graphqlClient");
jest.mock("../helpers/ethereumRpcClient");

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

const manager: EmissionManagerPriceState = {
  address: EMISSION_MANAGER_V1_2.toLowerCase(),
  cdAuctioneer: event.auctioneer,
  supply: 1_000_000_000_000n,
  backing: 5_000_000_000_000_000_000n,
  baseEmissionRate: 10_000_000n,
  minimumPremium: 1_000_000_000_000_000_000n,
  tickSize: 100_000_000n,
  ohmPrice: 10_000_000_000_000_000_000n,
};

const getField = (fields: ReturnType<typeof buildAuctionParametersUpdatedAlert>["fields"], name: string) =>
  fields.find(field => field.name === name);

describe("CD auction tuning price context", () => {
  it("derives the OHM price and activation threshold from exact-block manager state", () => {
    expect(deriveAuctionPriceContext(event, manager)).toEqual({
      ohmPrice: 10,
      approximateActivationPrice: 10,
    });
  });

  it("raises the effective activation price when base emissions do not fill one tick", () => {
    const july14Event = {
      ...event,
      minPrice: "19357709336201659823",
      minPriceDecimal: "19.357709336201659823",
    };
    const july14State: EmissionManagerPriceState = {
      address: EMISSION_MANAGER_V1_2.toLowerCase(),
      cdAuctioneer: event.auctioneer,
      supply: 13_441_740_632_464_706n,
      backing: 11_690_000_000_000_000_000n,
      baseEmissionRate: 13_368_727n,
      minimumPremium: 500_000_000_000_000_000n,
      tickSize: 263_733_160_134_073n,
      ohmPrice: 17_597_917_578_365_145_293n,
    };

    const alert = buildAuctionParametersUpdatedAlert(july14Event, deriveAuctionPriceContext(july14Event, july14State));

    expect(getField(alert.fields, "OHM Price")?.value).toBe("$17.60");
    expect(getField(alert.fields, "Approximate Activation Price")?.value).toBe("$25.74");
    expect(getField(alert.fields, "Minimum Premium Price")).toBeUndefined();
  });

  it("uses the existing two-decimal currency formatting", () => {
    const priceContext = deriveAuctionPriceContext(
      { ...event, minPrice: "12345000000000000000", minPriceDecimal: "12.345" },
      {
        ...manager,
        backing: 4_567_000_000_000_000_000n,
        minimumPremium: 500_000_000_000_000_000n,
        ohmPrice: 10_287_500_000_000_000_000n,
      },
    );
    const alert = buildAuctionParametersUpdatedAlert(event, priceContext);

    expect(getField(alert.fields, "OHM Price")?.value).toBe("$10.29");
    expect(getField(alert.fields, "Approximate Activation Price")?.value).toBe("$6.85");
  });

  it("keeps active-auction context and labels the existing floor unambiguously", () => {
    const alert = buildAuctionParametersUpdatedAlert(event, deriveAuctionPriceContext(event, manager));

    expect(alert.description).toContain("parameters have been tuned");
    expect(getField(alert.fields, "OHM Price")?.value).toBe("$10.00");
    expect(getField(alert.fields, "Approximate Activation Price")?.value).toBe("$10.00");
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
    expect(getField(alert.fields, "Approximate Activation Price")?.value).toBe("$10.00");
    expect(getField(alert.fields, "Day Target")).toBeUndefined();
    expect(getField(alert.fields, "Auction Bid Floor")).toBeUndefined();
    expect(getField(alert.fields, "View Auction")).toBeUndefined();
  });

  it("renders a zero-floor shutdown OHM price from PRICE.getLastPrice", () => {
    const shutdownEvent = { ...event, target: "0", targetDecimal: "0", minPrice: "0", minPriceDecimal: "0" };
    const alert = buildAuctionParametersUpdatedAlert(
      shutdownEvent,
      deriveAuctionPriceContext(shutdownEvent, { ...manager, ohmPrice: 22_644_609_000_000_000_000n }),
    );

    expect(getField(alert.fields, "OHM Price")?.value).toBe("$22.64");
    expect(getField(alert.fields, "Approximate Activation Price")?.value).toBe("$10.00");
  });

  it("rejects a non-positive OHM price", () => {
    expect(() => deriveAuctionPriceContext(event, { ...manager, ohmPrice: 0n })).toThrow("invalid pricing settings");
  });
});

describe("performAuctionParametersUpdatedChecks", () => {
  const firestoreGet = jest.fn();
  const firestoreUpdate = jest.fn();
  const query = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.CONVERTIBLE_DEPOSITS_SUBGRAPH_URL = "https://example.com/subgraph";
    process.env.GRAPHQL_API_KEY = "graph-api-key";
    process.env.ETHEREUM_RPC_URL = "https://example.com/rpc";

    firestoreGet.mockResolvedValue({ get: jest.fn(() => "0") });
    (Firestore as unknown as jest.Mock).mockImplementation(() => ({
      doc: jest.fn(() => ({ get: firestoreGet, update: firestoreUpdate })),
    }));
    (createGraphQLClient as jest.Mock).mockReturnValue({ query });
    (getEmissionManagerStateAtBlock as jest.Mock).mockResolvedValue(manager);
    (sendAlert as jest.Mock).mockResolvedValue(true);
  });

  const mockQueryResult = (data: unknown) => {
    query.mockReturnValue({ toPromise: jest.fn().mockResolvedValue(data) });
  };

  it("passes the current lowercased manager address to the existing event request", async () => {
    mockQueryResult({
      data: {
        convertibleDepositAuctioneerAuctionParametersUpdateds: { items: [] },
      },
    });

    await performAuctionParametersUpdatedChecks("document", "collection", "webhook", "https://example.com/rpc");

    expect(query).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        latestBlock: "0",
        chainId: 1,
      }),
    );
  });

  it("uses exact-block manager and oracle state for active events", async () => {
    mockQueryResult({
      data: {
        convertibleDepositAuctioneerAuctionParametersUpdateds: { items: [event] },
      },
    });

    await performAuctionParametersUpdatedChecks("document", "collection", "webhook", "https://example.com/rpc");

    expect(getEmissionManagerStateAtBlock).toHaveBeenCalledWith(
      "https://example.com/rpc",
      EMISSION_MANAGER_V1_2,
      event.block,
    );
    const fields = (sendAlert as jest.Mock).mock.calls[0][4];
    expect(getField(fields, "OHM Price")?.value).toBe("$10.00");
  });

  it("rejects events from an auctioneer not configured on the manager", async () => {
    mockQueryResult({
      data: {
        convertibleDepositAuctioneerAuctionParametersUpdateds: { items: [event] },
      },
    });
    (getEmissionManagerStateAtBlock as jest.Mock).mockResolvedValue({ ...manager, cdAuctioneer: "0xother" });

    await expect(
      performAuctionParametersUpdatedChecks("document", "collection", "webhook", "https://example.com/rpc"),
    ).rejects.toThrow("auctioneer");
    expect(sendAlert).not.toHaveBeenCalled();
    expect(firestoreUpdate).not.toHaveBeenCalled();
  });

  it("does not checkpoint an alert that Discord rate-limits", async () => {
    mockQueryResult({
      data: {
        convertibleDepositAuctioneerAuctionParametersUpdateds: { items: [event] },
      },
    });
    (sendAlert as jest.Mock).mockResolvedValue(false);

    await expect(
      performAuctionParametersUpdatedChecks("document", "collection", "webhook", "https://example.com/rpc"),
    ).rejects.toThrow("rate-limited");
    expect(firestoreUpdate).not.toHaveBeenCalled();
  });

  it("keeps the checkpoint for earlier alerts when a later alert is rate-limited", async () => {
    const laterEvent = { ...event, block: "124", txHash: "0xdef" };
    mockQueryResult({
      data: {
        convertibleDepositAuctioneerAuctionParametersUpdateds: { items: [event, laterEvent] },
      },
    });
    (sendAlert as jest.Mock).mockResolvedValueOnce(true).mockResolvedValueOnce(false);

    await expect(
      performAuctionParametersUpdatedChecks("document", "collection", "webhook", "https://example.com/rpc"),
    ).rejects.toThrow("rate-limited");
    expect(firestoreUpdate).toHaveBeenCalledTimes(1);
    expect(firestoreUpdate).toHaveBeenCalledWith({ "auctionParametersUpdated.latestBlock": 123 });
  });

  it("rejects malformed manager pricing settings before sending or checkpointing", async () => {
    mockQueryResult({
      data: {
        convertibleDepositAuctioneerAuctionParametersUpdateds: { items: [event] },
      },
    });
    (getEmissionManagerStateAtBlock as jest.Mock).mockResolvedValue({ ...manager, backing: 0n });

    await expect(
      performAuctionParametersUpdatedChecks("document", "collection", "webhook", "https://example.com/rpc"),
    ).rejects.toThrow("invalid pricing settings");
    expect(sendAlert).not.toHaveBeenCalled();
    expect(firestoreUpdate).not.toHaveBeenCalled();
  });

  it("uses exact-block PRICE.getLastPrice when a shutdown event has no auction floor", async () => {
    const shutdownEvent = { ...event, target: "0", targetDecimal: "0", minPrice: "0", minPriceDecimal: "0" };
    mockQueryResult({
      data: {
        convertibleDepositAuctioneerAuctionParametersUpdateds: { items: [shutdownEvent] },
      },
    });
    (getEmissionManagerStateAtBlock as jest.Mock).mockResolvedValue({
      ...manager,
      ohmPrice: 22_644_609_153_148_047_151n,
    });

    await performAuctionParametersUpdatedChecks("document", "collection", "webhook", "https://example.com/rpc");

    const fields = (sendAlert as jest.Mock).mock.calls[0][4];
    expect(getField(fields, "OHM Price")?.value).toBe("$22.64");
    expect(firestoreUpdate).toHaveBeenCalledWith({ "auctionParametersUpdated.latestBlock": 123 });
  });

  it("rejects a shutdown event when its exact-block oracle price is invalid", async () => {
    const shutdownEvent = { ...event, target: "0", targetDecimal: "0", minPrice: "0", minPriceDecimal: "0" };
    mockQueryResult({
      data: {
        convertibleDepositAuctioneerAuctionParametersUpdateds: { items: [shutdownEvent] },
      },
    });
    (getEmissionManagerStateAtBlock as jest.Mock).mockResolvedValue({ ...manager, ohmPrice: 0n });

    await expect(
      performAuctionParametersUpdatedChecks("document", "collection", "webhook", "https://example.com/rpc"),
    ).rejects.toThrow("invalid pricing settings");
    expect(sendAlert).not.toHaveBeenCalled();
    expect(firestoreUpdate).not.toHaveBeenCalled();
  });

  it("preserves the existing GraphQL failure path", async () => {
    mockQueryResult({ data: undefined, error: new Error("query failed") });

    await expect(
      performAuctionParametersUpdatedChecks("document", "collection", "webhook", "https://example.com/rpc"),
    ).rejects.toThrow("Did not receive results from GraphQL query");
    expect(sendAlert).not.toHaveBeenCalled();
    expect(firestoreUpdate).not.toHaveBeenCalled();
  });
});
