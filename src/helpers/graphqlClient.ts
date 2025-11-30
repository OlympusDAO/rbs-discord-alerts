import { type Client, createClient, fetchExchange } from "@urql/core";
import { type RetryExchangeOptions, retryExchange } from "@urql/exchange-retry";
import fetch from "cross-fetch";

const retryOptions: RetryExchangeOptions = {
  initialDelayMs: 1000,
  maxDelayMs: 5000,
  randomDelay: true,
  maxNumberAttempts: 3,
  retryIf: (error, _operation) => {
    console.warn(`Retrying GraphQL operation due to error:`, JSON.stringify(error));
    return true;
  },
};

export const createGraphQLClient = (url: string): Client => {
  return createClient({
    url,
    fetch: fetch,
    exchanges: [retryExchange(retryOptions), fetchExchange],
  });
};
