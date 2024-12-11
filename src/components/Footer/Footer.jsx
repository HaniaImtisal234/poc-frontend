import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
const AppFooter = () => {
  return (
    <div>
      <Footer
        style={{ textAlign: "center" }}
        className="bg-gray-dark text-blackflex items-center justify-center"
      >
        POC ©2023 All Rights Reserved.
      </Footer>
    </div>
  );
};

export default AppFooter;
