import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './ClientList.css'
import Data from './Data'


function createData(img, name, date, status, price) {
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

export default function ClientList() {
  return (
      <div className="Table">
          <h3 style={{marginBottom:'1rem'}}>Commandes Récentes</h3>
        <TableContainer component={Paper} className='client-table'
        style={{boxShadow:'0px 3px 10px 5px #80808029'}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Noms et Prénoms</TableCell>
                    <TableCell align="left">Contact</TableCell>
                    <TableCell align="left">Dérnière commande</TableCell>
                    <TableCell align="left">Solde</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {Data.map((client, index) => (
                        <TableRow
                        key={index}
                        sx={{borderTop: 2, borderColor:'#f3f3f3' }}
                        >
                        <TableCell component="th" scope="row">
                            <div className='profil'>
                                <img src={client.img}/>
                                <span>{client.name}</span>
                            </div>
                        </TableCell>
                        <TableCell align="left">{client.contact}</TableCell>
                        <TableCell align="left">
                            <span className="status">{client.date}</span>
                        </TableCell>
                        <TableCell align="left">{client.solde}</TableCell>
                        <TableCell align="left" className="see-profil"><span>Voir Profil</span></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </div>
    
  );
}
