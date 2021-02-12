import React from 'react';

const PasswordItem = ({ setIsActive, isActive, register, errors }) => {
    return (
        <div className='login__item'>
            <div className={`login__input-with-icon ${isActive.password && 'login__input-with-icon--active'}`}>

                <label
                    className={`login__label ${isActive.password && 'login__label--active'}`}
                    data-label='Enter password'
                    htmlFor='login-password'
                >
                    <i className='fas fa-key'></i>
                </label>

                <input
                    className='login__input'
                    id='login-password'
                    type='password'
                    name='password'
                    placeholder='Enter password'
                    onFocus={() => setIsActive({ password: true })}
                    onBlur={() => setIsActive({ password: false })}

                    ref={register({
                        required: { value: true, message: 'Please input password!' }
                    })}
                />
            </div>

            {errors.password ? <div className='login__input-error'>{errors.password.message}</div> : null}

        </div>
    )
}

export default PasswordItem;