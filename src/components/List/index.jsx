import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'position', label: 'Posição', minWidth: 100 },
    { id: 'name', label: 'Nome', minWidth: 170 }
];

function createData(name, position) {
    return { name, position };
}

const rows = [
    createData('EDEP Energias do Brasil', 1),
    createData('Lojas Renner', 2),
    createData('Telefônica Brasil', 3),
    createData('CPFL Energia', 4),
    createData('Natura', 5),
    createData('Klabin', 6),
    createData('Itaú Unibanco', 7),
    createData('Ambipar', 8),
    createData('Suzano', 9),
    createData('Engie Brasil', 10),
    createData('Copel', 11),
    createData('Bradesco', 12),
    createData('TIM', 13),
    createData('Braskem', 14),
    createData('Ecorodovias', 15),
    createData('BTG Pactual', 16),
    createData('Itaúsa', 17),
    createData('AES Brasil', 18),
    createData('CCR', 19),
    createData('Cosan', 20),
    createData('Duratex', 21),
    createData('Fleury', 22),
    createData('CBD', 23),
    createData('Neoenergia', 24),
    createData('Cemig', 25),
    createData('Americanas', 26),
    createData('BRF', 27),
    createData('Vibra', 28),
    createData('Banco do Brasil', 29),
    createData('Rumo', 30),
    createData('Movida', 31),
    createData('Santander', 32),
    createData('M. Dias Branco', 33),
    createData('Marfrig', 34),
    createData('Raia Drogasil', 35),
    createData('Cielo', 36),
    createData('JBS', 37),
    createData('Sul América', 38),
    createData('Eletrobrás', 39),
    createData('Arezzo', 40),
    createData('CSN', 41),
    createData('Light', 42),
    createData('Simpar', 43),
    createData('Minerva', 44),
    createData('MRV', 45),
    createData('WEG', 46),
    createData('Grendene', 47),
    createData('Via', 48),
    createData('Magazine Luiza', 49),
    createData('Usiminas', 50),
    createData('CSN Mineração', 51),
    createData('Azul', 52),
    createData('Ambev', 53),
    createData('Iochpe Maxion', 54),
    createData('Irani', 55),
    createData('Locamerica', 56),
    createData('CTEEP', 57),
    createData('Odontoprev', 58),
    createData('Guararapes', 59),
    createData('Vamos', 60),
    createData('Aliansce Sonae', 61),
    createData('Gafisa', 62),
    createData('Cesp', 63),
    createData('Hypera', 64),
    createData('Anima', 65),
    createData('Notre Dame Intermédica', 66),
    createData('Aeris', 67),
    createData('Locaweb', 68),
    createData('Syn Prop e Tech', 69),
    createData('Grupo Soma', 70),
    createData('Cury', 71),
    createData('Positivo', 72),
    createData('Lojas Quero-Quero', 73)
];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 20, 50, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
