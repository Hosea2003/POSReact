import React from 'react'
import "./RightSide.css"
import Udpate from '../Update/Update'
import CustomerReview from '../CustomerReview/CustomerReview'

const RightSide = () => {
    return (
        <div className='RightSide'>
            <div>
                <h3>Mise à jour</h3>
                <Udpate/>
            </div>
            <div>
                <h3>Revue Clients</h3>
                <CustomerReview/>
            </div>
        </div>
    )
}

export default RightSide
