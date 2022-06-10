import React from 'react'
import Sidebar from '../../components/sidebarclient/Sidebar'
import ClientDetail from '../ClientDetail/ClientDetail'
import {Routes, Route} from 'react-router-dom'
import Products from '../Products/Products'

const Client = () => {
  return (
    <div className='clientPage AppGlass'>
        <Sidebar/>
        <div className="Routes">
            <Routes>
                <Route path='' element={<ClientDetail/>}/>
                <Route path='/products' element={<Products client={true}/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Client