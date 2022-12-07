import { useTodos } from "../hooks/useTodos";

export const TItle = () => {
  const { pendingTodos } = useTodos();
  return <h1>Todos:{pendingTodos}</h1>;
};
