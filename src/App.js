import React, { useState, useEffect } from "react";
import TodoForm from "./components/form/TodoForm";
import TodoList from "./components/list/TodoList";
import "./App.css";

function App() {
  // Hooks
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // save data
  useEffect(() => {
    getLocalData();
  }, []);

  // useEffect
  useEffect(() => {
    handleFilter();
    saveData();
  }, [todos, status]); // need to render todos and status everytime i change the value of them instead of rendering on page load

  // Handle Filter
  const handleFilter = () => {
    if (status === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.isCompleted === true));
    } else if (status === "uncompleted") {
      setFilteredTodos(todos.filter((todo) => todo.isCompleted === false));
    } else {
      setFilteredTodos(todos);
    }
  };

  // Save my todos in local
  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // get my local todos
  const getLocalData = () => {
    if (localStorage.getItem("todos" === null)) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localData = JSON.parse(localStorage.getItem("todos"));
      setTodos(localData);
    }
  };

  return (
    <div className="App">
      <div id="title-container">
        <h1>Keep Climbing</h1>
      </div>

      <TodoForm
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
