import './ClientUpdate.css'
import React, {useState} from 'react'
import img1 from '../../imgs/img1.png'

const ClientUpdate = () => {
    const [sex, setSex]=useState("Male")

    const chooseSex= (e)=>{
        setSex(e.target.value)
    }

  return (
    <div className='ClientUpdate'>
        <div className="left-side-update">
            <div className="img-update-container">
                <img src={img1} alt="" />
                <button className='img-update'>Modifier Photo</button>
            </div>
            <button class='save-update-btn'>Enregistrer</button>
        </div>
        <div className="info-update">
            <input type="text" id='username' placeholder='Pseudonyme'/>
            <input type="text" id='name' placeholder='Nom'/>
            <input type="text" id='firstname' placeholder='Prénom'/>
            <input type="email" id='email' placeholder='E-mail'/>
            <input type="text" pattern='[0-9]' id='phone' placeholder='Contact'/>
            <div className="sex-info">
                Sexe
                <div className="sex" onChange={chooseSex}>
                    <input type="radio" value="Male" name="gender" /> Homme
                    <input type="radio" value="Female" name="gender" /> Femme
                </div>
            
            </div>

        </div>
    </div>
  )
}

export default ClientUpdate