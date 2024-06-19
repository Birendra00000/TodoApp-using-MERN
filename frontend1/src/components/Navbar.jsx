import React from "react";
import CreateModal from "./createModal";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div
      className="grid grid-cols-3 justify-between bg-blue-300 text-white h-20 items-center
    w-full fixed top-0 left-0
    "
    >
      {" "}
      <Link to="/" className="ml-[4%] text-xl no-underline">
        <div className="flex text-black">
          <h5>To-</h5>
          <h5 className="text-red-400">Do</h5>
        </div>
      </Link>
      <div className="flex justify-start items-center">
        <div>
          <input type="search" name="" id="" className="w-[400px] p-[6px]" />
          <button className="bg-red-400 p-1 rounded-xl">
            <CiSearch className=" size-6 text-white" />
          </button>
        </div>{" "}
      </div>
      <div className="flex  items-center justify-center gap-4">
        <button className="bg-red-400 p-1 rounded-xl">
          <HiOutlineBellAlert className="size-6 text-white" />{" "}
        </button>
        <div className="bg-red-400 p-1 rounded-xl">
          <LuCalendarDays className=" size-6 text-white" />
        </div>
      </div>
      {/* <CreateModal />
        <Link to="/" className="no-underline">
          {" "}
          <div>Todos</div>
        </Link>
        <Link to="register" className="no-underline">
          {" "}
          <div>Register</div>
        </Link>
        <Link to="login" className="no-underline">
          {" "}
          <div>Login</div>
        </Link> */}
    </div>
  );
};

export default Navbar;
