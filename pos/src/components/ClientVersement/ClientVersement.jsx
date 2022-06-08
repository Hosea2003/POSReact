// import "./ClientVersement.css"
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(date, solde, employee) {
    return { date, solde, employee };
}

const rows = [
    createData('19 mai 2022', '20.000 Ar', 'Mr Tody'),
    createData('19 mai 2022', '20.000 Ar', 'Mr Tody'),
    createData('19 mai 2022', '20.000 Ar', 'Mr Tody'),
    createData('19 mai 2022', '20.000 Ar', 'Mr Tody'),
    createData('19 mai 2022', '20.000 Ar', 'Mr Tody'),
];

const ClientVersement = () => {
    return (
        <div className="ClientVersement" style={{marginBottom:'2rem'}}>
            <div className="Table">
                <h3 style={{marginBottom:'1rem', fontWeight:'bold', fontSize:'1rem'}}>Créditation</h3>
                <TableContainer component={Paper}
                style={{boxShadow:'0px 3px 10px 5px #80808029'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="left">Montant</TableCell>
                            <TableCell align="left">Receveur</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                            key={index}
                            sx={{borderTop: 4, borderColor:'#3d464d79' }}
                            >
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell align="left">{row.solde}</TableCell>
                            <TableCell align="left">{row.employee}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
        
    )
}

export default ClientVersement
