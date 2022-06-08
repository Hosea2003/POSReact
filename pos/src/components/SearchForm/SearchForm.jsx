import React from 'react'
import "./SearchForm.css"
import {HiSearch} from 'react-icons/hi'

const SearchForm = () => {
    return (
        <div className='SearchForm'>
            <input type="text" id='SearchBar'/>
            <label htmlFor='SearchBar'></label>
            <div className='searchBtn'>
                <HiSearch/>
                Rechercher
            </div>
        </div>
    )
}

export default SearchForm
