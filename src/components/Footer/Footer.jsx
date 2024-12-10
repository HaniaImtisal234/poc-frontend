import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
const AppFooter = () => {
  return (
    <div>
      <Footer
        style={{ textAlign: "center", maxHeight: "5vh" }}
        className="bg-gray-dark text-white flex items-center justify-center"
      >
        POC ©2023 All Rights Reserved.
      </Footer>
    </div>
  );
};

export default AppFooter;
