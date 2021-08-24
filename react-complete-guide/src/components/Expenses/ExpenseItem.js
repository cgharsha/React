import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  // let title = props.title;
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
    // console.log("Clicked!!!!");
    // title = 'Update';
  }

  // function clickHandler(){
  //   console.log("Clicked!!!!")
  // }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={() => {console.log('Clicked!')}}>Change Title</button> */}
        <button onClick={clickHandler}>Change Title</button> 
      </div>
    </Card>
  );
}

export default ExpenseItem;
