import axios from "axios";
import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

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
        "http://localhost:4000/api/login",
        data
      );
      if (response) {
        return redirect("/pages/create");
      }
      console.log(response);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-blue-100">
      <form
        className="h-[330px] bg-white w-[310px] rounded-lg"
        onSubmit={(e) => submitData(e)}
      >
        <span className="h-[20%] items-center justify-center  flex text-[25px] text-skyblue">
          <h5>Sign In</h5>
        </span>
        <div className="flex flex-col justify-center items-center h-[60%] gap-[10%]">
          <div></div>
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
          {error && (
            <>
              <div className="flec justify-start text-red-700">{error}</div>
            </>
          )}
          <div className=" items-center justify-center  flex text-lg w-[100%]">
            <button className="bg-sky-500 text-white w-[60%] p-1 rounded-lg">
              Sign In
            </button>
          </div>
        </div>
        <Link to="/register">
          <div className="flex justify-center">
            <p>or Get Registered</p>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default Login;
