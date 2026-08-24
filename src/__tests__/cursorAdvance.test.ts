import { Firestore } from "@google-cloud/firestore";

import { sendAlert } from "../discord";
import { performAuctionResultChecks } from "../handleAuctionResult";
import { performBondMarketCreationFailedChecks } from "../handleBondMarketCreationFailed";
import { performEmissionManagerMarketChecks } from "../handleEmissionManagerMarkets";
import { performFailedPeriodicTasksChecks } from "../handleFailedPeriodicTasks";
import { performHeartbeatChecks } from "../handleHeartbeat";
import { performTargetPriceChangedCheck } from "../handleTargetPriceChangedEvents";
import { getBondMarketEventsSince, getBondsIndexedBlock } from "../indexer/bonds";
import {
  getAuctionEventsSince,
  getConvertibleDepositsIndexedBlock,
  getDepositAssetSymbols,
  getFailuresSince,
} from "../indexer/convertibleDeposits";
import { getEmissionManagerIndexedBlock, getSale, getSalesSince } from "../indexer/emissionManager";
import { getBeatsSince, getRbsIndexedBlock, getTargetPriceChangesSince } from "../indexer/rbs";

// Every handler walks its results in order and advances a Firestore block
// cursor as it goes. That cursor is the only thing standing between a
// transient Discord failure and a permanently skipped alert: checkpoint too
// early and the alert is lost, checkpoint the wrong block and everything
// between is skipped on the next run.
//
// Six handlers had no test of their own before the indexer migration. These
// cover the invariant that matters for all of them — checkpoint AFTER the
// alert succeeds, and stop at the first failure with the prior checkpoints
// intact — rather than re-testing each one's alert formatting.

jest.mock("@google-cloud/firestore");
jest.mock("../discord", () => ({
  ...jest.requireActual("../discord"),
  ...(() => {
    const sendAlert = jest.fn();
    return { sendAlert, createDiscordAlertSender: jest.fn(() => sendAlert) };
  })(),
}));
jest.mock("../indexer/rbs");
jest.mock("../indexer/bonds");
jest.mock("../indexer/convertibleDeposits");
jest.mock("../indexer/emissionManager");
jest.mock("../helpers/heart", () => ({ getHeartAddress: () => "0xheart" }));

const firestoreGet = jest.fn();
const firestoreUpdate = jest.fn();

const cdEvent = (block: string) => ({
  id: `cd-${block}`,
  chainId: 1,
  block,
  logIndex: 0,
  txHash: `0x${block}`,
  timestamp: "1700000000",
});

const checkpoints = () => firestoreUpdate.mock.calls.map(([value]) => value);

beforeEach(() => {
  jest.clearAllMocks();
  // A stored cursor of 1, so no handler falls back to a day's lookback.
  firestoreGet.mockResolvedValue({ get: jest.fn(() => "1") });
  (Firestore as unknown as jest.Mock).mockImplementation(() => ({
    doc: jest.fn(() => ({ get: firestoreGet, update: firestoreUpdate })),
  }));
  (sendAlert as jest.Mock).mockResolvedValue(true);
  for (const head of [
    getRbsIndexedBlock,
    getBondsIndexedBlock,
    getConvertibleDepositsIndexedBlock,
    getEmissionManagerIndexedBlock,
  ]) {
    (head as jest.Mock).mockResolvedValue(900);
  }
  (getDepositAssetSymbols as jest.Mock).mockResolvedValue(new Map([["0xasset", "USDS"]]));
});

