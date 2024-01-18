import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      className=" 
      bg-yellow-500
      px-3
      py-1
      rounded-md
      hover:bg-yellow-600
      font-semibold
      text-sm"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
