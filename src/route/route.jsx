import React from "react";
import { lazy, Suspense } from "react";

const Mainside = lazy(() => import("../components/main"));
import { Route, Routes } from "react-router-dom";
import Mainlayout from "../MainLayout";
import Header from "../components/header";
import Cards from "../components/cards";

const RouterComponent = () => {
  return (
    <Suspense fallback={"loading"}>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Cards />} />
          <Route path="/elektronika" element={<Mainside />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouterComponent;
