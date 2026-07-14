const ETHEREUM_BLOCKS_PER_DAY = 7_200;

export const getOneDayLookbackBlock = (currentBlock: number): number => {
  if (!Number.isSafeInteger(currentBlock) || currentBlock < 0) {
    throw new Error(`Invalid current block: ${currentBlock}`);
  }

  return Math.max(0, currentBlock - ETHEREUM_BLOCKS_PER_DAY);
};

export const getEventStartBlock = async (
  latestBlock: number | undefined,
  getIndexedBlock: () => Promise<number>,
): Promise<number> => {
  if (latestBlock !== undefined && latestBlock > 0) return latestBlock;
  return getOneDayLookbackBlock(await getIndexedBlock());
};

type SubgraphMetaResult = {
  data?: { _meta?: { block: { number: number } } | null } | null;
  error?: unknown;
};

export const readSubgraphIndexedBlock = (result: SubgraphMetaResult, sourceName: string): number => {
  const indexedBlock = result.data?._meta?.block.number;
  if (indexedBlock === undefined || !Number.isSafeInteger(indexedBlock) || indexedBlock < 0) {
    throw new Error(`Did not receive the indexed block from ${sourceName}. Error: ${result.error}`);
  }

  return indexedBlock;
};

type PonderStatusResult = {
  data?: { _meta?: { status?: unknown } | null } | null;
  error?: unknown;
};

export const readPonderIndexedBlock = (result: PonderStatusResult, chainId: number, sourceName: string): number => {
  const status = result.data?._meta?.status;
  if (typeof status !== "object" || status === null) {
    throw new Error(`Did not receive indexing status from ${sourceName}. Error: ${result.error}`);
  }

  for (const chainStatus of Object.values(status)) {
    if (typeof chainStatus !== "object" || chainStatus === null) continue;
    const candidate = chainStatus as { id?: unknown; block?: { number?: unknown } };
    if (candidate.id !== chainId) continue;

    const indexedBlock = candidate.block?.number;
    if (typeof indexedBlock === "number" && Number.isSafeInteger(indexedBlock) && indexedBlock >= 0) {
      return indexedBlock;
    }
  }

  throw new Error(`Did not receive the indexed block for chain ${chainId} from ${sourceName}. Error: ${result.error}`);
};
