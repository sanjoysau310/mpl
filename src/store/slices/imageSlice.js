import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: "",
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    // actions:
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;
