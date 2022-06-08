import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import Sidebar from '../../components/sidebar/Sidebar'
import Clients from '../clients/Clients'
import ClientDetail from '../ClientDetail/ClientDetail'

const Admin = () => {
    const path = useLocation()
  return (
    <div className='AppGlass'>
        <Sidebar/>
        <div className="Routes">
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/clients' element={<Clients/>}/>
                <Route path='/client/:id' element={<ClientDetail/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Admin