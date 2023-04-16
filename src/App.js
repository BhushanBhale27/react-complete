// import logo from './logo.svg';
// import './App.css';
import ExpenseItem from "../src/components/Expenses/ExpenseItem";
// import ProductOptions from "./components/Expenses/ProductOptions";
// import ExpenseForm from "./components/Expenses/ExpenseForm";
import NewExpense from "../src/components/NewExpenses/NewExpense";
import React from "react";


//Here I comment out react default code just

const App = () => { 
  const expenses = [
    //way 3 using props
    {
      title: "Food",
      amount: 10,
      date: new Date(2023, 0, 13),  // 0 means january
      LocationOfExpenditure: "School",
    },

    {
      title: "milk",
      amount: 65,
      date: new Date(2023, 3, 11),
      LocationOfExpenditure: "Kojagiri",
    },

    {
      title: "petrol",
      amount: 120,
      date: new Date(2023, 3, 10),
      LocationOfExpenditure: "PetrolPump",
    },

    {
      title: "Hair",
      amount: 1000,
      date: new Date(2023, 3, 11),
      LocationOfExpenditure: "Saloon",
    },
  ];

  // const products = [
  //   //way 3 using props
  //   {
  //     product: "food",
  //     price: 256,
  //     date: new Date(2023, 4, 14),
  //   },
  //   {
  //     product: "milk",
  //     price: 65,
  //     date: new Date(2023, 4, 11),
  //   },
  //   {
  //     product: "petrol",
  //     price: 120,
  //     date: new Date(2023, 4, 14),
  //   },
  //   {
  //     product: "hair",
  //     price: 1500,
  //     date: new Date(2023, 4, 10),
  //   },
  // ];

  const addExpenseHandler = expense => {
    console.log("in app.js");
    console.log(expense);
  }

  return (
    <div className="expense-item">
      <header className="App-header">
        {/* Now add custom HTML component as Capital Letter */}
        {/* Add above data in each expenseItem components */}

        {/* Apply map method to iterate each expense */}

        {expenses.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              LocationOfExpenditure={expense.LocationOfExpenditure}
            />
          );
        })}

        {/* Apply map method to iterate each product */}
        {/* {products.map((item) => {
          return (
            <ProductOptions
              product={item.product}
              price={item.price}
              date={item.date}
            />
          );
        })} */}

        <NewExpense onAddExpense = {addExpenseHandler} />

      </header>
    </div>
  );
}

export default App;
