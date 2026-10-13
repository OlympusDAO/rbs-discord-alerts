import { Firestore } from "@google-cloud/firestore";

import { sendAlert } from "../discord";
import { performClaimedYieldChecks } from "../handleClaimedYield";
import {
  getClaimedYieldsSince,
  getConvertibleDepositsIndexedBlock,
  getDepositAssetSymbols,
} from "../indexer/convertibleDeposits";

jest.mock("@google-cloud/firestore");
jest.mock("../discord", () => ({
  ...jest.requireActual("../discord"),
  ...(() => {
    const sendAlert = jest.fn();
    return { sendAlert, createDiscordAlertSender: jest.fn(() => sendAlert) };
  })(),
}));
jest.mock("../indexer/convertibleDeposits");

const makeClaimedYieldEvent = (block: string) => ({
  block,
  timestamp: "1700000000",
  txHash: `0x${block}`,
  facility: "0xfacility",
  depositAsset: "0xasset",
  amountDecimal: "12.5",
});

describe("performClaimedYieldChecks", () => {
  const firestoreGet = jest.fn();
  const firestoreUpdate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    firestoreGet.mockResolvedValue({ get: jest.fn(() => "1") });
    (Firestore as unknown as jest.Mock).mockImplementation(() => ({
      doc: jest.fn(() => ({ get: firestoreGet, update: firestoreUpdate })),
    }));
    (getConvertibleDepositsIndexedBlock as jest.Mock).mockResolvedValue(300);
    (getDepositAssetSymbols as jest.Mock).mockResolvedValue(new Map([["0xasset", "USDS"]]));
  });

  it("retains earlier checkpoints when a later alert is rate-limited", async () => {
    (getClaimedYieldsSince as jest.Mock).mockResolvedValue([
      makeClaimedYieldEvent("201"),
      makeClaimedYieldEvent("202"),
    ]);
    (sendAlert as jest.Mock).mockResolvedValueOnce(true).mockResolvedValueOnce(false);

    await expect(performClaimedYieldChecks("document", "collection", "webhook")).rejects.toThrow("rate-limited");

    expect(firestoreUpdate).toHaveBeenCalledTimes(1);
    expect(firestoreUpdate).toHaveBeenCalledWith({
      "convertibleDepositFacilityClaimedYield.latestBlock": 201,
    });
  });
});
