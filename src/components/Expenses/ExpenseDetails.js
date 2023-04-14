// this is for seperate component file from ExpenseItem.js component:-

import Card from "../UI/Card";
import "./ExpenseItem.css";
import React from "react";

const ExpenseDetails = (props) => {
  return (
    <Card className="expense-item__description">
      <h2 className="expense-item">{props.title}</h2>
      <div className="expense-item__price ">{props.amount}</div>
      <h2>{props.LocationOfExpenditure}</h2>
    </Card>
  );
}

export default ExpenseDetails;