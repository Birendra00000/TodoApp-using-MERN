import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbCalendarTime } from "react-icons/tb";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TodoStatus = () => {
  const percentage = 20;

  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/api/todo");
    const items = await response.data;
    return setTodos(items.data);
  };
  console.log("todos", todos);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full flex justify-center h-full items-center">
      <div className="w-[90%] h-[90%]">
        <div className="flex gap-3">
          <TbCalendarTime size={25} className="text-gray-500" />
          <span className="text-red-400">Task Status</span>
        </div>
        <div className="w-[200px] h-[200px]">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
      </div>
    </div>
  );
};

export default TodoStatus;

// const progressCircle = () => {
//   const today = new Date();
//   const due = new Date(date);
//   let count = 0;

//   if (due.toDateString() === today.toDateString()) {
//     count = count + 1;
//   } else if (due < today) {
//     progressStatus = "Completed"; // Overdue todo
//     statusColor = "text-green-500";
//   } else {
//     progressStatus = "Not Started"; // Future todo
//     statusColor += "text-red-500";
//   }
// };
