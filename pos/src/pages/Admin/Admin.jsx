import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import Sidebar from '../../components/sidebar/Sidebar'
import Clients from '../clients/Clients'
import ClientDetail from '../ClientDetail/ClientDetail'
import ClientUpdate from '../../components/ClientUpdate/ClientUpdate'
import Products from '../Products/Products'
import Stock from '../Stock/Stock'
import AjoutProduct from '../AjoutProduct/AjoutProduct'

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
                <Route path='/client/update/:id' element={<ClientUpdate/>}/>
                <Route path='/products' element={<Products client={false}/>}/>
                <Route path='/stock' element={<Stock/>}/>
                <Route path='/add/product' element={<AjoutProduct/>}/>
                <Route path='/product/:id' element={<AjoutProduct modifier={true}/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Admin