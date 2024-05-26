import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/register",
        data
      );
      console.log(response);
    } catch (error) {
      console.log("There is an error");
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-blue-200">
      <form
        className="h-[360px] bg-white w-[310px] rounded-lg"
        onSubmit={(e) => submitData(e)}
      >
        <span className="h-[20%] items-center justify-center  flex text-[25px] text-skyblue">
          <h5>Sign Up</h5>
        </span>
        <div className="flex flex-col justify-center items-center h-[50%] gap-[10%]">
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              className="border rounded-lg p-1"
              onChange={handleChange}
            />
          </div>
          <div>
            {" "}
            <input
              type="email"
              placeholder="E-mail"
              className="border rounded-lg p-1"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div>
            {" "}
            <input
              type="password"
              placeholder="Password"
              className="border rounded-lg p-1"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="h-[30%] items-center justify-center  flex text-lg w-[100%] flex-col gap-[7%]">
          <button className="bg-sky-500 text-white w-[60%] p-1 rounded-lg">
            Sign Up
          </button>
          <Link to="/pages/login">
            <div className="flex justify-center">
              <p>or Get SignIn</p>
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
