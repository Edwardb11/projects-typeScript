import React from "react";
import { TodoContext } from "./TodoContext";

interface props {
    children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
    return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};
