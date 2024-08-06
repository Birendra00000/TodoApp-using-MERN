import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiUpload } from "react-icons/fi";

const CreateTodoModal = ({ handleClick }) => {
  const [close, setClose] = useState(false);
  const [datas, setData] = useState({
    title: "",
    description: "",
    date: "",
    priority: "",
    todoImage: null,
  });
  console.log("datas", datas);
  const notifySuccess = (successmessage) => toast.success(successmessage);

  const notifyError = (errorMessage) => toast.error(errorMessage);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "priority") {
      setData({
        ...datas,
        priority: e.target.value,
      });
    } else if (e.target.name === "todoImage") {
      const file = e.target.files[0]; // Get the selected file
      setData({
        ...datas,
        todoImage: file || null,
      });
    } else {
      setData({
        ...datas,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submitTodo = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", datas.title);
      formData.append("description", datas.description);
      formData.append("date", datas.date);
      formData.append("priority", datas.priority);
      formData.append("todoImage", datas.todoImage);

      const response = await axios.post(
        "http://localhost:4000/api/todo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );
      notifySuccess(response.data.message);
    } catch (error) {
      notifyError(error.response.data.message);
    }
  };

  return (
    <div className="main--container w-full h-full flex justify-center items-center">
      <form
        onSubmit={(e) => submitTodo(e)}
        className="w-[65%] h-[96%] bg-white"
      >
        <div className="flex w-full justify-center">
          <div className="flex w-[85%] justify-between items-center py-3">
            <span>
              <p className="font-bold mb-0 bottom">Add New Task</p>
              <span className="h-[2px] bg-orange-600 flex w-[85%]"></span>
            </span>
            <span>
              <p
                className="font-semibold mb-0 cursor-pointer"
                onClick={handleClick}
              >
                Go Back
              </p>{" "}
              <span className="h-[2px] bg-orange-600 flex w-[85%]"></span>
            </span>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex w-[85%] h-[55%] justify-center items-center border border-gray-600 rounded-md">
            {" "}
            <div className=" second--container w-[95%] h-full mt-[2%]  flex flex-col gap-3">
              <div className="text-normal font-semibold flex flex-col gap-1">
                <label for="title">Title </label>
                <input
                  type="text"
                  className="  outline-none w-[60%]  p-[6px] border border-gray-600 rounded-lg"
                  name="title"
                  value={datas.title}
                  onChange={handleChange}
                />
              </div>
              <div className="text-normal font-semibold flex flex-col gap-1">
                <label for="title">Date </label>
                <input
                  type="date"
                  className="  outline-none w-[60%]  p-[6px] border border-gray-600 rounded-lg cursor-pointer"
                  name="date"
                  value={datas.date}
                  onChange={handleChange}
                />
              </div>
              <div>
                <span>
                  {" "}
                  <p className="font-semibold">Priority</p>
                </span>
                <span className="flex items-center gap-5">
                  <span className="flex justify-center items-center gap-1">
                    <span className="w-[7px] h-[7px] bg-red-400 rounded-full flex"></span>{" "}
                    <label htmlFor="extreme">Extreme</label> {" "}
                    <input
                      type="radio"
                      id="extreme"
                      name="priority"
                      value="Extreme"
                      checked={datas.priority === "Extreme"}
                      onChange={handleChange}
                    />
                  </span>{" "}
                  <span className="flex justify-center items-center gap-1">
                    <span className="w-[7px] h-[7px] bg-blue-400 rounded-full flex"></span>{" "}
                    <label htmlFor="moderate">Moderate</label> {" "}
                    <input
                      type="radio"
                      id="moderate"
                      name="priority"
                      value="Moderate"
                      checked={datas.priority === "Moderate"}
                      onChange={handleChange}
                    />
                  </span>{" "}
                  <span className="flex justify-center items-center gap-1">
                    <span className="w-[7px] h-[7px] bg-green-400 rounded-full flex"></span>{" "}
                    <label htmlFor="low">Low</label> {" "}
                    <input
                      type="radio"
                      id="low"
                      name="priority"
                      value="Low"
                      checked={datas.priority === "Low"}
                      onChange={handleChange}
                    />
                  </span>{" "}
                </span>
              </div>
              <div className=" flex items-center gap-2 ">
                <span>
                  <p className="font-semibold mb-2">Task Discribtion</p>

                  <textarea
                    id=""
                    cols="10"
                    rows="7"
                    placeholder="Start Writing here...."
                    className="outline-none w-[500px] resize-none border h-[240px] p-2 rounded-md"
                    name="description"
                    value={datas.description}
                    onChange={handleChange}
                  />
                </span>
                <span className="w-full flex text-center flex-col">
                  {" "}
                  <label htmlFor="" className="font-semibold mb-2">
                    Upload Image
                  </label>
                  <span className="">
                    <input
                      type="file"
                      name="todoImage"
                      id="todoImage"
                      hidden
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="todoImage"
                      className="w-[200px] h-[240px] flex flex-col justify-center items-center gap-4 border border-gray-400 rounded-md cursor-pointer"
                    >
                      <FiUpload size={30} />
                      <p className="mb-0">Drag&Drop files here</p>
                      <p className="mb-0">or</p>
                      <div className="p-2 flex justify-center items-center  rounded-lg border border-gray-500">
                        Browser
                      </div>
                    </label>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center  w-full h-[100px] ">
            <div className="w-[85%]">
              <button
                className="text-lg text-white py-1 px-4 rounded-md bg-red-400"
                type="submit"
              >
                Done
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </form>
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
