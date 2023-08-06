import { useEffect, useRef, useState } from "react";

type TimerArg = {
    mSeconds: number,
}

export const Timer = ({ mSeconds }: TimerArg ) => {

    const [seconds, setSeconds] = useState(0);
    const ref = useRef<NodeJS.Timeout>();

    useEffect( () => {
        console.log('useEffect')
        ref.current && clearInterval( ref.current)
        ref.current = setInterval( () => setSeconds(s => s +1), mSeconds)
    }, [mSeconds])

    return(
        <>
            <h4>Timer: <small>{ seconds }</small> </h4>
        </>
    )
};