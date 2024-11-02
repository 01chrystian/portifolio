import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import './EmailForm.css';

const EmailForm = () => {
    const form = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Formato de e-mail inválido!')
                .required('Campo obrigatório!'),
        }),
        onSubmit: (data) => {
            alert(JSON.stringify(data, null, 2));
        },
    });

    return (
        <div className='email-form-container'>
            <form onSubmit={form.handleSubmit}>
                <label htmlFor='email' className='email-form-label'>E-mail</label>
                <input
                    id='email'
                    name='email'
                    type='email'
                    className={`email-form-input ${form.touched.email && form.errors.email ? 'has-error' : ''}`}
                    onChange={form.handleChange}
                    value={form.values.email}
                />
                {form.touched.email && form.errors.email && (
                    <div className='email-error'>{form.errors.email}</div>
                )}
                <button type='submit' className='submit-btn'>Enviar</button>
            </form>
        </div>
    );
};

export default EmailForm;
