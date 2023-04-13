// import logo from './logo.svg';
// import './App.css';
import ExpenseItem from "./components/ExpenseItem";

//Here I comment out react default code just

function App() {
  const expenses = [
    {
      title: "Food",
      amount: 10,
      date: new Date(2023, 4, 13),
      LocationOfExpenditure: "School",
    },

    {
      title: "milk",
      amount: 65,
      date: new Date(2023, 4, 11),
      LocationOfExpenditure: "Kojagiri",
    },

    {
      title: "petrol",
      amount: 120,
      date: new Date(2023, 4, 10),
      LocationOfExpenditure: "PetrolPump",
    },

    {
      title: "Hair",
      amount: 1000,
      date: new Date(2023, 4, 11),
      LocationOfExpenditure: "Saloon",
    },
  ];

  return (
    <div className="expense-item">
      <header className="App-header">
        {/* Now add custom HTML component as Capital Letter */}
        {/* Add above data in each expenseItem components */}

        {/* Apply map method to iterate each expense */}

        {expenses.map((expense) => {
           return <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            LocationOfExpenditure={expense.LocationOfExpenditure}
          ></ExpenseItem>;
        })}

        {/* <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
          LocationOfExpenditure={expenses[0].LocationOfExpenditure}
        ></ExpenseItem>

        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
          LocationOfExpenditure={expenses[1].LocationOfExpenditure}
        ></ExpenseItem>

        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
          LocationOfExpenditure={expenses[2].LocationOfExpenditure}
        ></ExpenseItem>

        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
          LocationOfExpenditure={expenses[3].LocationOfExpenditure}
        ></ExpenseItem> */}
      </header>
    </div>
  );
}

export default App;
