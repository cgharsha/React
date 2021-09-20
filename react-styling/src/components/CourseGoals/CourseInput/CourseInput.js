import React, { useState } from "react";
import styles from './CourseInput.module.css'

import Button from "../../UI/Button/Button";


const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // const content = '"' + "https://storage.cloud.google.com/db_input_data/Trigger_action_reports/Report.pdf" + '"';

  return (
    <form onSubmit={formSubmitHandler}>
      
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "#ccc",
            backgroundColor: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        /> */}
      </div>
     
      <Button type="submit">Add Goal</Button>
      {/* <a href={`${content.replace(/^["'](.+(?=["']$))["']$/, '$1')}`}>Click</a> */}
      {/* <a href={`${content.slice(1, -1)}`}>Click</a> */}
    </form>
  );
};

export default CourseInput;
