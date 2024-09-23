import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../store/expenseSlice";
import { v4 as uuidv4 } from "uuid";

const AddExpense = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    dispatch(addExpense({ id: uuidv4(), name, amount }));
    setName("");
    setAmount("");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Add New Expense
      </h2>
      <form
        className="bg-white shadow-lg rounded-lg p-6 animate__animated animate__fadeIn"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Expense Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter expense name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter amount"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
