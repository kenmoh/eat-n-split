import React from "react";

const Message = ({ balance }) => {
  return (
    <div>
      <small
        className={`${
          balance < 0
            ? "text-red-500"
            : balance === 0
            ? "text-gray-600"
            : "text-green-500"
        }`}
      >
        {balance < 0
          ? "You owe your friend"
          : balance === 0
          ? "You and your friend are even"
          : "Your friend owe you"}
        {balance === 0 ? "" : " $" + `${Math.abs(balance)}`}
      </small>
    </div>
  );
};

export default Message;
