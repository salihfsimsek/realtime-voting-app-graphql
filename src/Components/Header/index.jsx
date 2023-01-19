import React from 'react'

//React router dom
import { Link } from 'react-router-dom'
import SearchBox from '../SearchBox'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <Link to='/' className='header-title'>Vote App</Link>
                <SearchBox />
            </div>
        </header>
    )
}

export default Header