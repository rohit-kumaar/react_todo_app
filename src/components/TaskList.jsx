import React, { useState } from "react";

export default function TaskList({ todos, handleDeleteTodo, handleEditTodo }) {
  return (
    <ol>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Task
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleEditTodo={handleEditTodo}
            />
          </li>
        );
      })}
    </ol>
  );
}

function Task({ todo, handleDeleteTodo, handleEditTodo }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => handleEditTodo({ ...todo, done: e.target.checked })}
      />

      {isEdit ? (
        <EditTodo
          setIsEdit={setIsEdit}
          todo={todo}
          handleEditTodo={handleEditTodo}
        />
      ) : (
        <TaskTitleWithEditBtn todo={todo} setIsEdit={setIsEdit} />
      )}

      <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
    </>
  );
}

function TaskTitleWithEditBtn({ todo, setIsEdit }) {
  return (
    <span>
      <span>{todo.title}</span>
      <button onClick={() => setIsEdit(true)}>Edit</button>
    </span>
  );
}

function EditTodo({ setIsEdit, todo, handleEditTodo }) {
  return (
    <span>
      <input
        value={todo.title}
        type="text"
        onChange={(e) => handleEditTodo({ ...todo, title: e.target.value })}
      />
      <button onClick={() => setIsEdit(false)}>Save</button>
    </span>
  );
}
