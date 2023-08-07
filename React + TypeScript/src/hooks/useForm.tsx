import { useState, ChangeEvent } from "react";


export function useForm<T> (initState:T) {

    const [form, setForm] = useState(initState);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    return {
        form,
        handleInput
    }
};