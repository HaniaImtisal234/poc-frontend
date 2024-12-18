import React, { useState, useEffect } from "react";
import LeftSidebar from "../FirstSidebar/FirstSidebar";
import RightSidebar from "../SecondSidebar/SecondSidebar";
import axios from "axios";
import EmailSection from "../../pages/EmailApproval/EmailApproval";

const apiUrl = "/get_emails?date=";
const dateApiUrl = "/get_email_dates";
async function getEmails(date, page = 1, status = "") {
  try {
    const response = await axios.get(
      `${apiUrl}${date}&page=${page}&status=${status}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response?.data?.data || [];
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
}

const Sidebar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Users");
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [groupedEmails, setGroupedEmails] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [dates, setDates] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("processed");

  useEffect(() => {
    const getEmailDates = async () => {
      try {
        const response = await axios.get(dateApiUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setDates(response?.data?.email_dates || []);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    getEmailDates();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      fetchEmails(selectedDate, 1, status);
    }
  }, [selectedDate, status]);

  const fetchEmails = async (date, currentPage, status) => {
    const emails = await getEmails(date, currentPage, status);
    setGroupedEmails((prevEmails) =>
      currentPage === 1 ? emails : [...prevEmails, ...emails]
    );
    setPage(currentPage);
  };

  const handleLeftSidebarClick = (menuKey) => {
    setSelectedMenuItem(menuKey);
    setSelectedDate(menuKey);
    setIsRightSidebarOpen(true);
    setGroupedEmails([]);
  };

  const handleNextPage = () => {
    fetchEmails(selectedDate, page + 1, status);
  };

  const handleRightSidebarClick = (emailId) => {
    const email = groupedEmails.find((email) => email.id === emailId);
    if (email) {
      setSelectedEmail(email);
    } else {
      console.error("Email not found for the given ID");
    }
  };

  const handleCloseRightSidebar = () => {
    setIsRightSidebarOpen(false);
    setSelectedMenuItem(null);
    setSelectedEmail(null);
  };

  const handleFilterChange = (newStatus) => {
    setStatus(newStatus);
    setPage(1);
    setGroupedEmails([]);
  };

  return (
    <div className="flex">
      <LeftSidebar onMenuClick={handleLeftSidebarClick} emailDates={dates} />

      {isRightSidebarOpen &&
        selectedMenuItem !== "Domains" &&
        selectedMenuItem !== "Users" && (
          <RightSidebar
            emails={groupedEmails}
            onEmailClick={handleRightSidebarClick}
            onClose={handleCloseRightSidebar}
            onNext={handleNextPage}
            onFilterChange={handleFilterChange}
          />
        )}

      {selectedEmail && <EmailSection selectedEmail={selectedEmail} />}
    </div>
  );
};

export default Sidebar;
