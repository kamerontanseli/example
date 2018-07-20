import rootReducer from "../reducer";

describe("rootReducer", () => {
  it("should be a function", () => {
    expect(typeof rootReducer).toBe("function");
  });
  it("should return features as props", () => {
    expect(Object.keys(rootReducer())).toEqual(["barcode"]);
  });
});
