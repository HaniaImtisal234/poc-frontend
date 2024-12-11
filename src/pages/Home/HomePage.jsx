import React from "react";

import { MenuItems } from "../../constants/index.js";
import { Layout } from "antd";

import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Header from "../../components/Header/Header.jsx";
import AppFooter from "../../components/Footer/Footer.jsx";
import DashboardRouter from "../../routes/DashboardRouter.jsx";
import EmailSection from "../EmailApproval/EmailApproval.jsx";

const { Content } = Layout;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen" id="custom-dashboard">
      <Layout className="">
        <Sidebar className="bg-yale-blue sticky top-0 z-10" />
      </Layout>
    </div>
  );
};

export default HomePage;
