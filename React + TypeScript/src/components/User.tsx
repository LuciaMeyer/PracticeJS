import { useState } from 'react';

interface User_ {
    uid: string,
    name: string,
}

export const User = () => {

    const [user, setUser] = useState<User_>();

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Lucía'
        })
    };


    return (
        <div className='mt-3' >
            <h4>Usuario: useState</h4>
            <button
                onClick={ login }
                className='btn btn-outline-primary'>
                Login
            </button>
            {
                !user 
                ? <pre className='mt-2'>No hay usuario</pre>      
                : <pre className='mt-2'> { JSON.stringify(user) } </pre>
            }
        </div>
    )
};