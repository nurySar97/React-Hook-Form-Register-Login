import React from 'react'

const EmailItem = ({
    setIsActive,
    isActive,
    register,
    errors
}) => {
    return (
        <div className='register__item'>
            <div className={`register__input-with-icon ${isActive.email && 'register__input-with-icon--active'}`}>
                <label
                    className={`register__label ${isActive.email && 'register__label--active'}`}
                    data-label='Enter your email'
                    htmlFor="name"
                >
                    <i className="fas fa-user"></i>
                </label>
                <input
                    className='register__input'
                    type='email'
                    name='email'
                    ref={register({ required: true })}
                    placeholder='Enter your email'
                    onFocus={() => setIsActive({ email: true })}
                    onBlur={() => setIsActive({ email: false })}
                />
            </div>
            {
                errors.email
                    ?
                    <div className='register__input-error'>
                        Please input your Name!
                    </div>
                    :
                    null
            }
        </div>
    )
}

export default EmailItem;
