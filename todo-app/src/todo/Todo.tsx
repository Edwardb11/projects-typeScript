import { TodoList } from "./components/TodoList"
import { TodoProvider } from "./context/TodoProvider"

export const Todo = () => {
  return (
    <TodoProvider>
    
   <h1>
   Todo:
       </h1> 
 <TodoList/>
    </TodoProvider>
  )
}
