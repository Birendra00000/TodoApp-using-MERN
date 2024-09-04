import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const UpdateTodo = ({ data, id }) => {
  const [show, setShow] = useState(false);
  const [datas, setData] = useState({
    title: data?.todoTitle || "",
    description: data?.todoDescription || "",
    date: data?.todoDate || "",
    priority: data?.todoPriority || "",
    todoImage: data?.todoImage,
  });

  useEffect(() => {
    if (data) {
      setData({
        title: data.todoTitle || "",
        description: data.todoDescription || "",
        date: data.todoDate || "",
        priority: data.todoPriority || "",
        todoImage: data.todoImage,
      });
    }
  }, [data]);

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    if (e.target.name === "priority") {
      setData((prevState) => ({
        ...prevState,
        priority: e.target.value,
      }));
    } else if (e.target.name === "todoImage") {
      const file = e.target.files[0];
      setData((prevState) => ({
        ...prevState,
        todoImage: file || null,
      }));
    } else {
      setData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };
  console.log("SENT IS", id);
  console.log("Updated data IS", datas);

  const updateTodo = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", datas.title);
      formData.append("description", datas.description);
      formData.append("date", datas.date);
      formData.append("priority", datas.priority);
      if (datas.todoImage) {
        formData.append("todoImage", datas.todoImage);
      }

      const response = await axios.put(
        `https://todo-backend-9bt4.onrender.com/api/todo/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );

      // setShow(false); // Close the modal on success
      notifySuccess(response.data.message);
    } catch (error) {
      notifyError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <button
        className="px-1 py-2 bg-red-400 text-white
 w-[50px] flex justify-center text-[18px] lg:text-[25px] rounded-md items-center"
        onClick={() => setShow(!show)}
      >
        <FaRegEdit />
      </button>

      {show && (
        <div className="main--container w-full h-full flex justify-center items-center">
          <form
            onSubmit={(e) => updateTodo(e)}
            className="w-[80%] lg:w-[65%] h-[97%] lg:h-[96%] bg-white"
          >
            <div className="flex w-full justify-center">
              <div className="flex w-[85%] justify-between items-center py-3">
                <span>
                  <p className="font-bold mb-0 bottom text-[12px] lg:text-[16px]">
                    Add New Task
                  </p>
                  <span className="flex h-[2px] w-[80%] bg-red-400"></span>
                </span>
                <span className="flex  items-center gap-1 cursor-pointer">
                  <FaArrowLeft size={16} />
                  <p
                    className="font-semibold mb-0 text-[12px] lg:text-[16px] flex flex-col"
                    onClick={handleClose}
                  >
                    Go Back
                    <span className="h-[2px] bg-orange-600 flex w-[85%]"></span>
                  </p>{" "}
                </span>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <div className="flex w-[85%] h-[50%] justify-center items-center border border-gray-600">
                {" "}
                <div className=" second--container w-[95%] h-full mt-[2%]  flex flex-col gap-1 lg:gap-3">
                  <div className="text-normal font-semibold flex flex-col gap-1">
                    <label
                      htmlFor="title"
                      className=" text-[12px] lg:text-[16px]"
                    >
                      Title{" "}
                    </label>
                    <input
                      type="text"
                      className="  outline-none w-[60%]  p-[6px] border border-gray-600 rounded-lg text-[12px] lg:text-[16px]"
                      name="title"
                      value={datas.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-normal  text-[12px] lg:text-[16px] font-semibold flex flex-col gap-1">
                    <label htmlFor="title">Date </label>
                    <input
                      type="date"
                      className="  text-[12px] lg:text-[16px] outline-none w-[60%]  p-[6px] border border-gray-600 rounded-lg cursor-pointer"
                      name="date"
                      value={datas.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <span>
                      {" "}
                      <p className="font-semibold text-[12px] lg:text-[16px]">
                        Priority
                      </p>
                    </span>
                    <span className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-5">
                      <span className="text-[12px] lg:text-[16px] flex justify-center items-center gap-1">
                        <span className=" w-[7px] h-[7px] bg-red-400 rounded-full flex"></span>{" "}
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
                      <span className="text-[12px] lg:text-[16px]  flex justify-center items-center gap-1">
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
                      <span className="text-[12px] lg:text-[16px] flex justify-center items-center gap-1">
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
                  <div className=" flex flex-col lg:flex-row items-center gap-2 mb-[1rem]">
                    <span className="text-[12px] lg:text-[16px] w-full">
                      <p className="font-semibold">Task Discribtion</p>

                      <textarea
                        id=""
                        cols="10"
                        rows="7"
                        placeholder="Start Writing here...."
                        className="outline-none w-[90%] lg:w-[500px] resize-none border lg:h-[240px] p-2 rounded-md"
                        name="description"
                        value={datas.description}
                        onChange={handleChange}
                      />
                    </span>
                    <span className="text-[12px] lg:text-[16px] w-full  ">
                      {" "}
                      <label htmlFor="" className="font-semibold mb-2">
                        Upload Image
                      </label>
                      <span className="w-full flex justify-center">
                        <input
                          type="file"
                          name="todoImage"
                          id="todoImage"
                          hidden
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="todoImage"
                          className="w-[60%] h-[120px] lg:w-[200px] lg:h-[240px] flex flex-col justify-center items-center gap-2 lg:gap-4 border border-gray-400 rounded-md cursor-pointer"
                        >
                          <FiUpload size={25} />
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
              <div className="flex items-center justify-center  w-full h-[50px] lg:h-[100px] ">
                <div className="w-[85%]">
                  <button
                    className=" text-white py-1 px-4 rounded-md bg-red-400 text-[13px] lg:text-[16px]"
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
      )}
    </>
  );
};

export default UpdateTodo;
