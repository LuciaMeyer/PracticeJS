import { TodoProvider } from "../../context/TodoProvider";
import { TodoList } from "./TodoList";


export const Todo = () => {
    return (
        <TodoProvider>
            <br />
            <h5>Lista de Tareas:</h5>
            <TodoList/>
        </TodoProvider>
    )
};