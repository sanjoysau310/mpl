import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/auth/useAuth";

export const PrivateRoutes = () => {
  const auth = useAuth();
  return auth.isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};
