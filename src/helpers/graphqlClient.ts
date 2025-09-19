import { Client, createClient, fetchExchange } from "@urql/core";
import { retryExchange, RetryExchangeOptions } from "@urql/exchange-retry";
import fetch from "cross-fetch";

const retryOptions: RetryExchangeOptions = {
  initialDelayMs: 1000,
  maxDelayMs: 5000,
  randomDelay: true,
  maxNumberAttempts: 3,
  retryIf: (error, _operation) => {
    if (error && error.networkError) {
      console.log('GraphQL network error:', error.networkError);
      return true;
    }
    return false;
  },
};

export const createGraphQLClient = (url: string): Client => {
  const customFetch = (input: RequestInfo | URL, init?: RequestInit) => {
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => {
      abortController.abort();
    }, 5000);

    const fetchPromise = fetch(input, {
      ...init,
      signal: abortController.signal,
    });

    // Clear timeout when request completes (success or failure)
    fetchPromise.finally(() => {
      clearTimeout(timeoutId);
    });

    return fetchPromise;
  };

  return createClient({
    url,
    fetch: customFetch,
    exchanges: [
      retryExchange(retryOptions),
      fetchExchange,
    ],
  });
};
