import { useForm } from '../hooks/useForm'

interface FormData {
    email: string,
    name: string,
    age: number
}


export const Form = () => {

// el CustomHook nos sirve para reutilizar código para que los componentes queden sencillos

    const { form, handleInput} = useForm<FormData> ({
        email: 'lucia@email.com',
        name: 'Lucía',
        age: 36
    });

    return (
        <form autoComplete='off'>

            <div className='mb-3'>
                <label className='form-label'>Email:</label>
                <input
                    type='email'
                    className='form-control'
                    name='email'
                    // value={ form.email }
                    placeholder={ form.email }
                    onChange={handleInput}
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Nombre:</label>
                <input
                    type='text'
                    className='form-control'
                    name='name'
                    // value={ form.name }
                    placeholder={ form.name }
                    onChange={handleInput}
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Edad:</label>
                <input
                    type='number'
                    className='form-control'
                    name='age'
                    value={ form.age }
                    // placeholder={ form.age }
                    onChange={handleInput}
                />
            </div>

            <pre>{ JSON.stringify(form) }</pre>



        </form>
    )
};