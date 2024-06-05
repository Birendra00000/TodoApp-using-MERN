import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  // let navigate = useNavigate();
  // function handleClick() {
  //   navigate("/");
  // }

  const [datas, setData] = useState({
    title: "",
    description: "",
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
  console.log("data", datas);

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
    <div className="w-full flex justify-center items-center h-screen bg-darkgreen">
      <form
        className="w-[400px] h-[400px] shadow-md  "
        onSubmit={(e) => submitTodo(e)}
      >
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
        {/* {error && (
          <>
            <div className="flec justify-start text-red-700">{error}</div>
          </>
        )} */}
        <div className="flex items-center justify-center h-[50px] w-full">
          <button
            className="text-lg text-white py-1 px-3 rounded-md bg-lightblue"
            type="submit"
          >
            Submit
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default Create;
