export const BARCODE_FOOD_ADD_FOOD = "BARCODE_FOOD_ADD_FOOD";

export const barcodeFoodAddFood = food => ({
  type: BARCODE_FOOD_ADD_FOOD,
  payload: { food }
});

export const INITIAL_STATE = {};

const foodReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case BARCODE_FOOD_ADD_FOOD:
      return {
        ...state,
        [action.payload.food.code]: action.payload.food
      };
    default:
      return state;
  }
};

export default foodReducer;
