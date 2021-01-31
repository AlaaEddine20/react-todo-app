import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

const Todo = ({ text, todo, id, todos, setTodos }) => {
  // Handler
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            completed: !el.completed, // Use "not" to toggle the btn everytime i click
          };
        }
        return el;
      })
    );
  };

  return (
    <div id="todo-container" className="row d-flex">
      <li className={`col col-7 ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button
        onClick={completedHandler}
        className="col col-2 mr-1"
        id="todo-completed"
      >
        <CheckIcon />
      </button>
      <button onClick={deleteHandler} className="col col-2" id="delete-todo">
        <DeleteForeverIcon />
      </button>
    </div>
  );
};

export default Todo;
