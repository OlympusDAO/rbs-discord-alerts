import { type Client, gql } from "@urql/core";

import { getEventStartBlock, readPonderIndexedBlock, readSubgraphIndexedBlock } from "./blockHelper";

const MAINNET_CHAIN_ID = 1;
const PONDER_META_DOCUMENT = gql`
  query ConvertibleDepositsPonderMeta {
    _meta {
      status
    }
  }
`;
const SUBGRAPH_META_DOCUMENT = gql`
  query IndexedSubgraphMeta {
    _meta {
      block {
        number
      }
    }
  }
`;

export const getPonderEventStartBlock = async (client: Client, latestBlock?: number): Promise<number> =>
  getEventStartBlock(latestBlock, async () => {
    const result = await client.query(PONDER_META_DOCUMENT, {}).toPromise();
    return readPonderIndexedBlock(result, MAINNET_CHAIN_ID, "Convertible Deposits Ponder endpoint");
  });

export const getSubgraphIndexedBlock = async (client: Client, sourceName: string): Promise<number> =>
  readSubgraphIndexedBlock(await client.query(SUBGRAPH_META_DOCUMENT, {}).toPromise(), sourceName);

export const getSubgraphEventStartBlock = async (
  client: Client,
  latestBlock: number | undefined,
  sourceName: string,
): Promise<number> => getEventStartBlock(latestBlock, () => getSubgraphIndexedBlock(client, sourceName));
