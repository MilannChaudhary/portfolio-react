import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      {/* Header */}
      <input type="checkbox" id="darkcircle" />
      <div className="wrapper">
        <label htmlFor="darkcircle">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        {/* <!-- nav bar --> */}
        <Navbar />

        {/* Main Content */}
        <Outlet />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
