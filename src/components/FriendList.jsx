import React from "react";
import Friend from "./Friend";

const FriendList = ({ friends, onSelection, selectedFriend }) => {
  return (
    <div>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </div>
  );
};

export default FriendList;
