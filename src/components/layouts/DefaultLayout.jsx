import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const DefaultLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main mt-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
