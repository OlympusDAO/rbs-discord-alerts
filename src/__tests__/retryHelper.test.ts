import { createRetryBudget, retryWithBackoff } from "../helpers/retryHelper";

type RetryResult = {
  retryAfterMs?: number;
  value?: string;
};

describe("retryWithBackoff", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("waits for the requested delay before retrying", async () => {
    const operation = jest
      .fn()
      .mockResolvedValueOnce({ retryAfterMs: 1_000, value: "limited" })
      .mockResolvedValueOnce({ value: "delivered" });

    const resultPromise = retryWithBackoff<RetryResult>(operation, {
      maxAttempts: 3,
      maxTotalDelayMs: 10_000,
      getRetryDelayMs: result => result.retryAfterMs,
    });

    await Promise.resolve();
    expect(operation).toHaveBeenCalledTimes(1);

    await jest.advanceTimersByTimeAsync(999);
    expect(operation).toHaveBeenCalledTimes(1);

    await jest.advanceTimersByTimeAsync(1);
    await expect(resultPromise).resolves.toEqual({ value: "delivered" });
    expect(operation).toHaveBeenCalledTimes(2);
  });

  it("returns the final retryable result after exhausting the attempt limit", async () => {
    const operation = jest.fn().mockResolvedValue({ retryAfterMs: 100 });

    const resultPromise = retryWithBackoff<RetryResult>(operation, {
      maxAttempts: 3,
      maxTotalDelayMs: 10_000,
      getRetryDelayMs: result => result.retryAfterMs,
    });

    await jest.runAllTimersAsync();
    await expect(resultPromise).resolves.toEqual({ retryAfterMs: 100 });
    expect(operation).toHaveBeenCalledTimes(3);
  });

  it("does not wait when the requested delay exceeds the configured maximum", async () => {
    const operation = jest.fn().mockResolvedValue({ retryAfterMs: 10_001 });

    await expect(
      retryWithBackoff<RetryResult>(operation, {
        maxAttempts: 3,
        maxTotalDelayMs: 10_000,
        getRetryDelayMs: result => result.retryAfterMs,
      }),
    ).resolves.toEqual({ retryAfterMs: 10_001 });
    expect(operation).toHaveBeenCalledTimes(1);
    expect(jest.getTimerCount()).toBe(0);
  });

  it("does not let multiple waits exceed the cumulative delay budget", async () => {
    const operation = jest
      .fn()
      .mockResolvedValueOnce({ retryAfterMs: 6_000 })
      .mockResolvedValueOnce({ retryAfterMs: 5_000 });

    const resultPromise = retryWithBackoff<RetryResult>(operation, {
      maxAttempts: 3,
      maxTotalDelayMs: 10_000,
      getRetryDelayMs: result => result.retryAfterMs,
    });

    await jest.advanceTimersByTimeAsync(6_000);
    await expect(resultPromise).resolves.toEqual({ retryAfterMs: 5_000 });
    expect(operation).toHaveBeenCalledTimes(2);
    expect(jest.getTimerCount()).toBe(0);
  });

  it("shares a delay budget across separate retry operations", async () => {
    const sharedBudget = createRetryBudget(1_000);
    const firstOperation = jest
      .fn()
      .mockResolvedValueOnce({ retryAfterMs: 600 })
      .mockResolvedValueOnce({ value: "delivered" });

    const firstResultPromise = retryWithBackoff<RetryResult>(firstOperation, {
      maxAttempts: 3,
      maxTotalDelayMs: 10_000,
      getRetryDelayMs: result => result.retryAfterMs,
      sharedBudget,
    });
    await jest.advanceTimersByTimeAsync(600);
    await expect(firstResultPromise).resolves.toEqual({ value: "delivered" });

    const secondOperation = jest.fn().mockResolvedValue({ retryAfterMs: 500 });
    await expect(
      retryWithBackoff<RetryResult>(secondOperation, {
        maxAttempts: 3,
        maxTotalDelayMs: 10_000,
        getRetryDelayMs: result => result.retryAfterMs,
        sharedBudget,
      }),
    ).resolves.toEqual({ retryAfterMs: 500 });

    expect(secondOperation).toHaveBeenCalledTimes(1);
    expect(sharedBudget.remainingDelayMs).toBe(400);
    expect(jest.getTimerCount()).toBe(0);
  });
});
