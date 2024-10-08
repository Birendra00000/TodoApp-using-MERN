import React, { useState, useEffect } from "react";
import TodoContext from "./TodoContext";
import axios from "axios";

const MainContext = (props) => {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://todo-backend-9bt4.onrender.com/api/todo"
    );
    const items = await response.data;
    return setTodos(items.data);
  };
  console.log("todos", todos);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <TodoContext.Provider value={todos}>
        {props.children}
      </TodoContext.Provider>
    </>
  );
};

export default MainContext;
