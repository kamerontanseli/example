import { combineReducers } from "redux";
import barcodeReducer from "../barcode/ducks";

export default combineReducers({
  barcode: barcodeReducer
});
