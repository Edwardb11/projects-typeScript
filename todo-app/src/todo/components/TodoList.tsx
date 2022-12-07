import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoItems } from "./TodoItems";

export const TodoList = () => {
  const { todoState } = useContext(TodoContext);
  console.log(todoState);
  const { todos } = todoState;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItems todo={todo} />
      ))}
    </ul>
  );
};
