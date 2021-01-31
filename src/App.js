import React, { useState } from "react";
import TodoForm from "./components/form/TodoForm";
import TodoList from "./components/list/TodoList";
import "./App.css";

function App() {
  // Hooks
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

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
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
