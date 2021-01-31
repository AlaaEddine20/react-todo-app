import React from "react";
import uuid from "react-uuid";
import { TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../App.css";

const TodoForm = ({ input, setInput, todos, setTodos }) => {
  //
  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: input, completed: false, id: uuid() }]); // Copy all my todos and sending a new one to the array of todos
    setInput(""); // Reset the input from the state then in input element pass the value to reset the ui
  };
  //
  // Input handler
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  // Render
  return (
    <>
      <div id="form-container" className="container">
        <form className="row todo-form" onSubmit={handleSubmit}>
          <TextField
            onChange={inputHandler}
            value={input} // Here i reset the ui when i click submit bottom
            type="text"
            label="What are your plans for today?"
            className="col col-6 mx-2 todo-form-input"
            color="primary"
          />
          <button className="col col-2" id="addTodo-btn" type="submit">
            <AddIcon />
          </button>
          <select
            className="col col-2 mx-2"
            name="todo-list"
            id="filter-options"
          >
            <option value="all"> All </option>
            <option value="uncompleted"> Uncompleted </option>
            <option value="completed"> Completed </option>
          </select>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
