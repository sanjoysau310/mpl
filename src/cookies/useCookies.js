import Cookies from "js-cookie";
import { useState } from "react";

export const useCookies = () => {
  const [cookies, setCookies] = useState("");

  // Method to set data in cookies which will expire in 1min
  const setCookie = (value) => {
    Cookies.set("currentUser", value, {
      expires: 1 / (24 * 60 * 60),
    });
    console.log("hi");
    setCookies(value);
  };
  // Method to get data from cookies
  const getCookie = () => {
    const value = Cookies.get("currentUser");
    //setCookies(value);
    return value;
    //alert(Cookies.get("token"));
  };

  // Method to remove data from cookies
  const removeCookie = () => {
    Cookies.remove("currentUser");
    setCookies("");
  };

  return { cookies, setCookie, getCookie, removeCookie };
};
