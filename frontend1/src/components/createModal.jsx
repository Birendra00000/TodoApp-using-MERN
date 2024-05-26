import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateModal = () => {
  return (
    <>
      <Link to="/create">
        <Button variant="info flex items-center p-[14px] rounded-full text-white">
          <div className="">
            <FaPlus className="" />
          </div>
        </Button>{" "}
      </Link>
    </>
  );
};

export default CreateModal;
