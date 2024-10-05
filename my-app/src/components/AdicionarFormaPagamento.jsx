import React, { useState, useContext } from 'react';
import { Button, TextField, Box, Typography, List, ListItem, Paper } from '@mui/material';
import GastosContext from '../scenes/dashboard/GastosContext';
import Sidebar from '../scenes/dashboard/global/sidebar/Sidebar';

function AdicionarFormaPagamento() {
  const { formasPagamento, adicionarFormaPagamento } = useContext(GastosContext);
  const [novaForma, setNovaForma] = useState('');
  const [erro, setErro] = useState('');

  const handleAdicionarForma = () => {
    const novaFormaUpper = novaForma.trim().toUpperCase();

    // Verifica se a forma de pagamento já existe (compara em upper case)
    if (formasPagamento.includes(novaFormaUpper)) {
      setErro('Essa forma de pagamento já existe.');
      return;
    }

    if (novaFormaUpper) {
      adicionarFormaPagamento(novaFormaUpper); // Adiciona em upper case
      setNovaForma(''); // Limpar o campo após adicionar
      setErro(''); // Limpar mensagem de erro
    }
  };

  return (
    <Box p={3} component={Paper} elevation={3} sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      <Sidebar />
      <Typography variant="h5" gutterBottom>
        Adicionar Nova Forma de Pagamento
      </Typography>

      <TextField
        label="Nova Forma de Pagamento"
        variant="outlined"
        fullWidth
        value={novaForma}
        onChange={(e) => setNovaForma(e.target.value)}
        error={!!erro}
        helperText={erro}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleAdicionarForma}
        fullWidth
        disabled={!novaForma.trim()} // Desativa o botão se o campo estiver vazio
      >
        Adicionar
      </Button>

      <Typography variant="h6" sx={{ mt: 4 }}>
        Formas de Pagamento Disponíveis
      </Typography>

      <List>
        {formasPagamento.map((forma, index) => (
          <ListItem key={index} sx={{ padding: '8px 0' }}>
            {forma}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default AdicionarFormaPagamento;
