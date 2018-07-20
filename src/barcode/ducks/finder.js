import { isResponseValid } from '../utils/finder'
import { getBarcode } from "../api/barcode";
import { barcodeFoodAddFood } from "./food";

export const BARCODE_FINDER_REQUEST = "BARCODE_FINDER_REQUEST";
export const BARCODE_FINDER_RECEIVE = "BARCODE_FINDER_RECEIVE";
export const BARCODE_FINDER_ERROR = "BARCODE_FINDER_ERROR";

export const barcodeFinderRequest = () => ({
  type: BARCODE_FINDER_REQUEST,
  payload: {}
});

export const barcodeFinderReceive = id => ({
  type: BARCODE_FINDER_RECEIVE,
  payload: { id }
});

export const barcodeFinderError = () => ({
  type: BARCODE_FINDER_ERROR,
  payload: {}
});

export const fetchBarcode = id => {
  return async (dispatch, getState) => {
    if (id in getState().barcode.food) {
      dispatch(barcodeFinderReceive(id));
    } else {
      try {
        dispatch(barcodeFinderRequest());
        const result = await getBarcode(id);
        if (!isResponseValid(result)) {
          throw new Error("product was not found");
        }
        dispatch(barcodeFoodAddFood(result.product));
        dispatch(barcodeFinderReceive(id));
      } catch (e) {
        dispatch(barcodeFinderError());
      }
    }
  };
};

export const INITIAL_STATE = {
  loading: false,
  error: false,
  barcode: ""
};

const finderReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case BARCODE_FINDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case BARCODE_FINDER_RECEIVE:
      return {
        loading: false,
        error: false,
        barcode: action.payload.id
      };
    case BARCODE_FINDER_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default finderReducer;
