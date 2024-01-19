import { useState } from "react";
import FriendList from "./components/FriendList";
import AddFriendForm from "./components/AddFriendForm";
import SplitBillForm from "./components/SplitBillForm";
import Button from "./components/Button";

const friendsList = [
  {
    id: 101,
    name: "Rohit",
    imageUrl: "https://i.pravatar.cc/48?img=11",
    balance: -8,
  },
  {
    id: 102,
    name: "Rahul",
    imageUrl: "https://i.pravatar.cc/48?img=12",
    balance: 10,
  },

  {
    id: 103,
    name: "Raj",
    imageUrl: "https://i.pravatar.cc/48?img=10",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(friendsList);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  const handleSelection = (friend) => {
    // setSelectedFriend(friend);
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  };
  const handleToggle = () => {
    setShowAddFriend(!showAddFriend);
    setSelectedFriend(null);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };
  return (
    <>
      <div className="md:w-4/5 mx-auto md:p-10 p-5 mt-10 ">
        <div className="flex w-full flex-wrap justify-between">
          <div className="md:w-[45%] w-full">
            <FriendList
              friends={friends}
              onSelection={handleSelection}
              selectedFriend={selectedFriend}
            />
          </div>
          {selectedFriend && (
            <div className="md:w-[53%] w-full">
              <SplitBillForm
                selectedFriend={selectedFriend}
                onSplitBill={handleSplitBill}
              />
            </div>
          )}
        </div>

        {/* Add Friend Form  */}
        {showAddFriend && (
          <div className="w-full md:w-[45%] bg-orange-100 p-5 my-5 rounded-md">
            <AddFriendForm onAddFriend={handleAddFriend} />
          </div>
        )}
        <Button
          title={`${showAddFriend ? "Close" : "Add friend"}`}
          onClick={handleToggle}
        />
      </div>
    </>
  );
}

export default App;
