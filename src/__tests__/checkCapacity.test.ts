import { isCapacityDepleted } from "../checkCapacity";

describe("checkCapacityDepletion", () => {
  test("lower cushion depletion > threshold", () => {
    const result = isCapacityDepleted(3, 0);

    expect(result[0]).toBe(true);
    expect(result[1]).toBeTruthy();
  });

  test("upper cushion depletion > threshold", () => {
    const result = isCapacityDepleted(0, 3);

    expect(result[0]).toBe(true);
    expect(result[1]).toBeTruthy();
  });

  test("lower and upper cushion depletion = threshold", () => {
    const result = isCapacityDepleted(1, 1);

    expect(result[0]).toBe(true);
    expect(result[1]).toBeTruthy();
  });

  test("lower and upper cushion depletion < threshold", () => {
    const result = isCapacityDepleted(0, 1);

    expect(result[0]).toBe(false);
    expect(result[1]).toHaveLength(0);
  });
});
