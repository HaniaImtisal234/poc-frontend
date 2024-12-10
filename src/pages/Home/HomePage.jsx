import React from "react";

import { MenuItems } from "../../constants/index.js";
import { Layout } from "antd";

import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Header from "../../components/Header/Header.jsx";
import AppFooter from "../../components/Footer/Footer.jsx";

const { Content } = Layout;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="" id="custom-dashboard">
      <Layout className="min-h-[100vh]">
        <Sidebar
          className="bg-yale-blue sticky top-0 z-10"
          menuItems={MenuItems}
        />

        <Layout>
          <Header />
          <Content className="mx-4 my-2 ">
            <h1>hello</h1>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    </div>
  );
};

export default HomePage;
