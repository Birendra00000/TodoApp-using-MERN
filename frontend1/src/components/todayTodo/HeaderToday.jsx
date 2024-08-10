import React from "react";
import { TbCalendarTime } from "react-icons/tb";
import AddTask from "./AddTask";

const HeaderToday = () => {
  const today = new Date();

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get day and month
  const day = today.getDate(); // Changed to getDate() to show the correct day of the month
  const month = monthNames[today.getMonth()];

  return (
    <>
      <div className="w-full mt-4 md:mt-6 lg:mt-8 flex justify-center">
        <div className="flex justify-between items-center w-[90%] md:w-[85%] lg:w-[80%]">
          <div className="flex gap-2 items-center">
            <TbCalendarTime size={24} className="text-gray-500" />
            <p className="mb-0 text-red-400 font-semibold text-[18px] md:text-xl lg:text-2xl">
              TO-DO
            </p>
          </div>
          <AddTask />
        </div>
      </div>
      <div className="w-full flex justify-center mt-2 md:mt-4 lg:mt-6">
        <div className="flex items-center w-[90%] md:w-[85%] lg:w-[80%] gap-4 md:gap-6">
          <p className="mb-0 text-sm md:text-base lg:text-lg">
            {day} {month}
          </p>
          <div className="flex justify-center items-center gap-2">
            <span className="w-[6px] h-[6px] bg-gray-500 rounded-full"></span>
            <p className="mb-0 text-xs md:text-sm lg:text-base text-gray-500">
              Today
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderToday;
