import { isLowerWallBroken } from "../checkLowerWall";

describe("checkLowerWall", () => {
  test("lower wall price < current price", () => {
    const result = isLowerWallBroken(100, 101);

    expect(result[0]).toBe(false);
    expect(result[1]).toHaveLength(0);
  });

  test("lower wall price = current price", () => {
    const result = isLowerWallBroken(100, 100);

    expect(result[0]).toBe(false);
    expect(result[1]).toHaveLength(0);
  });

  test("current price < lower wall price threshold", () => {
    const result = isLowerWallBroken(100, 79);

    expect(result[0]).toBe(true);
    expect(result[1]).toBeTruthy();
  });

  test("current price >= lower wall price threshold", () => {
    const result = isLowerWallBroken(100, 80);

    expect(result[0]).toBe(false);
    expect(result[1]).toHaveLength(0);
  });
});
