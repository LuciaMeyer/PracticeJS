import React from 'react';
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { TodoItems } from './TodoItems';


export const TodoList = () => {

  const { todoState } = useContext( TodoContext );
//   console.log(todoState)
    
  return (
    <ul className='list-group'>
        {
          todoState.todos.map( t => <TodoItems key={t.id} todo={ t }/>)
        }


    </ul>
  );
};

// <React.Fragment key={t.id}>
//     <li>n°: {t.id}</li>
//     <li>Descripción: {t.desc}</li>
//     <li>Completed: {t.completed}</li>
//     <hr />
// </React.Fragment>  