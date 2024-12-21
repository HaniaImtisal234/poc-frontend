import React, { useState } from "react";
import { Layout, Menu } from "antd";
import EmailIcon from "@mui/icons-material/Email";

const { Sider } = Layout;
const RightSidebar = ({
  className = "bg-yale-blue",
  emails,
  onEmailClick,
  onNext,
  onFilterChange,
}) => {
  const [filter, setFilter] = useState("processed");

  const handleFilterClick = (status) => {
    setFilter(status);
    onFilterChange(status);
  };
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      onCollapse={(value) => setCollapsed(value)}
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
        className="flex items-center justify-center h-14"
        style={{ backgroundColor: "#2a2a2a" }}
      ></div>
      <div
        className="flex items-center justify-center h-14"
        style={{ backgroundColor: "GrayText", border: "1px solid black" }}
      >
        <h1 className="text-black font-bold text-lg">Email</h1>
      </div>
      <div
        className="flex justify-center h-14"
        style={{ backgroundColor: "GrayText" }}
      >
        {collapsed ? (
          <></>
        ) : (
          ["processed", " ", "pending"].map((type) =>
            type === " " ? (
              <div
                style={{
                  width: "1px",
                  backgroundColor: "black",
                  marginRight: "40px",
                  marginLeft: "40px",
                }}
              ></div>
            ) : (
              <button
                className="text-black font-bold text-lg"
                key={type}
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  // border: "1px solid white",
                  borderBottom: filter === type ? "2px solid #3a3a3a" : "none",
                  // borderRadius: "4px",
                  // padding: "8px 16px",
                  cursor: "pointer",
                }}
                onClick={() => handleFilterClick(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            )
          )
        )}
      </div>

      <div
        className="text-white p-2"
        style={{
          backgroundColor: "#2a2a2a",
          maxHeight: "calc(100vh - 160px)",
          overflowY: "auto",
        }}
      >
        {emails.length > 0 ? (
          <Menu mode="inline" style={{ backgroundColor: "#2a2a2a" }}>
            {emails.map((email) => (
              <Menu.Item
                key={email.id}
                onClick={() => onEmailClick(email.id)}
                style={{ color: "white" }}
                icon={<EmailIcon style={{ color: "white" }} />}
              >
                {email.subject}
              </Menu.Item>
            ))}
          </Menu>
        ) : (
          <p>No emails available for this filter.</p>
        )}

        <div className="pl-44">
          <button
            style={{
              backgroundColor: "#3a3a3a",
              color: "white",
              border: "1px solid white",
              width: "100px",
              paddingleft: "40px",
              borderRadius: "4px",
              padding: "6px 12px",
              cursor: "pointer",
            }}
            onClick={onNext}
          >
            Load more
          </button>
        </div>
      </div>
    </Sider>
  );
};

export default RightSidebar;
