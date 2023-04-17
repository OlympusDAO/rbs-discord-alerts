import { CodegenConfig } from "@graphql-codegen/cli";

import { BONDS_SUBGRAPH_URL, getRbsSubgraphUrl, PRICE_SNAPSHOT_SUBGRAPH_URL } from "./src/constants";

const config: CodegenConfig = {
  generates: {
    "src/graphql/bondMarket.ts": {
      schema: BONDS_SUBGRAPH_URL,
      documents: "src/graphql/bondMarket.graphql",
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        preResolveTypes: true,
        scalars: {
          BigDecimal: "string",
          BigInt: "string",
          Bytes: "Uint8Array", // https://thegraph.com/docs/en/developing/assemblyscript-api/#bytes
        },
      },
      hooks: {
        afterOneFileWrite: ["yarn lint:fix", "patch -p0 < src/graphql/bondMarket.patch"],
      },
    },
    "src/graphql/rangeSnapshot.ts": {
      schema: getRbsSubgraphUrl(),
      documents: "src/graphql/rangeSnapshot.graphql",
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        preResolveTypes: true,
        scalars: {
          BigDecimal: "string",
          BigInt: "string",
          Bytes: "Uint8Array", // https://thegraph.com/docs/en/developing/assemblyscript-api/#bytes
        },
      },
      hooks: {
        afterOneFileWrite: ["yarn lint:fix"],
      },
    },
    "src/graphql/priceSnapshot.ts": {
      schema: PRICE_SNAPSHOT_SUBGRAPH_URL,
      documents: "src/graphql/priceSnapshot.graphql",
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        preResolveTypes: true,
        scalars: {
          BigDecimal: "string",
          BigInt: "string",
          Bytes: "Uint8Array", // https://thegraph.com/docs/en/developing/assemblyscript-api/#bytes
        },
      },
      hooks: {
        afterOneFileWrite: ["yarn lint:fix"],
      },
    },
  },
  overwrite: true,
};

export default config;
