import { Firestore } from "@google-cloud/firestore";

import { sendAlert } from "../discord";
import { performEventChecks } from "../handlePriceEvents";
import { getPriceEventsSince } from "../indexer/rbs";
import { PriceEventType } from "../indexer/types";

jest.mock("@google-cloud/firestore");
jest.mock("../discord", () => ({
  ...jest.requireActual("../discord"),
  ...(() => {
    const sendAlert = jest.fn();
    return { sendAlert, createDiscordAlertSender: jest.fn(() => sendAlert) };
  })(),
}));
jest.mock("../indexer/rbs");

const makePriceEvent = (block: string) => ({
  block,
  timestamp: "1700000000000",
  transaction: `0x${block}`,
  type: PriceEventType.WallUp,
  isHigh: true,
  snapshot: {
    ohmPrice: "10",
    highWallPrice: "12",
    highCushionPrice: "11",
    ohmMovingAveragePrice: "10",
    lowCushionPrice: "9",
    lowWallPrice: "8",
  },
});

describe("performEventChecks", () => {
  const firestoreGet = jest.fn();
  const firestoreUpdate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    firestoreGet.mockResolvedValue({ get: jest.fn(() => "1") });
    (Firestore as unknown as jest.Mock).mockImplementation(() => ({
      doc: jest.fn(() => ({ get: firestoreGet, update: firestoreUpdate })),
    }));
  });

  it("checkpoints each event only after every webhook succeeds", async () => {
    (getPriceEventsSince as jest.Mock).mockResolvedValue([makePriceEvent("101"), makePriceEvent("102")]);
    (sendAlert as jest.Mock)
      .mockResolvedValueOnce(true)
      .mockResolvedValueOnce(true)
      .mockResolvedValueOnce(true)
      .mockResolvedValueOnce(false);

    await expect(performEventChecks("document", "collection", ["dao", "community"])).rejects.toThrow("rate-limited");

    expect(firestoreUpdate).toHaveBeenCalledTimes(1);
    expect(firestoreUpdate).toHaveBeenCalledWith({ "events.latestBlock": "101" });
  });
});
