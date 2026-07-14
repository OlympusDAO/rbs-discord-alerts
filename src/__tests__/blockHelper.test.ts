import {
  getEventStartBlock,
  getOneDayLookbackBlock,
  readPonderIndexedBlock,
  readSubgraphIndexedBlock,
} from "../helpers/blockHelper";

describe("blockHelper", () => {
  it("uses the existing cursor without loading the indexed head", async () => {
    const getIndexedBlock = jest.fn().mockResolvedValue(10_000);
    await expect(getEventStartBlock(123, getIndexedBlock)).resolves.toBe(123);
    expect(getIndexedBlock).not.toHaveBeenCalled();
  });

  it("starts one day before the indexed head when the cursor is absent", async () => {
    await expect(getEventStartBlock(undefined, async () => 10_000)).resolves.toBe(2_800);
    expect(getOneDayLookbackBlock(7_200)).toBe(0);
  });

  it("rejects an invalid indexed block", () => {
    expect(() => getOneDayLookbackBlock(-1)).toThrow("Invalid current block");
  });

  it("reads and validates a subgraph metadata response", () => {
    expect(readSubgraphIndexedBlock({ data: { _meta: { block: { number: 10_000 } } } }, "test")).toBe(10_000);
    expect(() => readSubgraphIndexedBlock({ data: null, error: "offline" }, "test")).toThrow(
      "Did not receive the indexed block from test",
    );
  });

  it("reads the indexed block for one chain from Ponder status", () => {
    expect(
      readPonderIndexedBlock(
        {
          data: {
            _meta: {
              status: {
                mainnet: { id: 1, block: { number: 10_000 } },
                sepolia: { id: 11_155_111, block: { number: 5_000 } },
              },
            },
          },
        },
        1,
        "Ponder",
      ),
    ).toBe(10_000);
  });

  it("rejects Ponder status without the requested chain", () => {
    expect(() => readPonderIndexedBlock({ data: { _meta: { status: {} } } }, 1, "Ponder")).toThrow("chain 1");
  });
});
