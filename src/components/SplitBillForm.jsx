import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const SplitBillForm = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [paymentBy, setPaymentBy] = useState("user");
  const friendExpense = bill ? bill - userExpense : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !userExpense || !friendExpense) return;
    onSplitBill(paymentBy === "user" ? friendExpense : -userExpense);
  };

  return (
    <div className="bg-orange-100 p-5 rounded-md">
      <h1 className="font-bold text-center">
        SPLIT BILL WITH {selectedFriend.name.toUpperCase()}
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
          label={"Bill Value"}
          name={"bill"}
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
        <Input
          label={"Your Expense"}
          name={"expense"}
          value={userExpense}
          onChange={(e) =>
            setUserExpense(
              Number(e.target.value) > bill
                ? userExpense
                : Number(e.target.value)
            )
          }
        />
        <Input
          label={`${selectedFriend.name}'s Expense`}
          name={"friend"}
          disabled
          value={friendExpense}
        />
        <div className="flex my-2 items-center justify-between">
          <label htmlFor="user" className="font-semibold">
            Payment by
          </label>
          <select
            value={paymentBy}
            onChange={(e) => setPaymentBy(e.target.value)}
            name=""
            id="user"
            className="px-2 focus:outline-none rounded-md w-[70%] font-semibold"
          >
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
          </select>
        </div>
        <div className="flex justify-end">
          <Button title={"Split Bill"} />
        </div>
      </form>
    </div>
  );
};

export default SplitBillForm;
