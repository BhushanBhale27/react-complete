//A component is react is just a function.
// special function because it reaturns JSX
import "../Expenses/ExpenseItem.css";
import Card from "../UI/Card";
import React from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenseDetails from "../Expenses/ExpenseDetails";
import { useState } from "react"; // import use state

const ExpenseItem = (props) => {
  /*The reason why the title did not update on-screen =
Because React components are designed to be immutable. Once a component is rendered, its state cannot be changed directly. Instead, we need to use the useState hook provided by React to define a state variable that can be updated and cause the component to re-render.
*/

  //USE one HOOK called: - useState();

  //useState return array in that array
  // 1st Element of that array == that variable itself
  // 2nd Element of that array == that updating function(which update content on screen)
  // bacause of it returing array we can use "array destructuring":-

  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  // console.log("Expenses states is created by React")

  const clickHandler = () => {
    setTitle("Title Changed Now");

    // window.alert("Title Changed!!!");
    console.log(title);
  };

  const changeAmountHandler = () => {
    setAmount("$100");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <ExpenseDetails
        title={title}
        amount={amount}
        LocationOfExpenditure={props.LocationOfExpenditure}
      />
      {/*  WAY 1 (not used)<button onClick={()=>{window.alert('Clicked!!')}}>Change Text</button> */}

      {/* WAY 2  */}
      <button onClick={clickHandler}>Change Text</button>
      <button onClick={changeAmountHandler}>Change Amount</button>
    </Card>
  );
};

export default ExpenseItem;
