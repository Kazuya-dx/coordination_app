import { createSlice } from "@reduxjs/toolkit";

interface Item {
  id: string;
  name: string;
  image: any;
}

// Stateの初期状態
const initialState: Item = {
  id: "",
  name: "",
  image: "",
};

// Sliceを生成する
const pantsSlice = createSlice({
  name: "tops",
  initialState,
  reducers: {
    setPants: (state, action) => {
      return Object.assign({}, state, {
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
      });
    },
    clearPants: (state) => {
      return Object.assign({}, state, { id: "", name: "", image: null });
    },
    // etc...
  },
});

// Reducerをエクスポートする
export default pantsSlice.reducer;

// Action Creatorsをエクスポートする
export const { setPants, clearPants } = pantsSlice.actions;
