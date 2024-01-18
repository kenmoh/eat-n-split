import React, { useState } from "react";
import Button from "./Button";
import Message from "./Message";

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <div
      className={
        isSelected
          ? "flex justify-between item-center mb-3 bg-orange-100 p-3 rounded-md"
          : "flex justify-between item-center mb-3 hover:bg-orange-100 p-3 hover:rounded-md"
      }
    >
      <div className="flex gap-5 items-center">
        <img
          src={friend.imageUrl}
          alt={name}
          className="w-[48px] h-[48px] rounded-full"
        />
        <div>
          <p className="font-bold text-sm">{friend.name}</p>
          <Message balance={friend.balance} />
        </div>
      </div>
      <div>
        <Button
          title={isSelected ? "Close" : "Select"}
          onClick={() => onSelection(friend)}
        />
      </div>
    </div>
  );
};

export default Friend;
