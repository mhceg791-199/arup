import React from "react";
import { DrawerPlacement } from "./components/shared/navbar/drawer";
import Footer from "./components/shared/footer/footer";

function Layout({ children }) {
  return (
    <>
      <DrawerPlacement />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
