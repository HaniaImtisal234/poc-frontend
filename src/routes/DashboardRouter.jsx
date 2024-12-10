import React from "react";
import { Route, Routes } from "react-router-dom";
import { EMAIL_APPROVAL_PAGE } from "../constants/Routes.js";
import EmailSection from "../pages/EmailApproval/EmailApproval.jsx";

const DashboardRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={EMAIL_APPROVAL_PAGE} element={<EmailSection />} />
      </Routes>
    </div>
  );
};

export default DashboardRouter;
