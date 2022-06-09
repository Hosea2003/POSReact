import './AjoutCategorie.css'
import React from 'react'
import AnimatedSingle from '../../components/AnimatedSingle'

const AjoutCategorie = (params) => {
  const [checked, setChecked]=React.useState(false)

  const changeAdd=(e)=>{
    setChecked(!checked)
  }

  const addCategory=()=>{
    if(!checked){
      return <AnimatedSingle/>
    }
    else{
      return <input type='text' id='category' placeholder='Ajouter Catégorie'/>
    }
  }

  return (
    <div className='ajoutCategorie'>
        <h1>Ajout de Produit</h1>
        <div className="productCategoryContainer">{
          addCategory()
        }
          <div className="newCategoryContainer">
            <div className="newCategory">
              <input type='checkbox' name='add' checked={checked} id='addCategorybox' onChange={changeAdd}/>
              <label htmlFor='addCategorybox'>Ajouter Categorie</label>
            </div>
          </div>
        </div>
        <input type='text' id='addCategory' placeholder='Nom du du produit'/>
        <input type='number' id='addProductPrice' placeholder='Prix'/>
        <button class='addCategorybtn'>Ajouter</button>
    </div>
  )
}

export default AjoutCategorie