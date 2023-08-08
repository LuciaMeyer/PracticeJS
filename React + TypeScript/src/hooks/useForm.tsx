import { useState, ChangeEvent } from "react";

// función común
// export function useForm<T> ( initState:T ) { 

// función flecha
export const useForm = <T extends Object>( initState:T ) => {    
    const [form, setForm] = useState(initState);

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    return {
        form,
        handleForm
    }
};