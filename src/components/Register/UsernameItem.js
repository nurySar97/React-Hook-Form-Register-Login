import React from 'react'

const UsernameItem = ({ setIsActive, isActive, register, errors }) => {
    return (
        <div className='register__item'>

            <div className={`register__input-with-icon ${isActive.name && 'register__input-with-icon--active'}`}>

                <label
                    className={`register__label ${isActive.name && 'register__label--active'}`}
                    data-label='Enter username'
                    htmlFor='register-name'
                >
                    <i className='fas fa-user'></i>
                </label>

                <input
                    className='register__input'
                    id='register-name'
                    type='text'
                    name='name'
                    placeholder='Enter username'
                    onFocus={() => setIsActive({ name: true })}
                    onBlur={() => setIsActive({ name: false })}

                    ref={register({
                        required: { value: true, message: 'Please input username!' }
                    })}
                />
            </div>

            {errors.name ? <div className='register__input-error'>{errors.name.message}</div> : null}

        </div>
    )
}

export default UsernameItem;