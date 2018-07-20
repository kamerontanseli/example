import { isResponseValid } from "../finder";

describe("isResponseValid", () => {
  it("should return true if status is 1 and ingredients arent empty", () => {
    expect(
      isResponseValid({
        status: 1,
        product: {
          ingredients: [{}, {}]
        }
      })
    ).toBe(true);
  });
  it("should return false if status is 0 and ingredients are empty", () => {
    expect(
      isResponseValid({
        status: 0,
        product: {
          ingredients: []
        }
      })
    ).toBe(false);
  });
});
