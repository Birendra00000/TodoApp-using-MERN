import React from "react";
import TodoStatus from "./TodoStatus";
import TodoDelete from "./delete/TodoDelete";
import UpdateTodo from "./update/UpdateTodo";

const SingleTodoComponents = ({ data }) => {
  console.log("dataaaa", data);
  return (
    <>
      <div className="w-full flex justify-center h-full items-center">
        <div className="w-[90%] h-[90%] flex flex-col gap-[5%] ">
          <div className="flex gap-3 items-center ">
            <span className="">
              <img
                src={data.todoImage}
                alt=""
                className="h-[180px] w-[180px] rounded-md"
              />
            </span>
            <div className=" flex flex-col gap-3  ">
              <span>
                <p className="mb-0 font-bold text-[14px]">{data.todoTitle}</p>
              </span>
              <span className="flex gap-1">
                {" "}
                <p className="mb-0 text-[12px]">Priority:</p>
                <p className="mb-0 text-[12px]">
                  <TodoPriorityColor TodoPriority={data.todoPriority} />
                </p>
              </span>
              <span className="flex gap-1">
                <p className="mb-0 text-[12px]">Status:</p>
                <p className="mb-0 text-[12px]">
                  <TodoStatus />
                </p>
              </span>
              <span className="flex gap-1 text-gray-300">
                <p className="mb-0 text-[12px] ">Created On:</p>
                <p></p>
              </span>
            </div>
          </div>

          <div className="overflow-y-auto h-[90%]">
            {" "}
            <span className="flex gap-1">
              {" "}
              <span className="mb-0 text-4 ">
                <span className="font-semibold">Task Title:</span>
                <span className="mb-0 text-4 text-gray-500">
                  {data.todoTitle}
                </span>
              </span>
            </span>
            <span className="flex gap-1">
              {" "}
              <span className="mb-0 text-4 ">
                <span className="font-semibold ">Task Description:</span>
                <span className="mb-0 text-4 text-gray-500">
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
    </>
  );
};

export default SingleTodoComponents;

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
