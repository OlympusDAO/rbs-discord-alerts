// Contract tests against a DEPLOYED protocol indexer.
//
// src/indexer/types.ts describes shapes the API promises, and nothing else here
// checks that promise — a field renamed upstream would typecheck locally and
// break this function at runtime. Because these run on a cron, that surfaces as
// an alert quietly not arriving rather than as an error anyone sees.
//
//   INDEXER_API_URL=https://<api-host> pnpm test
//
// Skipped without INDEXER_API_URL, so the normal suite stays offline.

export {};

const API = process.env.INDEXER_API_URL?.replace(/\/+$/, "");
const describeLive = API ? describe : describe.skip;

const get = async (path: string) => {
  const response = await fetch(`${API}${path}`);
  expect(response.status).toBe(200);
  return response.json() as Promise<{ data: never; meta: { block: number } }>;
};

const rowsOf = async (path: string): Promise<Record<string, unknown>[]> =>
  (await get(path)).data as unknown as Record<string, unknown>[];

const expectFields = (row: Record<string, unknown> | undefined, fields: string[]) => {
  expect(row).toBeDefined();
  for (const field of fields) expect(row).toHaveProperty(field);
};

const SNAPSHOT_FIELDS = [
  "block",
  "blockchain",
  "cushionSpread",
  "date",
  "highActive",
  "highCapacityOhm",
  "highCushionPrice",
  "highWallPrice",
  "id",
  "lowActive",
  "lowCapacityReserve",
  "lowCushionPrice",
  "lowWallPrice",
  "ohmMovingAveragePrice",
  "ohmPrice",
  "operatorCushionFactor",
  "operatorReserveFactor",
  "thresholdFactor",
  "timestamp",
  "treasuryDebtBalance",
  "treasuryReserveAddress",
  "treasuryReserveBalance",
  "wallSpread",
];

describeLive("RBS routes", () => {
  it("price events carry their nested range snapshot", async () => {
    const rows = await rowsOf("/v1/rbs/price-events?sinceBlock=0&limit=1");
    expectFields(rows[0], ["block", "blockchain", "date", "id", "isHigh", "timestamp", "transaction", "type"]);
    // The alert reads five prices off this nested snapshot; a flattened
    // response would render every one of them as "undefined".
    expectFields(rows[0].snapshot as Record<string, unknown>, SNAPSHOT_FIELDS);
    expect(["WallUp", "WallDown", "CushionUp", "CushionDown"]).toContain(rows[0].type);
  });

  it("the latest snapshot is the row itself, not a list", async () => {
    const { data } = await get("/v1/rbs/snapshots/latest");
    expect(Array.isArray(data)).toBe(false);
    expectFields(data as unknown as Record<string, unknown>, SNAPSHOT_FIELDS);
  });

  it("an exact-block snapshot query returns that block", async () => {
    const latest = (await get("/v1/rbs/snapshots/latest")).data as unknown as { block: string };
    const rows = await rowsOf(`/v1/rbs/snapshots?atBlock=${latest.block}&order=desc&limit=1`);
    expect(rows).toHaveLength(1);
    expect(rows[0].block).toBe(latest.block);
  });

  it("cushion depletion answers both sides in one request", async () => {
    const { data } = await get(
      "/v1/rbs/cushion-depletion?sinceDate=2020-01-01&highCapacityBelow=1&lowCapacityBelow=1&limit=5",
    );
    const sides = data as unknown as Record<string, Record<string, unknown>[]>;
    expect(Array.isArray(sides.high)).toBe(true);
    expect(Array.isArray(sides.low)).toBe(true);
    // `date` is what the handler filters on to recover the exact 24h window the
    // date-only `sinceDate` parameter widens.
    for (const row of [...sides.high, ...sides.low].slice(0, 3)) {
      expectFields(row, ["block", "date", "highCapacityOhm", "lowCapacityReserve", "ohmPrice"]);
    }
  });

  it("beats and target price changes carry their event fields", async () => {
    expectFields((await rowsOf("/v1/rbs/beats?sinceBlock=0&limit=1"))[0], [
      "block",
      "blockchain",
      "date",
      "id",
      "timestamp",
      "transaction",
    ]);
    expectFields((await rowsOf("/v1/rbs/target-price-changes?sinceBlock=0&limit=1"))[0], [
      "block",
      "id",
      "minimumTargetPrice",
      "timestamp",
      "transaction",
    ]);
  });
});

