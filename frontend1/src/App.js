import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/homepage/home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Create from "./pages/create/Create";
// import SingleTodo from "./pages/single/SingleTodo";
import Navbar from "./components/Navbar";
import DashBoard from "./pages/dashboard/DashBoard";
import SideBar from "./components/sideBar/SideBar";
import UserTask from "./pages/myTask/UserTask";
import VitalTask from "./pages/vitalTask/VitalTask";
import MainContext from "./Context/MainContext";
import { useAuth } from "./Context/AuthContext";

const App = () => {
  return (
    <Router>
      <MainContext>
        <div>
          <Navbar />
          <div
            className="flex gap-10 relative
           top-[15%] z-[-30]"
          >
            <div>
              <SideBar />
            </div>
            <div className="w-full h-full">
              <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="/create" element={<Create />} />
                <Route path="/usertask" element={<UserTask />} />
                <Route path="/vitaltask" element={<VitalTask />} />{" "}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </div>
        </div>
      </MainContext>
    </Router>
  );
};

export default App;
