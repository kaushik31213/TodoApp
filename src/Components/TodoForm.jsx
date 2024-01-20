import React, { useState } from "react";
import "./TodoForm.css";
import { toast } from "react-toastify";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      toast.error("Please fill input", {
        autoClose: 2000,
      });
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    addTodo(newTodo);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        className="todoForm__input"
        type="text"
        placeholder="write your todo here"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button className="todoForm__btn">Add Todo</button>
    </form>
  );
};

export default TodoForm;
