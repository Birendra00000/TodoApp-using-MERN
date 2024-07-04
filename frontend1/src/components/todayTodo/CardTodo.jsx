import axios from "axios";
import React, { useEffect, useState } from "react";

const CardTodo = () => {
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
    <div className="w-full  flex justify-center mt-2 flex-col items-center gap-3">
      {todos &&
        todos.map((todo) => {
          return (
            <div className="w-[90%]  h-[200px] border border-gray-500 rounded-lg">
              <div className="w-full grid grid-cols-8 gap-2 items-center h-[80%]">
                {" "}
                <TodoStatus date={todo.todoDate} className="col-span-1" />
                <span className="flex flex-col col-span-4 pt-[3%]">
                  <span className="font-bold">{todo.todoTitle}</span>
                  <span className="text-gray-500">
                    {todo.todoDescription.slice(0, 110)}....
                  </span>
                </span>
                <span className="col-span-3 flex items-end justify-center h-full">
                  <img
                    src={todo.todoImage}
                    alt=""
                    className="w-[120px] h-[120px] object-cover rounded-lg"
                  />
                </span>
              </div>
              <div></div>
            </div>
          );
        })}
    </div>
  );
};

export default CardTodo;

const TodoStatus = ({ date }) => {
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
