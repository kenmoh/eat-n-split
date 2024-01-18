import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const AddFriendForm = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !imageUrl) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      imageUrl: `${imageUrl}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImageUrl("https://i.pravatar.cc/48");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name={"name"}
          label={"Friend Name"}
        />
        <Input
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          name={"imageUrl"}
          label={"Image URL"}
        />
        <div className="flex justify-end">
          <Button title={"Add"} />
        </div>
      </form>
    </div>
  );
};

export default AddFriendForm;
