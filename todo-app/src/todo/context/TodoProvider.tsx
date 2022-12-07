import React, { useReducer } from "react";
import { props, TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      completed: false,
      desc: "Piedra de alarma",
    },
  ],
  completed: 0,
  pending: 2,
};

export const TodoProvider = ({ children }: props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  return (
    <TodoContext.Provider value={{ todoState }}>{children}</TodoContext.Provider>
  );
};
