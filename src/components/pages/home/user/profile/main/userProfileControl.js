import React from "react";
import { Provider } from "react-redux";
import { UserProfileHome } from "./userProfileHome";
import store from "../../../../../../store";

export const UserProfileControl = () => {
  return (
    <Provider store={store}>
      <UserProfileHome />
    </Provider>
  );
};
