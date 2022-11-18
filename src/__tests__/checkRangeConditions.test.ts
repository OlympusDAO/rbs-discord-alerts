import { PriceEventType } from "../graphql/rangeSnapshot";
import { isRangeCapacityCorrect } from "../priceEventsCheck/checkRangeConditions";

describe("isRangeCapacityCorrect", () => {
  test("CushionUp high is ignored", () => {
    const result = isRangeCapacityCorrect(PriceEventType.CushionUp, true, 0, 0, 0, 0);
    expect(result[0]).toBeTruthy();
  });

  test("CushionUp low is ignored", () => {
    const result = isRangeCapacityCorrect(PriceEventType.CushionUp, false, 0, 0, 0, 0);
    expect(result[0]).toBeTruthy();
  });

  test("CushionDown high is ignored", () => {
    const result = isRangeCapacityCorrect(PriceEventType.CushionDown, true, 0, 0, 0, 0);
    expect(result[0]).toBeTruthy();
  });

  test("CushionDown low is ignored", () => {
    const result = isRangeCapacityCorrect(PriceEventType.CushionDown, false, 0, 0, 0, 0);
    expect(result[0]).toBeTruthy();
  });

  test("WallUp high with correct capacity", () => {
    fail();

    // https://github.com/OlympusDAO/bophades2/blob/c6a7effb693e7f58ad65bba88b669406d43127c4/src/policies/Operator.sol#L826
    // treasury reserves (including debt) * reserve factor
  });

  test("WallUp high with incorrect capacity", () => {
    fail();

    // https://github.com/OlympusDAO/bophades2/blob/c6a7effb693e7f58ad65bba88b669406d43127c4/src/policies/Operator.sol#L826
    // (treasury reserves (including debt) * reserve factor / wall high price) * (1 + wall spread * 2)
  });

  test("WallUp low with correct capacity", () => {
    // We expect the capacity = treasury reserves (including debt) * reserve factor
    const result = isRangeCapacityCorrect(PriceEventType.WallUp, false, 100, 0, 0.1, 10);
    expect(result[0]).toBeTruthy();
  });

  test("WallUp low with incorrect capacity", () => {
    // We expect the capacity = treasury reserves (including debt) * reserve factor
    const result = isRangeCapacityCorrect(PriceEventType.WallUp, false, 100, 0, 0.1, 11);
    expect(result[0]).toBeFalsy();
  });

  // when there's supposed to be a market, it's created

  // Is a market created when it's supposed to?
});
