import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteretedTitle] = useState('');
  const [enteredAmount, setEnteretedAmount] = useState('');
  const [enteredDate, setEnteretedDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteretedTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteretedAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteretedDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDataObject = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseDataObject)
    setEnteretedTitle('');
    setEnteretedAmount('');
    setEnteretedDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
