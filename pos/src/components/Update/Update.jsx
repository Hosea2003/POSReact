import React from 'react'
import './Update.css'
import {UpdateData} from "../../Data/Data"

const Update = () => {
    return (
        <div className="Updates">
            {UpdateData.map((update, index)=>{
                return(
                    <div className="update">
                        <img src={update.img} alt="" />
                        <div className="noti">
                            <div style={{marginBottom:'.5rem'}}>
                                <span>{update.name} </span>
                                <span>{update.noti}</span>
                            </div>
                            <span>{update.time}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Update
