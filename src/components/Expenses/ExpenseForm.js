import React from "react";
// import { useState } from "react";
import "../Expenses/ExpenseForm.css";

const ExpenseForm = () => {
  const changeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <form className="new-expense__controls">
        <label className="new-expense__control">Expense title :</label>
        <input
          type="text"
          onChange={changeHandler}
          className="new-expense__control"
        ></input>
        <label className="new-expense__control">Expense Amount :</label>
        <input
          type="number"
          onChange={changeHandler}
          className="new-expense__control"
        ></input>
        <label className="new-expense__control">Date :</label>
        <input
          type="date"
          onChange={changeHandler}
          className="new-expense__control"
          max="2024-12-30"
          min="2020-0-30"
        ></input>
        <button type="submit" className="new-expense__actions">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
