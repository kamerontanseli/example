import foodReducer, {
  BARCODE_FOOD_ADD_FOOD,
  INITIAL_STATE,
  barcodeFoodAddFood
} from "../food";

describe("barcodeFoodAddFood", () => {
  it("should return with type BARCODE_FOOD_ADD_FOOD and a payload with food", () => {
    expect(barcodeFoodAddFood({ test: 123 })).toEqual({
      type: BARCODE_FOOD_ADD_FOOD,
      payload: {
        food: { test: 123 }
      }
    });
  });
});

describe("foodReducer", () => {
  it("should merge payload.food into food when BARCODE_FOOD_ADD_FOOD", () => {
    const state = { "009": { value: true } };
    const data = {
      code: "123",
      value: true
    };
    expect(
      foodReducer(state, {
        type: BARCODE_FOOD_ADD_FOOD,
        payload: {
          food: data
        }
      })
    ).toEqual({
      ...state,
      "123": data
    });
  });
  it("should return with INITIAL_STATE by default", () => {
    expect(foodReducer()).toEqual(INITIAL_STATE);
  });
});
