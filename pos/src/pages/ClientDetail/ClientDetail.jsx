import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import img1 from '../../imgs/img1.png'
import "./ClientDetail.css"
import {FaBell} from 'react-icons/fa'
import ClientVersement from '../../components/ClientVersement/ClientVersement'
import ClientAchat from '../../components/ClientAchat/ClientAchat'
import ClientCommande from '../../components/ClientCommande/ClientCommande'

const ClientDetail = () => {
    const {id}=useParams()
    const data={
        type:"Abonné",
        solde:50000,
        description:"A effectué 20 transactions",
        name:"Rindra Hosea",
        job:"Etudiant",
        phone:"034 08 722 65",
        email:"mahefaniainarindra@gmail.com",
        gender:"Male"
    }

    const navigate = useNavigate()
    const changeRoot=()=>{
        navigate("/client/update/"+id)
    }
    return (
        <div className='DetailContainer'>
            <div className="ClientDetail">
                <div className="left">
                    <div className="img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="about-transaction">
                        <div className="short">
                            <h3>Type: {data.type}</h3>
                            <button className="detail-btn">{data.type==="Abonné"?
                                "Se désabonner":"S'abonner"}</button>
                        </div>

                        <div className="short">
                            <h3>Solde: {data.solde}</h3>
                            <button className="detail-btn">Verser</button>
                        </div>

                    </div>
                </div>

                <div className="right">
                    <h1>{data.name}</h1>
                    <span>{data.job}</span>
                    <div className="client-action-btn">
                        <button className="order"><FaBell/>Commander</button>
                        <button className='detail-btn' onClick={changeRoot}>Modifier les informations</button>
                    </div>
                   

                    <div className="more-info">
                        <div className="attributes">
                            <h4>Phone</h4>
                            <h4>E-mail</h4>
                            <h4>Sexe</h4>
                        </div>
                        <div className="value">
                            <span>{data.phone}</span>
                            <span>{data.email}</span>
                            <h4>{data.gender}</h4>
                        </div>

                    </div>

                </div>

            </div>

            <ClientAchat/>
            <div className="trafic">
                <ClientVersement/>
                <ClientCommande/>
            </div>
        </div>
    )
}

export default ClientDetail
