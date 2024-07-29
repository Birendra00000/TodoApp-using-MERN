import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { logIn } = useAuth();
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
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
        "http://localhost:4000/api/userRegister",
        data
      );
      console.log(JSON.stringify(response.data.data));
      if (response.status === 200) {
        const { newToken, newData } = response.data.data;
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
    <div className="h-screen w-full flex justify-center items-center bg-blue-200">
      <form
        className="h-[360px] bg-white w-[310px] rounded-lg"
        onSubmit={(e) => submitData(e)}
      >
        <span className="h-[20%] items-center justify-center  flex text-[25px] text-skyblue">
          <h5>Sign Up</h5>
        </span>
        {error}
        <div className="flex flex-col justify-center items-center h-[50%] gap-[10%]">
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              className="border rounded-lg p-1 cursor-pointer"
              onChange={handleChange}
            />
          </div>{" "}
          <div>
            {" "}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              value={data.email}
              className="border rounded-lg p-2 w-full mt-1"
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
