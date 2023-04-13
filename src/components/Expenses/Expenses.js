import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState('2020');

  const filterExpenses = (inputYear) => {
    setYearFilter(inputYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === yearFilter
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        currentYear={yearFilter}
        onChangeFilter={filterExpenses}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
