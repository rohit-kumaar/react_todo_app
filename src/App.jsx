import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TaskList from "./components/TaskList";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([...todos, { id: nextId++, title: title, done: false }]);
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleEditTodo(updateTitle) {
    setTodos(
      todos.map((todo) => (todo.id === updateTitle.id ? updateTitle : todo))
    );
  }

  return (
    <>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}
