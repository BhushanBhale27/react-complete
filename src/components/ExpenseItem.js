//A component is react is just a function.
// special function because it reaturns JSX
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {
  // Way 3 using props

  //use js variables

  // Way 2:-
  // no use of below variables because props
  // const expenseDate = new Date(2023, 4, 13);
  //   const expenseTitle1 = "Food";
  //   const expenseTitle2 = "Milk";
  //   const expenseTitle3 = "Petrol";
  //   const expenseAmount1 = 10;
  //   const expenseAmount2 = 100;
  //   const expenseAmount3 = 250;
  //   const LocationOfExpenditure = "School";


  // we make seperate component for this hence commented out
  // const month = props.date.toLocaleString("en-US", { month: "long" })
  // const day = props.date.toLocaleString("en-US",{day:"2-digit"});
  // const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      {/* <div> */}
        {/* ABOVE is main div for Date WE NEED TO MAKE SEPERATE COMPONENT FOR THIS DATE DIV*/}
        {/* <div>{day}</div> div for day */}
        {/* <div>{month}</div>
        <div>{year}</div>
      </div> */}

      {/* <ExpenseDate></ExpenseDate>  */}

      {/* OR if we not write content between this component tag then we can use it as BELOW*/}

      <ExpenseDate date={props.date}/>

      {/* <div className="expense-item__description">
        <h2 className="expense-item">{props.title}</h2>
        <div className="expense-item__price ">{props.amount}</div>
        <h2>{props.LocationOfExpenditure}</h2>
      </div> */}
  
      {/* we split above code into new component */}
      <ExpenseDetails title = {props.title} amount={props.amount} LocationOfExpenditure={props.LocationOfExpenditure} />
    </div>
  );
}

export default ExpenseItem;
