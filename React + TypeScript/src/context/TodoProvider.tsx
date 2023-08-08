import { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { TodoState } from "../interface/interface";
import { TodoReducer } from "./Todo.Reducer";

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Tomar agua',
            completed: false
        },
        {
            id: '2',
            desc: 'Hacer ejercicio',
            completed: false
        },
        {
            id: '3',
            desc: 'Leer un poco',
            completed: false
        },
        {
            id: '4',
            desc: 'Visitar a los sobris',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
};

interface props {
    children: JSX.Element | JSX.Element[] 
};

export const TodoProvider = ({ children }: props) => {

    const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

    const toggleTodo = ( id: string ) => {
        dispatch({ type:"toggleTodo", payload: {id} })
    };

    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            { children }
        </TodoContext.Provider>
    )
};