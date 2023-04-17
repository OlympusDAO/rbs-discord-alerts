import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  generates: {
    "src/graphql/bondMarket.ts": {
      schema: "https://api.thegraph.com/subgraphs/name/olympusdao/bonds",
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
        afterOneFileWrite: ["yarn lint:fix"],
      },
    },
    "src/graphql/rangeSnapshot.ts": {
      schema: "https://api.thegraph.com/subgraphs/name/olympusdao/rbs",
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
      schema: "https://api.thegraph.com/subgraphs/name/olympusdao/price-snapshot",
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
