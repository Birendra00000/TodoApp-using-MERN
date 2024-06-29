import "./App.css";
import { createBrowserRouter, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/homepage/home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Create from "./pages/create/Create";
import SingleTodo from "./pages/single/SingleTodo";
import Navbar from "./components/Navbar";
import DashBoard from "./pages/dashboard/DashBoard";
import SideBar from "./components/sideBar/SideBar";
import UserTask from "./pages/myTask/UserTask";
import { RouterProvider } from "react-router-dom";

function App() {
  const LayOut = () => {
    return (
      <div>
        <Navbar />
        <div className="flex gap-10">
          <div>
            <SideBar />
          </div>
          <div className="w-full h-full">
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
          element: <DashBoard />,
        },
        {
          path: "/create",
          element: <Create />,
        },

        {
          path: "/usertask",
          element: <UserTask />,
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
  return <RouterProvider router={router} />;
}

export default App;
