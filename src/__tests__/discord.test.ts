import fetch from "cross-fetch";

import { sendAlert } from "../discord";

jest.mock("cross-fetch");

describe("sendAlert", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (fetch as jest.Mock).mockReset();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("honors Discord retry_after before retrying a rate-limited webhook", async () => {
    (fetch as jest.Mock)
      .mockResolvedValueOnce({
        status: 429,
        ok: false,
        json: jest.fn().mockResolvedValue({ retry_after: 0.5 }),
      })
      .mockResolvedValueOnce({ status: 204, ok: true });

    const resultPromise = sendAlert("webhook", "", "Title", "Description", []);

    await Promise.resolve();
    await Promise.resolve();
    expect(fetch).toHaveBeenCalledTimes(1);

    await jest.advanceTimersByTimeAsync(500);
    await expect(resultPromise).resolves.toBe(true);
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("returns false after three consecutive rate-limit responses", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      status: 429,
      ok: false,
      json: jest.fn().mockResolvedValue({ retry_after: 0.1 }),
    });

    const resultPromise = sendAlert("webhook", "", "Title", "Description", []);
    await jest.runAllTimersAsync();

    await expect(resultPromise).resolves.toBe(false);
    expect(fetch).toHaveBeenCalledTimes(3);
  });

  it("does not wait when Discord requests a retry beyond the safe delay", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      status: 429,
      ok: false,
      json: jest.fn().mockResolvedValue({ retry_after: 10.001 }),
    });

    await expect(sendAlert("webhook", "", "Title", "Description", [])).resolves.toBe(false);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(jest.getTimerCount()).toBe(0);
  });
});
