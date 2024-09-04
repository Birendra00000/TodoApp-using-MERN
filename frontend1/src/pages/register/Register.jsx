import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const TodoRegister = () => {
  const { logIn } = useAuth();
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  console.log("LOGINNN", logIn);
  // console.log("data", data);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,

      [e.target.name]: e.target.value,
    }));
  };
  const notifySuccess = (successmessage) => toast.success(successmessage);

  const notifyError = (errorMessage) => toast.error(errorMessage);

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://todo-backend-9bt4.onrender.com/api/userRegister",
        data
      );
      console.log(JSON.stringify(response.data.data));
      if (response.status === 200) {
        const newData = response.data.data;
        const newToken = response.data.token;
        console.log("response.data.token", response.data.token);
        console.log("Received newToken:", newToken);
        console.log("Received newData:", newData);
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
    <div className="h-[600px] w-full flex justify-center items-center ">
      <form
        className="h-[440px] bg-white w-[350px] shadow-md rounded-lg"
        onSubmit={(e) => submitData(e)}
      >
        <span className="h-[20%] items-center justify-center  flex text-[25px] text-skyblue">
          <h5>Sign Up</h5>
        </span>
        {error}
        <div className="flex flex-col justify-center items-center h-[50%] gap-[10%]">
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            value={data.firstName}
            className="border rounded-lg p-2  w-[80%] text-[14px] lg:text-[16px] outline-none"
            onChange={handleChange}
          />{" "}
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            value={data.lastName}
            className="border rounded-lg p-2  w-[80%] text-[14px] lg:text-[16px] outline-none"
            onChange={handleChange}
          />{" "}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter E-mail"
            value={data.email}
            className="border rounded-lg p-2 mt-1 w-[80%] text-[14px] lg:text-[16px] outline-none"
            onChange={handleChange}
          />{" "}
          <input
            type="password"
            placeholder="Enter Password"
            className="border rounded-lg p-2 mt-1 w-[80%] text-[14px] lg:text-[16px] outline-none"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div className="h-[30%] items-center justify-center  flex text-lg w-[100%] flex-col gap-[7%]">
          <button
            className="bg-sky-500 text-white w-[30%] p-1 rounded-lg text-[14px] lg:text-[16px]"
            type="submit"
          >
            Sign Up
          </button>
          <div className="flex justify-center text-[14px] lg:text-[16px]">
            <p>Already have an account?</p>{" "}
            <Link to="/login">
              <p>Sign In</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoRegister;
