export enum ChainId {
  MAINNET = 1,
  GOERLI = 5,
  SEPOLIA = 11155111,
}

const getEtherscanDomain = (chain: ChainId): string => {
  switch (chain) {
    case ChainId.MAINNET:
      return "etherscan.io";
    case ChainId.GOERLI:
      return "goerli.etherscan.io";
    case ChainId.SEPOLIA:
      return "sepolia.etherscan.io";
    default:
      throw new Error(`Invalid chain: ${chain}`);
  }
};

export const getEtherscanTransactionUrl = (transaction: string, chain: ChainId): string => {
  return `https://${getEtherscanDomain(chain)}/tx/${transaction}`;
};

export const getEtherscanAddressUrl = (address: string, chain: ChainId): string => {
  return `https://${getEtherscanDomain(chain)}/address/${address}`;
};
