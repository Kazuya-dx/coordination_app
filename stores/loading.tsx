import { createSlice } from "@reduxjs/toolkit";

interface State {
  tops: boolean;
  pants: boolean;
  outer: boolean;
  model: boolean;
}

// Stateの初期状態
const initialState: State = {
  tops: false,
  pants: false,
  outer: false,
  model: false,
};

// Sliceを生成する
const loadingSlice = createSlice({
  name: "tops",
  initialState,
  reducers: {
    setTopsLoading: (state, action) => {
      return Object.assign({}, state, {
        tops: true,
        pants: state.pants,
        outer: state.outer,
        model: state.model,
      });
    },
    setPantsLoading: (state, action) => {
      return Object.assign({}, state, {
        tops: state.tops,
        pants: true,
        outer: state.outer,
        model: state.model,
      });
    },
    setOuterLoading: (state, action) => {
      return Object.assign({}, state, {
        tops: state.tops,
        pants: state.pants,
        outer: true,
        model: state.model,
      });
    },
    setModelLoading: (state, action) => {
      return Object.assign({}, state, {
        tops: state.tops,
        pants: state.pants,
        outer: state.outer,
        model: true,
      });
    },
    clearTopsLoading: (state, action) => {
      return Object.assign({}, state, {
        tops: false,
        pants: state.pants,
        outer: state.outer,
        model: state.model,
      });
    },
    clearPantsLoading: (state, action) => {
      return Object.assign({}, state, {
        tops: state.tops,
        pants: false,
        outer: state.outer,
        model: state.model,
      });
    },
    clearOuterLoading: (state, action) => {
      return Object.assign({}, state, {
        tops: state.tops,
        pants: state.pants,
        outer: false,
        model: state.model,
      });
    },
    clearModelLoading: (state, action) => {
      return Object.assign({}, state, {
        tops: state.tops,
        pants: state.pants,
        outer: state.outer,
        model: false,
      });
    },
    clearLoading: (state) => {
      return Object.assign({}, state, {
        tops: false,
        pants: false,
        outer: false,
        model: false,
      });
    },
    // etc...
  },
});

// Reducerをエクスポートする
export default loadingSlice.reducer;

// Action Creatorsをエクスポートする
export const {
  setTopsLoading,
  setPantsLoading,
  setOuterLoading,
  setModelLoading,
  clearTopsLoading,
  clearPantsLoading,
  clearOuterLoading,
  clearModelLoading,
  clearLoading,
} = loadingSlice.actions;
