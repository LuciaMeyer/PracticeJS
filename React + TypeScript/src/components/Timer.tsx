import { useEffect, useRef, useState } from "react";

type TimerArg = {
    mSeconds: number,
}

export const Timer = ({ mSeconds }: TimerArg ) => {

    const [seconds, setSeconds] = useState(0);
    const ref = useRef<NodeJS.Timeout>();

    useEffect( () => {
        ref.current && clearInterval( ref.current)
        ref.current = setInterval( () => setSeconds(s => s +1), mSeconds)
    }, [mSeconds])

    const resetSeconds = () => {
        setSeconds(0)
    };

    return(
        <>
            <h4>Timer: <small>{ seconds }</small> </h4>
            <button
                onClick={resetSeconds}
                className='btn btn-outline-danger mt-2'
                >Reset
            </button>
        </>
    )
};