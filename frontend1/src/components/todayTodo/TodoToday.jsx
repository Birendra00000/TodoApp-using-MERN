import React from "react";
import HeaderToday from "./HeaderToday";
import CardTodo from "./CardTodo";

const TodoToday = () => {
  return (
    <div className="h-full overflow-y-scroll">
      <HeaderToday />

      <CardTodo />
    </div>
  );
};

export default TodoToday;
