import { isPriceDeviating } from "../checkPrice";

describe("checkPrice", () => {
  test("chainlink price = lp price", () => {
    const result = isPriceDeviating(100, 100);

    expect(result[0]).toBe(false);
    expect(result[1]).toHaveLength(0);
  });

  test("chainlink price > lp price + threshold", () => {
    const result = isPriceDeviating(111, 100);

    expect(result[0]).toBe(true);
    expect(result[1]).toBeTruthy();
  });

  test("chainlink price < lp price + threshold", () => {
    const result = isPriceDeviating(109, 100);

    expect(result[0]).toBe(false);
    expect(result[1]).toHaveLength(0);
  });

  test("chainlink price > lp price - threshold", () => {
    const result = isPriceDeviating(91, 100);

    expect(result[0]).toBe(false);
    expect(result[1]).toHaveLength(0);
  });

  test("chainlink price < lp price - threshold", () => {
    const result = isPriceDeviating(89, 100);

    expect(result[0]).toBe(true);
    expect(result[1]).toBeTruthy();
  });

  test("chainlink price + threshold > lp price", () => {
    const result = isPriceDeviating(100, 109);

    expect(result[0]).toBe(false);
    expect(result[1]).toHaveLength(0);
  });

  test("chainlink price + threshold < lp price", () => {
    const result = isPriceDeviating(100, 111);

    expect(result[0]).toBe(true);
    expect(result[1]).toBeTruthy();
  });

  test("chainlink price - threshold > lp price", () => {
    const result = isPriceDeviating(100, 89);

    expect(result[0]).toBe(true);
    expect(result[1]).toBeTruthy();
  });

  test("chainlink price - threshold < lp price", () => {
    const result = isPriceDeviating(100, 91);

    expect(result[0]).toBe(false);
    expect(result[1]).toHaveLength(0);
  });
});
