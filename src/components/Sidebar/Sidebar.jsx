import React, { useState, useEffect } from "react";
import LeftSidebar from "../FirstSidebar/FirstSidebar";
import RightSidebar from "../SecondSidebar/SecondSidebar";
import axios from "axios";

const apiUrl = "/get_emails?per_page=1";

async function getEmails() {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data.data);
    return response?.data?.data;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
}

const Sidebar = ({ menuItems }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isLeftSidebarCollapsed, setIsLeftSidebarCollapsed] = useState(false);
  const [emailDates, setEmailDates] = useState([]); // State to hold created_at dates

  useEffect(() => {
    // Fetch emails and set the created_at dates
    async function fetchEmails() {
      const emails = await getEmails();
      const dates = emails.map((email) => email.created_at); // Extract the created_at field
      setEmailDates(dates); // Set the extracted dates into state
    }

    fetchEmails();
  }, []); // Empty dependency array ensures it runs only once after the component mounts

  const handleLeftSidebarClick = (menuKey) => {
    setSelectedMenuItem(menuKey);
    setIsRightSidebarOpen(true);
    setIsLeftSidebarCollapsed(true);
  };

  const handleCloseRightSidebar = () => {
    setIsRightSidebarOpen(false);
    setSelectedMenuItem(null);
    setIsLeftSidebarCollapsed(false);
  };

  return (
    <div className="flex h-screen">
      <LeftSidebar
        menuItems={menuItems}
        onMenuClick={handleLeftSidebarClick}
        collapsed={isLeftSidebarCollapsed}
        emailDates={emailDates} // Pass the email dates to the LeftSidebar component
      />

      {isRightSidebarOpen && (
        <RightSidebar
          menuKey={selectedMenuItem}
          onClose={handleCloseRightSidebar}
        />
      )}
    </div>
  );
};

export default Sidebar;
