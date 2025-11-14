import { createClient } from "@ponder/client";
import * as schema from "../ponder/ponder.schema";
import { getConvertibleDepositsEndpoint } from "../constants";

let ponderClient: ReturnType<typeof createClient> | null = null;

/**
 * Creates and returns a Ponder client instance for querying the convertible deposits endpoint.
 * The client is cached and reused across calls.
 *
 * @returns Ponder client instance
 */
export const getPonderClient = () => {
  if (!ponderClient) {
    const endpoint = getConvertibleDepositsEndpoint();
    // Ensure the endpoint ends with /sql for SQL over HTTP
    const sqlEndpoint = endpoint.endsWith("/sql") ? endpoint : `${endpoint}/sql`;
    ponderClient = createClient(sqlEndpoint, { schema });
  }
  return ponderClient;
};

