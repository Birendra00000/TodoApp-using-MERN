import React from "react";
const Button = ({ title, varient, icon, type }) => {
  return (
    <button
      className={` px-1 py-1 rounded-md 
        cursor-pointer  text-[12px] lg:text-[16px]   ${varient}
      
      `}
      type={type}
    >
      {" "}
      {icon && <img src={icon} className="w-3 h-3 lg:w-5 lg:h-5" />}
      {title}
    </button>
  );
};

export default Button;
