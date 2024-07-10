import React from "react";

const TodoStatus = ({ date }) => {
  const today = new Date();
  const due = new Date(date);

  let progressStatus = "";
  let statusColor = "";
  if (due.toDateString() === today.toDateString()) {
    progressStatus = "In progress";
    statusColor += "text-blue-500";
  } else if (due < today) {
    progressStatus = "Completed"; // Overdue todo
    statusColor = "text-green-500";
  } else {
    progressStatus = "Not Started"; // Future todo
    statusColor += "text-red-500";
  }
  return <div className={statusColor}>{progressStatus}</div>;
};

export default TodoStatus;
