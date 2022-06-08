import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(product, id, quantity, price, total, date) {
    return { product, id, quantity, price , total, date};
  }
  
  const rows = [
    createData('Apolo', 123456789, 4, 1200, 4800,'21 Mai 2022'),
    createData('Apolo', 123456789, 4, 1200, 4800,'21 Mai 2022'),
    createData('Apolo', 123456789, 4, 1200, 4800,'21 Mai 2022'),
    createData('Apolo', 123456789, 4, 1200, 4800,'21 Mai 2022'),
  ];

const ClientAchat = () => {
    return (
        <div className='ClientAchat' style={{marginBottom:'2rem'}}>
            <div className="Table">
                <h3 style={{marginBottom:'1rem', fontWeight:'bold', fontSize:'1rem'}}>Liste Achat</h3>
                <TableContainer component={Paper}
                style={{boxShadow:'0px 3px 10px 5px #80808029'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Produit</TableCell>
                            <TableCell align="left">ID</TableCell>
                            <TableCell align="left">Quantité</TableCell>
                            <TableCell align="left">Prix unitaire</TableCell>
                            <TableCell align="left">Prix Total</TableCell>
                            <TableCell align="left">Date</TableCell>
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
                            <TableCell align="left">{row.id}</TableCell>
                            <TableCell align="left">{row.quantity}</TableCell>
                            <TableCell align="left">{row.price}</TableCell>
                            <TableCell align="left">{row.total}</TableCell>
                            <TableCell align="left">{row.date}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default ClientAchat
