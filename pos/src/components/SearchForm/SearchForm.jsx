import React from 'react'
import "./SearchForm.css"

const SearchForm = () => {
    return (
        <div className='SearchForm'>
            <input type="text" id='SearchBar'/>
            <label htmlFor='SearchBar'></label>
        </div>
    )
}

export default SearchForm
