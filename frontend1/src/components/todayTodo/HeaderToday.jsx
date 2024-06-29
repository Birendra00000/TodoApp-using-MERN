import React from "react";
import { TbCalendarTime } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
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
  
    //Toget day and month
    const day = today.getDay() + 1;
    const month = monthNames[today.getMonth()];
    console.log("dayd", today);
    

  return (
    <>
      {" "}
      <div className="w-full mt-[3%] flex justify-center">
        <div className="flex justify-between items-center w-[92%]">
          <div className="flex gap-1 items-center">
            <TbCalendarTime size={25} className="text-gray-500" />
            <p className="mb-0 text-red-400 font-semibold">TO-DO</p>
          </div>
          <div>
            <button className="flex gap-1 items-center p-1 ">
              <FaPlus className="text-red-400" />
              <p className="mb-0 text-gray-500">Add Task</p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex items-center w-[92%] gap-3">
          <p className="mb-0">
            {day}
            {"   "}
            {month}
          </p>
          <div className="flex justify-center items-center gap-1">
            <span className="w-[6px] h-[6px] bg-gray-500 rounded-full "></span>{" "}
            <p className="mb-0 text-sm text-gray-500">Today</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderToday;
