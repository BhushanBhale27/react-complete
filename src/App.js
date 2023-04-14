// import logo from './logo.svg';
// import './App.css';
import ExpenseItem from "./components/ExpenseItem";
import ProductOptions from "./components/ProductOptions";


//Here I comment out react default code just

function App() {
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

  const products = [
    //way 3 using props
    {
      product: "food",
      price: 256,
      date: new Date(2023, 4, 14),
    },
    {
      product: "milk",
      price: 65,
      date: new Date(2023, 4, 11),
    },
    {
      product: "petrol",
      price: 120,
      date: new Date(2023, 4, 14),
    },
    {
      product: "hair",
      price: 1500,
      date: new Date(2023, 4, 10),
    },
  ];

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
            ></ExpenseItem>
          );
        })}

        {/* Apply map method to iterate each product */}
        {products.map((item) => {
          return (
            <ProductOptions
              product={item.product}
              price={item.price}
              date={item.date}
            ></ProductOptions>
          );
        })}

        {/* for below code we can use .map method to DRY */}
        {/* <ProductOptions
          product={products[0].product}
          amount={products[0].amount}
        ></ProductOptions>
        <ProductOptions product={products[1].product}></ProductOptions>
        <ProductOptions product={products[2].product}></ProductOptions>
        <ProductOptions product={products[3].product}></ProductOptions> */}

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
