const HEART_CONTRACT_V1_1 = "0x1652b503E0F1CF38b6246Ed3b91CB3786Bb11656";
const HEART_CONTRACT_V1_2 = "0x9C6220fE829d6FC889cde9b4966D2033C4EfFD48";
const HEART_CONTRACT_V1_2_TIMESTAMP = 1683818747 * 1000;
const HEART_CONTRACT_V1_3 = "0x34f84f039C14b49b438eA936b17244885bA0414c";
const HEART_CONTRACT_V1_3_TIMESTAMP = 1697656535 * 1000;

export const getHeartAddress = (timestampMs: number): string => {
  let address: string = HEART_CONTRACT_V1_1;

  // Check the timestamps - don't have access to the block at this point
  if (timestampMs >= HEART_CONTRACT_V1_2_TIMESTAMP) {
    address = HEART_CONTRACT_V1_2;
  }

  if (timestampMs >= HEART_CONTRACT_V1_3_TIMESTAMP) {
    address = HEART_CONTRACT_V1_3;
  }

  return address.toLowerCase();
}
