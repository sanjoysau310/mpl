import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  key: "Overview",
  content: {
    first: "Content in first auth",
    second: "",
    third: "",
  },
};

const authSlice = createSlice({
  name: "auth",
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

export const authActions = authSlice.actions;

export default authSlice.reducer;
