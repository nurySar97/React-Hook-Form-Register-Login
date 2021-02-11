import React from 'react';

const PasswordItem = ({
    setIsActive,
    isActive,
    register,
    errors
}) => {
    return (
        <div className='login__item'>
            <div className={`login__input-with-icon ${isActive.password && 'login__input-with-icon--active'}`}>
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
    )
}

export default PasswordItem;