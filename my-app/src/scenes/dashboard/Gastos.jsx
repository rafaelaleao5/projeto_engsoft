import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button
} from '@mui/material';

function Gastos() {
  // Estado para armazenar os gastos
  const [gastos, setGastos] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  // Função para adicionar um novo gasto
  const adicionarGasto = () => {
    setGastos([...gastos, { descricao, valor: parseFloat(valor) }]);
    setDescricao('');
    setValor('');
  };

  return (
    <div>
      <h2>Adicione seus Gastos</h2>

      {/* Formulário para adicionar gastos */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <TextField
          label="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          variant="outlined"
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Valor"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={adicionarGasto}
          style={{ marginLeft: '10px' }}
        >
          Adicionar Gasto
        </Button>
      </div>

      {/* Tabela de gastos */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Descrição</TableCell>
              <TableCell align="right">Valor (R$)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gastos.map((gasto, index) => (
              <TableRow key={index}>
                <TableCell>{gasto.descricao}</TableCell>
                <TableCell align="right">{gasto.valor.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Gastos;
