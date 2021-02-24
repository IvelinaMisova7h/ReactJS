import React from 'react'
import '../weathercomponents/Loader.css'

function Loader() {
    return (
        <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader
