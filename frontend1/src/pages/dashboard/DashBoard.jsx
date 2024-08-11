import React, { useEffect } from "react";
import TodoToday from "../../components/todayTodo/TodoToday";
import TodoStatus from "../../components/taskStatus/TodoStatus";
import CompletedTodoCard from "../../components/todayTodo/CompletedTodoCard";
import { useAuth } from "../../Context/AuthContext";

const DashBoard = () => {
  const { userData } = useAuth();

  const userName = userData?.userName || "Guest";

  return (
    <div className="mt-[6%] w-full h-full ">
      <h3 className="">Welcome back, {userName}</h3>
      <div className="w-[95%] flex justify-center items-center border border-gray-500  h-[600px] overflow-auto">
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-3 w-[95%] h-[95%]">
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
