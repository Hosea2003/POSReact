import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(product, quantity, price, total, date, status) {
    return { product, quantity, price, total, date, status };
  }
  
const rows = [
createData("Lait", 1.5, 1400, 1400*1.5, '8 Juin 2022', 'En attente'),
createData("Lait", 1.5, 1400, 1400*1.5, '8 Juin 2022', 'Près'),
];

const makeStyle=(status)=>{
    if(status==='Près'){
        return{
            background:'rgb(145 254 159 / 47%)',
            color:'green'
        }
    }
    else if(status==='En attente'){
        return{
            background:'#59bfff',
            color:'white'
        }
    }
}

const ClientCommande = () => {
    return (
        <div class="ClientCommande" style={{marginBottom:'2rem'}}>
            <div className="Table">
            <h3 style={{marginBottom:'1rem', fontWeight:'bold', fontSize:'1rem'}}>Liste des commandes</h3>
            <TableContainer component={Paper}
                style={{boxShadow:'0px 3px 10px 5px #80808029'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Produit</TableCell>
                            <TableCell align="left">Quantité</TableCell>
                            <TableCell align="left">Prix unitaire</TableCell>
                            <TableCell align="left">Prix Total</TableCell>
                            <TableCell align="left">Date Commande</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                            key={index}
                            sx={{borderTop: 4, borderColor:'#3d464d79' }}
                            >
                            <TableCell component="th" scope="row">
                                {row.product}
                            </TableCell>
                            <TableCell align="left">{row.quantity}</TableCell>
                            <TableCell align="left">{row.price}</TableCell>
                            <TableCell align="left">{row.total}</TableCell>
                            <TableCell align="left">{row.date}</TableCell>
                            <TableCell align="left">
                                <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default ClientCommande
