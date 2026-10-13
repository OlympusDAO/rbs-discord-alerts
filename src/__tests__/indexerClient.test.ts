import { IndexerError, queryIndexer } from "../helpers/indexerClient";

const waitForAbort = (signal: AbortSignal | null | undefined): Promise<never> =>
  new Promise((_, reject) => {
    signal?.addEventListener("abort", () => reject(signal.reason), { once: true });
  });

describe("queryIndexer", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    // Native AbortSignal.timeout uses internal timers. Route them through the
    // fake clock so these tests exercise aborts without real network delays.
    jest.spyOn(AbortSignal, "timeout").mockImplementation(ms => {
      const controller = new AbortController();
      setTimeout(() => controller.abort(new DOMException("Request timed out", "TimeoutError")), ms);
      return controller.signal;
    });
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  it.each([
    "request",
    "body",
  ])("retries a stalled %s and returns the next response before the function deadline", async stall => {
    jest
      .spyOn(globalThis, "fetch")
      .mockImplementationOnce((_url, options) => {
        if (stall === "request") return waitForAbort(options?.signal);
        const response = new Response();
        response.json = () => waitForAbort(options?.signal);
        return Promise.resolve(response);
      })
      .mockResolvedValueOnce(new Response(JSON.stringify({ data: ["event"], meta: { block: 123 } })));

    let outcome: unknown = "pending";
    void queryIndexer<string[]>("/v1/rbs/price-events").then(
      result => {
        outcome = result;
      },
      error => {
        outcome = error;
      },
    );
    await jest.advanceTimersByTimeAsync(29_999);

    expect(outcome).toEqual({ data: ["event"], meta: { block: 123 } });
  });

  it("exhausts stalled attempts and reports the timeout before the function deadline", async () => {
    const signals: (AbortSignal | null | undefined)[] = [];
    jest.spyOn(globalThis, "fetch").mockImplementation((_url, options) => {
      signals.push(options?.signal);
      return waitForAbort(options?.signal);
    });

    let outcome: unknown = "pending";
    void queryIndexer("/v1/rbs/price-events").catch(error => {
      outcome = error;
    });
    await jest.advanceTimersByTimeAsync(29_999);

    expect(outcome).toBeInstanceOf(Error);
    expect((outcome as Error).message).toContain("Request timed out");
    expect(signals).toHaveLength(3);
    expect(new Set(signals).size).toBe(3);
    expect(signals.every(signal => signal?.aborted)).toBe(true);
  });

  it("rejects a client error without retrying", async () => {
    const fetchMock = jest.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ error: { code: "invalid_limit", message: "Limit exceeds maximum" } }), {
        status: 400,
      }),
    );

    await expect(queryIndexer("/v1/convertible-deposits/assets?limit=1000")).rejects.toEqual(
      new IndexerError(400, "invalid_limit", "Limit exceeds maximum"),
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
