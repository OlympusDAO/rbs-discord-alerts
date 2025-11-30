import dedent from "dedent-js";

import type { EmbedField } from "../discord";

const getShutdownMessage = (contractUrl: string): string => {
  return dedent(`
  1. Open the [contract](${contractUrl}) on the "Write Contract" tab
  2. Press the "Connect to Web3" button and connect to the Gnosis multi-sig using WalletConnect
  3. Select the \`shutdown\` function and execute`);
};

export const getShutdownEmbedField = (contractUrl?: string): EmbedField[] => {
  if (!contractUrl) return [];

  return [
    {
      name: "Shutdown Instructions",
      value: getShutdownMessage(contractUrl),
      inline: false,
    },
  ];
};
