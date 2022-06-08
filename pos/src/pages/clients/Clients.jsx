import React from 'react'
import "./Clients.css"
import SearchForm from '../../components/SearchForm/SearchForm'
import ClientList from '../../components/ClientList/ClientList'
import { HiPlus } from 'react-icons/hi'

const Clients = () => {
    return (
        <div className='Clients'>
            <div className="header">
                <h1>Clients</h1>
                <div className="search-form">
                    <SearchForm/>
                </div>
            </div>
            <ClientList/>

            <button className="add-btn">
                <HiPlus/>
            </button>
        </div>
    )
}

export default Clients
