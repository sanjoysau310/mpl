import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    uid: null,
    name: null,
    email: null,
    accessToken: null,
    accessType: null,
    fid: null,
  },
  profile: "",
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // actions:
    authUser: (state, action) => {
      state.currentUser.uid = action.payload.uid;
      state.currentUser.email = action.payload.email;
      state.currentUser.accessToken = action.payload.accessToken;
    },
    authAccess: (state, action) => {
      state.currentUser.name = action.payload.name;
      state.currentUser.accessType = action.payload.accessType;
      state.currentUser.fid = action.payload.fid;
    },
    removeUser: (state) => {
      state.currentUser.uid = null;
      state.currentUser.name = null;
      state.currentUser.email = null;
      state.currentUser.accessToken = null;
      state.currentUser.accessType = null;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { authUser, authAccess, removeUser, setProfile, setLoading } =
  userSlice.actions;
//export const userActions = userSlice.actions;
export default userSlice.reducer;
