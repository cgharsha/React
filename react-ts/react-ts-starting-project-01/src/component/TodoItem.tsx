import React from "react";
import classes from './TodoItem.module.css'

type TodoItemProps = {
  children?: React.ReactNode;
  onRemoveTodo?: () => void
};

// const TodoItem: React.FC<{TodoItemProps}> = (props) => {
const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { children } = props;
  return <li className={classes.item} onClick={props.onRemoveTodo}>{children}</li>;
};

export default TodoItem;
