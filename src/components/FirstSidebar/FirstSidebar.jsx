import React, { useState } from "react";
import { Layout, Menu } from "antd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const { Sider } = Layout;

const LeftSidebar = ({
  className = "flex-none bg-yale-blue",
  emailDates = [],
  onMenuClick = () => {},
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const renderMenuItems = () => {
    return emailDates.map((date, index) => (
      <Menu.Item
        key={date}
        className="bg-yale-blue"
        icon={<CalendarMonthIcon style={{ color: "white" }} />}
      >
        <div className="flex items-center justify-between">
          <span>{date}</span>
        </div>
      </Menu.Item>
    ));
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
      <div className="flex items-center justify-center bg-yale-blue h-14">
        <h1 className="text-white font-bold text-lg">POC</h1>
      </div>

      <Menu
        mode="inline"
        className="bg-black h-screen"
        onClick={({ key }) => onMenuClick(key)}
        style={{ color: "white" }}
      >
        {renderMenuItems()}
      </Menu>
    </Sider>
  );
};

export default LeftSidebar;
