
const initialState = {
    counter: 0
};

type ActionType = {
    type: 'incrementar'
}

const counterReducer = ( state: typeof initialState, action: ActionType) => {    
        switch (action.type) {
            case 'incrementar':
                return {
                    ...state,
                    counter: state.counter +1
                }
        
            default:
                return state;
        }  
};


export const CounterRed = () => {

    
    return (
       <>
        <h4>Contador: 10</h4>
       </> 
    )
};