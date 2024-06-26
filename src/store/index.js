import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./slices/tabSlice";
import userReducer from "./slices/userSlice";
import menuReducer from "./slices/menuSlice";
import playerTabReducer from "./slices/playerTabSlice";
import imageReducer from "./slices/imageSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    tab: tabReducer,
    playerTab: playerTabReducer,
    user: userReducer,
    image: imageReducer,
  },
});

export default store;
