import fetch from "cross-fetch";

import { getEmissionManagerStateAtBlock } from "../helpers/ethereumRpcClient";

jest.mock("cross-fetch");

const uintResult = (value: bigint): string => `0x${value.toString(16).padStart(64, "0")}`;
const addressResult = (value: string): string => `0x${value.slice(2).padStart(64, "0")}`;

describe("getEmissionManagerStateAtBlock", () => {
  const rpcUrl = "https://example.com/rpc";
  const managerAddress = "0x1234567890abcdef1234567890abcdef12345678";
  const auctioneerAddress = "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd";
  const priceAddress = "0x9876543210abcdef9876543210abcdef98765432";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("reads all activation inputs from the requested historical block", async () => {
    (fetch as jest.Mock)
      .mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue([
          { id: 7, result: addressResult(priceAddress) },
          { id: 4, result: uintResult(4n) },
          { id: 1, result: uintResult(1n) },
          { id: 6, result: addressResult(auctioneerAddress) },
          { id: 2, result: uintResult(2n) },
          { id: 5, result: uintResult(5n) },
          { id: 3, result: uintResult(3n) },
        ]),
      })
      .mockResolvedValueOnce({ ok: true, json: jest.fn().mockResolvedValue({ id: 1, result: uintResult(8n) }) });

    await expect(getEmissionManagerStateAtBlock(rpcUrl, managerAddress, "123")).resolves.toEqual({
      address: managerAddress,
      supply: 1n,
      backing: 2n,
      baseEmissionRate: 3n,
      minimumPremium: 4n,
      tickSize: 5n,
      cdAuctioneer: auctioneerAddress,
      ohmPrice: 8n,
    });

    expect(fetch).toHaveBeenCalledWith(
      rpcUrl,
      expect.objectContaining({
        method: "POST",
        headers: { "content-type": "application/json" },
        signal: expect.any(AbortSignal),
      }),
    );
    const request = JSON.parse((fetch as jest.Mock).mock.calls[0][1].body);
    expect(request).toHaveLength(7);
    expect(request.map((call: { params: [{ to: string; data: string }, string] }) => call.params[1])).toEqual(
      Array(7).fill("0x7b"),
    );
    expect(request.map((call: { params: [{ to: string; data: string }, string] }) => call.params[0].to)).toEqual(
      Array(7).fill(managerAddress),
    );
    expect(request.map((call: { params: [{ to: string; data: string }, string] }) => call.params[0].data)).toEqual([
      "0x6c9c2faf",
      "0xc9503fe2",
      "0xf317ca3d",
      "0x087d8d01",
      "0xf210d087",
      "0x714cdf2b",
      "0x8d859f3e",
    ]);
    const priceRequest = JSON.parse((fetch as jest.Mock).mock.calls[1][1].body);
    expect(priceRequest.params).toEqual([{ to: priceAddress, data: "0xd8cf24fd" }, "0x7b"]);
    expect((fetch as jest.Mock).mock.calls[1][1].signal).toBeInstanceOf(AbortSignal);
  });

  it("rejects an HTTP failure", async () => {
    (fetch as jest.Mock).mockResolvedValue({ ok: false, status: 503 });

    await expect(getEmissionManagerStateAtBlock(rpcUrl, managerAddress, "123")).rejects.toThrow("status 503");
  });

  it("rejects a failed call in the batch", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([{ id: 1, error: { message: "archive data unavailable" } }]),
    });

    await expect(getEmissionManagerStateAtBlock(rpcUrl, managerAddress, "123")).rejects.toThrow("supply at block 123");
  });

  it("rejects malformed return data", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([
        { id: 1, result: "0x1" },
        { id: 2, result: uintResult(2n) },
        { id: 3, result: uintResult(3n) },
        { id: 4, result: uintResult(4n) },
        { id: 5, result: uintResult(5n) },
        { id: 6, result: addressResult(auctioneerAddress) },
        { id: 7, result: addressResult(priceAddress) },
      ]),
    });

    await expect(getEmissionManagerStateAtBlock(rpcUrl, managerAddress, "123")).rejects.toThrow(
      "invalid uint256 result",
    );
  });
});
