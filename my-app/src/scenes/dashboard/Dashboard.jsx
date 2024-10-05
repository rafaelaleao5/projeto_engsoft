import React, { useContext, useState } from 'react';
import {
  Box, Grid, Card, CardContent, Typography,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, MenuItem, Checkbox, FormControlLabel
} from '@mui/material';
import { AttachMoney, Assessment, ArrowUpward, ArrowDownward } from '@mui/icons-material'; // Ícones do Material-UI
import GastosContext from './GastosContext'; // Importando o contexto
import Transaction from './Transaction';
import BarChart from './BarChart'; // Componente BarChart
import PieChartComponent from './PieChart'; // Componente PieChart
import StackedBarChart from './StackedBarChart'; // Componente StackedBarChart

function Dashboard() {
  const { gastos, tiposGasto } = useContext(GastosContext); // Acessando o estado global

  // Estado para filtros
  const [tipoFiltro, setTipoFiltro] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');

  // Estado para controle de exibição dos gráficos
  const [mostrarBarChart, setMostrarBarChart] = useState(true);
  const [mostrarPieChart, setMostrarPieChart] = useState(true);
  const [mostrarStackedBarChart, setMostrarStackedBarChart] = useState(true);

  // Função de filtro
  const filtrarGastos = () => {
    return gastos.filter((gasto) => {
      const tipoValido = tipoFiltro ? gasto.tipo === tipoFiltro : true;
      const dataValida = (!dataInicio || new Date(gasto.data) >= new Date(dataInicio)) &&
                         (!dataFim || new Date(gasto.data) <= new Date(dataFim));
      return tipoValido && dataValida;
    });
  };

  const gastosFiltrados = filtrarGastos(); // Aplicando o filtro aos dados

  // Recalculando o valor total de gastos com base nos filtros
  const totalGastos = gastosFiltrados.reduce((acc, gasto) => acc + gasto.valor, 0);

  // Recalculando o total de entradas e saídas com base nos filtros
  const totalEntradas = gastosFiltrados
    .filter((gasto) => gasto.valor > 0) // Entradas são valores positivos
    .reduce((acc, gasto) => acc + gasto.valor, 0);

  const totalSaidas = gastosFiltrados
    .filter((gasto) => gasto.valor < 0) // Saídas são valores negativos
    .reduce((acc, gasto) => acc + Math.abs(gasto.valor), 0); // Usando Math.abs para somar corretamente

  // Preparando dados para o gráfico de barras (gastos ao longo do tempo)
  const barChartData = gastosFiltrados.map((gasto, index) => ({
    name: `Gasto ${index + 1}`,
    value: gasto.valor,
  }));

  // Agrupando os dados por tipo de gasto para o gráfico de pizza
  const tiposGastos = ['ALIMENTAÇÃO', 'TRANSPORTE', 'PESSOAL', 'OUTROS'];
  const pieChartData = tiposGastos.map((tipo) => {
    const totalPorTipo = gastosFiltrados
      .filter((gasto) => gasto.tipo === tipo)
      .reduce((acc, gasto) => acc + gasto.valor, 0);
    return { name: tipo, value: totalPorTipo };
  });

  // Ordenando as transações por data e pegando as 5 últimas
  const ultimasTransacoes = gastosFiltrados
    .sort((a, b) => new Date(b.data) - new Date(a.data))
    .slice(0, 5);

  return(
    <Box p={4}>
      {/* Resumo de Indicadores */}
      <Grid container spacing={2}>
        {/* Cartões de Saldo, Entradas e Saídas */}
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

      {/* Filtros */}
      <Box mt={4} display="flex" gap={2} alignItems="center">
        {/* Filtro por Tipo */}
        <TextField
          select
          label="Filtrar por Categoria"
          value={tipoFiltro}
          onChange={(e) => setTipoFiltro(e.target.value)}
          sx={{ width: 200 }}
        >
          <MenuItem value="">Todos</MenuItem>
          {tiposGasto.map((tipo) => (
            <MenuItem key={tipo} value={tipo}>
              {tipo}
            </MenuItem>
          ))}
        </TextField>

        {/* Filtro por Data */}
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
      </Box>

      {/* Seletor de gráficos */}
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

      {/* Gráficos */}
      <Box sx={{display:"flex",gap: 2, marginTop: 4}}>
        {mostrarBarChart && <BarChart data={barChartData} />}
        {mostrarPieChart && <PieChartComponent data={pieChartData} />}
        {mostrarStackedBarChart && <StackedBarChart data={gastosFiltrados} />}
      </Box>

      {/* Tabela de Gastos */}
      
      <Box mt={4} sx={{ width: '100%', display: 'flex', gap: 6}}>
      <Typography variant="h6" gutterBottom>Detalhes das Transações</Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Categoria</TableCell>
                <TableCell align="right">Valor</TableCell>
                <TableCell align="right">Data</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ultimasTransacoes.map((gasto, index) => (
                <TableRow key={index}>
                  <TableCell>{gasto.tipo}</TableCell>
                  <TableCell align="right">{`R$ ${gasto.valor.toFixed(2)}`}</TableCell>
                  <TableCell align="right">{gasto.data}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Transaction />
        
      </Box>
      

     
    </Box>
  );
}

export default Dashboard;