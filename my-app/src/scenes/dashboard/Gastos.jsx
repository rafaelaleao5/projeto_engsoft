import React, { useContext, useState, useEffect } from 'react';
import {
  Box, Button, FormControl, InputLabel, MenuItem, Paper, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Grid, Tooltip, Select, IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GastosContext from './GastosContext';
import { getCategoryByUserId, getDefaultCategories } from '../../controllers/categoryController';
import { getPaymentMethodByUserId, getDefaultPaymentMethod } from '../../controllers/paymentMethodController';

function Gastos() {
  const { gastos, adicionarGasto, adicionarTipoGasto, atualizarGasto, excluirGasto, tiposGasto, formasPagamento, 
    adicionarFormaPagamento, hasCategoryInfo, setCategoryInfo, hasDefaultCategoryInfo, 
    setDefaultCategoryInfo, hasPaymentMethodInfo, setPaymentMethodInfo, 
    hasDefaultPaymentMethodInfo, setDefaultPaymentMethodInfo } = useContext(GastosContext);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const [tipo, setTipo] = useState('');
  const [formapagamento, setFormaPagamento] = useState('');
  const [entradaSaida, setEntradaSaida] = useState('');
  const [editando, setEditando] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const valorFinal = entradaSaida === 'Saída' ? -Math.abs(parseFloat(valor)) : Math.abs(parseFloat(valor));

    const novoGasto = {
      id: editando ? idEditando : gastos.length + 1,
      descricao,
      valor: valorFinal,
      data,
      tipo,
      formapagamento,
      entradaSaida,
    };

    if (editando) {
      atualizarGasto(novoGasto);
      setEditando(false);
      setIdEditando(null);
    } else {
      adicionarGasto(novoGasto);
    }

    limparCampos();
  };

  const limparCampos = () => {
    setDescricao('');
    setValor('');
    setData('');
    setTipo('');
    setFormaPagamento('');
    setEntradaSaida('');
  };

  const handleEditar = (gasto) => {
    setDescricao(gasto.descricao);
    setValor(Math.abs(gasto.valor));
    setData(gasto.data);
    setTipo(gasto.tipo);
    setFormaPagamento(gasto.formapagamento);
    setEntradaSaida(gasto.entradaSaida);
    setEditando(true);
    setIdEditando(gasto.id);
  };

  const handleExcluir = (id) => {
    excluirGasto(id);
  };

  useEffect(() => {
    getCategories()
    getCategoriesDefault()
    getPaymentMethods()
    getPaymentMethodsDefault()
  
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
        debugger
        if (tiposGasto.includes(tag.tagName)) {
          return;
        }
        
        adicionarTipoGasto(tag)
        debugger
      });
    }
  }

  const getPaymentMethods = async () => {
    if(!hasPaymentMethodInfo){
      setPaymentMethodInfo(true);
      const paymentMethods = await getPaymentMethodByUserId()
      paymentMethods.forEach(paymentMethod => {
        if (formasPagamento.includes(paymentMethod.methodName)) {
          return;
        }
        
        adicionarFormaPagamento(paymentMethod)
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
    <Box display="flex" bgcolor="#ece8ff" p={3} borderRadius="10px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
      <Box flexGrow={1}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Tooltip title="Informe uma breve descrição do gasto, como 'Almoço' ou 'Combustível'">
                <TextField
                  fullWidth
                  label="Descrição"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  required
                  sx={{ backgroundColor: "#ffffff", borderRadius: "4px" }}
                />
              </Tooltip>
            </Grid>

            <Grid item xs={12} md={6}>
              <Tooltip title="Informe o valor do gasto em R$, use números inteiros ou decimais">
                <TextField
                  fullWidth
                  label="Valor"
                  type="number"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                  required
                  sx={{ backgroundColor: "#ffffff", borderRadius: "4px" }}
                />
              </Tooltip>
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
                sx={{ backgroundColor: "#ffffff", borderRadius: "4px" }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth required sx={{ backgroundColor: "#ffffff", borderRadius: "4px" }}>
                <InputLabel>Categoria</InputLabel>
                <Select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                >
                  {tiposGasto.map((tipoGasto, index) => (
                    <MenuItem key={index} value={tipoGasto.tagName}>
                      {tipoGasto.tagName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth required sx={{ backgroundColor: "#ffffff", borderRadius: "4px" }}>
                <InputLabel>Forma de Pagamento</InputLabel>
                <Select
                  value={formapagamento}
                  onChange={(e) => setFormaPagamento(e.target.value)}
                >
                  {formasPagamento.map((forma, index) => (
                    <MenuItem key={index} value={forma.methodName}>
                      {forma.methodName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth required sx={{ backgroundColor: "#ffffff", borderRadius: "4px" }}>
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
              <Button type="submit" variant="contained" sx={{ backgroundColor: "#7048b7", color: "#ffffff" }} fullWidth>
                {editando ? 'Atualizar Transação' : 'Adicionar Transação'}
              </Button>
            </Grid>
          </Grid>
        </form>

        <TableContainer component={Paper} style={{ marginTop: '20px', backgroundColor: "#f7f7f9" }} sx={{ borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#1c044c" }}>
              <TableRow>
                <TableCell sx={{ color: "#ffffff" }}>Descrição</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>Valor</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>Data</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>Categoria</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>Forma de Pagamento</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gastos.map((gasto) => (
                <TableRow key={gasto.id}>
                  <TableCell>{gasto.descricao}</TableCell>
                  <TableCell sx={{ color: gasto.valor < 0 ? '#e57373' : '#32c48d' }}>
                    {gasto.valor < 0 ? `- R$${Math.abs(gasto.valor)}` : `+ R$${gasto.valor}`}
                  </TableCell>
                  <TableCell>{gasto.data}</TableCell>
                  <TableCell>{gasto.tipo}</TableCell>
                  <TableCell>{gasto.formapagamento}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEditar(gasto)} aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleExcluir(gasto.id)} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
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
