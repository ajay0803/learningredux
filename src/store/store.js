import { createStore } from "redux";
import { combinedReducers } from "../reducers/combinereduces";

let store = createStore(combinedReducers);
export default store;
