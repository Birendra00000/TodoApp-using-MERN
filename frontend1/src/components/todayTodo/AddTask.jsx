import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import CreateTodoModal from "./CreateTodoModal";

const AddTask = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <button
        className="flex gap-1 items-center p-1 "
        onClick={() => setClick(!click)}
      >
        <FaPlus className="text-red-400" />
        <p className="mb-0 text-gray-500">Add Task</p>
      </button>
      {click && <CreateTodoModal />}
    </>
  );
};

export default AddTask;
