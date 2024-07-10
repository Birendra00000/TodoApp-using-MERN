import React from "react";

const HeaderTask = ({ title }) => {
  return (
    <div className=" gap-1 items-start mb-4">
      <p className="mb-0  font-semibold ">{title}</p>
      <span className="flex h-[2px] w-[12%] bg-red-400"></span>
    </div>
  );
};

export default HeaderTask;
