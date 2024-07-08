import React from "react";
import HeaderTask from "../ReausableComponents/HeaderTask";

const TodoCardContainer = () => {
  return (
    <div className="mt-[6%] w-[95%] h-full">
      <div className="grid grid-cols-2 w-full  justify-center  h-[600px] gap-4">
        <div className="shadow-md border border-gray-500">
          <HeaderTask />
        </div>
        <div className="shadow-md border border-gray-500 ">span1</div>
      </div>
    </div>
  );
};

export default TodoCardContainer;
