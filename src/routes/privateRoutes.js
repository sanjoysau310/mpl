import React from "react";
import { RootLayout } from "../components/layouts/layout";
import LandingPage from "../components/pages/landing/landingPage";
import { Contact } from "../components/pages/contact/contact";
import { Navigate, Outlet } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import { useCookies } from "../cookies/useCookies";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoutes = () => {
  const auth = useAuth();

  return auth.isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};
