import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxCross2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";

<ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>;

const DeleteTodo = ({ id, item }) => {
  const [show, setShow] = useState(false);
  const [close, setClose] = useState(true);

  const handleClose = () => {
    setShow(false);
    setClose(true);
  };

  const notifySuccess = (successmessage) =>
    toast.success(successmessage, { autoClose: 3000 });

  const notifyError = (errorMessage) => toast.error(errorMessage);

  const deleteTodo = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/todo/${id}`
      );
      // console.log(response.data.message);
      notifySuccess(response.data.message);
      // setShow(false);
    } catch (error) {
      notifyError(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <button
        className="px-1 py-2 bg-red-400 text-white 
            w-[50px] flex justify-center text-[25px] rounded-md items-center"
      >
        <MdDelete />
      </button>
      {show && (
        <>
          <div className="w-full flex justify-center items-center bg-[#7973733d] h-full absolute top-0">
            <div className="w-[350px] flex gap-4  h-[170px]  rounded-md flex-col text-black bg-white ">
              {" "}
              <div
                className="flex justify-end px-2 pt-2 cursor-pointer"
                onClick={handleClose}
              >
                <RxCross2 size={25} />
              </div>
              <div className="flex justify-center">
                Are You sure You want to delete the todo?
              </div>
              <div className="flex justify-end ">
                <button
                  onClick={deleteTodo}
                  className="bg-red-400 p-2 mr-[6%] rounded-lg text-white"
                >
                  Yes
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DeleteTodo;
