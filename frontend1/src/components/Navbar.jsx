import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import TodoContext from "../Context/TodoContext";

const Navbar = () => {
  const TodoItems = useContext(TodoContext);

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterData = TodoItems.filter((item) =>
    item.todoTitle.toLowerCase().includes(search.toLowerCase())
  );
  console.log("filterData", filterData);
  return (
    <>
      <div
        className="w-full flex justify-center bg-[#f4f4dd] text-white h-20 items-center
    shadow-md relative"
      >
        {/* fixed top-0 left-0  */}
        <div
          className="grid grid-cols-3 justify-between  w-[90%] h-full items-center
    "
        >
          {" "}
          <Link to="/" className=" no-underline">
            <div className="flex text-black mb-0 ">
              <h5 className="text-[24px] font-semibold">To-</h5>
              <h5 className="text-red-400 mb-0 text-[24px] font-semibold">
                Do
              </h5>
            </div>
          </Link>
          <div className="flex justify-start items-center">
            <input
              type="search"
              name=""
              id=""
              value={search}
              onChange={handleSearch}
              className="w-[400px] p-[6px] outline-none text-black"
            />
            <button className="bg-red-400 px-[6px] py-[6px] rounded-sm">
              <CiSearch className=" size-6 text-white" />
            </button>
          </div>
          <div className="flex  items-center justify-center gap-4">
            <button className="bg-red-400 p-1 rounded-xl">
              <HiOutlineBellAlert className="size-6 text-white" />{" "}
            </button>
            <div className="bg-red-400 p-1 rounded-xl">
              <LuCalendarDays className=" size-6 text-white" />
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
    </>
  );
};

export default Navbar;
