import React from "react";

const SingleTodoComponents = ({ data }) => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[95%]">
          <div>
            <span className="">
              <img
                src={data.todoImage}
                alt=""
                className="h-[180px] w-[180px]"
              />
            </span>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default SingleTodoComponents;
