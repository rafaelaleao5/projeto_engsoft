import React, { useState, useContext, useEffect } from 'react';
import { Button, TextField, Box, Typography, List, ListItem, Paper, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material'; // Importando ícones
import GastosContext from '../scenes/dashboard/GastosContext';
import Sidebar from '../scenes/dashboard/global/sidebar/Sidebar';
import { savePaymentMethod, getPaymentMethodByUserId, getDefaultPaymentMethod } from '../controllers/paymentMethodController';

function AdicionarFormaPagamento() {
  const { formasPagamento, adicionarFormaPagamento, removerFormaPagamento, hasPaymentMethodInfo, setPaymentMethodInfo, hasDefaultPaymentMethodInfo, setDefaultPaymentMethodInfo} = useContext(GastosContext);
  const [novaForma, setNovaForma] = useState('');
  const [erro, setErro] = useState('');
  const [formaEditando, setFormaEditando] = useState(null); // Estado para armazenar a forma sendo editada

  const handleAdicionarForma = async () => {
    const novaFormaUpper = novaForma.trim().toUpperCase();

    // Verifica se a forma de pagamento já existe (compara em upper case)
    if (formasPagamento.includes(novaFormaUpper) && formaEditando !== novaFormaUpper) {
      setErro('Essa forma de pagamento já existe.');
      return;
    }

    if (novaFormaUpper) {
      if (formaEditando) {
        // Edita a forma existente
        const index = formasPagamento.indexOf(formaEditando);
        if (index > -1) {
          formasPagamento[index] = novaFormaUpper; // Atualiza a forma editada
        }
        setFormaEditando(null); // Limpa o estado de edição
      } else {

        try{
          await savePaymentMethod(novaFormaUpper).then((newMethod) => {
            
            adicionarFormaPagamento(newMethod.data); // Adiciona em upper case
          })
  
        }catch(err){
          throw new err;
        }
      }

      setNovaForma(''); // Limpar o campo após adicionar
      setErro(''); // Limpar mensagem de erro
    }
  };

  const handleEditarForma = (forma) => {
    setNovaForma(forma); // Preenche o campo com a forma a ser editada
    setFormaEditando(forma); // Define a forma que está sendo editada
  };

  const handleExcluirForma = (forma) => {
    removerFormaPagamento(forma); // Chama a função de remover forma
  };

  useEffect(() => {
    getPaymentMethods()
    getPaymentMethodsDefault()
  
  }, []);

  const getPaymentMethods = async () => {
    if(!hasPaymentMethodInfo){
      setPaymentMethodInfo(true);
      const paymentMethods = await getPaymentMethodByUserId()
      paymentMethods.forEach(paymentMethod => {
        if (formasPagamento.includes(paymentMethod.methodName)) {
          return;
        }
        
        adicionarFormaPagamento(paymentMethod)
        debugger
      });
    }
  }

  const getPaymentMethodsDefault = async () => {
    if(!hasDefaultPaymentMethodInfo){
      setDefaultPaymentMethodInfo(true);
      const paymentMethods = await getDefaultPaymentMethod()
      paymentMethods.forEach(paymentMethod => {
        if (formasPagamento.includes(paymentMethod.methodName)) {
          return;
        }
        
        adicionarFormaPagamento(paymentMethod)
        debugger
      });
    }
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar fixa e sempre visível */}
      <Box
        sx={{
          width: '240px',
          position: 'fixed',
          height: '100vh',
          backgroundColor: '#1c044c',
          color: '#fff',
        }}
      >
        <Sidebar isOpen={true} />
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
          bgcolor: '#ece8ff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginLeft: '240px',
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
            {formaEditando ? 'Editar' : 'Adicionar'} {/* Altera o texto do botão */}
          </Button>

          <Typography variant="h6" sx={{ mt: 4, color: '#1c044c', fontWeight: 'bold' }}>
            Formas de Pagamento Disponíveis
          </Typography>

          <List>
            {formasPagamento.map((forma, index) => (
              <ListItem key={index} sx={{ padding: '8px 0', color: '#7048b7', display: 'flex', justifyContent: 'space-between' }}>
                <span>{forma.methodName}</span>
                <div>
                  <IconButton onClick={() => handleEditarForma(forma)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleExcluirForma(forma)}>
                    <Delete />
                  </IconButton>
                </div>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default AdicionarFormaPagamento;
