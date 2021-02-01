import React from "react";
import Todo from "../todo/Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <>
      <ul className="item">
        {filteredTodos.map((todo) => (
          <Todo
            id={todo.id}
            todo={todo}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
