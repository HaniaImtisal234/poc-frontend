import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { DOMAIN_PAGE, HOME_PAGE, USERS } from "../../constants/Routes.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");

    toast.success("Logged Out successfully!");

    navigate("/login");
  };

  return location?.pathname?.includes("login") ||
    location?.pathname?.includes("forget-password-form") ||
    location?.pathname?.includes("ForgetPassword") ? null : (
    <div className="flex items-center justify-between px-4 py-1 bg-gray-dark sticky top-0 z-10 h-16">
      <>
        <div className="flex items-center gap-8">
          <h1 class="font-bold text-2xl text-gray-800">POC</h1>

          <ul className="h-10 xs:hidden md:flex md:items-center md:justify-start flex-1 gap-2 font-bold text-black sm:text-xl xs:text-sm md:text-xl">
            <li
              onClick={() => navigate(USERS)}
              className="cursor-pointer bg-gray-100 hover:bg-gray-200 hover:text-blue-500 px-4 py-2 rounded transition-colors"
            >
              Users
            </li>
            <li
              onClick={() => navigate(DOMAIN_PAGE)}
              className="cursor-pointer bg-gray-100 hover:bg-gray-200 hover:text-blue-500 px-4 py-2 rounded transition-colors"
            >
              Domains
            </li>
            <li
              onClick={() => navigate(HOME_PAGE)}
              className="cursor-pointer bg-gray-100 hover:bg-gray-200 hover:text-blue-500 px-4 py-2 rounded transition-colors"
            >
              Emails
            </li>
          </ul>
        </div>
        <div className="flex item-center justify-end">
          <div className="pr-4"></div>
          <div>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "black",
                borderRadius: 6,
                height: "36px",
                paddingRight: "8px",
                paddingLeft: "10px",
                paddingTop: "5px",
                paddingBottom: "5px",
                color: "white",
              }}
            >
              <LogoutIcon style={{ color: "white", fontSize: 24 }} />
            </button>
          </div>
          <div className="xs:hidden md:flex items-center gap-1 xs:gap-1 mx-2 ">
            <Avatar
              size={"large"}
              icon={<UserOutlined />}
              className="cursor-pointer"
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default Header;
