import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/header";
import NavbarTest from "./navbar/navbar-test";

export const RootLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <NavbarTest />
      <main id="main" className="main-page">
        <Outlet />
      </main>
    </>
  );
};
