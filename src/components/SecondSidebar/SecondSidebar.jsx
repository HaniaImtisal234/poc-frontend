import React from "react";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const RightSidebar = ({ className = "bg-yale-blue", menuKey, onClose }) => {
  const fetchEmailTitles = (menuKey) => {
    return [
      { id: 1, title: `Email 1 for ${menuKey}` },
      { id: 2, title: `Email 2 for ${menuKey}` },
      { id: 3, title: `Email 3 for ${menuKey}` },
    ];
  };

  const emailTitles = fetchEmailTitles(menuKey);
  const handleEmailClick = (emailId) => {
    console.log(`Selected email ID: ${emailId}`);
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
        <h1 className="text-white font-bold text-lg">Email</h1>
      </div>

      <div className="bg-black text-white ">
        {emailTitles.length > 0 ? (
          <Menu
            mode="inline"
            className="bg-black text-white"
            style={{ width: "100%" }}
          >
            {emailTitles.map((email) => (
              <Menu.Item
                key={email.id}
                icon={email.icon}
                className="bg-black text-white hover:bg-gray-400"
                onClick={() => handleEmailClick(email.id)}
                style={{ color: "white" }}
              >
                {email.title}
              </Menu.Item>
            ))}
          </Menu>
        ) : (
          <p>No emails available.</p>
        )}
      </div>
    </Sider>
  );
};

export default RightSidebar;
