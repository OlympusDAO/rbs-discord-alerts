import { PriceEventType } from "../graphql/rangeSnapshot";

export const isRangeCapacityCorrect = (
  type: PriceEventType,
  isHigh: boolean,
  treasuryReserves: number,
  treasuryReserveDebt: number,
  reserveFactor: number,
  capacity: number,
): [boolean, string] => {
  return [false, ""];
};
