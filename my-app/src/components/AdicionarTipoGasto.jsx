import React, { useState, useContext } from 'react';
import { Button, TextField, Box, Grid, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import GastosContext from '../scenes/dashboard/GastosContext';

function AdicionarTipoGasto() {
  const { adicionarTipoGasto, tiposGasto } = useContext(GastosContext);
  const [novoTipo, setNovoTipo] = useState('');
  const [erro, setErro] = useState('');

  const handleAdicionarTipoGasto = () => {
    const novoTipoUpper = novoTipo.trim().toUpperCase();

    // Verifica se o tipo já existe (comparando em upper case)
    if (tiposGasto.includes(novoTipoUpper)) {
      setErro('Esse tipo de gasto já existe.');
      return;
    }

    if (novoTipoUpper) {
      adicionarTipoGasto(novoTipoUpper); // Adiciona o tipo em upper case
      setNovoTipo(''); // Limpa o campo
      setErro(''); // Limpa mensagem de erro
    }
  };

  return (
    <Box
      sx={{
        mt: 3,
        p: 3,
        boxShadow: 2,
        backgroundColor: 'white',
        borderRadius: 2,
        maxWidth: 500,
        mx: 'auto'
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Adicionar Nova Categoria
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nova Categoria"
            value={novoTipo}
            onChange={(e) => setNovoTipo(e.target.value)}
            variant="outlined"
            size="small"
            error={!!erro}
            helperText={erro}
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleAdicionarTipoGasto}
            sx={{
              textTransform: 'none',
              fontSize: '16px',
              px: 4,
            }}
          >
            Adicionar
          </Button>
        </Grid>
      </Grid>

      {/* Lista de tipos de gastos existentes */}
      <Typography variant="h6" align="center" sx={{ mt: 3 }}>
      Categorias Existentes
      </Typography>
      <List>
        {tiposGasto.map((tipo, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText primary={tipo} />
            </ListItem>
            {index < tiposGasto.length - 1 && <Divider />} {/* Adiciona uma linha entre os itens */}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default AdicionarTipoGasto;
