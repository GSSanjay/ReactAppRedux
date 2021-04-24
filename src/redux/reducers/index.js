import CountReducer from "./CountReducer";
import LoginReducer from "./LoginReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  CountReducer: CountReducer,
  LoginReducer: LoginReducer,
});

export default allReducers;
