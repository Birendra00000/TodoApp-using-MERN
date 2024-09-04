import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxCross2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";

const TodoDelete = ({ id }) => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  let closeWindow = useRef();
  console.log(closeWindow);

  const notifySuccess = (successmessage) =>
    toast.success(successmessage, { autoClose: 3000 });

  const notifyError = (errorMessage) => toast.error(errorMessage);

  useEffect(() => {
    function handler(e) {
      if (!closeWindow.current?.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const deleteTodo = async () => {
    try {
      const response = await axios.delete(
        `https://todo-backend-9bt4.onrender.com/api/todo/${id}`
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
      <div>
        <button
          className="px-1 py-2 bg-red-400 text-white 
            w-[50px] flex justify-center text-[18px] lg:text-[25px] rounded-md items-center"
          onClick={() => setShow(!show)}
        >
          <MdDelete />
        </button>
        {show && (
          <>
            <div
              className="w-full flex justify-center items-center bg-[#7973733d] h-full absolute top-0 left-0"
              onClick={() => setShow(false)} // Hide on outside click
            >
              <div
                className="w-[270px] h-[140px] lg:w-[350px] flex gap-4  lg:h-[170px]  rounded-md flex-col text-black bg-white "
                ref={closeWindow}
                onClick={(e) => e.stopPropagation()} // Prevent click events from bubbling up
              >
                {" "}
                <div
                  className="flex justify-end px-2 pt-2 cursor-pointer"
                  onClick={() => setShow(false)}
                >
                  <RxCross2 size={25} />
                </div>
                <div className="flex justify-center text-[12px] lg:text-[16px]">
                  Are you sure you want to delete the todo?
                </div>
                <div className="flex justify-end ">
                  <button
                    className="text-red-400 p-2  text-[12px] 
                  lg:text-[16px] mr-[6%] rounded-lg bg-white shadow-md shadow-gray-300"
                    onClick={() => setShow(false)}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={deleteTodo}
                    className="bg-red-400 p-2  text-[12px] 
                  lg:text-[16px] mr-[6%] rounded-lg text-white"
                  >
                    Delete
                  </button>
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
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TodoDelete;
