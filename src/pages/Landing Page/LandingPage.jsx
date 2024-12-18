import React from "react";
import { Layout } from "antd";
import Header from "../../components/Header/Header.jsx";
import AppFooter from "../../components/Footer/Footer.jsx";

const { Content } = Layout;

const LandingPage = () => {
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
