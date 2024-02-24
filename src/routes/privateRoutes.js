import React from "react";
import { RootLayout } from "../components/layouts/layout";
import LandingPage from "../components/pages/landing/landingPage";
import { Contact } from "../components/pages/contact/contact";
import { Navigate, Outlet } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import { useCookies } from "../cookies/useCookies";

const useAuth = () => {
  const firebase = useFirebase();

  const { getCookie } = useCookies();
  const user = firebase.isLoggedIn;
  if (user) {
    return true;
  } else {
    return false;
  }
};

export const PrivateRoutes = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};
