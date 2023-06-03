import React, { useContext } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todo-context";

// function Todos(props: { items: string[] }){
// const Todos: React.FC<{ items: string[] }> = (props) => {
// const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
//   props
// ) => {
const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {/* <li>Learn React</li>
            <li>Learn Typescript</li> */}
      {/* {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoItem
          key={item.id}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        >
          {item.text}
        </TodoItem>
      ))} */}

      {todoCtx.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoItem
          key={item.id}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        >
          {item.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
