import React from "react";
import TodoToday from "../../components/todayTodo/TodoToday";

const DashBoard = () => {
  return (
    <div className="mt-[6%] w-full h-full">
      <h3>Welcome back, Bibek</h3>
      <div className="w-[95%] flex justify-center items-center border border-gray-500 h-[500px]">
        <div className="grid grid-cols-2 grid-rows-2 gap-3 w-[95%] h-[95%]">
          <div className="shadow-lg row-span-2">
            <TodoToday />
          </div>
          <div className="shadow-lg ">span2</div>
          <div className="shadow-lg ">3</div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
