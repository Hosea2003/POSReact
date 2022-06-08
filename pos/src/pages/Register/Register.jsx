import './Register.css'
import React from 'react'
import welcome from '../../imgs/welcome blue.jpg'

const Register = () => {
  return (
    <div className='Register'>
        <div className="register-header">
            <a href="http://www.freepik.com">Designed by Freepik</a>
            <img src={welcome} alt="" />
        </div>

        <div className="register-form">
            <div className="register-user">
                <input type="text" placeholder='Nom et Prénoms'/>
                <input type="text" placeholder='Pseudonyme'/>
                <input type="password" placeholder='Mot de Passe'/>
                <input type="password" placeholder='Confirmer'/>
            </div>

            <div className="create-user">
                <button class='register-btn'>Créer Compte</button>
            </div>
        </div>  
    </div>
  )
}

export default Register