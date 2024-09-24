import React, { useState, useContext } from 'react';
import { Button, TextField, Box, Typography, List, ListItem, Paper } from '@mui/material';
import GastosContext from '../scenes/dashboard/GastosContext';
import Sidebar from '../scenes/dashboard/global/Sidebar';

function AdicionarFormaPagamento() {
  const { formasPagamento, adicionarFormaPagamento } = useContext(GastosContext);
  const [novaForma, setNovaForma] = useState('');

  const handleAdicionarForma = () => {
    if (novaForma.trim()) {
      adicionarFormaPagamento(novaForma);
      setNovaForma(''); // Limpar o campo após adicionar
    }
  };

  return (
    <Box p={3} component={Paper} elevation={3} sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      <Sidebar></Sidebar>
      <Typography variant="h5" gutterBottom>
        Adicionar Nova Forma de Pagamento
      </Typography>

      <TextField
        label="Nova Forma de Pagamento"
        variant="outlined"
        fullWidth
        value={novaForma}
        onChange={(e) => setNovaForma(e.target.value)}
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
