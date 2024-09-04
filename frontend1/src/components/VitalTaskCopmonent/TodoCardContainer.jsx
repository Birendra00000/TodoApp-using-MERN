import React, { useContext, useState, useEffect } from "react";
import HeaderTask from "../ReausableComponents/HeaderTask";
import CardContainer from "../ReausableComponents/CardContainer";
import TodoContext from "../../Context/TodoContext";
import SingleTodoComponents from "../ReausableComponents/SingleTodoComponents";

const TodoCardContainer = () => {
  const TodoItems = useContext(TodoContext);
  console.log("todooo", TodoItems);
  const [openIndex, setOpenIndex] = useState(null);
  const [defaultOpenIndex, setOpenDefaultIndex] = useState(null);

  useEffect(() => {
    if (TodoItems) {
      const firstExtremeIndex = TodoItems.findIndex(
        (todo) => todo.todoPriority === "Extreme"
      );
      setOpenDefaultIndex(firstExtremeIndex);
    }
  });

  useEffect(() => {
    setOpenIndex(defaultOpenIndex);
  }, [defaultOpenIndex]);

  const handleClick = (index) => {
    setOpenIndex(index);
  };
  return (
    <div className="mt-[8%] w-[95%] ">
      <div className="remove--scroller grid grid-cols-2 w-full  justify-center  h-[600px] gap-x-1 lg:gap-4 overflow-y-auto">
        <div className="shadow-md border border-gray-500">
          <div className="w-full flex justify-center items-center h-[95vh]">
            {" "}
            <div className="w-[90%] h-[95%]">
              <HeaderTask title={"Vital Task"} />
              <div className="w-full  flex justify-center mt-2 flex-col items-center mb-[3%]  gap-3">
                {TodoItems &&
                  TodoItems.map((todo, index) => {
                    return (
                      <>
                        {todo.todoPriority === "Extreme" ? (
                          <>
                            <div
                              key={index}
                              className={`w-[90%]  h-[200px] border border-gray-500 rounded-lg ${
                                openIndex === index ? "bg-gray-200" : ""
                              }`}
                              onClick={() => handleClick(index)}
                            >
                              <CardContainer todo={todo} />
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
        </div>
        <div className="shadow-md border border-gray-500 ">
          {openIndex !== null && (
            <SingleTodoComponents data={TodoItems[openIndex]} />
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default TodoCardContainer;
