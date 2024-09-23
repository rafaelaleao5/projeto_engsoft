import React, { useContext, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import GastosContext from './GastosContext';

function Gastos() {
  const { gastos, adicionarGasto } = useContext(GastosContext); // Acessando o estado global
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const [tipo, setTipo] = useState(''); // Novo estado para o tipo de gasto

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarGasto({ id: gastos.length + 1, descricao, valor: parseFloat(valor), data, tipo }); // Adicionando o tipo
    setDescricao('');
    setValor('');
    setData('');
    setTipo(''); // Resetar o tipo de gasto após a submissão
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
        <TextField
          label="Valor"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
        <TextField
          label="Data"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
        
        {/* Campo para escolher o tipo de gasto */}
        <FormControl required>
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

        <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px' }}>
          Adicionar Gasto
        </Button>
      </form>

      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Descrição</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Tipo</TableCell> {/* Exibir o tipo de gasto */}
            </TableRow>
          </TableHead>
          <TableBody>
            {gastos.map((gasto) => (
              <TableRow key={gasto.id}>
                <TableCell>{gasto.descricao}</TableCell>
                <TableCell>{gasto.valor}</TableCell>
                <TableCell>{gasto.data}</TableCell>
                <TableCell>{gasto.tipo}</TableCell> {/* Mostrar o tipo */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Gastos;
