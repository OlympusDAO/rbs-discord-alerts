import { getEventStartBlock } from "./blockHelper";

/**
 * The block to start reading events from, against the protocol indexer.
 *
 * Resume from the stored cursor, or look back a day from the indexed head on a
 * cold start. Same rule as the subgraph/Ponder helpers this replaced; the
 * indexed head now comes from a route's `meta.block` rather than
 * `_meta { block { number } }` or Ponder's `_meta { status }`.
 */
export const getIndexerEventStartBlock = async (
  latestBlock: number | undefined,
  getIndexedBlock: () => Promise<number>,
): Promise<number> => getEventStartBlock(latestBlock, getIndexedBlock);
