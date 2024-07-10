import React, { useContext, useState, useEffect } from "react";
import HeaderTask from "../ReausableComponents/HeaderTask";
import CardContainer from "../ReausableComponents/CardContainer";
import TodoContext from "../../Context/TodoContext";
import SingleTodoComponents from "../ReausableComponents/SingleTodoComponents";

const TaskContainer = () => {
  const TodoItems = useContext(TodoContext);

  // State to track which todo item is open and should be open by default
  const [openIndex, setOpenIndex] = useState(null);
  const [defaultOpenIndex, setDefaultOpenIndex] = useState(0);

  useEffect(() => {
    // Open the first todo item by default
    setOpenIndex(defaultOpenIndex);
  }, [defaultOpenIndex]);

  // Function to handle click on todo item
  const handleClick = (index) => {
    // if (openIndex === index) {
    //   setOpenIndex(null); // Close the item if it's already open
    // } else {
    setOpenIndex(index); // Open the clicked item
  };

  return (
    <div className="mt-[8%] w-[95%] h-full">
      <div className="grid grid-cols-2 w-full justify-center h-[600px] gap-4">
        <div className="shadow-md border border-gray-500">
          <div className="w-full flex justify-center items-center h-[95vh] overflow-auto">
            <div className="w-[90%] h-[95%]">
              <HeaderTask title={"My Tasks"} />
              <div className="w-full flex justify-center mt-2 flex-col items-center mb-[3%] gap-3">
                {TodoItems &&
                  TodoItems.map((todo, index) => (
                    <div
                      key={index}
                      className={`w-[90%] h-[200px] border border-gray-500 rounded-lg cursor-pointer 
                        ${openIndex === index ? "bg-gray-200" : ""}`}
                      onClick={() => handleClick(index)}
                    >
                      <CardContainer todo={todo} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md border border-gray-500">
          {openIndex !== null && (
            <SingleTodoComponents data={TodoItems[openIndex]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
