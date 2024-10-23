import React, { useState } from "react";

export default function AddTodo({ handleAddTodo }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim()) {
      handleAddTodo(title);
      setTitle("");
    } else {
      alert("Please add todo");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Enter todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
