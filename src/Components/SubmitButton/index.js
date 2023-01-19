import React from 'react'

const SubmitButton = ({ text, submitFunction }) => {
    return (
        <button className='submit-button' type='submit' onClick={submitFunction}>{text}</button>
    )
}

export default SubmitButton