export const getEtherscanTransactionUrl = (transaction: string, chain: string): string => {
  return `https://${chain === "Goerli" ? "goerli." : ""}etherscan.io/tx/${transaction}`;
};

export const getEtherscanAddressUrl = (address: string, chain: string): string => {
  return `https://${chain === "Goerli" ? "goerli." : ""}etherscan.io/address/${address}`;
};
