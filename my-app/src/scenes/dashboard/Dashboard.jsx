import React, { useContext, useState, useEffect } from 'react';
import {
  Box, Grid, Card, CardContent, Typography,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, MenuItem, Checkbox, FormControlLabel
} from '@mui/material';
import { AttachMoney, Assessment, ArrowUpward, ArrowDownward } from '@mui/icons-material'; 
import GastosContext from './GastosContext'; 
import { getEntryByUserId } from '../../controllers/entriesController';
import Transaction from './Transaction';
import BarChart from './BarChart';
import PieChartComponent from './PieChart';
import StackedBarChart from './StackedBarChart';


function Dashboard() {
  const { gastos, tiposGasto, adicionarGasto, hasEntries, setHasEntries } = useContext(GastosContext); 

  const [tipoFiltro, setTipoFiltro] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [anoFiltro, setAnoFiltro] = useState(''); 

  const [mostrarBarChart, setMostrarBarChart] = useState(true);
  const [mostrarPieChart, setMostrarPieChart] = useState(true);
  const [mostrarStackedBarChart, setMostrarStackedBarChart] = useState(true);
  

  const filtrarGastos = () => {
    return gastos.filter((gasto) => {
      const tipoValido = tipoFiltro ? gasto.tagId.tagName === tipoFiltro : true;
      const dataValida = (!dataInicio || new Date(gasto.purchaseDate) >= new Date(dataInicio)) &&
                         (!dataFim || new Date(gasto.purchaseDate) <= new Date(dataFim));
      const anoValido = anoFiltro ? new Date(gasto.purchaseDate).getFullYear() === parseInt(anoFiltro) : true;
      return tipoValido && dataValida && anoValido;
    });
  };

  const gastosFiltrados = filtrarGastos();

  const getEntries = async () => {
    if(!hasEntries){
      setHasEntries(true);
      const entries = await getEntryByUserId()
      entries.forEach(entry => {
        adicionarGasto(entry);
      });
    }
  }
  
  const totalGastos = gastosFiltrados.reduce((acc, gasto) => acc + gasto.entryValue, 0);

  const totalEntradas = gastosFiltrados
    .filter((gasto) => gasto.entryValue > 0)
    .reduce((acc, gasto) => acc + gasto.entryValue, 0);

  const totalSaidas = gastosFiltrados
    .filter((gasto) => gasto.entryValue < 0)
    .reduce((acc, gasto) => acc + Math.abs(gasto.entryValue), 0); 

  const barChartData = gastosFiltrados.map((gasto, index) => ({
    name: `Gasto ${index + 1}`,
    value: gasto.entryValue,
    
  }));

  const pieChartData = tiposGasto.map((tipo) => {
    const totalPorTipo = gastosFiltrados
      .filter((gasto) => gasto.tagId.tagName === tipo.tagName)
      .reduce((acc, gasto) => acc + gasto.entryValue, 0);
    return { name: tipo.tagName, value: totalPorTipo };
  });

  const ultimasTransacoes = gastosFiltrados
    .sort((a, b) => new Date(b.purchaseDate) - new Date(a.purchaseDate))
    .slice(0, 5);

    useEffect(() => {
      getEntries()
    
    }, []);

  if (gastosFiltrados.length === 0) { // talvez mudar lógica e props c nome do user
    return (
      <Box p={4} textAlign="center">
        <Typography variant="h5"> 
          Bem-vindo, Marcos! 
        </Typography>
        <Typography variant="body1" mt={2}>
          Vamos adicionar sua primeira transação. Clique no símbolo de <strong>+</strong> no canto superior direito e comece a organizar sua vida financeira.
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <AttachMoney sx={{ fontSize: 40, marginRight: 1 }} />
                <Typography variant="h5">R$ {totalGastos.toFixed(2)}</Typography>
              </Box>
              <Typography variant="subtitle1">Saldo</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <Assessment sx={{ fontSize: 40, marginRight: 1 }} />
                <Typography variant="h5">{gastosFiltrados.length}</Typography>
              </Box>
              <Typography variant="subtitle1">Total de Transações</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <ArrowUpward sx={{ fontSize: 40, color: 'green', marginRight: 1 }} />
                <Typography variant="h5" sx={{ color: 'green' }}>
                  R$ {totalEntradas.toFixed(2)}
                </Typography>
              </Box>
              <Typography variant="subtitle1">Saldo Entradas</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <ArrowDownward sx={{ fontSize: 40, color: 'red', marginRight: 1 }} />
                <Typography variant="h5" sx={{ color: 'red' }}>
                  R$ {totalSaidas.toFixed(2)}
                </Typography>
              </Box>
              <Typography variant="subtitle1">Saldo Saídas</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={4} display="flex" gap={2} alignItems="center">
        <TextField
          select
          label="Filtrar por Categoria"
          value={tipoFiltro}
          onChange={(e) => setTipoFiltro(e.target.value)}
          sx={{ width: 200 }}
        >
          <MenuItem value="">Todos</MenuItem>
          {tiposGasto.map((tipo) => (
            <MenuItem key={tipo.tagId} value={tipo.tagName}>
              {tipo.tagName}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Data Início"
          type="date"
          value={dataInicio}
          onChange={(e) => setDataInicio(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ width: 200 }}
        />
        <TextField
          label="Data Fim"
          type="date"
          value={dataFim}
          onChange={(e) => setDataFim(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ width: 200 }}
        />

        <TextField
          label="Filtrar por Ano"
          type="number"
          value={anoFiltro}
          onChange={(e) => setAnoFiltro(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ width: 200 }}
        />
      </Box>

      <Box mt={4} display="flex" gap={4}>
        <FormControlLabel
          control={<Checkbox checked={mostrarBarChart} onChange={() => setMostrarBarChart(!mostrarBarChart)} />}
          label="Gráfico de Barras"
        />
        <FormControlLabel
          control={<Checkbox checked={mostrarPieChart} onChange={() => setMostrarPieChart(!mostrarPieChart)} />}
          label="Gráfico de Pizza"
        />
        <FormControlLabel
          control={<Checkbox checked={mostrarStackedBarChart} onChange={() => setMostrarStackedBarChart(!mostrarStackedBarChart)} />}
          label="Gráfico de Barras Empilhadas"
        />
      </Box>

      <Box sx={{ display: "flex", gap: 2, marginTop: 4 }}>
        {mostrarBarChart && <BarChart data={barChartData} />}
        {mostrarPieChart && <PieChartComponent data={pieChartData} />}
        {mostrarStackedBarChart && <StackedBarChart data={gastosFiltrados} />}
      </Box>

      <Box mt={4} sx={{ display: 'flex', gap: 4, width: '100%' }}> 
        <Box sx={{ width: '50%' }}> 
          <Typography variant="h6" gutterBottom>Detalhes das Transações</Typography>
          <TableContainer component={Paper} sx={{ borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", backgroundColor: '#f9f9f9' }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#1c044c" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff" }}>ID</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Data</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Tipo</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Valor</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {gastosFiltrados.map((gasto, index) => (
                  <TableRow key={gasto.id || index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{new Date(gasto.purchaseDate).toLocaleDateString()}</TableCell>
                    <TableCell>{gasto.tagId.tagName}</TableCell>
                    <TableCell>{gasto.entryValue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={{ width: '50%' }}> 
          <Typography variant="h6" gutterBottom>Últimas Transações</Typography>
          <TableContainer component={Paper} sx={{ borderRadius: "8px", backgroundColor: '#f9f9f9', boxShadow: 'none' }}>
            {ultimasTransacoes.length > 0 ? (
              <Transaction transactions={ultimasTransacoes.value} />
            ) : (
              <Typography variant="body2">Nenhuma transação disponível</Typography>
            )}
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
