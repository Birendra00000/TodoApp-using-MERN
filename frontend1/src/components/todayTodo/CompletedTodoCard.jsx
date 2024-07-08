import React, { useEffect, useState } from "react";
import axios from "axios";
import { TbCalendarTime } from "react-icons/tb";

const CompletedTodoCard = () => {
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

  const today = new Date();
  let todoCompleted = "";
  //   todos.map((todo) => {
  //     const todoDate = new Date(todo.todoDate);

  //     if (todoDate < today) {
  //       todoCompleted = "Completed";
  //     }
  //   });

  return (
    <div className="w-full flex justify-center h-full items-center">
      <div className="w-[90%] h-[90%]">
        <div className="flex gap-3 items-center">
          <TbCalendarTime size={25} className="text-gray-500" />
          <span className="text-red-600">Completed Task</span>
        </div>{" "}
        <div className="w-full  flex justify-center mt-2 flex-col items-center mb-[3%] gap-3">
          {todos &&
            todos.map((todo) => {
              return (
                <>
                  {new Date(todo.todoDate) < today ? (
                    <>
                      <div className="w-[95%]  h-[200px] border border-gray-500 rounded-lg">
                        <div className="w-full grid grid-cols-8 gap-2 items-center h-[80%]">
                          {" "}
                          <span className="w-full h-full flex  pt-[40%] justify-center">
                            <span className="h-4 w-4 rounded-full border-2 border-green-500"></span>
                          </span>
                          <span className="flex flex-col col-span-4 pt-[3%] h-full">
                            <span className="font-bold">{todo.todoTitle}</span>
                            <span className="text-gray-500 overflow-hidden  h-[125px]">
                              <p className="mb-0 custom-truncate">
                                {todo.todoDescription}...
                              </p>
                            </span>
                          </span>
                          <span className="col-span-3 flex items-end justify-center h-[120px]">
                            <img
                              src={todo.todoImage}
                              alt=""
                              className="w-[120px] h-full object-cover rounded-lg"
                            />
                          </span>
                        </div>
                        <div className="w-full flex justify-center h-[20%] items-center">
                          <div className="w-[80%] flex items-center gap-2">
                            <span className="flex items-center">
                              <p className="mb-0 text-[10px]">Priority:</p>
                              <p className="mb-0 text-[10px] text-blue-500 font-bold">
                                {todo.todoPriority}
                              </p>
                            </span>
                            <span className="flex items-center">
                              <p className="mb-0 text-[10px]">Status:</p>
                              <p className="mb-0 text-[10px] text-green-500">
                                Completed
                              </p>
                            </span>
                            <span className="flex items-center">
                              <p className="mb-0 text-[10px]">Created On:</p>
                              <p className="mb-0 text-[10px]"></p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CompletedTodoCard;
