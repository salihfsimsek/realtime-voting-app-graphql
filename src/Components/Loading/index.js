import React from 'react'

const Loading = ({ type }) => {
    // type = // 'full' || 'fit'
    return (
        <div className={`loading ${type || ''}`}>
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading