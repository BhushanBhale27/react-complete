import "./ExpenseItem.css";

function ProductOptions(props) {  //way 3 :- using props
  // way 1 hard code data.
  //way 2 of passing data:- using variables
//   const productName = "Buy Car";
//   const price = 1023652;
//   const date = new Date(2023, 4, 14);

  return (
    <div>
      <label>Select Product :</label>
      <select>
        <option>Food</option>
        <option>Milk</option>
        <option>Petrol</option>
        <option>Hair</option>
      </select>
      <h3>Product Name :{props.product}</h3>
      <h3>Price :{props.price}</h3>
      <h3>date :{props.date.toISOString()}</h3>
    </div>
  );
}

export default ProductOptions;
