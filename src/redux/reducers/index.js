import CountReducer from "./CountReducer";
import LoginReducer from "./LoginReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  Count: CountReducer,
  Login: LoginReducer,
});

export default allReducers;
