import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import CreateTodoModal from "./CreateTodoModal";

const AddTask = () => {
  const [show, setShow] = useState(false);
  const [close, setClose] = useState(true);
  const handleClick = () => {
    setShow(false);
    setClose(true);
  };

  return (
    <>
      <button
        className="flex gap-1 items-center p-1 "
        onClick={() => setShow(!show)}
      >
        <FaPlus className="text-red-400" />
        <p className="mb-0 text-gray-500 text-[12px] ">Add Task</p>
      </button>
      {show && <CreateTodoModal handleClick={handleClick} />}
    </>
  );
};

export default AddTask;
