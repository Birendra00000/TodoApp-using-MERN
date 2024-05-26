import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Create = () => {
  // let navigate = useNavigate();
  // function handleClick() {
  //   navigate("/");
  // }

  const [error, setError] = useState("");

  const [datas, setData] = useState({
    title: "",
    description: "",
  });
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
      console.log(response);
    } catch (error) {
      setError(error.response.data.message);
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
        {error && (
          <>
            <div className="flec justify-start text-red-700">{error}</div>
          </>
        )}
        <div className="flex items-center justify-center h-[50px] w-full">
          <button className="text-lg text-white py-1 px-3 rounded-md bg-lightblue">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
