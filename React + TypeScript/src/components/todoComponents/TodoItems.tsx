import { useContext } from 'react';
import { Todo } from '../../interface/interface';
import { TodoContext } from '../../context/TodoContext';


interface props {
    todo: Todo
}

export const TodoItems = ({ todo }: props) => {

    const { toggleTodo } = useContext( TodoContext )

    const handleClick = () => {
        // console.log(todo.desc, todo.id)
        toggleTodo(todo.id)
    };

    return (
        <li
            style={{ cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : ''}}
            className='list-group-item list-group-item-dark'
            onClick={ handleClick}
        >
            { todo.desc }
        </li>
    )
};