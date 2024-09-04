import axios from "axios";
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import TodoDelete from "../../components/ReausableComponents/delete/TodoDelete";
import UpdateTodo from "../../components/ReausableComponents/update/UpdateTodo";
import TodoStatus from "../../components/ReausableComponents/TodoStatus";
const SearchTodo = () => {
  const { id } = useParams(); // Access the ID from the URL
  const [data, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(
          `https://todo-backend-9bt4.onrender.com/api/todo/${id}`
        );
        setTodo(response.data.data);
      } catch (error) {
        console.error("An error occurred while fetching the todo:", error);
      }
    };

    fetchTodo();
  }, [id]);

  return (
    <>
      {data && (
        <div className="w-full flex justify-center h-full items-center mt-[6%]">
          <div className="w-[70%] h-[90%] flex flex-col gap-[5%] ">
            <div className="flex flex-col   md:flex-row md:gap-2 lg:gap-3 items-center ">
              <span className="">
                <img
                  src={data.todoImage}
                  alt="abc"
                  className="h-[180px] w-[180px] rounded-md"
                />
              </span>
              <div className=" flex flex-col gap-3  ">
                <span>
                  <p className="mb-0 font-bold text-[12px] md:text-[16px]">
                    {data.todoTitle}
                  </p>
                </span>
                <span className="flex gap-1">
                  {" "}
                  <p className="mb-0 text-[9px] md:text-[12px]">Priority:</p>
                  <p className="mb-0 text-[9px] md:text-[12px]">
                    <TodoPriorityColor TodoPriority={data.todoPriority} />
                  </p>
                </span>
                <span className="flex gap-1">
                  <p className="mb-0 text-[9px] md:text-[12px]">Status:</p>
                  <p className="mb-0 text-[9px] md:text-[12px]">
                    <TodoStatus />
                  </p>
                </span>
                <span className="flex gap-1 text-gray-300">
                  <p className="mb-0 text-[9px] md:text-[12px] ">Created On:</p>
                  <p></p>
                </span>
              </div>
            </div>

            <div className="overflow-y-auto h-[90%]">
              {" "}
              <span className="flex gap-1">
                {" "}
                <span className="mb-0 text-4 ">
                  <span className="font-semibold text-[12px] md:text-[16px]">
                    Task Title:
                  </span>
                  <span className="mb-0 text-4 text-gray-500 text-[12px] md:text-[16px]">
                    {data.todoTitle}
                  </span>
                </span>
              </span>
              <span className="flex gap-1">
                {" "}
                <span className="mb-0 text-4 ">
                  <span className="font-semibold text-[12px] md:text-[16px]">
                    Task Description:
                  </span>
                  <span className="mb-0 text-4 text-gray-500 text-[12px] md:text-[16px]">
                    {data.todoDescription}
                  </span>
                </span>
              </span>
            </div>
            <span className="flex justify-end items-center gap-3 w-full">
              <TodoDelete id={data._id} />
              <UpdateTodo data={data} id={data._id} />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchTodo;

const TodoPriorityColor = ({ todoPriority }) => {
  let statusColor = "";
  let priorityStatus = "";

  if (todoPriority === "Moderate") {
    priorityStatus = "Moderate";
    statusColor += "text-blue-500";
  } else if (todoPriority === "Low") {
    priorityStatus = "Low";

    statusColor = "text-green-500";
  } else {
    priorityStatus = "Extreme";

    statusColor += "text-red-500";
  }
  return <div className={statusColor}>{priorityStatus}</div>;
};