describe("performTargetPriceChangedCheck", () => {
  const event = (block: string) => ({
    id: `tp-${block}`,
    block,
    blockchain: "mainnet",
    date: "2026-08-01T00:00:00.000Z",
    minimumTargetPrice: "10",
    timestamp: "1700000000000",
    transaction: `0x${block}`,
  });

  it("checkpoints each event after its alert succeeds", async () => {
    (getTargetPriceChangesSince as jest.Mock).mockResolvedValue([event("101"), event("102")]);

    await performTargetPriceChangedCheck("document", "collection", ["webhook"]);

    expect(checkpoints()).toEqual([
      { "targetPriceChanged.latestBlock": "101" },
      { "targetPriceChanged.latestBlock": "102" },
    ]);
  });

  it("stops at a rate limit with the earlier checkpoint intact", async () => {
    (getTargetPriceChangesSince as jest.Mock).mockResolvedValue([event("101"), event("102")]);
    (sendAlert as jest.Mock).mockResolvedValueOnce(true).mockResolvedValueOnce(false);

    await expect(performTargetPriceChangedCheck("document", "collection", ["webhook"])).rejects.toThrow("rate-limited");

    expect(checkpoints()).toEqual([{ "targetPriceChanged.latestBlock": "101" }]);
  });

  it("writes no checkpoint when there is nothing to report", async () => {
    (getTargetPriceChangesSince as jest.Mock).mockResolvedValue([]);

    await performTargetPriceChangedCheck("document", "collection", ["webhook"]);

    expect(checkpoints()).toEqual([]);
    expect(sendAlert).not.toHaveBeenCalled();
  });
});

describe("performHeartbeatChecks", () => {
  const beat = (block: string) => ({
    id: `beat-${block}`,
    block,
    blockchain: "mainnet",
    date: "2026-08-01T00:00:00.000Z",
    timestamp: "1700000000000",
    transaction: `0x${block}`,
  });

  it("checkpoints each beat after its alert succeeds", async () => {
    (getBeatsSince as jest.Mock).mockResolvedValue([beat("101"), beat("102")]);

    await performHeartbeatChecks("document", "collection", ["role"], ["webhook"]);

    // The heartbeat handler stores the beat date alongside the block.
    expect(checkpoints().map(value => value["heartbeat.latestBlock"])).toEqual(["101", "102"]);
  });

  it("stops at a rate limit with the earlier checkpoint intact", async () => {
    (getBeatsSince as jest.Mock).mockResolvedValue([beat("101"), beat("102")]);
    (sendAlert as jest.Mock).mockResolvedValueOnce(true).mockResolvedValueOnce(false);

    await expect(performHeartbeatChecks("document", "collection", ["role"], ["webhook"])).rejects.toThrow(
      "rate-limited",
    );

    expect(checkpoints().map(value => value["heartbeat.latestBlock"])).toEqual(["101"]);
  });
});

describe("performFailedPeriodicTasksChecks", () => {
  const failure = (block: string) => ({ ...cdEvent(block), facility: "0xfacility" });

  it("reads the claimAllYieldFailed half and checkpoints each event", async () => {
    (getFailuresSince as jest.Mock).mockResolvedValue({
      claimAllYieldFailed: [failure("201"), failure("202")],
      // The other half belongs to a different handler and must be ignored here.
      bondMarketCreationFailed: [
        { ...cdEvent("999"), emissionManager: "0xem", saleAmount: "1", saleAmountDecimal: "1" },
      ],
    });

    await performFailedPeriodicTasksChecks("document", "collection", "webhook");

    expect(checkpoints()).toEqual([
      { "failedPeriodicTasks.latestBlock": 201 },
      { "failedPeriodicTasks.latestBlock": 202 },
    ]);
  });

  it("stops at a rate limit with the earlier checkpoint intact", async () => {
    (getFailuresSince as jest.Mock).mockResolvedValue({
      claimAllYieldFailed: [failure("201"), failure("202")],
      bondMarketCreationFailed: [],
    });
    (sendAlert as jest.Mock).mockResolvedValueOnce(true).mockResolvedValueOnce(false);

    await expect(performFailedPeriodicTasksChecks("document", "collection", "webhook")).rejects.toThrow("rate-limited");

    expect(checkpoints()).toEqual([{ "failedPeriodicTasks.latestBlock": 201 }]);
  });
});

describe("performBondMarketCreationFailedChecks", () => {
  const failure = (block: string) => ({
    ...cdEvent(block),
    emissionManager: "0xem",
    saleAmount: "1000000000",
    saleAmountDecimal: "1000",
  });

  it("reads the bondMarketCreationFailed half and checkpoints each event", async () => {
    (getFailuresSince as jest.Mock).mockResolvedValue({
      claimAllYieldFailed: [{ ...cdEvent("999"), facility: "0xfacility" }],
      bondMarketCreationFailed: [failure("301"), failure("302")],
    });

    await performBondMarketCreationFailedChecks("document", "collection", "webhook");

    expect(checkpoints()).toEqual([
      { "bondMarketCreationFailed.latestBlock": 301 },
      { "bondMarketCreationFailed.latestBlock": 302 },
    ]);
  });
});

