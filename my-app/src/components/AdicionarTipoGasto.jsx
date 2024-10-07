import React, { useState, useContext, useEffect } from 'react';
import { Button, TextField, Box, Grid, Typography, List, ListItem, ListItemText, Divider, Paper, IconButton } from '@mui/material';
import GastosContext from '../scenes/dashboard/GastosContext';
import { getCategoryByUserId } from "../controllers/categoryController";
import { getDefaultCategories } from '../controllers/categoryController';
import { saveCategory } from '../controllers/categoryController';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from '../scenes/dashboard/global/sidebar/Sidebar';

function AdicionarTipoGasto() {
  const { adicionarTipoGasto, tiposGasto, editarTipoGasto, excluirTipoGasto, setCategoryInfo, hasCategoryInfo, setDefaultCategoryInfo, hasDefaultCategoryInfo} = useContext(GastosContext);
  const [novoTipo, setNovoTipo] = useState('');
  const [erro, setErro] = useState('');
  const [tipoAtual, setTipoAtual] = useState(null); // Para rastrear o tipo que está sendo editado

  const handleAdicionarTipoGasto = async () => {
    const novoTipoUpper = novoTipo.trim().toUpperCase();

    // Verifica se o tipo já existe (comparando em upper case)
    if (tiposGasto.includes(novoTipoUpper)) {
      setErro('Esse tipo de gasto já existe.');
      return;
    }

    if (novoTipoUpper) {

      try{
          await saveCategory(novoTipo, "CATEGORY").then((newCategory) => {

          adicionarTipoGasto(newCategory.data); // Adiciona o tipo em upper case
          setNovoTipo(''); // Limpa o campo
          setErro(''); // Limpa mensagem de erro
        })
      }catch(err){
        console.log(err)
      }

    }
};


useEffect(() => {
  getCategories()
  getCategoriesDefault()

}, []);

  const getCategories = async () => {
    if(!hasCategoryInfo){
      setCategoryInfo(true);
      const tags = await getCategoryByUserId()
        tags.forEach(tag => {
          if (tiposGasto.includes(tag.tagName)) {
            return;
          }
          
          adicionarTipoGasto(tag)
        }); 
    }
  }

  const getCategoriesDefault = async () => {
    if(!hasDefaultCategoryInfo){
      setDefaultCategoryInfo(true);
      const tags = await getDefaultCategories();
      tags.forEach(tag => {
          if (tiposGasto.includes(tag.tagName)) {
            return;
          }
          adicionarTipoGasto(tag)    
      });
    }
  }

  const handleEditarTipoGasto = (tipo) => {
    setTipoAtual(tipo);
    setNovoTipo(tipo); // Define o tipo atual no campo de entrada
  };

  const handleExcluirTipoGasto = (tipo) => {
    excluirTipoGasto(tipo);
  };

  const handleSalvarEdicao = () => {
    const tipoUpper = novoTipo.trim().toUpperCase();

    // Verifica se o tipo já existe
    if (tiposGasto.includes(tipoUpper)) {
      setErro('Esse tipo de gasto já existe.');
      return;
    }

    editarTipoGasto(tipoAtual, tipoUpper); // Edita o tipo
    setNovoTipo(''); // Limpa o campo
    setTipoAtual(null); // Reseta o tipo atual
    setErro(''); // Limpa mensagem de erro
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
        <Sidebar isOpen={true} /> {/* Sidebar sempre aberta */}
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
          bgcolor: '#ece8ff', // Fundo da área principal no estilo da plataforma
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
                sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
              />
            </Grid>

            <Grid item xs={12} display="flex" justifyContent="center">
              <Button
                variant="contained"
                sx={{ backgroundColor: '#7048b7', color: '#fff', textTransform: 'none', fontSize: '16px', px: 4 }}
                onClick={tipoAtual ? handleSalvarEdicao : handleAdicionarTipoGasto} // Chama a função de salvar ou adicionar
                disabled={!novoTipo.trim()} // Desativa o botão se o campo estiver vazio
              >
                {tipoAtual ? 'Salvar' : 'Adicionar'}
              </Button>
            </Grid>
          </Grid>

          {/* Lista de tipos de gastos existentes */}
          <Typography
            variant="h6"
            align="center"
            sx={{ mt: 4, color: '#1c044c', fontWeight: 'bold' }}
          >
            Categorias Existentes
          </Typography>
          
          <List>
            {tiposGasto.map((tipo, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText primary={tipo.tagName} sx={{ color: '#7048b7' }} />
                  <IconButton onClick={() => handleEditarTipoGasto(tipo)}>
                    <EditIcon sx={{ color: '#1c044c' }} />
                  </IconButton>
                  <IconButton onClick={() => handleExcluirTipoGasto(tipo)}>
                    <DeleteIcon sx={{ color: '#ff3d00' }} />
                  </IconButton>
                </ListItem>
                {index < tiposGasto.length - 1 && <Divider />} {/* Adiciona uma linha entre os itens */}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default AdicionarTipoGasto;
