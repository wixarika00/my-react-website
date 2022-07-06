import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input
            className="pa3 ba b--green bg-lightest-blue" 
            type='search' 
            placeholder="search robots" 
            onChange={searchChange} //The onchange event occurs when the value of an element has been changed. 
            />
        </div>
    )
} 

export default SearchBox;