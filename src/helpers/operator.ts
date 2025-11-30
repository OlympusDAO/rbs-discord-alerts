import { castInt } from "./numberHelper";

const OPERATOR_CONTRACT_V1 = "0xbb47C3FFf4eF85703907d3ffca30de278b85df3f".toLowerCase();
const OPERATOR_CONTRACT_V1_1 = "0x1Ce568DbB34B2631aCDB5B453c3195EA0070EC65".toLowerCase();
const OPERATOR_CONTRACT_V1_1_BLOCK = 16148611;
const OPERATOR_CONTRACT_V1_3 = "0x0374c001204eF5e7E4F5362A5A2430CB6c219326";
const OPERATOR_CONTRACT_V1_3_BLOCK = 18379258; // RBS 1.3 activation
const OPERATOR_CONTRACT_V1_4 = "0x0AE561226896dA978EaDA0Bec4a7d3CfAE04f506";
const OPERATOR_CONTRACT_V1_4_BLOCK = 18622381; // RBS 1.4 activation

export const getCurrentOperatorContractAddress = (block: number): string => {
  let address: string = OPERATOR_CONTRACT_V1;
  const blockInt = castInt(block);

  // RBS 1.1
  if (blockInt >= OPERATOR_CONTRACT_V1_1_BLOCK) {
    address = OPERATOR_CONTRACT_V1_1;
  }

  // RBS 1.3
  if (blockInt >= OPERATOR_CONTRACT_V1_3_BLOCK) {
    address = OPERATOR_CONTRACT_V1_3;
  }

  // RBS 1.4
  if (blockInt >= OPERATOR_CONTRACT_V1_4_BLOCK) {
    address = OPERATOR_CONTRACT_V1_4;
  }

  return address.toLowerCase();
};
