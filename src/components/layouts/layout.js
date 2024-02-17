import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/header";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main id="main" className="main-page">
        <Outlet />
      </main>
    </>
  );
};
