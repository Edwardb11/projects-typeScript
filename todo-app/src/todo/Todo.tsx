import { TItle } from "./components/TItle";
import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./context/TodoProvider";

export const Todo = () => {
  return (
    <TodoProvider>
      <TItle/>
      <TodoList />
    </TodoProvider>
  );
};
