import { useReducer } from "react"

const initialState = {
    contador: 0
}
type ActionType = | {

    type: 'Incrementar'
}
    | {

        type: 'Descrementar'
    }
    | {

        type: 'Custom', payload: number
    }

const contadorReducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case 'Incrementar':
            return {
                ...state, contador: state.contador + 1
            }
        case 'Descrementar':
            return {
                ...state, contador: state.contador - 1
            }
        case 'Custom':
            return {
                ...state, contador: action.payload
            }

        default:
            return state
    }
}

export const ContadorRed = () => {
    const [contadorState, dispatch] = useReducer(contadorReducer, initialState)
    return (
        <>
            <h2> Contador: {contadorState.contador}</h2>
            <button onClick={() => dispatch({ type: 'Incrementar' })} className="btn btn-outline-primary mt-2">
                +1
            </button>
            <button onClick={() => dispatch({ type: 'Descrementar' })} className="btn btn-outline-primary mt-2">
                -1
            </button>
            <button onClick={() => dispatch({ type: 'Custom', payload: 100 })} className="btn btn-outline-danger mt-2">
                100
            </button>
        </>
    )
} 
