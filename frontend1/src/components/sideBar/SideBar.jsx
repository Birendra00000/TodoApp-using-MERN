import React from "react";
import { MdDashboard } from "react-icons/md";
import UserProfile from "../userProfile/UserProfile";
import { FaExclamation } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { IoHelp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className=" flex  justify-start z-[-10] mt-[22%]">
      <div className="bg-[#f97878]  w-[350px] rounded-md h-[600px]">
        <div>
          <UserProfile />
          <div className="flex flex-col gap-2 ml-[6%]  text-white">
            <Link to="/" className=" no-underline text-white">
              <div className="  flex gap-2 items-center p-2 hover:text-red-400 hover:bg-white  w-[285px] hover:rounded-md ">
                <MdDashboard />
                <p className="mb-0 font-medium ">DashBoard</p>
              </div>{" "}
            </Link>
            <Link to="/vitaltask" className=" no-underline text-white">
              <div className="flex gap-2 items-center p-2 hover:bg-white hover:text-red-400 w-[285px] hover:rounded-md">
                <FaExclamation />
                <p className="mb-0 font-medium">Vital Task</p>
              </div>{" "}
            </Link>
            <Link to="/usertask" className="no-underline text-white ">
              <div className="flex gap-2 items-center p-2 hover:bg-white hover:text-red-400 w-[285px] hover:rounded-md">
                <FaRegCalendarCheck />
                <p className="mb-0 font-medium">My task</p>
              </div>
            </Link>{" "}
            <div className="flex gap-2 items-center p-2 hover:bg-white hover:text-red-400 w-[285px] hover:rounded-md">
              <AiOutlineBars />
              <p className="mb-0 font-medium"> Task Categories</p>
            </div>{" "}
            <div className="flex gap-2 items-center p-2 hover:bg-white hover:text-red-400 w-[285px] hover:rounded-md">
              <IoIosSettings />
              <p className="mb-0 font-medium">Settings</p>
            </div>{" "}
            <div className="flex gap-2 items-center p-2 hover:bg-white hover:text-red-400 w-[285px] hover:rounded-md">
              <IoHelp />
              <p className="mb-0 font-medium">Help</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center p-2 hover:bg-white hover:text-red-400 w-[285px] hover:rounded-md">
          <MdLogout />
          <p className="mb-0 font-medium">LogOut</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
