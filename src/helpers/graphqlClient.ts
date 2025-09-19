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
  return createClient({
    url,
    fetch,
    exchanges: [
      retryExchange(retryOptions),
      fetchExchange,
    ],
  });
};
