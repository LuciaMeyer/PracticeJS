import { useForm } from '../hooks/useForm'

interface FormData2 {
    city: string,
    postal: number,
}

export const Form2 = () => {

    const { form, handleForm } = useForm<FormData2>({
        city: 'Rosario',
        postal: 2000
    });

    return(
        <form autoComplete='off'> 

            <div className='mb-3'>
                <label className='form-label'>Ciudad:</label>
                <input
                    type='text'
                    className='form-control'
                    onChange={handleForm}
                    name='city'
                    // value={form.city}
                    placeholder={form.city}
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Código Postal:</label>
                <input
                    type='number'
                    className='form-control'
                    onChange={handleForm}
                    name='postal'
                    // value={form.postal}
                    placeholder={form.postal.toString()}
                />
            </div>

            <pre>{ JSON.stringify(form) }</pre>

        </form>
    )
};