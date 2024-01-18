import React from "react";

const Input = ({ label, onChange, value, name, disabled = false }) => {
  return (
    <div className="flex my-2 items-center justify-between">
      <label className="text-sm font-semibold w-[30%]" htmlFor={name}>
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        id={name}
        disabled={disabled}
        className="px-2 focus:outline-none rounded-md w-[70%]"
      />
    </div>
  );
};

export default Input;
