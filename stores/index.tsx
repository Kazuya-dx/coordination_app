import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// それぞれ slice.reducer を default export している前提
import topsReducer from "./tops";
import pantsReducer from "./pants";
import outerReducer from "./outer";
import loadingReducer from "./loading";

const reducer = combineReducers({
  tops: topsReducer,
  pants: pantsReducer,
  outer: outerReducer,
  loading: loadingReducer,
});

const store = configureStore({ reducer });

export default store;
