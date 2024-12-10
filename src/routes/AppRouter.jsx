import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HOME_PAGE } from "../../src/constants/Routes";
import HomePage from "../pages/Home/HomePage";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_PAGE} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
