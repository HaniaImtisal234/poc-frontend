import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HOME_PAGE, LOGIN, USERS } from "../../src/constants/Routes";
import HomePage from "../pages/Home/HomePage";
import Login from "../pages/Login/Login";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_PAGE} element={<HomePage />} />
          <Route path={LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
