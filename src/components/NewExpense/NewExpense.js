import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const addExpenseHandler = () => {
    setShowExpenseForm(true);
  };

  const cancelAddExpenseHandler = () => {
    setShowExpenseForm(false);
  };

  const saveExpenseDataHandler = (inputExpenseData) => {
    const expenseData = {
      ...inputExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowExpenseForm(false);
  };

  let addExpenseButtonContent;
  if (!showExpenseForm) {
    addExpenseButtonContent = (
      <button onClick={addExpenseHandler}>Add New Expense</button>
    );
  }

  let expenseFormContent;
  if (showExpenseForm) {
    expenseFormContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelAddExpenseHandler}
      />
    );
  }

  return (
    <div className="new-expense">
      {addExpenseButtonContent}
      {expenseFormContent}
    </div>
  );
};

export default NewExpense;
