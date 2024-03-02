// menuSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapsed: true,
  userMenuOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    collapseMenu: (state) => {
      state.collapsed = !state.collapsed;
    },
    collapseUserMenu: (state) => {
      state.userMenuOpen = !state.userMenuOpen;
    },
  },
});

export const { collapseMenu, collapseUserMenu } = menuSlice.actions;

export default menuSlice.reducer;
