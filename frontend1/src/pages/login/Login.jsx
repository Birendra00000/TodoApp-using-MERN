import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { logIn } = useAuth();
  const [error, setError] = useState(null);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // console.log("data", data);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const notifySuccess = (successmessage) => toast.success(successmessage);

  const notifyError = (errorMessage) => toast.error(errorMessage);

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/userlogin",
        data
      );
      console.log(JSON.stringify(response.data.data));
      console.log("response", response.data.user);
      if (response.status === 200) {
        const newData = response.data.user;
        const newToken = response.data.token;

        logIn(newToken, newData);
        notifySuccess(response.data.message);

        return navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      notifyError(error.response.data.message);
    }
  };

  return (
    <div className="h-[600px] w-full flex justify-center items-center">
      <form
        className="h-[330px]  shadow-md bg-white w-[90%] lg:w-[350px] rounded-lg"
        onSubmit={(e) => submitData(e)}
      >
        <span className="h-[20%] items-center justify-center  flex  text-[25px] text-skyblue ">
          <h5>Sign In</h5>
        </span>
        <div className="flex flex-col justify-center items-center h-[60%] gap-[10%]">
          <div></div>{" "}
          <input
            type="email"
            placeholder="E-mail"
            className="border rounded-lg p-2 mt-1 w-[80%] text-[14px] lg:text-[16px]"
            name="email"
            value={data.email}
            onChange={handleChange}
          />{" "}
          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg p-2 mt-1 w-[80%] text-[14px] lg:text-[16px]"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          {error && (
            <>
              <div className="flec justify-start text-red-700 text-[14px] lg:text-[16px]">
                {error}
              </div>
            </>
          )}
          <div className=" items-center justify-center  flex text-lg w-[100%]">
            <button className="bg-sky-500 text-white w-[30%] p-1 rounded-lg text-[14px] lg:text-[16px]">
              Sign In
            </button>
          </div>
        </div>
        <Link to="/register">
          <div className="flex justify-center text-[14px] lg:text-[16px]">
            <p>or Get Registered</p>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default Login;
