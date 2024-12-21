import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const LeftSidebar = ({
  className = "flex-none bg-yale-blue",
  emailDates = [],
  onMenuClick = () => {},
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeKey, setActiveKey] = useState(null);

  const navigate = useNavigate();

  const handleMenuClick = (key) => {
    setActiveKey(key);
    onMenuClick(key);
  };

  const renderMenuItems = () => {
    return (
      <>
        {emailDates.map((date) => (
          <Menu.Item
            key={date}
            className={`bg-yale-blue ${
              activeKey === date ? "ant-menu-item-selected" : ""
            }`}
            icon={<CalendarMonthIcon style={{ color: "white" }} />}
            onClick={() => handleMenuClick(date)}
          >
            <div className="flex items-center justify-between">
              <span>{date}</span>
            </div>
          </Menu.Item>
        ))}
      </>
    );
  };

  return (
    <Sider
      collapsible
      breakpoint="md"
      className={className}
      onCollapse={(value) => setCollapsed(value)}
      width={150}
      style={{ position: "sticky", top: 0, zIndex: 10, height: "100vh" }}
    >
      <div className="flex items-center justify-center h-14 ">
        <h1 className="text-white font-bold text-lg">POC</h1>
      </div>
      <div
        className="flex items-center justify-center h-14 "
        style={{ backgroundColor: "GrayText" }}
      >
        <button className="text-black font-bold text-lg" disabled={true}>
          DATES
        </button>
      </div>

      <Menu
        mode="inline"
        className="bg-black h-screen"
        selectedKeys={[activeKey]}
        style={{ color: "white", flexGrow: 1 }}
      >
        {renderMenuItems()}
      </Menu>

      <div
        style={{
          position: "absolute",
          bottom: 100,
          width: "100%",
          padding: "0 16px",
        }}
      ></div>
    </Sider>
  );
};

export default LeftSidebar;
