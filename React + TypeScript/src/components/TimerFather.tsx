import { useState } from 'react';
import { Timer } from './Timer';


export const TimerFather = () => {

    const [mSeconds, setMseconds] = useState(1000);

    return(
        <>
            <span>Milisegundos {mSeconds} </span>
            <br />
            <button
                onClick={() => setMseconds(1000)}
                className='btn btn-outline-success mt-2'>
                1000
            </button>
            <button
                onClick={() => setMseconds(2000)}
                className='btn btn-outline-success mt-2'>
                2000
            </button>
            <button
                onClick={() => setMseconds(2000)}
                className='btn btn-outline-success mt-2'>
                3000
            </button>
            <div className='mt-2'>
                <Timer mSeconds={ mSeconds }/>
            </div>
            
        </>
    )
};