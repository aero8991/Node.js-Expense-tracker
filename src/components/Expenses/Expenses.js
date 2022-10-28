import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [dateSelected, setdateSelected] = useState("2021");
  const addFilterEvent = (year) => {
    setdateSelected(year);
  };

  // const dropDownHandler = (year) =>{
  //   console.log(year)
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={dateSelected}
          onFilterSelect={addFilterEvent}
          if 
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
