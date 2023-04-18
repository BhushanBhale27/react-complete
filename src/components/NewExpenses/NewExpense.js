import React, { useState } from "react";
import ExpenseForm from "../NewExpenses/ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveEnteredDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () =>{
    setIsEditing(false)
  }
  return (
    <div>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add More Expenses</button>
      )}
      {isEditing && <ExpenseForm onSaveEnteredData={onSaveEnteredDataHandler} onCancle = {stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
