import React, { useState, useEffect } from "react";
import LeftSidebar from "../FirstSidebar/FirstSidebar";
import RightSidebar from "../SecondSidebar/SecondSidebar";
import axios from "axios";
import EmailSection from "../../pages/EmailApproval/EmailApproval"; // Import the EmailSection component

const apiUrl = "/get_emails?per_page=5";

async function getEmails() {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response?.data?.data || [];
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
}

const Sidebar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [groupedEmails, setGroupedEmails] = useState({});
  const [emailDates, setEmailDates] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null); // Store the selected email

  useEffect(() => {
    const fetchEmails = async () => {
      const emails = await getEmails();

      const grouped = emails.reduce((acc, email) => {
        const date = new Date(email.created_at).toLocaleDateString();
        if (!acc[date]) acc[date] = [];
        acc[date].push(email);
        return acc;
      }, {});

      const dates = Object.keys(grouped);

      setGroupedEmails(grouped);
      setEmailDates(dates);
    };

    fetchEmails();
  }, []);

  const handleLeftSidebarClick = (menuKey) => {
    setSelectedMenuItem(menuKey);
    setIsRightSidebarOpen(true);
  };

  const handleRightSidebarClick = (emailId) => {
    const email = groupedEmails[selectedMenuItem].find(
      (email) => email.id === emailId
    );
    console.log("🚀 ~ handleRightSidebarClick ~ email:", email);
    setSelectedEmail(email);
  };

  const handleCloseRightSidebar = () => {
    setIsRightSidebarOpen(false);
    setSelectedMenuItem(null);

    setSelectedEmail(null);
  };

  return (
    <div className="flex ">
      <LeftSidebar
        onMenuClick={handleLeftSidebarClick}
        emailDates={emailDates}
      />

      {isRightSidebarOpen && (
        <RightSidebar
          emails={groupedEmails[selectedMenuItem] || []}
          onEmailClick={handleRightSidebarClick}
          onClose={handleCloseRightSidebar}
        />
      )}

      {selectedEmail && <EmailSection selectedEmail={selectedEmail} />}
    </div>
  );
};

export default Sidebar;
