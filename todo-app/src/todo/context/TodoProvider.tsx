import React from "react";
import { props, TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";

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
  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};
