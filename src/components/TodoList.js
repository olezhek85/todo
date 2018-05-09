import React from "react";

import Todo from "./Todo";

const TodoList = props => (
  <div className="base">
    {props.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
        onToggle={() => props.onToggleTodo(todo.id)}
      />
    ))}
  </div>
);

export default TodoList;
