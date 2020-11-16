import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// それぞれ slice.reducer を default export している前提
import topsReducer from "./tops";
import pantsReducer from "./pants";
import outerReducer from "./outer";

const reducer = combineReducers({
  tops: topsReducer,
  pants: pantsReducer,
  outer: outerReducer,
});

const store = configureStore({ reducer });

export default store;
