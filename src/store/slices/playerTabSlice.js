import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  key: "Overview",
  content: {
    first: "Content in first tab",
    second: "",
    third: "",
  },
};

const playerTabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.key = String(action.payload);
    },
    editProfile: (state) => {
      state.key = "Overview";
      // state.content = {
      //   ...state.content,
      //   second: action.payload,
      // };
    },
    registerMPL2k24: (state) => {
      state.key = "Overview";
      // state.content = {
      //   ...state.content,
      //   third: action.payload,
      // };
    },
  },
});

export const playerTabActions = playerTabSlice.actions;

export default playerTabSlice.reducer;
