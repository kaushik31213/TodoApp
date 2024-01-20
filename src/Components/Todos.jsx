import React from "react";
import Todo from "./Todo";
import "./Todos.css";

const Todos = ({ todos, toggleCompleted, removeTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            {...todo}
            key={todo.id}
            removeTodo={removeTodo}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </div>
  );
};

export default Todos;
