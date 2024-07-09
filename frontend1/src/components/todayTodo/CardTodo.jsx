import axios from "axios";
import React, { useContext } from "react";
import CardContainer from "../ReausableComponents/CardContainer";
import TodoContext from "../../Context/TodoContext";

const CardTodo = () => {
  const TodoItems = useContext(TodoContext);

  return (
    <div className="w-full  flex justify-center mt-2 flex-col items-center gap-3 mb-[3%]">
      {TodoItems &&
        TodoItems.map((todo) => {
          return <CardContainer todo={todo} />;
        })}
    </div>
  );
};

export default CardTodo;

// const TodoStatusColor = ({ date }) => {
//   const today = new Date();
//   const due = new Date(date);

//   let statusClass = "h-4 w-4 rounded-full border-2";
//   if (due.toDateString() === today.toDateString()) {
//     statusClass += "border-blue-400";
//   } else if (due < today) {
//     statusClass += " border-green-400"; // Overdue todo
//   } else {
//     statusClass += " border-red-400"; // Future todo
//   }

//   return (
//     <>
//       <span className="w-full h-full flex  pt-[40%] justify-center">
//         <span className={statusClass}></span>
//       </span>
//     </>
//   );
// };

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
