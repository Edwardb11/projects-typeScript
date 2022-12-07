// import React, { useContext } from "react";
// import { TodoContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";
import { TodoItems } from "./TodoItems";

export const TodoList = () => {
  // const { todoState } = useContext(TodoContext);
  // const { todos } = todoState;
  const { todos } = useTodos();
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItems key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
