import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  DOMAIN_PAGE,
  FORGET_PASSWORD,
  FORGET_PASSWORD_FORM,
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
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import ForgetPasswordForm from "../pages/ForgetPasswordForm/ForgetPasswordForm";
import PrivateRoute from "./helper";
import Header from "../components/Header/Header";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={LOGIN} element={<Login />} />
          <Route path={FORGET_PASSWORD_FORM} element={<ForgetPasswordForm />} />
          <Route path={FORGET_PASSWORD} element={<ForgetPassword />} />
          <Route element={<PrivateRoute />}>
            <Route path={HOME_PAGE} element={<HomePage />} />
            <Route path={LANDING_PAGE} element={<LandingPage />} />
            <Route path={USERS} element={<Users />} />
            <Route path={DOMAIN_PAGE} element={<Domains />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
