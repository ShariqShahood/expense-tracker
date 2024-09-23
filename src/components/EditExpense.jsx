import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateExpense } from '../store/expenseSlice';

const EditExpense = ({ selectedExpense, onClose }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedExpense) {
      setName(selectedExpense.name);
      setAmount(selectedExpense.amount);
    }
  }, [selectedExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    dispatch(updateExpense({ id: selectedExpense.id, name, amount }));
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Edit Expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Expense Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
            Save Changes
          </button>
          <button type="button" onClick={onClose} className="w-full mt-2 bg-gray-300 hover:bg-gray-400 text-black py-2 rounded-lg">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditExpense;
