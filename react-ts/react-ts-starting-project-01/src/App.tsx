import { useState } from "react";
import "./App.css";
import NewTodo from "./component/NewTodo";
import Todos from "./component/Todos";
import Todo from "./models/todo";
import TodosContextProvider from "./store/todo-context";

function App() {
  // const [todos, setTodos] = useState<Todo[]>([])
  // // const todos = [
  // //   new Todo('Learn React'),
  // //   new Todo('Learn Typescript')
  // // ]

  // const addToDoHandler = (val: string) => {
  //   console.log(val)

  //   const newTodo = new Todo(val);

  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo)
  //   })
  // }

  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter(todo => todo.id !== todoId)
  //   })
  // }

  return (
    <div>
      {/* <Todos items={["Learn React", "Learn Typescript"]} /> */}
      {/* <Todos items={todos} onRemoveTodo={removeTodoHandler} />
      <NewTodo onAddTodo={addToDoHandler} /> */}

      <TodosContextProvider>
      <Todos />
      <NewTodo />
      </TodosContextProvider>
    </div>
  );
}

export default App;
