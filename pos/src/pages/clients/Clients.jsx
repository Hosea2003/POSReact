import React from 'react'
import "./Clients.css"
import SearchForm from '../../components/SearchForm/SearchForm'

const Clients = () => {
    return (
        <div className='Clients'>
            <h1>Clients</h1>
            <div className="search-form">
                <SearchForm/>
            </div>


        </div>
    )
}

export default Clients
