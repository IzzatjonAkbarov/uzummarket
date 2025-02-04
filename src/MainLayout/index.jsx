import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Mainlayout = () => {
  return (
    <>
      <Header />
      <div className="container1">
        <Outlet />
      </div>
      <br />
      <Footer />
    </>
  );
};

export default Mainlayout;
