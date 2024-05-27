import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { createContext, useContext } from "react";
import { Link } from "react-router-dom";

const ThemeContext = createContext(null);

export default function Home() {
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
    <div className="mt-[2%] mx-[2%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 scroll-smooth mb-[4%]">
      {todos.map((item) => {
        return (
          <>
            <Link key={item._id} to={`/${item._id}`} className="no-underline">
              <div className="w-[300px] h-[200px] lg:w-[400px] lg:h-[300px] bg-lightblue text-white mt-3  ml-auto mr-auto rounded-lg shadow-lg shadow-blue-500/50">
                <div className="flex justify-center text-[22px] text-center border-b-white p-2 h-[40%] ">
                  {" "}
                  {item.todoTitle}
                </div>

                <div className="flex h-[50%] text-md justify-center p-2">
                  {item.todoDescription}
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}
