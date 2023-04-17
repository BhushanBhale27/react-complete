import React , {useState} from "react";
import NewExpense from "../src/components/NewExpenses/NewExpense";
import Expenses from "../src/components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id:"e1",
    title: "Food",
    amount: 10,
    date: new Date(2023, 0, 13), // 0 means january
  },

  {
    id:"e2",
    title: "milk",
    amount: 65,
    date: new Date(2023, 3, 11),
  },

  {
    id:"e3",
    title: "petrol",
    amount: 120,
    date: new Date(2023, 3, 10),
  },

  {
    id:"e4",
    title: "Hair",
    amount: 1000,
    date: new Date(2023, 3, 11),
  },
];



const App = () => {
  const [expenses , setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) =>{
      return [expense,...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
