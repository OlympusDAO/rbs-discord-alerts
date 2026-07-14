import fetch from "cross-fetch";

export type EmissionManagerStateAtBlock = {
  address: string;
  cdAuctioneer: string;
  supply: bigint;
  backing: bigint;
  baseEmissionRate: bigint;
  minimumPremium: bigint;
  tickSize: bigint;
  ohmPrice: bigint;
};

type RpcCall = {
  name: string;
  selector: string;
};

type RpcResponse = {
  id?: number;
  result?: string;
  error?: unknown;
};

const decodeUint256 = (value: string): bigint => {
  if (!/^0x[0-9a-fA-F]{64}$/.test(value)) throw new Error("Ethereum RPC returned an invalid uint256 result");
  return BigInt(value);
};

const decodeAddress = (value: string): string => {
  if (!/^0x[0-9a-fA-F]{64}$/.test(value)) throw new Error("Ethereum RPC returned an invalid address result");
  return `0x${value.slice(-40)}`.toLowerCase();
};

const CALLS: RpcCall[] = [
  { name: "supply", selector: "0x6c9c2faf" },
  { name: "backing", selector: "0xc9503fe2" },
  { name: "baseEmissionRate", selector: "0xf317ca3d" },
  { name: "minimumPremium", selector: "0x087d8d01" },
  { name: "tickSize", selector: "0xf210d087" },
  { name: "cdAuctioneer", selector: "0x714cdf2b" },
  { name: "PRICE", selector: "0x8d859f3e" },
];
const RPC_REQUEST_TIMEOUT_MS = 7_500;

export const getEmissionManagerStateAtBlock = async (
  rpcUrl: string,
  emissionManagerAddress: string,
  block: string,
): Promise<EmissionManagerStateAtBlock> => {
  const blockTag = `0x${BigInt(block).toString(16)}`;
  const response = await fetch(rpcUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    signal: AbortSignal.timeout(RPC_REQUEST_TIMEOUT_MS),
    body: JSON.stringify(
      CALLS.map((call, index) => ({
        jsonrpc: "2.0",
        id: index + 1,
        method: "eth_call",
        params: [{ to: emissionManagerAddress, data: call.selector }, blockTag],
      })),
    ),
  });

  if (!response.ok) throw new Error(`Ethereum RPC request failed with status ${response.status}`);

  const body = (await response.json()) as unknown;
  if (!Array.isArray(body)) throw new Error("Ethereum RPC returned an invalid batch response");

  const responsesById = new Map<number, RpcResponse>(
    body
      .filter((item): item is RpcResponse => typeof item === "object" && item !== null)
      .map(item => [item.id || 0, item]),
  );
  const readResult = <T>(name: string, decode: (value: string) => T): T => {
    const index = CALLS.findIndex(call => call.name === name);
    if (index === -1) throw new Error(`Unknown Emission Manager RPC call ${name}`);

    const call = CALLS[index];
    const rpcResponse = responsesById.get(index + 1);
    if (!rpcResponse || rpcResponse.error || typeof rpcResponse.result !== "string") {
      throw new Error(`Ethereum RPC failed to read Emission Manager ${call.name} at block ${block}`);
    }

    return decode(rpcResponse.result);
  };

  const supply = readResult("supply", decodeUint256);
  const backing = readResult("backing", decodeUint256);
  const baseEmissionRate = readResult("baseEmissionRate", decodeUint256);
  const minimumPremium = readResult("minimumPremium", decodeUint256);
  const tickSize = readResult("tickSize", decodeUint256);
  const cdAuctioneer = readResult("cdAuctioneer", decodeAddress);
  const priceAddress = readResult("PRICE", decodeAddress);
  const priceResponse = await fetch(rpcUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    signal: AbortSignal.timeout(RPC_REQUEST_TIMEOUT_MS),
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "eth_call",
      params: [{ to: priceAddress, data: "0xd8cf24fd" }, blockTag],
    }),
  });
  if (!priceResponse.ok) throw new Error(`Ethereum RPC request failed with status ${priceResponse.status}`);

  const priceBody = (await priceResponse.json()) as RpcResponse;
  if (priceBody.error || typeof priceBody.result !== "string") {
    throw new Error(`Ethereum RPC failed to read PRICE getLastPrice at block ${block}`);
  }

  return {
    address: emissionManagerAddress.toLowerCase(),
    supply,
    backing,
    baseEmissionRate,
    minimumPremium,
    tickSize,
    cdAuctioneer,
    ohmPrice: decodeUint256(priceBody.result),
  };
};
