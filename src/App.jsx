import React from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <AddExpense />
      <ExpenseList />
    </div>
  );
}

export default App;
