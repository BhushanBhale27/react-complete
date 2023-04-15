import React from "react";
import { useState } from "react";
import "../Expenses/ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEntertitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Now we use one State instade of three states

  //   const [userInput, setUserInput] = useState({
  //     enterTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEntertitle(event.target.value);

    // setUserInput({
    //   ...userInput, // without this other 2 :- enteredAmount and enteredDate will be loss
    //   enterTitle: event.target.value,
    // });

    //bacause in above syntax we depend upon previous state snapshot. React schduled state update not perform instaantly
    //     setUserInput((prevState)=>{
    //         return {...prevState , enterTitle:event.target.value}

    //     });
  };

  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState)=>{
    //     return {...prevState , enteredAmount:event.target.value}

    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState)=>{
    //     return {...prevState , enteredDate:event.target.value}

    // });
  };

  const submitButtonHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title : enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)

    };

    console.log(expenseData);

  };

  return (
    <form onSubmit={submitButtonHandler}  className="new-expense__controls">
      <div>
        <label className="new-expense__control">Expense title :</label>
        <input
          type="text"
          onChange={titleChangeHandler}
          className="new-expense__control"
        ></input>
        <label className="new-expense__control">Expense Amount :</label>
        <input
          type="number"
          onChange={AmountChangeHandler}
          className="new-expense__control"
        ></input>
        <label className="new-expense__control">Date :</label>
        <input
          type="date"
          onChange={dateChangeHandler}
          className="new-expense__control"
          max="2024-12-30"
          min="2020-0-30"
        ></input>
        <button type="submit" className="new-expense__actions">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
