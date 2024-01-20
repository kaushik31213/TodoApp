import React from "react";
import "./Todo.css";
import { ImCross } from "react-icons/im";

const Todo = ({ id, completed, title, toggleCompleted, removeTodo }) => {
  return (
    <div className="todo">
      <div className="todo__title">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            toggleCompleted(id);
          }}
        />
        <p className={`${completed ? "completed" : ""}`}>{title}</p>
      </div>
      <div className="cross__btn" onClick={() => removeTodo(id)}>
        <ImCross />
      </div>
    </div>
  );
};

export default Todo;
