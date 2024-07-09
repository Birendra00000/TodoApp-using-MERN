import React from "react";
import TodoToday from "../../components/todayTodo/TodoToday";
import TodoStatus from "../../components/taskStatus/TodoStatus";
import CompletedTodoCard from "../../components/todayTodo/CompletedTodoCard";

const DashBoard = () => {
  return (
    <div className="mt-[6%] w-full h-full">
      <h3>Welcome back, Bibek</h3>
      <div className="95%] w-[flex justify-center items-center border border-gray-500 h-[600px]">
        <div className="grid grid-cols-2 grid-rows-2 gap-3 w-[95%] h-[95%]">
          <div className="shadow-lg row-span-2">
            <TodoToday />
          </div>
          <div className="shadow-lg ">
            <TodoStatus />
          </div>
          <div className="shadow-lg ">
            <CompletedTodoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
