import type { CodegenConfig } from "@graphql-codegen/cli";

import { getPriceSnapshotSubgraphUrl } from "./src/constants";

// Only the ohm-price subgraph remains on The Graph. RBS, bonds, YRF, the
// emission manager and convertible deposits are read from the Olympus protocol
// indexer's REST API instead (src/indexer/), whose response shapes are declared
// in src/indexer/types.ts and checked against the deployed API by
// src/__tests__/indexer.contract.test.ts.
const config: CodegenConfig = {
  generates: {
    "src/graphql/priceSnapshot.ts": {
      schema: getPriceSnapshotSubgraphUrl(),
      documents: "src/graphql/priceSnapshot.graphql",
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        preResolveTypes: true,
        scalars: {
          BigDecimal: "string",
          BigInt: "string",
          Bytes: "Uint8Array", // https://thegraph.com/docs/en/developing/assemblyscript-api/#bytes
          Int8: "number",
          Timestamp: "number",
        },
      },
      hooks: {
        afterOneFileWrite: ["pnpm run lint"],
      },
    },
  },
  overwrite: true,
};

export default config;
