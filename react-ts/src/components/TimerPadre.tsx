import { useState } from "react"
import { Timer } from "./Timer"

export const TimerPadre = () => {
    const [milisegundos, setMilisegundos] = useState(1000)
    return (
        <>
            <span>Miles segundo {milisegundos}</span>
            <br />
            <button className="btn btn-outline-success mt-2" onClick={() => setMilisegundos(1000)}>1000</button>
            <button className="btn btn-outline-success mt-2" onClick={() => setMilisegundos(2000)}>2000</button>
            <Timer milisegundos={milisegundos} />

        </>
    )
}
