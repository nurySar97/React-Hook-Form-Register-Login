import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import EmailUsernameItem from './EmailUsernameItem';
import PasswordItem from './PasswordItem';


export default function Default() {
    const { register, handleSubmit, errors } = useForm({})
    const [isActive, setIsActive] = useState({})
    
    let onHandleSubmit = formData => {
        console.log(formData)
    }
    return (
        <div className='login'>
            <form
                className='login__form'
                autoComplete='off'
                onSubmit={handleSubmit(onHandleSubmit)}
            >

                <EmailUsernameItem
                    setIsActive={setIsActive}
                    errors={errors}
                    isActive={isActive}
                    register={register}
                />

                <PasswordItem
                    setIsActive={setIsActive}
                    errors={errors}
                    isActive={isActive}
                    register={register}
                />

                <div className='login__item login__item--forgot'>
                    <a className='login__forgot' href="/">Forgot Password</a>
                </div>

                <button className='login__submit-button' type='submit'>Login</button>
            </form>
        </div>
    )
}