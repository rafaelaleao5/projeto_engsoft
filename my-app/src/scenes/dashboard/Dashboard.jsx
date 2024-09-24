import React, { useContext } from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import GastosContext from './GastosContext'; // Importando o contexto
import Transaction from './Transaction';
import LineChartComponent from './LineChart';
import PieChartComponent from './PieChart';

function Dashboard() {
  const { gastos } = useContext(GastosContext); // Acessando o estado global

  // Exemplo de lógica para calcular o valor total de gastos
  const totalGastos = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);

  // Preparando dados para o gráfico de linha (gastos ao longo do tempo)
  const lineChartData = gastos.map((gasto, index) => ({
    name: `Gasto ${index + 1}`,
    value: gasto.valor,
  }));

  // Agrupando os dados por tipo de gasto para o gráfico de pizza
  const tiposGastos = ['Alimentação', 'Transporte', 'Pessoal', 'Outros'];
  const pieChartData = tiposGastos.map((tipo) => {
    const totalPorTipo = gastos
      .filter((gasto) => gasto.tipo === tipo)
      .reduce((acc, gasto) => acc + gasto.valor, 0);
    return { name: tipo, value: totalPorTipo };
  });

  return (
    <Box p={4}>
      {/* Resumo de Indicadores */}
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">R$ {totalGastos.toFixed(2)}</Typography>
              <Typography variant="subtitle1">Total de Gastos</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">{gastos.length}</Typography>
              <Typography variant="subtitle1">Total de Transações</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Gráficos */}
      <Box display="flex" mt={4} gap={4}>
        <LineChartComponent data={lineChartData} />
        <PieChartComponent data={pieChartData} />
      </Box>

      <Transaction />
    </Box>
  );
}

export default Dashboard;
