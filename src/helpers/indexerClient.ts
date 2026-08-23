import { getIndexerUrl } from "../constants";

// REST transport for the Olympus protocol indexer.
//
// Replaces `createGraphQLClient` for every source that moved off The Graph.
// The retry policy is deliberately the same as the urql `retryExchange` it
// replaces — 3 attempts, 1s growing to 5s, jittered — because this runs on a
// 1-minute cron and a single transient failure should not skip an alert.

const MAX_ATTEMPTS = 3;
const INITIAL_DELAY_MS = 1000;
const MAX_DELAY_MS = 5000;

// Every route answers `{ data, meta: { block } }`, where `meta.block` is the
// indexed head — the same freshness signal `_meta { block { number } }` gave.
export type IndexerEnvelope<T> = { data: T; meta: { block: number } };

export class IndexerError extends Error {
  readonly status: number;
  readonly code: string;
  constructor(status: number, code: string, message: string) {
    super(message);
    this.name = "IndexerError";
    this.status = status;
    this.code = code;
  }
}

const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

const readError = async (response: Response): Promise<IndexerError> => {
  let code = "http_error";
  let message = `${response.status} ${response.statusText}`;
  try {
    const body = (await response.json()) as { error?: { code?: string; message?: string } };
    if (body.error?.code) code = body.error.code;
    if (body.error?.message) message = body.error.message;
  } catch {
    // Non-JSON error body; the status line is all we have.
  }
  return new IndexerError(response.status, code, message);
};

export const queryIndexer = async <T>(path: string): Promise<IndexerEnvelope<T>> => {
  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const response = await fetch(`${getIndexerUrl()}${path}`, {
        headers: { accept: "application/json" },
      });

      if (response.ok) return (await response.json()) as IndexerEnvelope<T>;

      const error = await readError(response);
      // A 4xx means this code sent something the route does not accept. That
      // is a bug here, not a blip, and retrying it just delays the failure.
      if (response.status < 500) throw error;
      lastError = error;
    } catch (error) {
      if (error instanceof IndexerError && error.status < 500) throw error;
      lastError = error;
    }

    if (attempt < MAX_ATTEMPTS) {
      const backoff = Math.min(INITIAL_DELAY_MS * 2 ** (attempt - 1), MAX_DELAY_MS);
      console.warn(`Retrying indexer request ${path} after error:`, lastError);
      await delay(backoff * (0.5 + Math.random() / 2));
    }
  }

  throw lastError instanceof Error ? lastError : new Error(`Indexer request failed for ${path}: ${String(lastError)}`);
};

// Convenience for the common case: the rows, without the envelope.
export const queryIndexerData = async <T>(path: string): Promise<T> => (await queryIndexer<T>(path)).data;

export const buildQuery = (params: Record<string, string | number | undefined>): string => {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) search.set(key, String(value));
  }
  const query = search.toString();
  return query ? `?${query}` : "";
};
