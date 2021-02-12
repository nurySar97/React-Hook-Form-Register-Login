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
                    data-label='Enter email'
                    htmlFor="register-email"
                >
                    <i className="fas fa-envelope"></i>
                </label>

                <input
                    className='register__input'
                    id='register-email'
                    type='email'
                    name='email'
                    placeholder='Enter email'
                    onFocus={() => setIsActive({ email: true })}
                    onBlur={() => setIsActive({ email: false })}
                    
                    ref={register({ required: { value: true, message: "Please input email!" } })}
                />
            </div>

            { errors.email ? <div className='register__input-error'>{errors.email.message}</div> : null}

        </div>
    )
}

export default EmailItem;