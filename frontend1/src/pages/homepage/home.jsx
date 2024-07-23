import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import DashBoard from "../dashboard/DashBoard";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const { isAuthenticated, token } = useAuth();
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/api/todo");
    const items = await response.data;
    return setTodos(items.data);
  };

  console.log("todos", todos);
  useEffect(() => {
    fetchData();
    const TOKEN = localStorage.getItem(token);
    if (!TOKEN) {
      return navigate("/register");
    }
    console.log("Tokeeen", TOKEN);
  }, []);

  return (
    // <div className=" mx-[2%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 scroll-smooth mb-[4%] mt-[100px] ">
    //   {todos.map((item) => {
    //     return (
    //       <>
    //         <Link key={item._id} to={`/${item._id}`} className="no-underline">
    //           <div className="w-[300px] min-h-[120px] max-h-auto lg:w-[400px]  bg-[#bbe7f4] text-white mt-3  ml-auto mr-auto rounded-lg shadow-md shadow-blue-50/50 ">
    //             <div className="flex justify-center text-[20px] text-left border-b-white p-2 h-auto min-h-10 max-h-fit">
    //               {/* {" "}
    //               {item.todoTitle.length > 100 ? (
    //                 <div>{item.todoTitle.slice(0, 100)}...</div>
    //               ) : (
    //                 <> {item.todoTitle}</>
    //               )} */}
    //               {item.todoTitle}
    //             </div>

    //             {/* <div className="flex text-md justify-center p-2">
    //               {item.todoDescription.length > 424 ? (
    //                 <div>{item.todoDescription.slice(0, 424)}...</div>
    //               ) : (
    //                 <> {item.todoDescription}</>
    //               )}
    //             </div> */}
    //           </div>
    //         </Link>
    //       </>
    //     );
    //   })}
    // </div>
    <>
      {/* <div className=" flex w-full justify-start z-[-10] mt-[7%]"> */}
      {/* absolute top-[25%] */}
      <DashBoard />
      {/* <MainPage /> */}
      {/* </div> */}
    </>
  );
}
