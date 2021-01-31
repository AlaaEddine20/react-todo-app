import React from "react";
import Todo from "../todo/Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div id="todo-list-container">
      <ul className="item">
        {todos.map((todo) => (
          <Todo
            id={todo.id}
            todo={todo}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
