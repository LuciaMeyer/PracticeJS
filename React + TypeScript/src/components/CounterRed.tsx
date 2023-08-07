import { useReducer } from 'react';

// Lo más óptimo es separar cada elemento del reducer en una carpeta con sus respectivos nombres, como es un ejemplo simple y el objetivo principal es usar TypeScript, lo voy a dejar todo en este documento.

const initialState = {
    counter: 0
};

type ActionType =
    | { type: 'incrementar' }
    | { type: 'decrementar' }
    | { type: 'custom', payload: number }


const counterReducer = ( state: typeof initialState, action: ActionType) => {    
        switch (action.type) {
            case 'incrementar':
                return {
                    ...state,
                    counter: state.counter +1
                }   
            case 'decrementar':
                return {
                    ...state,
                    counter: state.counter -1
                }
            case 'custom':
                return {
                    ...state,
                    counter: action.payload
                }             
            default:
                return state;
        }  
};


export const CounterReducer = () => {


    const [counterState, dispatch] = useReducer(counterReducer, initialState)
    
    return (
       <>
        <h4>Contador: { counterState.counter }</h4>
        <button
            className='btn btn-outline-primary'
            onClick={ () => dispatch({ type: 'incrementar' }) }>
         +1   
        </button>
        <button
            className='btn btn-outline-primary'
            onClick={ () => dispatch({ type: 'decrementar' }) }>
         -1   
        </button>
        <button
            className='btn btn-outline-primary'
            onClick={ () => dispatch({ type: 'custom', payload: 100 }) }>
         100   
        </button>
       </> 
    )
};