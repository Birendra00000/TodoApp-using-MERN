import React, { useEffect, useState } from "react";
import axios from "axios";
import { TbCalendarTime } from "react-icons/tb";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./custom.css";

const TodoStatus = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/todo");
        setTodos(response.data.data); // Assuming response structure has a data array
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchData();
  }, []);

  // Calculate progress and counts based on todo statuses
  const calculateProgress = () => {
    if (todos.length === 0) {
      return { progress: 0, inProgressCount: 0, notStartedCount: 0 };
    }

    const today = new Date();
    let completedCount = 0;
    let inProgressCount = 0;
    let notStartedCount = 0;
    // Count todos based on their todoDate
    todos.forEach((todo) => {
      const todoDate = new Date(todo.todoDate);

      if (todoDate < today) {
        completedCount++;
      } else if (todoDate > today) {
        notStartedCount++;
      } else {
        inProgressCount++;
      }
    });

    // Calculate progress percentage
    const completedPercentage = (completedCount / todos.length) * 100;
    const progressPercentage = (inProgressCount / todos.length) * 100;
    const notStartedPercentage = (notStartedCount / todos.length) * 100;
    return {
      complete: Math.round(completedPercentage),
      progress: Math.round(progressPercentage),
      notStarted: Math.round(notStartedPercentage),
    };
  };

  const { complete, progress, notStarted } = calculateProgress();

  const completeBarStyles = {
    pathColor: "green",
    textColor: "black",
    trailColor: "#d6d6d6",
    backgroundColor: "#3e98c7",
  };

  const progressBarStyles = {
    pathColor: "blue",
    textColor: "black",
    trailColor: "#d6d6d6",
    backgroundColor: "#3e98c7",
  };

  const notStartedBarStyles = {
    pathColor: "red",
    textColor: "black",
    trailColor: "#d6d6d6",
    backgroundColor: "#3e98c7",
  };

  return (
    <div className="w-full flex justify-center h-full items-center">
      <div className="w-[90%] h-[90%]">
        <div className="flex gap-1 md:gap-3 items-center">
          <TbCalendarTime size={25} className="text-gray-500 " />
          <span className="text-red-400 text-[15px] lg:text[18px]">
            Task Status
          </span>
        </div>
        <div className="flex justify-between items-center h-[90%]">
          <div className="w-[33%] h-[120px] md:h-[150px] flex flex-col  gap-2  md:justify-between">
            <CircularProgressbar
              value={complete}
              text={`${complete}%`}
              styles={buildStyles(completeBarStyles)}
            />
            <span className="flex items-center justify-center">
              <span className="h-4 w-4 rounded-full border-2 bg-green-500 flex"></span>
              <p className="mb-0 text-[10px] sm:text-[11px] md:text-[11px] lg:text[16px]">
                Completed
              </p>
            </span>
          </div>
          <div className="w-[33%] h-[120px] md:h-[150px]  flex flex-col gap-2  md:justify-between">
            <CircularProgressbar
              value={progress}
              text={`${progress}%`}
              styles={buildStyles(progressBarStyles)}
            />{" "}
            <span className="flex items-center justify-center">
              <span className="h-4 w-4 rounded-full border-2 bg-blue-500 flex"></span>
              <p className="mb-0  text-[10px]  sm:text-[11px]  md:text-[11px] lg:text[16px]">
                In Progress
              </p>
            </span>
          </div>{" "}
          <div className="w-[33%] h-[120px] md:h-[150px]  flex flex-col gap-2  md:justify-between">
            <CircularProgressbar
              value={notStarted}
              text={`${notStarted}%`}
              styles={buildStyles(notStartedBarStyles)}
            />{" "}
            <span
              className="flex items-center justify-center
            
            "
            >
              <span className="h-4 w-4 rounded-full border-2 bg-red-500 flex"></span>
              <p className="mb-0  text-[10px]  sm:text-[11px]  md:text-[11px] lg:text[16px]">
                Not Started
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoStatus;
