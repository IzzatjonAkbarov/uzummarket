import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

const Mainlayout = () => {
  return (
    <>
      <Header />
      <div className="container1">
        <Outlet />
      </div>
    </>
  );
};

export default Mainlayout;
