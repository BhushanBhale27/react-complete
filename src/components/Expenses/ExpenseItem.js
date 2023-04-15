//A component is react is just a function.
// special function because it reaturns JSX
import "../Expenses/ExpenseItem.css";
import Card from "../UI/Card";
import React from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenseDetails from "../Expenses/ExpenseDetails";

// function ExpenseItem(props) { OR we can use arrow function
const ExpenseItem = (props) => {
     {/* WAY 2  */}
 const clickHandler = () => {
  window.alert("Clicked!!!")
 }

  return (
    <Card className="expense-item">

     <ExpenseDate date={props.date} />

      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        LocationOfExpenditure={props.LocationOfExpenditure}
      />
      {/*  WAY 1 (not used)<button onClick={()=>{window.alert('Clicked!!')}}>Change Text</button> */}

      {/* WAY 2  */}
      <button
        onClick={clickHandler}
      >
        Change Text
      </button>
      <button>Delete Expense</button>
    </Card>
  );
};

export default ExpenseItem;
