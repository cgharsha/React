import React, { useState, useRef } from "react";
import Wrappers from "../Helpers/Wrappers";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  //   const [enteredUsername, setEnteredUserName] = useState("");
  //   const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredUsername: "",
  //   enteredAge: "",
  // });

  // const usernameChangeHandler = (event) => {
  //   // setEnteredUserName(event.target.value);
  //   setUserInput((prevState) => {
  //     return {
  //       ...prevState,
  //       enteredUsername: event.target.value,
  //     };
  //   });
  // };

  // const ageChangeHandler = (event) => {
  //   // enteredUserAge(event.target.value);
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredAge: event.target.value };
  //   });
  // };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    // if (
    //   userInput.enteredUsername.trim().length === 0 ||
    //   userInput.enteredAge.trim().length === 0
    // ) {
    //   setError({
    //     title: "Invalid input",
    //     message: "Please enter a valid name and age (non-empty values).",
    //   });
    //   return;
    // }
    // if (+userInput.enteredAge < 1) {
    //   setError({
    //     title: "Invalid age",
    //     message: "Please enter a valid age (> 0).",
    //   });
    //   return;
    // }
    // if (
    //   enteredUsername.trim().length === 0 ||
    //   enteredUserAge.trim().length === 0
    // ) {
    //   return;
    // }
    // if (+enteredAge < 1) {
    //   return;
    // }
    // console.log(userInput);
    // props.onAddUser(userInput.enteredUsername, userInput.enteredUserAge);
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    // console.log(enteredUsername, enteredUserAge);
    // setUserInput(() => {
    //   return {
    //     enteredUsername: "",
    //     enteredAge: "",
    //   };
    // });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrappers>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          {/* <input id="username" value={enteredUsername}  type="text" onChange={usernameChangeHandler} /> */}
          {/* <input
            id="username"
            value={userInput.enteredUsername}
            type="text"
            onChange={usernameChangeHandler}
            ref={nameInputRef}
          /> */}
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          {/* <input id="age" value={enteredUserAge}  type="number" onChange={ageChangeHandler} /> */}
          {/* <input
            id="age"
            value={userInput.enteredAge}
            type="number"
            onChange={ageChangeHandler}
            ref={ageInputRef}
          /> */}
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrappers>
  );
};

export default AddUser;