describe("performAuctionResultChecks", () => {
  const result = (block: string) => ({
    ...cdEvent(block),
    auctioneer: "0xauctioneer",
    depositAsset: "0xasset",
    ohmConvertible: "1000000000",
    ohmConvertibleDecimal: "1000",
    target: "2000000000",
    targetDecimal: "2000",
    periodIndex: 1,
  });

  it("reads the results half and checkpoints each event", async () => {
    (getAuctionEventsSince as jest.Mock).mockResolvedValue({
      // Parameter updates belong to a different handler.
      parametersUpdated: [{ ...cdEvent("999"), auctioneer: "0xa", depositAsset: "0xasset" }],
      results: [result("401"), result("402")],
    });

    await performAuctionResultChecks("document", "collection", "webhook");

    expect(checkpoints()).toEqual([{ "auctionResult.latestBlock": 401 }, { "auctionResult.latestBlock": 402 }]);
  });

  it("stops at a rate limit with the earlier checkpoint intact", async () => {
    (getAuctionEventsSince as jest.Mock).mockResolvedValue({
      parametersUpdated: [],
      results: [result("401"), result("402")],
    });
    (sendAlert as jest.Mock).mockResolvedValueOnce(true).mockResolvedValueOnce(false);

    await expect(performAuctionResultChecks("document", "collection", "webhook")).rejects.toThrow("rate-limited");

    expect(checkpoints()).toEqual([{ "auctionResult.latestBlock": 401 }]);
  });
});

describe("performEmissionManagerMarketChecks", () => {
  const sale = (blockNumber: string, marketId: string) => ({
    id: `sale-${marketId}`,
    marketId,
    saleAmount: "1000000000",
    saleAmountDecimal: "1000",
    blockNumber,
    blockTimestamp: "1700000000",
    transactionHash: `0x${marketId}`,
    contract: {
      id: "contract",
      address: "0xcontract",
      version: "1",
      majorVersion: 1,
      minorVersion: 0,
      gohmToken: { id: "g", address: "0xg", name: "gOHM", symbol: "gOHM", decimals: 18 },
      ohmToken: { id: "o", address: "0xo", name: "OHM", symbol: "OHM", decimals: 9 },
      reserveToken: { id: "r", address: "0xr", name: "USDS", symbol: "USDS", decimals: 18 },
      sReserveToken: { id: "s", address: "0xs", name: "sUSDS", symbol: "sUSDS", decimals: 18 },
    },
  });
  const closed = (block: string, marketId: string) => ({ block, timestamp: "1700000000", market: { marketId } });

  it("interleaves created and closed events by block", async () => {
    (getSalesSince as jest.Mock).mockResolvedValue([sale("500", "1")]);
    (getBondMarketEventsSince as jest.Mock).mockResolvedValue({ created: [], closed: [closed("450", "1")] });
    (getSale as jest.Mock).mockResolvedValue([sale("500", "1")]);

    await performEmissionManagerMarketChecks("document", "collection", "webhook");

    // Closed at 450 comes before created at 500, even though the created
    // events arrive from a different request.
    expect(checkpoints()).toEqual([
      { "emissionManagerMarkets.latestBlockClosed": 450 },
      { "emissionManagerMarkets.latestBlockCreated": 500 },
    ]);
  });

  it("refuses to checkpoint a closed event the indexer has not reached", async () => {
    (getSalesSince as jest.Mock).mockResolvedValue([]);
    (getBondMarketEventsSince as jest.Mock).mockResolvedValue({ created: [], closed: [closed("950", "1")] });
    (getEmissionManagerIndexedBlock as jest.Mock).mockResolvedValue(900);

    await expect(performEmissionManagerMarketChecks("document", "collection", "webhook")).rejects.toThrow(
      "indexed through block 900",
    );

    expect(sendAlert).not.toHaveBeenCalled();
    expect(checkpoints()).toEqual([]);
  });
});
