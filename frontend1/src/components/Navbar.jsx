import React from "react";
import CreateModal from "./createModal";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between bg-blue-300 text-white h-20 items-center">
      {" "}
      <Link to="/" className="ml-[4%] text-lg no-underline">
        <div className="flex">
          <h5>Software</h5>
          <h5 className="text-red-400">Ai</h5>
        </div>
      </Link>
      <div className="flex justify-between mr-[4%] gap-6 items-center">
        <CreateModal />
        <Link to="/" className="no-underline">
          {" "}
          <div>Todos</div>
        </Link>
        <Link to="register" className="no-underline">
          {" "}
          <div>Register</div>
        </Link>
        <Link to="login" className="no-underline">
          {" "}
          <div>Login</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
