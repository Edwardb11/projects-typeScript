import { useState } from "react"
interface User {
    uid: string;
    name: string;
  }
  
//   const tempUser:User={
//       uid:"AHJHSJ",
//       name:"ajdj"
//   }
export const Usuario = () => {
    const [user, setUser] = useState<User>()
    const login =()=>{
        setUser({
            uid:"ABC123",
            name:"Edward Brito"
        })
    }
  return (
    <div className="mt-5">
        <h3>Usuarios: useStates</h3>
        <button className="btn btn-outline-primary mt-2" onClick={login}>
            login
        </button>
        {(!user)? <pre className="text-white">No hay usuarios</pre>: <pre className="text-white">{JSON.stringify(user)}</pre>}

    </div>
  )
}
