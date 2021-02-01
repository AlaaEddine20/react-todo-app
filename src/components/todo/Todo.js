import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

const Todo = ({ text, todo, id, todos, setTodos }) => {
  // Handler
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const handleComplete = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            isCompleted: !el.isCompleted, // Use "not" to toggle the btn everytime i click
          };
        }
        return el;
      })
    );
  };

  return (
    <div id="todo-container" className="row mt-5">
      <li className={`col col-7 ${todo.isCompleted ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={handleComplete} className="col mr-1" id="todo-completed">
        <CheckIcon />
      </button>
      <button onClick={handleDelete} className="col" id="delete-todo">
        <DeleteForeverIcon />
      </button>
    </div>
  );
};

export default Todo;
