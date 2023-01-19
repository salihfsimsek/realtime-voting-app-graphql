import React from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { changeSearchField } from '../../redux/searchFieldSlice'

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBox = () => {
    const data = useSelector(state => state.searchField.value)
    const dispatch = useDispatch()

    const handleChange = e => {
        dispatch(changeSearchField(e.target.value))
    }

    return (
        <div className='searchbox'>
            <input type='text' placeholder='Search in Questions' className='searchbox-input' value={data} onChange={handleChange} />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='searchbox-icon' />
        </div>
    )
}

export default SearchBox