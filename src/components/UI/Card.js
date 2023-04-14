import "./Card.css";
import React from "react";

const Card = (props) =>{
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

//props.children contains the value will always be the content bwtween the opening and closing tag of custom main component.....
// We got our components but they are missed placed to make them nice we have to add ExpenseItem CSS className to this file

