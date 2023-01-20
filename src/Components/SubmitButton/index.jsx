import React from 'react'

const SubmitButton = ({ text, disabled }) => {
    return (
        <button className='submit-button' type='submit' disabled={disabled || false}>{text}</button>
    )
}

export default SubmitButton