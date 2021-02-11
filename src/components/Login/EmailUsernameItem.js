import React from 'react';

const EmailUsernameItem = ({
    setIsActive,
    isActive,
    register,
    errors
}) => {
    return (
        <div className='login__item'>
            <div className={`register__input-with-icon ${isActive.name && 'register__input-with-icon--active'}`}>
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
    )
}

export default EmailUsernameItem