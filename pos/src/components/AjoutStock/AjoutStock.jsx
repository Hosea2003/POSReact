import React, {useState} from 'react'
import TableCell from '@mui/material/TableCell';
import AnimatedSingle from '../AnimatedSingle';
import './AjoutStock.css'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AjoutStock = () => {
    const [dateExpire, setdateExpire]=useState(new Date())
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <React.Fragment>
        <TableCell>1</TableCell>
        <TableCell align='center'>{new Date().toLocaleDateString('fr-FR', options)}</TableCell>
        <TableCell><AnimatedSingle/></TableCell>
        <TableCell><AnimatedSingle/></TableCell>
        <TableCell align='center'><input type='number' id='prixFournisseur'/></TableCell>
        <TableCell align='center'>
            <DatePicker className='dateExpire' selected={dateExpire} onChange={(date) => setdateExpire(date)}/>
        </TableCell>
        <TableCell align='center'><button class='addStock-btn'>Ajouter</button></TableCell>
    </React.Fragment>
  )
}

export default AjoutStock