import { combineReducers } from "redux";
import foodReducer from './food'
import finderReducer from './finder'

export default combineReducers({
  food: foodReducer,
  finder: finderReducer
});
