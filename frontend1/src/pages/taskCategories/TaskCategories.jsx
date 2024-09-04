import React from "react";
import Button from "../../components/ReausableComponents/Button";
import TaskTableStatus from "../../components/taskCategories/TaskTableStatus";
import TaskTablepriority from "../../components/taskCategories/TaskTablepriority";
import { FaArrowLeft } from "react-icons/fa";

const TaskCategories = () => {
  return (
    <div className="mt-[8%] w-full  ">
      {" "}
      <div className="w-[95%] flex   justify-center   border border-gray-500 h-[600px] rounded-md">
        {" "}
        <div className="flex  flex-col  w-[90%] justify-start gap-4  py-3">
          <div className="flex justify-between items-center">
            <span>
              <p className="font-bold mb-0 bottom text-[14px]  lg:text-[20px]">
                Task Categories
              </p>
              <span className="h-[2px] bg-orange-600 flex w-[85%]"></span>
            </span>
            <span>
              <p className="font-semibold mb-0 cursor-pointer text-[12px] lg:text-[16px] ">
                Go Back
              </p>{" "}
              <span className="h-[2px] bg-orange-600 flex w-[85%]"></span>
            </span>
          </div>
          <span>
            <Button title="Add Categories" varient="bg-red-500 text-white  " />
          </span>
          <div>
            <span className=" flex justify-between items-center">
              <span>
                {" "}
                <p className="font-semibold mb-0 bottom">Task Status</p>
                <span className="h-[2px] bg-orange-600 flex w-[85%]"></span>
              </span>
              <Button
                title="Add Task Status"
                varient="shadow-md text-gray-400 flex"
                icon="/assests/add.png"
                type="submit"
              />
            </span>{" "}
            <TaskTableStatus />
          </div>
          <div>
            <span className=" flex justify-between items-center">
              <span>
                {" "}
                <p className="font-semibold mb-0 bottom">Task Priority</p>
                <span className="h-[2px] bg-orange-600 flex w-[85%]"></span>
              </span>
              <Button
                title="Add Task Priority"
                varient="shadow-md text-gray-400 flex"
                icon="/assests/add.png"
                type="submit"
              />
            </span>{" "}
            <TaskTablepriority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCategories;
