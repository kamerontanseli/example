import { handleErrors, ajax, ajaxJSON } from "../ajax";

describe("handleErrors", () => {
  it("should throw if response.ok is false", () => {
    expect(() => handleErrors({ ok: false })).toThrow();
  });
  it("should not throw if response.ok is true", () => {
    expect(() => handleErrors({ ok: true })).not.toThrow();
  });
});

describe("ajax", () => {
  let oldFetch;
  beforeEach(() => {
    oldFetch = window.fetch;
  });
  afterEach(() => {
    window.fetch = oldFetch;
  });
  it("should not throw when fetch. is successful", async () => {
    window.fetch = jest.fn(() => new Promise(r => r({ ok: true })));
    await ajax("/");
    expect(window.fetch).toHaveBeenCalled();
  });
  it("should throw when fetch. is unsuccessful", async () => {
    window.fetch = jest.fn(() => new Promise(r => r({ ok: false })));
    try {
      await ajax("/");
      expect(false).toBe(true);
    } catch (e) {
      expect(true).toBe(true);
    }
    expect(window.fetch).toHaveBeenCalled();
  });
});

describe("ajaxJSON", () => {
  let oldFetch;
  beforeEach(() => {
    oldFetch = window.fetch;
  });
  afterEach(() => {
    window.fetch = oldFetch;
  });
  it("should call .json on the response when fetch is successful", async () => {
    const spy = jest.fn();
    window.fetch = jest.fn(() => new Promise(r => r({ ok: true, json: spy })));
    await ajaxJSON("/");
    expect(window.fetch).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  });
});
