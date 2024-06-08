import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxCross2 } from "react-icons/rx";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import { Navigate, useNavigate } from "react-router-dom";

const Update = ({ item, id }) => {
  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate("/");
  // };

  const [show, setShow] = useState(false);
  const [close, setClose] = useState(true);

  const notifySuccess = (successmessage) => toast.success(successmessage);

  const notifyError = (errorMessage) => toast.error(errorMessage);

  const handleClose = () => {
    setShow(false);
    setClose(true);
  };

  const [datas, setData] = useState({
    title: item.todoTitle,
    description: item.todoDescription,
  });

  const updateTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4000/api/todo/${id}`,
        datas
      );
      notifySuccess(response.data.message);
      setShow(false);
    } catch (error) {
      notifyError(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    setData({
      ...datas,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <button
        className="bg-gray-500 p-2 rounded-lg"
        onClick={() => setShow(!show)}
      >
        Update
      </button>

      {show && (
        <div
          className="w-full flex justify-center items-center h-screen bg-darkgreen absolute top-0 bg-[#7973733d]
          rounded-md"
        >
          <form
            className="w-[430px] h-[400px] shadow-md text-black bg-white absolute top-[85px]"
            onSubmit={(e) => updateTodo(e)}
          >
            <div
              className="flex justify-end px-2 pt-2 cursor-pointer"
              onClick={handleClose}
            >
              <RxCross2 size={25} />
            </div>

            <div className="text-xl">
              <input
                type="text"
                className="border-none outline-none w-full p-3 "
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

            <div className="flex items-center justify-center h-[50px] w-full bg-gray-300">
              <button
                className="text-lg text-white py-1 px-3 rounded-md bg-red-500"
                type="submit"
              >
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default Update;
