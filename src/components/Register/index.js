import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import EmailItem from './EmailItem';
import PasswordItem from './PasswordItem';
import UsernameItem from './UsernameItem';
import AcceptCondition from './AcceptCondition';

export default function Default() {
    const { register, handleSubmit, errors } = useForm({})
    const [isActive, setIsActive] = useState({})
    let onHandleSubmit = formData => console.log(formData)


    return (
        <div className='register' style={{ marginTop: 100 }}>
            <form
                className='register__form'
                autoComplete='off'
                onSubmit={handleSubmit(onHandleSubmit)}
            >

                <UsernameItem
                    setIsActive={setIsActive}
                    errors={errors}
                    isActive={isActive}
                    register={register}
                />

                <EmailItem
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

                <AcceptCondition
                    setIsActive={setIsActive}
                    errors={errors}
                    isActive={isActive}
                    register={register}
                />

                <button className='register__submit-button' type='submit'>
                    Create account
                </button>

            </form>
        </div>
    )
}