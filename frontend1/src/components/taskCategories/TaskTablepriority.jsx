import React, { useContext } from "react";
import TodoContext from "../../Context/TodoContext";
import Button from "../ReausableComponents/Button";
import "./table.css";

const TaskTablepriority = () => {
  const TodoItems = useContext(TodoContext);
  console.log("TodoItems", TodoItems);
  return (
    <div className="w-full border border-gray-400 rounded-lg mt-4">
      <ul className=" border-b border border-gray-400  flex pl-0 mb-0">
        <li className="  font-semibold border-r text-centerlg:w-[5%] text-[12px] lg:text-[16px]">
          S.N
        </li>
        <li className="p-1 font-semibold text-center border-r  col-span-5 w-[42%] text-[12px] lg:text-[16px]">
          Task Priority
        </li>
        <li className="p-1 font-semibold text-center col-span-5 w-[50%] text-[12px] lg:text-[16px]">
          Action
        </li>
      </ul>

      <span className="hidescrollbar flex flex-col h-[120px] overflow-auto">
        {TodoItems &&
          TodoItems.map((item, index) => (
            <>
              {console.log("item.date", item.todoDate)}
              <li className=" flex " key={item._id}>
                {" "}
                <span className="border-r text-center p-2 col-span-1 w-[5%] ml-[1px] text-[12px] lg:text-[16px]">
                  {index}
                </span>
                <span className=" font-normal text-center border-r  p-2 col-span-5 w-[45%] text-[12px] lg:text-[16px] ">
                  <span className="text-red-500">{item.todoPriority}</span>{" "}
                </span>
                <span className=" font-normal text-center flex justify-center gap-1 lg:gap-5 p-2 col-span-6 w-[50%] ">
                  <Button
                    title="Edit"
                    varient="bg-red-500 text-white flex w-[75px] flex justify-center items-center gap-1"
                    icon="/assests/edit.png"
                    type="submit"
                  />
                  <Button
                    title="Delete"
                    varient="bg-red-500 text-white flex w-[75px]  justify-center items-center gap-1"
                    icon="/assests/delete.png"
                    type="submit"
                  />
                </span>{" "}
              </li>
            </>
          ))}
      </span>
    </div>
  );
};

export default TaskTablepriority;
