import { getBarcode } from "../barcode";

describe("getBarcode", () => {
  it("should call fetch with a {id}.json", async () => {
    const id = Math.random();
    const fetchSpy = jest.spyOn(window, "fetch").mockImplementation(req => {
      expect(req.url).toContain(`${id}.json`);
      return new Promise(r => r({ ok: true, json() {} }));
    });
    await getBarcode(id);
    expect(fetchSpy).toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
