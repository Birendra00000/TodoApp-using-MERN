import React, { useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import UserProfile from "../userProfile/UserProfile";
import { FaExclamation } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { IoHelp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const SideBar = () => {
  const { logOut } = useAuth();

  return (
    <div className=" flex  justify-start z-[-10] mt-[22%] w-full">
      <div className="bg-[#f97878] w-full   lg:w-[350px] rounded-t-md h-[620px] flex flex-col justify-between ">
        <div className="w-full">
          <UserProfile />
          <div className="flex flex-col gap-2 ml-[6%]  text-white">
            <Link to="/" className=" no-underline text-white">
              <div className="  flex gap-2 items-center p-2 hover:text-red-400 hover:bg-white  w-[90%] hover:rounded-md ">
                <MdDashboard />
                <p className="mb-0 font-medium text-[10px] md:text-[16px] lg:text-[16px]">
                  DashBoard
                </p>
              </div>{" "}
            </Link>
            <Link to="/vitaltask" className=" no-underline text-white">
              <div className="flex gap-2 items-center p-2 hover:bg-white hover:text-red-400 w-[90%] hover:rounded-md">
                <FaExclamation />
                <p className="mb-0 font-medium text-[10px] md:text-[16px] lg:text-[16px]">
                  Vital Task
                </p>
              </div>{" "}
            </Link>
            <Link to="/usertask" className="no-underline text-white ">
              <div className="flex gap-2 items-center p-2 hover:bg-white hover:text-red-400 w-[90%] hover:rounded-md">
                <FaRegCalendarCheck />
                <p className="mb-0 font-medium text-[10px] md:text-[16px] lg:text-[16px]">
                  My task
                </p>
              </div>
            </Link>{" "}
            <Link to="/taskcategories" className="no-underline text-white ">
              <div className="flex gap-2 items-center p-2 hover:bg-white hover:text-red-400 w-[90%] hover:rounded-md cursor-pointer">
                <AiOutlineBars />
                <p className="mb-0 font-medium text-[10px] md:text-[16px] lg:text-[16px]">
                  {" "}
                  Task Categories
                </p>
              </div>{" "}
            </Link>
            <div className="flex gap-2 items-center p-2 hover:bg-white hover:text-red-400 w-[90%] hover:rounded-md cursor-pointer">
              <IoIosSettings />
              <p className="mb-0 font-medium text-[10px] md:text-[16px] lg:text-[16px]">
                Settings
              </p>
            </div>{" "}
            <div className="flex gap-2 items-center p-2 hover:bg-white hover:text-red-400 cursor-pointer w-[90%] hover:rounded-md">
              <IoHelp />
              <p className="mb-0 font-medium text-[10px] md:text-[16px] lg:text-[16px]">
                Help
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex gap-2 items-center p-2 hover:rounded-md w-[90%] hover:bg-gray-400 cursor-pointer text-white  ml-[6%] mb-4"
          onClick={logOut}
        >
          <MdLogout />
          <p className="mb-0 font-medium text-[10px] md:text-[16px] lg:text-[16px]">
            LogOut
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
