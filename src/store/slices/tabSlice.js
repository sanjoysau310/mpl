import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  key: "Overview",
  content: {
    first: "Content in first tab",
    second: "",
    third: "",
  },
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.key = String(action.payload);
    },
    editProfile: (state, action) => {
      state.key = "Overview";
      state.content = {
        ...state.content,
        second: action.payload,
      };
    },
    registerMPL2k24: (state, action) => {
      state.key = "Overview";
      state.content = {
        ...state.content,
        third: action.payload,
      };
    },
  },
});

export const tabActions = tabSlice.actions;

export default tabSlice.reducer;
