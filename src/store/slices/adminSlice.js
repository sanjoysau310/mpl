import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  key: "Overview",
  content: {
    first: "Content in first admin",
    second: "",
    third: "",
  },
};

const adminSlice = createSlice({
  name: "admin",
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

export const adminActions = adminSlice.actions;

export default adminSlice.reducer;
