import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "../Expenses/Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const FilteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // Way 3 of conditional rebdering
  // let expensesCount = <p>No expenses found</p>;

  // if (FilteredExpenses.length > 0) {
  //   expensesCount = FilteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* method 1 of conditional rendering using ternary operator */}
        {FilteredExpenses.length === 1 ? (
          <p>Only single Expense here. Please add more...</p>
        ) : (
          FilteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}

        {/* method 2 of conditional rendering using && USE THIS METHOD */}

        {/* {expensesCount} */}
      </Card>
    </div>
  );
};

export default Expenses;
