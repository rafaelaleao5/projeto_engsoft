import React, { useContext, useState } from 'react';
import {
  Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Grid
} from '@mui/material';
import GastosContext from './GastosContext';
import Sidebar from './global/Sidebar';

function Gastos() {
  const { gastos, adicionarGasto } = useContext(GastosContext);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const [tipo, setTipo] = useState('');
  const [formapagamento, setFormaPagamento] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarGasto({
      id: gastos.length + 1,
      descricao,
      valor: parseFloat(valor),
      data,
      tipo,
      formapagamento
    });
    setDescricao('');
    setValor('');
    setData('');
    setTipo('');
    setFormaPagamento('');
  };

  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1} p={3}>
        <Typography variant="h4" gutterBottom>
          Adicionar Gasto
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Valor"
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Data"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={data}
                onChange={(e) => setData(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Tipo de Gasto</InputLabel>
                <Select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                >
                  <MenuItem value="Alimentação">Alimentação</MenuItem>
                  <MenuItem value="Transporte">Transporte</MenuItem>
                  <MenuItem value="Pessoal">Pessoal</MenuItem>
                  <MenuItem value="Outros">Outros</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Forma de Pagamento</InputLabel>
                <Select
                  value={formapagamento}
                  onChange={(e) => setFormaPagamento(e.target.value)}
                >
                  <MenuItem value="VR">VR</MenuItem>
                  <MenuItem value="Pix">Pix</MenuItem>
                  <MenuItem value="Credito">Crédito</MenuItem>
                  <MenuItem value="Outros">Outros</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Adicionar Gasto
              </Button>
            </Grid>
          </Grid>
        </form>

        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Descrição</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Data</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Forma de Pagamento</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gastos.map((gasto) => (
                <TableRow key={gasto.id}>
                  <TableCell>{gasto.descricao}</TableCell>
                  <TableCell>{gasto.valor}</TableCell>
                  <TableCell>{gasto.data}</TableCell>
                  <TableCell>{gasto.tipo}</TableCell>
                  <TableCell>{gasto.formapagamento}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Gastos;
