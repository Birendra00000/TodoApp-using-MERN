import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./todayTodo.css";

const CreateTodoModal = () => {
  const [datas, setData] = useState({
    title: "",
    description: "",
    Date: "",
    priority: "",
    todoImage: "",
  });

  const notifySuccess = (successmessage) => toast.success(successmessage);

  const notifyError = (errorMessage) => toast.error(errorMessage);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({
      ...datas,
      [e.target.name]: e.target.value,
    });
  };
  console.log("data", datas.title.length);
  console.log("data", datas.description.length);

  const submitTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/todo",
        datas
      );
      notifySuccess(response.data.message);
    } catch (error) {
      notifyError(error.response.data.message);
    }
  };

  return (
    <div className="main--container w-full h-full flex justify-center items-center">
      <div className="w-[60%] h-[90%] bg-white">
        <div className="flex w-full justify-center">
          <div className="flex w-[85%] justify-between items-center py-3">
            <span>
              <p className="font-bold mb-0 bottom">Add New Task</p>
              <span className="border border-rose-400 flex w-[85%]"></span>
            </span>
            <span>
              <p className="font-semibold mb-0">Go Back</p>{" "}
              <span className="border border-rose-400  flex w-[85%]"></span>
            </span>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex w-[85%] h-[50%] justify-center items-center border border-gray-600">
            {" "}
            <form
              className=" second--container w-[95%] h-full mt-[2%]  "
              onSubmit={(e) => submitTodo(e)}
            >
              <div className="text-normal font-semibold flex flex-col gap-1">
                <label for="title">Title </label>
                <input
                  type="text"
                  className="  outline-none w-[60%]  p-[6px] border border-gray-600 rounded-lg"
                  placeholder="Title"
                  name="title"
                  value={datas.title}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <textarea
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Start Typing"
                  className="border-none outline-none w-full p-3  resize-none"
                  name="description"
                  value={datas.description}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center justify-center h-[50px] w-full">
                <button
                  className="text-lg text-white py-1 px-3 rounded-md bg-red-400"
                  type="submit"
                >
                  Submit
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CreateTodoModal;
{
  /* {error && (
        <>
          <div className="flec justify-start text-red-700">{error}</div>
        </>
      )} */
}
