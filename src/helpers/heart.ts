import { castInt } from "./numberHelper";

const HEART_CONTRACT_V1_1 = "0x1652b503E0F1CF38b6246Ed3b91CB3786Bb11656";
const HEART_CONTRACT_V1_2 = "0x9C6220fE829d6FC889cde9b4966D2033C4EfFD48";
const HEART_CONTRACT_V1_2_BLOCK = 17237984;
const HEART_CONTRACT_V1_3 = "0xE05646971Ec444f8449d1CA6Fc8D9793986017d5";
const HEART_CONTRACT_V1_3_BLOCK = 18279004;

export const getHeartAddress = (block: number): string => {
  const blockInt = castInt(block);

  let address: string = HEART_CONTRACT_V1_1;

  if (blockInt >= HEART_CONTRACT_V1_2_BLOCK) {
    address = HEART_CONTRACT_V1_2;
  }

  if (blockInt >= HEART_CONTRACT_V1_3_BLOCK) {
    address = HEART_CONTRACT_V1_3;
  }

  return address.toLowerCase();
}
