import React from 'react'
import Cards from '../../components/cards/Cards'
import "./Dashboard.css"
import BasicTable from '../../components/table/Table'
import RightSide from '../../components/RightSide/RightSide'

function Dashboard(){
    return (
        <div className="Dashboard">
            <div className="main-content">
                <h1>Dashboard</h1>
                <Cards/>
                <BasicTable/>
            </div>
            <RightSide/>
        </div>
    )
}

export default Dashboard
