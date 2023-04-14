// this is for seperate component file from ExpenseItem.js component:-

import "./ExpenseItem.css";

function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
      <h2 className="expense-item">{props.title}</h2>
      <div className="expense-item__price ">{props.amount}</div>
      <h2>{props.LocationOfExpenditure}</h2>
    </div>
  );
}

export default ExpenseDetails;