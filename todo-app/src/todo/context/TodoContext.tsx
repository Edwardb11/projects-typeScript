import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

export type TodoContextPros = {
  todoState: TodoState;
};
export const TodoContext = createContext<TodoContextPros>(
  {} as TodoContextPros
);
