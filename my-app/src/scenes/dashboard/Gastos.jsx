import React, { useContext, useState } from 'react';
import {
  Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Grid
} from '@mui/material';
import GastosContext from './GastosContext';
import Sidebar from './global/Sidebar';

function Gastos() {
  const { gastos, adicionarGasto, setGastos, tiposGasto, formasPagamento } = useContext(GastosContext);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const [tipo, setTipo] = useState('');
  const [formapagamento, setFormaPagamento] = useState('');
  const [entradaSaida, setEntradaSaida] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const valorFinal = entradaSaida === 'Saída' ? -Math.abs(parseFloat(valor)) : Math.abs(parseFloat(valor));

    adicionarGasto({
      id: gastos.length + 1,
      descricao,
      valor: valorFinal,
      data,
      tipo,
      formapagamento,
      entradaSaida,
    });

    setDescricao('');
    setValor('');
    setData('');
    setTipo('');
    setFormaPagamento('');
    setEntradaSaida('');
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
            {/* Campos já existentes */}
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

            {/* Campo de seleção de tipo de gasto, agora com opções personalizáveis */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Tipo de Gasto</InputLabel>
                <Select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                >
                  {tiposGasto.map((tipoGasto, index) => (
                    <MenuItem key={index} value={tipoGasto}>
                      {tipoGasto}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Campo de seleção de forma de pagamento, agora com opções personalizáveis */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Forma de Pagamento</InputLabel>
                <Select
                  value={formapagamento}
                  onChange={(e) => setFormaPagamento(e.target.value)}
                >
                  {formasPagamento.map((forma, index) => (
                    <MenuItem key={index} value={forma}>
                      {forma}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Entrada/Saída</InputLabel>
                <Select
                  value={entradaSaida}
                  onChange={(e) => setEntradaSaida(e.target.value)}
                >
                  <MenuItem value="Entrada">Entrada</MenuItem>
                  <MenuItem value="Saída">Saída</MenuItem>
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

        {/* Tabela de gastos */}
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
                  <TableCell sx={{ color: gasto.valor < 0 ? 'red' : 'green' }}>
                    {gasto.valor < 0 ? `- R$${Math.abs(gasto.valor)}` : `+ R$${gasto.valor}`}
                  </TableCell>
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