import React from 'react'

const OptionButton = ({ option, selectedOption, setSelectedOption }) => {
    return (
        <div className='option-button'>
            <input
                type="radio"
                id={option.id}
                value={option.id}
                // eslint-disable-next-line eqeqeq
                checked={selectedOption == option.id}
                onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label className='option-button-label' htmlFor={option.id}>{option.title}</label>
        </div>
    )
}

export default OptionButton