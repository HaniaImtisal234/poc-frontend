import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  DOMAIN_PAGE,
  HOME_PAGE,
  LANDING_PAGE,
  LOGIN,
  USERS,
} from "../../src/constants/Routes";
import HomePage from "../pages/Home/HomePage";
import Login from "../pages/Login/Login";
import LandingPage from "../pages/Landing Page/LandingPage";
import Domains from "../pages/Domains/Domains";
import Users from "../pages/Users/Users";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_PAGE} element={<HomePage />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={LANDING_PAGE} element={<LandingPage />} />
          <Route path={USERS} element={<Users />} />
          <Route path={DOMAIN_PAGE} element={<Domains />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
