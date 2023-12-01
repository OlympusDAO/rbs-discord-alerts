import { castInt } from "./numberHelper";

const HEART_CONTRACT_V1_1 = "0x1652b503E0F1CF38b6246Ed3b91CB3786Bb11656";
const HEART_CONTRACT_V1_2 = "0x9C6220fE829d6FC889cde9b4966D2033C4EfFD48";
const HEART_CONTRACT_V1_2_BLOCK = 17237984;
const HEART_CONTRACT_V1_3 = "0xE05646971Ec444f8449d1CA6Fc8D9793986017d5";
const HEART_CONTRACT_V1_3_BLOCK = 18379258; // RBS 1.3 activation
const HEART_CONTRACT_V1_4 = "0xD5a0Ae3Bf7309416e70cB14399bDd508fE82C658";
const HEART_CONTRACT_V1_4_BLOCK = 18622381; // RBS 1.4 activation

export const getHeartAddress = (block: number): string => {
  const blockInt = castInt(block);

  let address: string = HEART_CONTRACT_V1_1;

  if (blockInt >= HEART_CONTRACT_V1_2_BLOCK) {
    address = HEART_CONTRACT_V1_2;
  }

  if (blockInt >= HEART_CONTRACT_V1_3_BLOCK) {
    address = HEART_CONTRACT_V1_3;
  }

  if (blockInt >= HEART_CONTRACT_V1_4_BLOCK) {
    address = HEART_CONTRACT_V1_4;
  }

  return address.toLowerCase();
}
