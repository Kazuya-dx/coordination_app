import { createSlice } from "@reduxjs/toolkit";

interface Item {
  id: string;
  name: string;
  image: any;
  width: number;
}

// Stateの初期状態
const initialState: Item = {
  id: "",
  name: "",
  image: "",
  width: 210,
};

// Sliceを生成する
const outerSlice = createSlice({
  name: "tops",
  initialState,
  reducers: {
    setOuter: (state, action) => {
      return Object.assign({}, state, {
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        width: action.payload.width,
      });
    },
    clearOuter: (state) => {
      return Object.assign({}, state, {
        id: "",
        name: "",
        image: null,
        width: 0,
      });
    },
    // etc...
  },
});

// Reducerをエクスポートする
export default outerSlice.reducer;

// Action Creatorsをエクスポートする
export const { setOuter, clearOuter } = outerSlice.actions;
