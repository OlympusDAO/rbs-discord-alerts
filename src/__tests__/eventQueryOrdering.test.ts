// Event ordering is load-bearing: every handler walks its results in order and
// advances a Firestore block cursor as it goes, so a descending page would
// park the cursor at the newest block and silently skip everything older.
//
// This used to assert `orderDirection: asc` inside the GraphQL documents. Two
// of these three routes now decide ordering server-side and take no `order`
// parameter, so the invariant lives in the API — which means asserting it
// against a deployed one is the only check that can actually fail.
//
//   INDEXER_API_URL=https://<api-host> pnpm test
//
// Skipped without INDEXER_API_URL, so the normal suite stays offline.

export {};

const API = process.env.INDEXER_API_URL?.replace(/\/+$/, "");
const describeLive = API ? describe : describe.skip;

const isAscending = (blocks: number[]): boolean =>
  blocks.every((block, index) => index === 0 || blocks[index - 1] <= block);

const fetchRows = async (path: string): Promise<Record<string, unknown>[]> => {
  const response = await fetch(`${API}${path}`);
  expect(response.status).toBe(200);
  const body = (await response.json()) as { data: unknown };
  return body.data as Record<string, unknown>[];
};

describeLive("event query ordering", () => {
  it("requests bond market closures in ascending block order", async () => {
    const data = (await fetchRows("/v1/bonds/market-events?sinceBlock=0&limit=100")) as unknown as {
      created: { block: string }[];
      closed: { block: string }[];
    };
    expect(data.closed.length).toBeGreaterThan(0);
    expect(isAscending(data.closed.map(row => Number(row.block)))).toBe(true);
    expect(isAscending(data.created.map(row => Number(row.block)))).toBe(true);
  });

  it("requests YRF market creation in ascending block order", async () => {
    const rows = await fetchRows("/v1/yrf/repo-markets?sinceBlock=0&orderBy=blockNumber&order=asc&limit=100");
    expect(rows.length).toBeGreaterThan(0);
    expect(isAscending(rows.map(row => Number(row.blockNumber)))).toBe(true);
  });

  it("requests Emission Manager market creation in ascending block order", async () => {
    const rows = await fetchRows("/v1/emission-manager/sales?sinceBlock=0&limit=100");
    expect(rows.length).toBeGreaterThan(0);
    expect(isAscending(rows.map(row => Number(row.blockNumber)))).toBe(true);
  });

  it("requests RBS price events in ascending block order", async () => {
    const rows = await fetchRows("/v1/rbs/price-events?sinceBlock=0&limit=100");
    expect(rows.length).toBeGreaterThan(0);
    expect(isAscending(rows.map(row => Number(row.block)))).toBe(true);
  });
});
