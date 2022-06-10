import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'


function createData(name, date, status, price) {
  return { name, date, status, price };
}

const rows = [
  createData('Rindra Hosea', '18 mai 2022', 'Délivré', 20000),
  createData('Rindra Daniel', '18 mai 2022', 'Approuvé', 20000),
  createData('MR Hosea', '18 mai 2022', 'Délivré', 20000),
  createData('Ranto Hossana', '18 mai 2022', 'Délivré', 20000),
  createData('Haren Rico', '18 mai 2022', 'Approuvé', 20000),
];

const makeStyle=(status)=>{
    if(status==='Délivré'){
        return{
            background:'rgb(145 254 159 / 47%)',
            color:'green'
        }
    }
    else if(status==='Approuvé'){
        return{
            background:'#59bfff',
            color:'white'
        }
    }
}

export default function BasicTable() {
  return (
      <div className="Table">
          <h3 style={{marginBottom:'1rem'}}>Commandes Récentes</h3>
        <TableContainer component={Paper}
        style={{boxShadow:'0px 3px 10px 5px #80808029'}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Noms et Prénoms</TableCell>
                    <TableCell align="left">Date de commande</TableCell>
                    <TableCell align="left">Status</TableCell>
                    <TableCell align="left">Prix Total</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, index) => (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">
                        <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                    </TableCell>
                    <TableCell align="left">{row.price}</TableCell>
                    <TableCell align="left" className="Detail">Detail</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
      </div>
    
  );
}
