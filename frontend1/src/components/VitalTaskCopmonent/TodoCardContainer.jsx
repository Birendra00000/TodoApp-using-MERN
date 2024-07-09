import React, { useContext, useState } from "react";
import HeaderTask from "../ReausableComponents/HeaderTask";
import CardContainer from "../ReausableComponents/CardContainer";
import TodoContext from "../../Context/TodoContext";
import SingleTodoComponents from "../ReausableComponents/SingleTodoComponents";

const TodoCardContainer = () => {
  const TodoItems = useContext(TodoContext);

  const [data, setData] = useState(null);

  const handleClick = async (todo) => {
    setData(todo);
  };
  console.log(data);
  return (
    <div className="mt-[6%] w-[95%] h-full">
      <div className="grid grid-cols-2 w-full  justify-center  h-[600px] gap-4">
        <div className="shadow-md border border-gray-500">
          <div className="w-full flex justify-center items-center h-[95vh] overflow-y-scroll">
            {" "}
            <div className="w-[90%] h-[95%]">
              <HeaderTask />
              <div className="w-full  flex justify-center mt-2 flex-col items-center mb-[3%] gap-3">
                {TodoItems &&
                  TodoItems.map((todo) => {
                    return (
                      <>
                        {todo.todoPriority === "Extreme" ||
                        todo.todoPriority === "Low" ? (
                          <>
                            <div
                              className="w-[90%]  h-[200px] border border-gray-500 rounded-lg "
                              onClick={() => handleClick(todo)}
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
          <SingleTodoComponents data={data} />{" "}
        </div>
      </div>
    </div>
  );
};

export default TodoCardContainer;
