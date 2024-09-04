import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useNavigate,
// } from "react-router-dom";

import { createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
// import Home from "./pages/homepage/home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Create from "./pages/create/Create";
// import SingleTodo from "./pages/single/SingleTodo";
import Navbar from "./components/Navbar";
import DashBoard from "./pages/dashboard/DashBoard";
import SideBar from "./components/sideBar/SideBar";
import UserTask from "./pages/myTask/UserTask";
import VitalTask from "./pages/vitalTask/VitalTask";
// import MainContext from "./Context/MainContext";
import ProtectedRoute from "./Context/ProtectedRoute";
import TaskCategories from "./pages/taskCategories/TaskCategories";
import SearchTodo from "./pages/search/SearchTodo";
// import { RxHamburgerMenu } from "react-icons/rx";

// import SingleTask from "./pages/SingleTask/SingleTask";
const App = () => {
  const [open, setOpen] = useState(false);

  const LayOut = () => {
    return (
      <div>
        <Navbar />
        <div className="flex gap-2 md:gap-10 lg:gap-10">
          <div className="w-[30%]">
            <SideBar />{" "}
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/",
          element: <ProtectedRoute element={<DashBoard />} />,
        },
        {
          path: "/create",
          element: <ProtectedRoute element={<Create />} />,
        },

        {
          path: "/usertask",
          element: <ProtectedRoute element={<UserTask />} />,
        },
        {
          path: "/vitaltask",
          element: <ProtectedRoute element={<VitalTask />} />,
        },
        {
          path: "/taskcategories",
          element: <ProtectedRoute element={<TaskCategories />} />,
        },
        {
          path: "/search/:id",
          element: <ProtectedRoute element={<SearchTodo />} />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    // <Router>
    //   <MainContext>
    //     <div>
    //       <Navbar />
    //       <div
    //         className="flex gap-2 md:gap-10
    //       "
    //       >
    //         <div className="w-[30%]">
    //           <SideBar />
    //         </div>
    //         <div className="w-full h-full">
    //           <Routes>
    //             <Route
    //               path="/"
    //               element={<ProtectedRoute element={<DashBoard />} />}
    //             />
    //             <Route
    //               path="/create"
    //               element={<ProtectedRoute element={<Create />} />}
    //             />
    //             <Route
    //               path="/usertask"
    //               element={<ProtectedRoute element={<UserTask />} />}
    //             />
    //             <Route
    //               path="/vitaltask"
    //               element={<ProtectedRoute element={<VitalTask />} />}
    //             />{" "}
    //             <Route
    //               path="/taskcategories"
    //               element={<ProtectedRoute element={<TaskCategories />} />}
    //             />{" "}
    //             <Route
    //               path="/:id"
    //               element={<ProtectedRoute element={<SingleTask />} />}
    //             />
    //             <Route path="/login" element={<Login />} />
    //             <Route path="/register" element={<Register />} />
    //           </Routes>
    //         </div>
    //       </div>
    //     </div>
    //   </MainContext>
    // </Router>
    <RouterProvider router={router} />
  );
};

export default App;
