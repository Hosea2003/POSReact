import './AjoutCategorie.css'
import React from 'react'

const AjoutCategorie = () => {
  return (
    <div className='ajoutCategorie'>
        <h1>Ajout de catégorie</h1>
        <input type='text' id='addCategory' placeholder='Nom du catégorie'/>
        <button class='addCategorybtn'>Ajouter</button>
    </div>
  )
}

export default AjoutCategorie