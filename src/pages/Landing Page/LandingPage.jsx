import React from "react";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import AppFooter from "../../components/Footer/Footer.jsx";

const { Content } = Layout;

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="" id="custom-dashboard">
      <Layout>
        <Header />
        <Content className="h-screen"></Content>
        <AppFooter />
      </Layout>
    </div>
  );
};

export default LandingPage;
