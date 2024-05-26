import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleTodo = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const fetctTodo = async () => {
    const response = await axios.get(`http://localhost:4000/api/todo/${id}`);
    const singleTodo = await response.data;
    console.log("todos", response.data.data);

    return setData([singleTodo.data]);
  };

  useEffect(() => {
    fetctTodo();
  }, []);

  return (
    <>
      {" "}
      {data.map((item) => {
        return (
          <>
            <div className="w-[300px] h-[300px] bg-lightblue text-white mt-3  ml-auto mr-auto rounded-lg shadow-lg shadow-blue-500/50 ">
              <div className="flex justify-center text-[22px] text-center border-b-white p-2 h-[40%] ">
                {" "}
                {item.todoTitle}
              </div>

              <div className="flex h-[50%] text-sm justify-center p-2">
                {item.todoDescription}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default SingleTodo;
