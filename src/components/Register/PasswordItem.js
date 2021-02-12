import React from 'react'

const PasswordItem = ({ setIsActive, isActive, register, errors }) => {
    return (
        <div className='register__item'>
            <div className={`register__input-with-icon ${isActive.password && 'register__input-with-icon--active'}`}>

                <label
                    className={`register__label ${isActive.password && 'register__label--active'}`}
                    data-label='Enter your password'
                    htmlFor="register-password"
                >
                    <i className="fas fa-key"></i>
                </label>

                <input
                    className='register__input'
                    id='register-password'
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    onFocus={() => setIsActive({ password: true })}
                    onBlur={() => setIsActive({ password: false })}

                    ref={register({
                        required: { value: true, message: "Please input your password!" },
                        minLength: { value: 8, message: "Minimum 8 chars!" },
                        maxLength: { value: 20, message: "Maximum 15 chars!" },
                        validate: value => {
                            return (
                                [/[a-z]/, /[A-Z]/, /[0-9]/].every((pattern) =>
                                    pattern.test(value)
                                ) || "Must include lower, upper, number!"
                            );
                        }
                    })}
                />
            </div>

            {errors.password ? <div className='register__input-error'>{errors.password.message}</div> : null}

        </div>
    )
}

export default PasswordItem;