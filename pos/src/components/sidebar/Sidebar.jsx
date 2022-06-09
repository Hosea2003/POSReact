import React, {useState} from 'react'
import './Sidebar.css'
import {data} from "./data"
import {UilSignOutAlt} from '@iconscout/react-unicons'
import {useNavigate} from 'react-router-dom'

function Sidebar() {
    const [selected, setSelected]=useState(0)

    const navigate = useNavigate()
    const changePage =(index)=>{
        setSelected(index)
        navigate(data[index].link)
    }

    return (
        <div className="Slidebar-container">
            <div className='Sidebar'>
                <div className="logo">
                    <img src="" alt="" />
                    <span>Caf<span>é</span>taria</span>
                </div>

                <div className='menu'>
                    {data.map((item, index)=>{
                        return(
                            <div className={selected===index?'menuItem active':'menuItem'} 
                            key={index}
                            onClick={()=>changePage(index)}>
                                <div><item.icon/></div>
                                <span>{item.heading}</span>
                            </div>
                        )
                    })}
                    
                    <div className="menuItem">
                        <div><UilSignOutAlt/></div>
                    </div>

                </div>

            </div>
        </div>
        
    )
}

export default Sidebar
