import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense } from '../store/expenseSlice';
import EditExpense from './EditExpense';

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();
  const [selectedExpense, setSelectedExpense] = useState(null);

  const handleEditClick = (expense) => {
    setSelectedExpense(expense);
  };

  const handleCloseEdit = () => {
    setSelectedExpense(null);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Your Expenses</h2>
      {expenses.length === 0 ? (
        <p className="text-center text-gray-500">No expenses added yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expenses.map((expense) => (
            <div key={expense.id} className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">{expense.name}</h3>
                <span className="text-xl text-green-500 font-semibold">${expense.amount}</span>
              </div>
              <button
                onClick={() => dispatch(removeExpense(expense.id))}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
              >
                Remove
              </button>
              <button
                onClick={() => handleEditClick(expense)}
                className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      )}
      {selectedExpense && (
        <EditExpense selectedExpense={selectedExpense} onClose={handleCloseEdit} />
      )}
    </div>
  );
};

export default ExpenseList;
