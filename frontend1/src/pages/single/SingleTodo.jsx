import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Update from "../update/Update";
import DeleteTodo from "../delete/DeleteTodo";

<ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>;

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
            <div className="lg:w-[500px] h-[70vh] bg-lightblue text-white mt-3  ml-auto mr-auto rounded-lg shadow-lg shadow-blue-500/50 w-[90%] md:w-[70%]">
              <div className="flex justify-center text-[22px] text-center border-b-white p-2 overflow-auto">
                {" "}
                {item.todoTitle}
              </div>

              <div className="flex h-[70%] text-md justify-center p-2 overflow-auto">
                {item.todoDescription}
              </div>
              <div className="flex justify-center gap-4">
                <Update item={item} id={id} />
                <DeleteTodo />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default SingleTodo;