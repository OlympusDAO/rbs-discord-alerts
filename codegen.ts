import { CodegenConfig } from "@graphql-codegen/cli";

import { getBondsSubgraphUrl, getPriceSnapshotSubgraphUrl, getRbsSubgraphUrl } from "./src/constants";

const config: CodegenConfig = {
  generates: {
    "src/graphql/bondMarket.ts": {
      schema: getBondsSubgraphUrl(),
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
      schema: getPriceSnapshotSubgraphUrl(),
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
