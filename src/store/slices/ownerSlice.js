import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  key: "Overview",
  content: {
    first: "Content in first owner",
    second: "",
    third: "",
  },
};

const ownerSlice = createSlice({
  name: "owner",
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

export const ownerActions = ownerSlice.actions;

export default ownerSlice.reducer;
