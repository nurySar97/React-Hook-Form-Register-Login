import React from 'react'

const AcceptCondition = ({ register, errors }) => {
    return (
        <div className='register__item register__item--accept'>

            <input
                className='register__input register__input--accept'
                id='register-accept'
                type='checkbox'
                name='accept'
                placeholder='Enter accept'

                ref={register({ required: { value: true, message: "Please input accept!" } })}
            />

            <label className='register__accept-label' htmlFor="register-accept">
                I am at least 18 years of age, and accept the Terms & Conditions.
            </label>

            {errors.accept ? <div className='register__input-error'>{errors.accept.message}</div> : null}
        </div>
    )
}

export default AcceptCondition;