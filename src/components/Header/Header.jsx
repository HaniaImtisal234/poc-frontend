import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton.jsx";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {};

  return (
    <div className="flex items-center justify-between px-4 py-1 bg-gray-dark sticky top-0 z-10 h-14">
      <>
        <ul className="h-10 xs:hidden md:flex md:items-center md:justify-end  flex-1 gap-2 font-bold  text-white sm:text-xl mx-0 xs:text-sm mx-2 md:text-xl mx-4">
          <li></li>
        </ul>
        <div className="flex item-center justify-end">
          <div>
            <CustomButton
              buttonLabel="Logout"
              className="bg-yale-blue text-white"
              size="middle"
              onClick={handleLogout}
            />
          </div>
          <div className="xs:hidden md:flex items-center gap-1 xs:gap-1 mx-1 ">
            <Avatar
              size={"middle"}
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
