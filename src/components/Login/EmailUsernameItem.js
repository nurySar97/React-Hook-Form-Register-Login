import React from 'react';

const EmailUsernameItem = ({ setIsActive, isActive, register, errors }) => {
    return (
        <div className='login__item'>

            <div className={`register__input-with-icon ${isActive.name && 'register__input-with-icon--active'}`}>

                <label
                    className={`login__label ${isActive.name && 'login__label--active'}`}
                    data-label='Enter email or name'
                    htmlFor='login-name'
                >
                    <i className='fas fa-user'></i>
                </label>

                <input
                    className='login__input'
                    id='login-name'
                    type='text'
                    name='name'
                    placeholder='Enter email or name'
                    onFocus={() => setIsActive({ name: true })}
                    onBlur={() => setIsActive({ name: false })}

                    ref={register({
                        required: { value: true, message: 'Please input email or name!' }
                    })}
                />
            </div>

            {errors.name ? <div className='login__input-error'>{errors.name.message}</div> : null}

        </div>
    )
}

export default EmailUsernameItem