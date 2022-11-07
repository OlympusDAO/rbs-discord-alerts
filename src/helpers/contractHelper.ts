export const getEtherscanTransactionUrl = (transaction: string, chain: string): string => {
  return `https://${chain === "Goerli" ? "goerli." : ""}etherscan.io/tx/${transaction}`;
};
