type RetryOptions<T> = {
  maxAttempts: number;
  maxTotalDelayMs: number;
  getRetryDelayMs: (result: T) => number | undefined;
  sharedBudget?: RetryBudget;
};

export type RetryBudget = {
  remainingDelayMs: number;
};

export const createRetryBudget = (totalDelayMs: number): RetryBudget => ({ remainingDelayMs: totalDelayMs });

const sleep = async (delayMs: number): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, delayMs));
};

/**
 * Retries an operation when its result requests a bounded delay.
 *
 * The last retryable result is returned when the attempt limit is reached or
 * another wait would exceed the cumulative delay budget. Non-retryable errors
 * are allowed to propagate to the caller.
 */
export const retryWithBackoff = async <T>(operation: () => Promise<T>, options: RetryOptions<T>): Promise<T> => {
  if (!Number.isInteger(options.maxAttempts) || options.maxAttempts < 1) {
    throw new Error("maxAttempts must be a positive integer");
  }

  let totalDelayMs = 0;

  for (let attempt = 1; attempt <= options.maxAttempts; attempt++) {
    const result = await operation();
    const retryDelayMs = options.getRetryDelayMs(result);

    if (retryDelayMs === undefined || attempt === options.maxAttempts) return result;
    const sharedDelayAvailable = options.sharedBudget?.remainingDelayMs ?? Number.POSITIVE_INFINITY;
    if (
      !Number.isFinite(retryDelayMs) ||
      retryDelayMs < 0 ||
      totalDelayMs + retryDelayMs > options.maxTotalDelayMs ||
      retryDelayMs > sharedDelayAvailable
    ) {
      return result;
    }

    if (options.sharedBudget) options.sharedBudget.remainingDelayMs -= retryDelayMs;
    await sleep(retryDelayMs);
    totalDelayMs += retryDelayMs;
  }

  throw new Error("Retry loop ended unexpectedly");
};
