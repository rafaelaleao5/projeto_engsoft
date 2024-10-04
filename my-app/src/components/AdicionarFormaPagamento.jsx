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
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar fixa e sempre visível */}
      <Box
        sx={{
          width: '240px',
          position: 'fixed',
          height: '100vh',
          backgroundColor: '#1c044c', // Fundo da sidebar de acordo com a paleta
          color: '#fff',
        }}
      >
        <Sidebar isOpen={true} /> {/* Forçando a Sidebar a estar sempre aberta */}
      </Box>

      {/* Conteúdo principal centralizado */}
      <Box
        p={3}
        component={Paper}
        elevation={3}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          bgcolor: '#ece8ff', // Fundo no estilo da plataforma
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginLeft: '240px', // Compensar a largura da sidebar
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: '#1c044c',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
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
            sx={{ mb: 2, backgroundColor: '#fff', borderRadius: '4px' }}
          />

          <Button
            variant="contained"
            sx={{ backgroundColor: '#7048b7', color: '#fff' }}
            onClick={handleAdicionarForma}
            fullWidth
            disabled={!novaForma.trim()} // Desativa o botão se o campo estiver vazio
          >
            Adicionar
          </Button>

          <Typography variant="h6" sx={{ mt: 4, color: '#1c044c', fontWeight: 'bold' }}>
            Formas de Pagamento Disponíveis
          </Typography>

          <List>
            {formasPagamento.map((forma, index) => (
              <ListItem key={index} sx={{ padding: '8px 0', color: '#7048b7' }}>
                {forma}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default AdicionarFormaPagamento;
