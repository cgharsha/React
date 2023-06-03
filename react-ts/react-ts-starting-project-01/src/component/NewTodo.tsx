import { useContext, useRef } from "react";

import style from "./NewTodo.module.css";
import { TodosContext } from "../store/todo-context";

// const NewTodo: React.FC<{onAddTodo: (val: string) => void}> = (props) => {
const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log(todoTextInputRef.current?.value);
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    // props.onAddTodo(enteredText)
    todoCtx.addTodo(enteredText);
  };

  const todoCtx = useContext(TodosContext);

  return (
    <>
      {/* <div>Form</div> */}
      <form onSubmit={submitHandler} className={style.form}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default NewTodo;
