import React, { useState } from "react";

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  // Controlled Components and Uncontrolled Components
  const classes = "expenses-filter " + props.className;
  // const [enteredYear, setEnteredYear] = useState('');

  const dropdownChangeHandler = (event) => {
    // console.log(event.target.value)
    props.onFilterChange(event.target.value);
  }
    return (
        <div className={classes}>
          <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select value={props.selectedYear} onChange={dropdownChangeHandler}>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
              <option value='2019'>2019</option>
            </select>
          </div>
        </div>
      );
};

export default ExpensesFilter;