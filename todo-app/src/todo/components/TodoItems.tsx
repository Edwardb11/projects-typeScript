// import { useContext } from "react";
// import { TodoContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";
import { TodoItemsProps } from "../interfaces/interfaces";

export const TodoItems = ({ todo }: TodoItemsProps) => {
  // const { toggleTodo } = useContext(TodoContext);
  // const handleClik = () => {
  //   toggleTodo(todo.id);
  // };
  const { toggleTodo } = useTodos();
  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      onDoubleClick={() => toggleTodo(todo.id)}>
      {todo.desc}
    </li>
  );
};
