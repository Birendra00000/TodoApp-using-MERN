import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../components/sideBar/SideBar";
import DashBoard from "../dashboard/DashBoard";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://todo-backend-9bt4.onrender.com/api/todo"
    );
    const items = await response.data;
    return setTodos(items.data);
  };
  console.log("todos", todos);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <DashBoard />
    </>
  );
}
