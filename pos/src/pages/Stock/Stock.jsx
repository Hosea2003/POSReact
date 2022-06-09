import './Stock.css'
import React from 'react'
import AnimatedMulti from '../../components/AnimatedMulti'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AjoutStock from '../../components/AjoutStock/AjoutStock';
import StockDisponible from '../../components/StockDisponible/StockDisponible';

function createData(ID, date, product, fournisseur, prix, expiration) {
    return { ID, date, product, fournisseur, prix, expiration };
  }
  
const rows = [
    createData(1, '18 mai 2022', 'Apolo', 'Marché', 1000, '20 juin 2024'),
    createData(1, '18 mai 2022', 'Apolo', 'Marché', 1000, '20 juin 2024'),
    createData(1, '18 mai 2022', 'Apolo', 'Marché', 1000, '20 juin 2024'),
    createData(1, '18 mai 2022', 'Apolo', 'Marché', 1000, '20 juin 2024'),
    createData(1, '18 mai 2022', 'Apolo', 'Marché', 1000, '20 juin 2024'),
    createData(1, '18 mai 2022', 'Apolo', 'Marché', 1000, '20 juin 2024'),
];

const Stock = () => {
  return (
    <div className='Stock'>
        <h1>Stock</h1>
        <div className="searchStock">
            <AnimatedMulti/>
        </div>

        <div className="stockList">
            <div className="stockTable">
                <TableContainer component={Paper}
                style={{boxShadow:'0px 3px 10px 5px #80808029'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Product</TableCell>
                            <TableCell align="center">Fournisseur</TableCell>
                            <TableCell align="center">Prix fournisseur</TableCell>
                            <TableCell align="center">Date d'expiration</TableCell>
                            <TableCell align="center">Action</TableCell>
                            
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <AjoutStock/>
                            </TableRow>
                        {rows.map((row, index) => (
                            <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.ID}
                            </TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.product}</TableCell>
                            <TableCell align="center">{row.fournisseur}</TableCell>
                            <TableCell align="center">{row.prix}</TableCell>
                            <TableCell align="center">{row.expiration}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
        
        <StockDisponible/>

    </div>
  )
}

export default Stock