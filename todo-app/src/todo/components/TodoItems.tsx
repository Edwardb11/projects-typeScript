import { TodoItemsProps } from "../interfaces/interfaces";

export const TodoItems = ({ todo }: TodoItemsProps) => {
  return <li>{todo.desc}</li>;
};
