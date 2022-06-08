import './Login.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='Login'>
        <div className="login-img">
            <img src="" alt=""/>
        </div>
        <div className="login-insert">
            <h1>Cafétaria</h1>
            <p>Bienvenue dans la cafétaria</p>

            <div className="auth-input">
                <input type="text" placeholder="Entrer Pseudo" id="usernameTxt"/>
                <input type="password" placeholder='Mot de Passe' id='passwordTxt'/>
            </div>

            <div className="action-btn">
                <button class='sign-in-btn'>Se connecter</button>
                <div className="forgot-pass">Mot de passe oublier</div>
            </div>

            <div className="to-register">
                <span>Pas encore de compte? <NavLink to={"/register"}>
                        <span className='register-link'>Créer un compte</span>
                    </NavLink></span>
            </div>
        </div>
    </div>
  )
}

export default Login