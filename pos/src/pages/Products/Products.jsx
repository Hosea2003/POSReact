import './Products.css'
import React, {useState} from 'react'
import AnimatedMulti from '../../components/AnimatedMulti.jsx'
import { HiPlus } from 'react-icons/hi'
import {MdEdit} from 'react-icons/md'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomPopup from '../../components/popup/CustomPopup'
import Vendre from '../../components/Vendre/Vendre'
import {useNavigate} from 'react-router-dom'

function createData(product, Id, number, price) {
    return { product, Id, number, price };
  }
  
  const rows = [
      createData('Apolo', 123456789, 105,'1200 Ar'),
      createData('Apolo', 123456789, 105,'1200 Ar'),
      createData('Apolo', 123456789, 105,'1200 Ar'),
      createData('Apolo', 123456789, 105,'1200 Ar'),
      createData('Apolo', 123456789, 105,'1200 Ar')
];

const Products = () => {
    const [visibilityVente, setVisibilityVente] = useState(false);
    const [visibilityOrder, setVisibilityOrder] = useState(false);

    const popupCloseHandlerVente = (e) => {
        setVisibilityVente(e)
      };

    const popupCloseHandlerOrder = (e) => {
        setVisibilityOrder(e)
    };

    const navigate= useNavigate()
    const changeRoot=(id)=>{
        console.log(id)
        navigate("product/"+id)
    }

  return (
    <div className='Products'>
        <h1>Produits</h1>
        <div className="productsHeader">
            <div className="searchProduct">
                <AnimatedMulti/>
            </div>
            <div className="action-icons">
                <HiPlus/>
                <MdEdit/>
            </div>
        </div>

        <div className="productList">
            <div className="ProductTable">
                <TableContainer component={Paper}
                style={{boxShadow:'0px 3px 10px 5px #80808029'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Produit</TableCell>
                            <TableCell align="left">ID</TableCell>
                            <TableCell align="left">Prix</TableCell>
                            <TableCell align="left">Nombre</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                            key={index}
                            sx={{borderTop: 4, borderColor:'#71879779' }}
                            >
                            <TableCell component="th" scope="row">
                                {row.product}
                            </TableCell>
                            <TableCell align="left">{row.Id}</TableCell>
                            <TableCell align="left">{row.price}</TableCell>
                            <TableCell align="left">{row.number}</TableCell>
                            <TableCell align="center">
                                <div className="buyOrorder">
                                    <button onClick={popupCloseHandlerVente} >Vendre</button>
                                    <button onClick={popupCloseHandlerOrder}>Commander</button>
                                    <button onClick={()=>{navigate("/product/"+index)}}>Modifier</button>
                                </div>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

        <CustomPopup
            onClose={popupCloseHandlerVente}
            show={visibilityVente}
            title="Vendre"
        >
            <Vendre vendre={true}/>
      </CustomPopup>

      <CustomPopup
            onClose={popupCloseHandlerOrder}
            show={visibilityOrder}
            title="Vendre"
        >
            <Vendre vendre={false}/>
      </CustomPopup>
    </div>
  )
}

export default Products