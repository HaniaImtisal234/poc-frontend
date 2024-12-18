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
  const [filter, setFilter] = useState("");

  const handleFilterClick = (status) => {
    setFilter(status);
    onFilterChange(status);
  };

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
        className="flex items-center justify-center h-14"
        style={{ backgroundColor: "#2a2a2a" }}
      >
        <h1 className="text-white font-bold text-lg">Email</h1>
      </div>
      <div className="flex justify-around p-2">
        {["processed", "pending"].map((type) => (
          <button
            key={type}
            style={{
              backgroundColor: filter === type ? "black" : "transparent",
              color: "white",
              border: "1px solid white",
              borderRadius: "4px",
              padding: "8px 16px",
              cursor: "pointer",
            }}
            onClick={() => handleFilterClick(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
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

        <div className="pl-52">
          <button
            style={{
              backgroundColor: "#3a3a3a",
              color: "white",
              border: "1px solid white",
              paddingleft: "40px",
              borderRadius: "4px",
              padding: "8px 16px",
              cursor: "pointer",
            }}
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
    </Sider>
  );
};

export default RightSidebar;
