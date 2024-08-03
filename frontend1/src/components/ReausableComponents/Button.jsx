import React from "react";
const Button = ({ title, varient, icon, type }) => {
  return (
    <button
      className={` px-1 py-1 rounded-md 
        cursor-pointer     ${varient}
      
      `}
      type={type}
    >
      {" "}
      {icon && <img src={icon} className="w-5 h-5" />}
      {title}
    </button>
  );
};

export default Button;
