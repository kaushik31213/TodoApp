import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Learn JavaScript",
      completed: true,
    },
  ]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function removeTodo(id) {
    setTodos((prevState) => {
      return prevState.filter((todo) => {
        return todo.id != id;
      });
    });
  }

  function toggleCompleted(id) {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  }

  return (
    <div className="container">
      <ToastContainer />
      <h1 className="main__title">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
