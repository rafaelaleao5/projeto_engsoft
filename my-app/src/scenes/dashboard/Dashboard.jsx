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
  const { gastos, tiposGasto } = useContext(GastosContext);

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

  const gastosFiltrados = filtrarGastos(); 

  const totalGastos = gastosFiltrados.reduce((acc, gasto) => acc + gasto.valor, 0);
  const totalEntradas = gastosFiltrados.filter((gasto) => gasto.valor > 0).reduce((acc, gasto) => acc + gasto.valor, 0);
  const totalSaidas = gastosFiltrados.filter((gasto) => gasto.valor < 0).reduce((acc, gasto) => acc + Math.abs(gasto.valor), 0);

  const barChartData = gastosFiltrados.map((gasto, index) => ({
    name: `Gasto ${index + 1}`,
    value: gasto.valor,
  }));

  const tiposGastos = ['ALIMENTAÇÃO', 'TRANSPORTE', 'PESSOAL', 'OUTROS'];
  const pieChartData = tiposGastos.map((tipo) => {
    const totalPorTipo = gastosFiltrados.filter((gasto) => gasto.tipo === tipo).reduce((acc, gasto) => acc + gasto.valor, 0);
    return { name: tipo, value: totalPorTipo };
  });

  const ultimasTransacoes = gastosFiltrados.sort((a, b) => new Date(b.data) - new Date(a.data)).slice(0, 5);

  return (
    <Box p={4} bgcolor="#f3eaff" borderRadius="8px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
      {/* Resumo de Indicadores */}
      <Grid container spacing={2}>
        {/* Cartões de Saldo, Entradas e Saídas */}
        <Grid item xs={3}>
          <Card sx={{ backgroundColor: "#ece8ff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
            <CardContent>
              <Box display="flex" alignItems="center">
                <AttachMoney sx={{ fontSize: 40, color: "#7048b7", marginRight: 1 }} />
                <Typography variant="h5" sx={{ color: "#1c044c" }}>R$ {totalGastos.toFixed(2)}</Typography>
              </Box>
              <Typography variant="subtitle1" color="#1c044c">Saldo</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card sx={{ backgroundColor: "#ece8ff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
            <CardContent>
              <Box display="flex" alignItems="center">
                <Assessment sx={{ fontSize: 40, color: "#7048b7", marginRight: 1 }} />
                <Typography variant="h5" sx={{ color: "#1c044c" }}>{gastosFiltrados.length}</Typography>
              </Box>
              <Typography variant="subtitle1" color="#1c044c">Total de Transações</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card sx={{ backgroundColor: "#e8f5e9", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
            <CardContent>
              <Box display="flex" alignItems="center">
                <ArrowUpward sx={{ fontSize: 40, color: "#32c48d", marginRight: 1 }} />
                <Typography variant="h5" sx={{ color: "#32c48d" }}>R$ {totalEntradas.toFixed(2)}</Typography>
              </Box>
              <Typography variant="subtitle1" color="#1c044c">Saldo - Entradas</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card sx={{ backgroundColor: "#ffebee", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
            <CardContent>
              <Box display="flex" alignItems="center">
                <ArrowDownward sx={{ fontSize: 40, color: "#e57373", marginRight: 1 }} />
                <Typography variant="h5" sx={{ color: "#e57373" }}>R$ {totalSaidas.toFixed(2)}</Typography>
              </Box>
              <Typography variant="subtitle1" color="#1c044c">Saldo - Saídas</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filtros */}
      <Box mt={4} display="flex" gap={2} alignItems="center" bgcolor="#ece8ff" p={2} borderRadius="8px">
        {/* Filtro por Tipo */}
        <TextField
          select
          label="Filtrar por Categoria"
          value={tipoFiltro}
          onChange={(e) => setTipoFiltro(e.target.value)}
          sx={{ width: 200, backgroundColor: "#ffffff", borderRadius: "4px" }}
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
          sx={{ width: 200, backgroundColor: "#ffffff", borderRadius: "4px" }}
        />
        <TextField
          label="Data Fim"
          type="date"
          value={dataFim}
          onChange={(e) => setDataFim(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ width: 200, backgroundColor: "#ffffff", borderRadius: "4px" }}
        />
      </Box>

      {/* Gráficos */}
      <Box sx={{ display: "flex", gap: 2, marginTop: 4 }}>
        {mostrarBarChart && <BarChart data={barChartData} />}
        {mostrarPieChart && <PieChartComponent data={pieChartData} />}
        {mostrarStackedBarChart && <StackedBarChart data={gastosFiltrados} />}
      </Box>

      {/* Tabela de Gastos */}
      <Box mt={4} sx={{ width: '100%', display: 'flex', gap: 6 }}>
        <Typography variant="h6" gutterBottom>Detalhes das Transações</Typography>
        <TableContainer component={Paper} sx={{ borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#1c044c" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Categoria</TableCell>
                <TableCell align="right" sx={{ color: "#fff" }}>Valor</TableCell>
                <TableCell align="right" sx={{ color: "#fff" }}>Data</TableCell>
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
