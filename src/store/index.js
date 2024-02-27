import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./slices/tabSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    tab: tabReducer,
    user: userReducer,
  },
});

export default store;
