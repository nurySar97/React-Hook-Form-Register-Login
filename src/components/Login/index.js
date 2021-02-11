import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css'

export default function Default() {
    const { register, handleSubmit, errors, setError } = useForm({})
    const [isActive, setIsActive] = useState({
        name: false,
        password: false
    })
    let onHandleSubmit = formData => {
        console.log(formData)
        if (formData.password === " ") {
            setError({})
        }
    }
    return (
        <div className='login'>
            <form
                className='login__form'
                autoComplete='off'
                onSubmit={handleSubmit(onHandleSubmit)}
            >

                <div className='login__item'>
                    <div className='login__input-with-icon'>
                        <label
                            className={`login__label ${isActive.name && 'login__label--active'}`}
                            data-label='Email or Username'
                            htmlFor="name"
                        >
                            <i className="fas fa-user"></i>
                        </label>
                        <input
                            className='login__input'
                            type='text'
                            id='name'
                            name='name'
                            ref={register({ required: true })}
                            placeholder='Email or Username'
                            onFocus={() => setIsActive({ name: true })}
                            onBlur={() => setIsActive({ name: false })}
                        />
                    </div>
                    {
                        errors.name
                            ?
                            <div className='login__input-error'>
                                Please input your Name!
                                </div>
                            :
                            null
                    }
                </div>

                <div className='login__item'>
                    <div className='login__input-with-icon'>
                        <label
                            className={`login__label ${isActive.password && 'login__label--active'}`}
                            data-label='Password'
                            htmlFor="password"
                        >
                            <i className="fas fa-key"></i>
                        </label>
                        <input
                            className='login__input'
                            type='password'
                            id='password'
                            name='password'
                            ref={register({ required: true })}
                            placeholder='Password'
                            onFocus={() => setIsActive({ password: true })}
                            onBlur={() => setIsActive({ password: false })}
                        />
                    </div>
                    {
                        errors.password
                            ?
                            <div className='login__input-error'>
                                Please input your password!
                            </div>
                            :
                            null
                    }
                </div>

                <div className='login__item login__item--forgot'>
                    <a className='login__forgot' href="#">Forgot Password</a>
                </div>

                <button className='login__submit-button' type='submit'>Login</button>
            </form>
        </div>
    )
}