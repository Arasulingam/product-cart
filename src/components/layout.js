import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import CartTab from "./cartTab";
import { useSelector } from "react-redux";
import "../css/layout.css";

const Layout = () => {
  const statusTabCart = useSelector((store) => store.cart.statusTab);

  return (
    <div className="layout-container">
      <main className={`main-content ${statusTabCart ? "shifted" : ""}`}>
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;
