import './StockDisponible.css'
import React from 'react'
import AnimatedSingle from '../AnimatedSingle'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AnimatedMulti from '../AnimatedMulti';

function createData(product, quantity) {
    return { product, quantity};
  }
  
const rows = [
    createData('Riz', '14 Kg'),
    createData('appolo', 103),
    createData('appolo', 103),
    createData('appolo', 103),
    createData('appolo', 103),
    createData('appolo', 103),
];

const StockDisponible = () => {
  return (
    <div className='StockDisponible'>
        <h1>Stock Disponible</h1>
        <div className="searchStockDispo">
            <AnimatedMulti/>
        </div>

        <div className="stockdispo">
            <div className="stockdispoTable">
                <TableContainer component={Paper}
                style={{boxShadow:'0px 3px 10px 5px #80808029'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align='center'>Produit</TableCell>
                            <TableCell align="center">Quantité Total</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row" align='center'>
                                {row.product}
                            </TableCell>
                            <TableCell align="center">{row.quantity}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    </div>
  )
}

export default StockDisponible