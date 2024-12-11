import React from "react";
import { Layout, Menu } from "antd";
import EmailIcon from "@mui/icons-material/Email";
const { Sider } = Layout;

const RightSidebar = ({
  className = "bg-yale-blue",
  emails,
  onEmailClick,
  onClose,
}) => {
  return (
    <Sider
      collapsible
      breakpoint="md"
      className={className}
      width={300}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        height: "100vh",
        backgroundColor: "#2a2a2a",
        borderLeft: "2px solid #3a3a3a",
      }}
    >
      <div
        className="flex items-center justify-center bg-yale-blue h-14"
        style={{ backgroundColor: "#2a2a2a" }}
      >
        <h1 className="text-white font-bold text-lg">Email</h1>
      </div>

      <div className="text-white p-2" style={{ backgroundColor: "#2a2a2a" }}>
        {emails.length > 0 ? (
          <Menu
            mode="inline"
            className="text-white"
            style={{ width: "100%", backgroundColor: "#2a2a2a" }}
          >
            {emails.map((email) => (
              <Menu.Item
                key={email.id}
                className="hover:bg-gray-500"
                onClick={() => onEmailClick(email.id)}
                style={{ color: "white", backgroundColor: "#2a2a2a" }}
                icon={<EmailIcon style={{ color: "white" }} />}
              >
                {email.subject}
              </Menu.Item>
            ))}
          </Menu>
        ) : (
          <p>No emails available for this date.</p>
        )}
      </div>
    </Sider>
  );
};

export default RightSidebar;
