//A component is react is just a function.
// special function because it reaturns JSX
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //use js variables

  // no use of below variables because props
  // const expenseDate = new Date(2023, 4, 13);
  //   const expenseTitle1 = "Food";
  //   const expenseTitle2 = "Milk";
  //   const expenseTitle3 = "Petrol";
  //   const expenseAmount1 = 10;
  //   const expenseAmount2 = 100;
  //   const expenseAmount3 = 250;
  //   const LocationOfExpenditure = "School";

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2 className="expense-item">{props.title}</h2>
        <div className="expense-item__price ">{props.amount}</div>
        <h2>{props.LocationOfExpenditure}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
