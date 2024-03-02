import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./slices/tabSlice";
import userReducer from "./slices/userSlice";
import menuReducer from "./slices/menuSlice"

const store = configureStore({
  reducer: {
    menu: menuReducer,
    tab: tabReducer,
    user: userReducer,
  },
});

export default store;
