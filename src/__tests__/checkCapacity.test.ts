import { countWithinWindow, DEPLETION_COUNT_THRESHOLD, isCapacityDepleted } from "../snapshotCheck/checkCapacity";

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

describe("countWithinWindow", () => {
  // The route's `sinceDate` parameter is a date, so it returns everything from
  // the START of the cutoff day. The real cutoff is a timestamp partway through
  // that day, and these rows are what the widening lets through.
  const cutoff = "2026-08-22T14:30:00.000Z";
  const row = (date: string) => ({ date });

  test("keeps snapshots after the exact cutoff", () => {
    expect(countWithinWindow([row("2026-08-22T14:30:00.001Z"), row("2026-08-23T09:00:00.000Z")], cutoff)).toBe(2);
  });

  test("drops snapshots from earlier the same day, which the date-only request lets through", () => {
    // Both are on the cutoff's date, so the route returns them; both are before
    // the cutoff, so neither belongs in a 24h window.
    expect(countWithinWindow([row("2026-08-22T00:00:01.000Z"), row("2026-08-22T13:59:59.999Z")], cutoff)).toBe(0);
  });

  test("is exclusive at the cutoff itself", () => {
    expect(countWithinWindow([row(cutoff)], cutoff)).toBe(0);
  });

  test("counts only the in-window rows from a mixed response", () => {
    const snapshots = [
      row("2026-08-22T02:00:00.000Z"), // widened in, out of window
      row("2026-08-22T13:00:00.000Z"), // widened in, out of window
      row("2026-08-22T18:00:00.000Z"), // in window
      row("2026-08-23T01:00:00.000Z"), // in window
    ];
    // Without the filter this would be 4 — enough to cross
    // DEPLETION_COUNT_THRESHOLD twice over and fire an emergency alert.
    expect(countWithinWindow(snapshots, cutoff)).toBe(2);
    expect(snapshots.length).toBeGreaterThan(DEPLETION_COUNT_THRESHOLD);
  });

  test("an empty response counts zero", () => {
    expect(countWithinWindow([], cutoff)).toBe(0);
  });
});
