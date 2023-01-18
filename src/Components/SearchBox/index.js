import React from 'react'

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBox = () => {
    return (
        <div className='searchbox'>
            <input type='text' placeholder='Search' className='searchbox-input' />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='searchbox-icon' />
        </div>
    )
}

export default SearchBox