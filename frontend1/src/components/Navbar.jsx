import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import TodoContext from "../Context/TodoContext";
import { RxHamburgerMenu } from "react-icons/rx";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const TodoItems = useContext(TodoContext);

  const [showCalendar, setShowCalendar] = useState(false);

  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const [value, onChange] = useState(new Date());
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterData = TodoItems.filter((item) =>
    item.todoTitle.toLowerCase().includes(search.toLowerCase())
  );
  const [showNavBar, setShowNavBar] = useState(false);
  const [closeNavbar, setCloseNavbar] = useState(true);

  const handleMobileResponsivnese = () => {
    setShowNavBar(!showNavBar);
    setCloseNavbar(!closeNavbar);
  };

  return (
    <>
      <div
        className="w-full flex justify-center bg-[#f4f4dd] text-white h-20 items-center
    shadow-md relative"
      >
        {/* fixed top-0 left-0  */}
        <div
          className="  w-[90%] h-full relative grid grid-cols-3 justify-between  items-center 
    "
        >
          <div className="grid grid-cols-3 justify-between  items-center w-full md:col-span-1  lg:col-span-1 col-span-3 relative">
            {" "}
            <Link
              to="/"
              className=" no-underline col-span-2 md:col-span-1 lg:col-span-1"
            >
              <div className="flex text-black mb-0 ">
                <h5 className="text-[24px] font-semibold mb-0">To-</h5>
                <h5 className="text-red-400  text-[24px] font-semibold mb-0">
                  Do
                </h5>
              </div>
            </Link>{" "}
            <span
              className="text-black  lg:hidden md:hidden flex justify-end col-span-1"
              onClick={handleMobileResponsivnese}
            >
              <RxHamburgerMenu size={24} />
            </span>
          </div>
          <div
            className={`md:grid md:grid-cols-2 md:col-span-2  p-2 w-auto 
           md:p-0 lg:p-0  ${
             showNavBar
               ? "show bg-[#f4f4dd]  w-full col-span-3 right-[-20px] absolute shadow-lg top-0 h-[100vh] flex flex-col gap-5"
               : "hidden"
           }`}
          >
            <span
              className="text-black  lg:hidden md:hidden flex justify-start "
              onClick={handleMobileResponsivnese}
            >
              <RxCross1 />
            </span>
            <div className="flex justify-start items-center">
              <input
                type="search"
                name=""
                id=""
                value={search}
                onChange={handleSearch}
                className="w-[230px]  md:w-[400px] lg:w-[400px] p-[6px] outline-none text-black"
              />
              <button className="bg-red-400 px-[6px] py-[6px] rounded-sm">
                <CiSearch className=" size-6 text-white" />
              </button>
            </div>
            <div className="flex  items-center justify-around flex-col md:flex-row lg:flex-row gap-5">
              <button className="bg-red-400 p-1 rounded-xl">
                <HiOutlineBellAlert className="size-6 text-white" />{" "}
              </button>
              <div
                className="bg-red-400 p-1 rounded-xl cursor-pointer relative"
                onClick={handleShowCalendar}
              >
                <LuCalendarDays className=" size-6 text-white" />
              </div>
              <span className="text-gray-500 font-medium">
                {" "}
                {value.toDateString()}
              </span>{" "}
            </div>
          </div>
        </div>{" "}
      </div>
      {search && (
        <div className="mt-1 p-1 w-full flex justify-center absolute">
          <span className="bg-white w-[450px] shadow-md rounded-md">
            {filterData.length > 0 ? (
              <ul>
                {filterData.map((item) => (
                  <li key={item.id} className="py-1">
                    {item.todoTitle}
                  </li>
                ))}
              </ul>
            ) : (
              <span className="w-full flex justify-center">
                {" "}
                <p className="text-gray-700">No results found for "{search}"</p>
              </span>
            )}
          </span>
        </div>
      )}
      {showCalendar && (
        <Calendar
          onChange={onChange}
          value={value}
          className="absolute right-20 top-24"
        />
      )}
    </>
  );
};

export default Navbar;
