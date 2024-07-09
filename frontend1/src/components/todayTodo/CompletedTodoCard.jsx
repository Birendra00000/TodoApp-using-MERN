import React, { useContext } from "react";
import { TbCalendarTime } from "react-icons/tb";
import CardContainer from "../ReausableComponents/CardContainer";
import TodoContext from "../../Context/TodoContext";

const CompletedTodoCard = () => {
  const TodoItems = useContext(TodoContext);
  const today = new Date();

  return (
    <div className="w-full flex justify-center h-full items-center">
      <div className="w-[90%] h-[90%]">
        <div className="flex gap-3 items-center">
          <TbCalendarTime size={25} className="text-gray-500" />
          <span className="text-red-600">Completed Task</span>
        </div>{" "}
        <div className="w-full  flex justify-center mt-2 flex-col items-center mb-[3%] gap-3">
          {TodoItems &&
            TodoItems.map((todo) => {
              return (
                <>
                  {new Date(todo.todoDate) < today ? (
                    <>
                      <CardContainer todo={todo} />
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
  );
};

export default CompletedTodoCard;