describeLive("bonds, YRF and emission manager routes", () => {
  it("bond market events answer created and closed together, each with its market", async () => {
    const { data } = await get("/v1/bonds/market-events?sinceBlock=0&limit=1");
    const events = data as unknown as Record<string, Record<string, unknown>[]>;
    expect(Array.isArray(events.created)).toBe(true);
    expect(Array.isArray(events.closed)).toBe(true);
    for (const row of [events.created[0], events.closed[0]]) {
      expectFields(row, ["block", "bondContract", "bondType", "date", "id", "timestamp"]);
      expectFields(row.market as Record<string, unknown>, [
        "capacityInPayoutToken",
        "initialPriceInQuoteToken",
        "marketId",
        "owner",
        "payoutToken",
        "quoteToken",
      ]);
    }
  });

  it("YRF repo markets carry the contract's reserve token", async () => {
    const rows = await rowsOf("/v1/yrf/repo-markets?sinceBlock=0&limit=1");
    expectFields(rows[0], ["bidAmountDecimal", "blockNumber", "blockTimestamp", "marketId", "transactionHash"]);
    const contract = rows[0].contract as Record<string, unknown>;
    expectFields(contract, ["address", "majorVersion", "minorVersion", "version"]);
    expectFields(contract.reserveToken as Record<string, unknown>, ["address", "decimals", "name", "symbol"]);
  });

  it("a YRF repo market is addressable by marketId", async () => {
    const listed = await rowsOf("/v1/yrf/repo-markets?sinceBlock=0&limit=1");
    const rows = await rowsOf(`/v1/yrf/repo-markets?marketId=${listed[0].marketId}&limit=1`);
    expect(rows).toHaveLength(1);
    expect(rows[0].marketId).toBe(listed[0].marketId);
  });

  it("emission manager sales carry the contract's four tokens", async () => {
    const rows = await rowsOf("/v1/emission-manager/sales?sinceBlock=0&limit=1");
    expectFields(rows[0], ["blockNumber", "blockTimestamp", "marketId", "saleAmountDecimal", "transactionHash"]);
    expectFields(rows[0].contract as Record<string, unknown>, [
      "gohmToken",
      "ohmToken",
      "reserveToken",
      "sReserveToken",
    ]);
  });
});

describeLive("convertible deposits routes", () => {
  it("auction events answer parameter updates and results together", async () => {
    const { data } = await get("/v1/convertible-deposits/auction-events?sinceBlock=0&limit=1");
    const events = data as unknown as Record<string, Record<string, unknown>[]>;
    expectFields(events.parametersUpdated[0], [
      "auctioneer",
      "block",
      "depositAsset",
      "minPriceDecimal",
      "targetDecimal",
      "tickSizeDecimal",
      "timestamp",
      "txHash",
    ]);
    expectFields(events.results[0], [
      "auctioneer",
      "block",
      "depositAsset",
      "ohmConvertibleDecimal",
      "periodIndex",
      "targetDecimal",
    ]);
  });

  it("failures answer both kinds", async () => {
    const { data } = await get("/v1/convertible-deposits/failures?sinceBlock=0&limit=1");
    const failures = data as unknown as Record<string, unknown[]>;
    expect(Array.isArray(failures.claimAllYieldFailed)).toBe(true);
    expect(Array.isArray(failures.bondMarketCreationFailed)).toBe(true);
  });

  it("claimed yields carry the amount and facility", async () => {
    const rows = await rowsOf("/v1/convertible-deposits/claimed-yields?sinceBlock=0&order=asc&limit=1");
    expectFields(rows[0], ["amountDecimal", "block", "depositAsset", "facility", "timestamp", "txHash"]);
  });

  it("the assets route resolves a deposit asset address to a symbol", async () => {
    // The event rows carry only the address; the alerts show the symbol. This
    // route is the join, and it caps `limit` at 200 rather than 1000.
    const rows = await rowsOf("/v1/convertible-deposits/assets?limit=200");
    expect(rows.length).toBeGreaterThan(0);
    expectFields(rows[0], ["address", "decimals", "name", "symbol"]);
  });

  it("rejects a limit above the assets route's cap", async () => {
    const response = await fetch(`${API}/v1/convertible-deposits/assets?limit=1000`);
    expect(response.status).toBe(400);
  });
});
