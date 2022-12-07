import { TodoProvider } from "./context/TodoProvider"

export const Todo = () => {
  return (
    <TodoProvider>
    
   <h1>
   Todo:
       </h1> 
       <ul>
         <li>TODO</li>
         <li>TODO</li>
         <li>TODO</li>
         <li>TODO</li>
       </ul>
    </TodoProvider>
  )
}
