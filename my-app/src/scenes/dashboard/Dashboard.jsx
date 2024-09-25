import React, { useContext } from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import GastosContext from './GastosContext'; // Importando o contexto
import Transaction from './Transaction';
import BarChart from './BarChart'; // Componente BarChart
import PieChartComponent from './PieChart'; // Componente PieChart

function Dashboard() {
  const { gastos } = useContext(GastosContext); // Acessando o estado global

  // Exemplo de lógica para calcular o valor total de gastos
  const totalGastos = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);

  // Calculando o total de entradas e saídas
  const totalEntradas = gastos
    .filter((gasto) => gasto.valor > 0) // Entradas são valores positivos
    .reduce((acc, gasto) => acc + gasto.valor, 0);

  const totalSaidas = gastos
    .filter((gasto) => gasto.valor < 0) // Saídas são valores negativos
    .reduce((acc, gasto) => acc + Math.abs(gasto.valor), 0); // Usando Math.abs para somar corretamente

  // Preparando dados para o gráfico de barras (gastos ao longo do tempo)
  const barChartData = gastos.map((gasto, index) => ({
    name: `Gasto ${index + 1}`,
    value: gasto.valor,
  }));

  // Agrupando os dados por tipo de gasto para o gráfico de pizza
  const tiposGastos = ['ALIMENTAÇÃO', 'TRANSPORTE', 'PESSOAL', 'OUTROS'];
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
        {/* Cartão de Saldo Total */}
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">R$ {totalGastos.toFixed(2)}</Typography>
              <Typography variant="subtitle1">Saldo</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Cartão de Total de Transações */}
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">{gastos.length}</Typography>
              <Typography variant="subtitle1">Total de Transações</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Cartão de Total de Entradas */}
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ color: 'green' }}>
                R$ {totalEntradas.toFixed(2)}
              </Typography>
              <Typography variant="subtitle1">Total de Entradas</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Cartão de Total de Saídas */}
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ color: 'red' }}>
                R$ {totalSaidas.toFixed(2)}
              </Typography>
              <Typography variant="subtitle1">Total de Saídas</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Gráficos */}
      <Box display="flex" mt={4} gap={4}>
        <BarChart data={barChartData} /> {/* Passando os dados corretos para o gráfico de barras */}
        <PieChartComponent data={pieChartData} /> {/* Passando os dados corretos para o gráfico de pizza */}
      </Box>

      <Transaction />
    </Box>
  );
}

export default Dashboard;
