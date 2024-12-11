import React from "react";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const LeftSidebar = ({
  className = "bg-yale-blue",
  menuItems = [],
  onMenuClick = () => {},
  emailDates = [], // New prop for email created_at dates
}) => {
  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <Menu.Item
        key={item.key}
        title={item.title}
        icon={item.icon}
        className="bg-yale-blue"
      >
        <div className="flex items-center justify-between">
          <span>{item.label}</span>
          {/* Display the created_at date next to the label */}
          {emailDates[index] && (
            <span className="text-xs text-gray-400">
              {new Date(emailDates[index]).toLocaleString()}
            </span>
          )}
        </div>
      </Menu.Item>
    ));
  };

  return (
    <Sider
      collapsible
      breakpoint="md"
      className={className}
      width={300}
      style={{ position: "sticky", top: 0, zIndex: 10 }}
    >
      <div className="flex items-center justify-center bg-yale-blue h-14">
        <h1 className="text-white font-bold text-lg">POC</h1>
      </div>

      <Menu
        mode="inline"
        className="bg-black"
        onClick={({ key }) => onMenuClick(key)}
        style={{ color: "white" }}
      >
        {renderMenuItems(menuItems)}
      </Menu>
    </Sider>
  );
};

export default LeftSidebar;
