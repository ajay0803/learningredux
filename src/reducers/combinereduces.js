import { combineReducers } from "redux";
import { counter } from "./reducers";
import { isLoggedIn } from "./reducers";

export const combinedReducers = combineReducers({
  count: counter,
  logged: isLoggedIn,
});
