import React from 'react'
import "../weathercomponents/Search.css"



function Search({value, change, submit}) {
    return (
        <>
         
            <form className="search__container" onSubmit={submit}>
                    <p>Weather App</p>
                    <input type="text" value={value} onChange={change} placeholder="e.g. Sofia, Bulgaria" className="search__input" />           
            </form>
        </>
    )
}

export default Search
