import './Vendre.css'
import React, {useState} from 'react'
import AnimatedSingle from '../AnimatedSingle'
import AnimatedMulti from '../AnimatedMulti'

const Vendre = (params) => {
    const action = params.vendre
    
  return (
    <div className='VendreProduct'>
        <div className="client-vendre">
            <span>Client</span>
            <AnimatedSingle/>
        </div>
        <div className="product-vendre">
            <span>Produit</span>
            <div className="vendre-value">
                <AnimatedMulti/>
                <AnimatedMulti/>
            </div>
        </div>
        <button class='vendreBtn'>{action?"Vendre":"Commander"}</button>
    </div>
  )
}

export default Vendre