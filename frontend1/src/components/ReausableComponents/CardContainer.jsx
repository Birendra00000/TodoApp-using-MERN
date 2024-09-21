import React from "react";
import TodoStatus from "./TodoStatus";

const CardContainer = ({ todo }) => {
  return (
    <div className=" h-[150px] md:h-[200px] border border-gray-500 rounded-lg w-[90%]">
      <div className="w-full grid grid-cols-8 gap-2 items-center h-[80%]">
        {" "}
        <TodoStatusColor date={todo.todoDate} className="col-span-1" />
        <span className="flex flex-col col-span-4 pt-[3%] h-full">
          <span className="font-bold text-[12px] md:text-[16px] ">
            {todo.todoTitle}
          </span>
          <span className="text-gray-500 overflow-hidden  h-[125px]">
            <p className="mb-0 custom-truncate text-[12px] md:text-[16px]">
              {todo.todoDescription}...
            </p>
          </span>
        </span>
        <span className="col-span-3 flex mt-2 md:mt-0 md:items-end justify-center h-[100px] md:h-[120px]">
          <img
            src={todo?.todoImage}
            alt=""
            className="w-[90px] md:w-[120px] h-full object-cover rounded-lg"
          />
        </span>
      </div>
      <div className="w-full flex justify-center h-[20%] items-center">
        <div className="w-[80%] flex items-center gap-2 overflow-x-auto">
          <span className="flex items-center">
            <p className="mb-0 text-[8px] md:text-[10px] ">Priority:</p>
            <p className="mb-0  text-[8px] md:text-[10px] text-blue-500 font-bold">
              {todo.todoPriority}
            </p>
          </span>
          <span className="flex items-center">
            <p className="mb-0  text-[8px] md:text-[10px]">Status:</p>
            <p className="mb-0  text-[8px] md:text-[10px]">
              <TodoStatus date={todo.todoDate} />
            </p>
          </span>
          <span className="flex items-center">
            <p className="mb-0 text-[8px] md:text-[10px]">Created On:</p>
            <p className="mb-0 text-[8px] md:text-[10px]"></p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;

const TodoStatusColor = ({ date }) => {
  const today = new Date();
  const due = new Date(date);

  let statusClass = "h-4 w-4 rounded-full border-2";
  if (due.toDateString() === today.toDateString()) {
    statusClass += "border-blue-400";
  } else if (due < today) {
    statusClass += " border-green-400"; // Overdue todo
  } else {
    statusClass += " border-red-400"; // Future todo
  }

  return (
    <>
      <span className="w-full h-full flex  pt-[40%] justify-center">
        <span className={statusClass}></span>
      </span>
    </>
  );
};

// const TodoStatus = ({ date }) => {
//   const today = new Date();
//   const due = new Date(date);

//   let progressStatus = "";
//   let statusColor = "";
//   if (due.toDateString() === today.toDateString()) {
//     progressStatus = "In progress";
//     statusColor += "text-blue-500";
//   } else if (due < today) {
//     progressStatus = "Completed"; // Overdue todo
//     statusColor = "text-green-500";
//   } else {
//     progressStatus = "Not Started"; // Future todo
//     statusColor += "text-red-500";
//   }
//   return <div className={statusColor}>{progressStatus}</div>;
// };
