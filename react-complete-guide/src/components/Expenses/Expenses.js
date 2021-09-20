import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

// function Expenses(props) {
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
    // console.log(props)
  };

  const filteredExpenses = props.items.filter((expense) => {
    // return expense.date.getFullYear().toString() === filteredYear;
    return expense.date.toString().includes(filteredYear);
  });
  console.log(filteredExpenses);

  // let expensesContent = <p>No expenses found!</p>;

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense, index) => (
  //     <ExpenseItem
  //       // key={index}
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterChange={filterChangeHandler}
          className="test"
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* {expensesContent} */}
        {/* {
        filteredExpenses.length === 0 && <p>No expenses found!</p>
      }
      {
        filteredExpenses.length > 0 && filteredExpenses.map((expense, index) => (
          <ExpenseItem
          // key={index}
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />
          ))
      } */}
        {/* {
        filteredExpenses.length === 0 ? <p>No expenses found!</p> : filteredExpenses.map((expense, index) => (
          <ExpenseItem
          // key={index}
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />
          ))
      } */}
        {/* {
         filteredExpenses.map((expense, index) => (
            <ExpenseItem
            // key={index}
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
            ));
      } */}
        {/* </Card>
      <Card className="expenses"> */}
        {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem> */}
        {/* {
         props.items.map((expense, index) => (
            <ExpenseItem
            // key={index}
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
            ))
      } */}
      </Card>
    </div>
  );
};

export default Expenses;
