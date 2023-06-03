import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextObjext = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

// const TodosContext = React.createContext<{
//   items: Todo[];
//   addTodo: () => void;
//   removeTodo: (id: string) => void;
// }>({
//   items: [],
//   addTodo: () => {},
//   removeTodo: (id: string) => {},
// });

export const TodosContext = React.createContext<TodoContextObjext>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (val: string) => {
    const newTodo = new Todo(val);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  //   const contextValue: {
  //     items: Todo[];
  //     addTodo: () => void;
  //     removeTodo: (id: string) => void;
  //   } = {
  //     items: todos,
  //     addTodo: addToDoHandler,
  //     removeTodo: removeTodoHandler,
  //   };

  const contextValue: TodoContextObjext = {
    items: todos,
    addTodo: addToDoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;


