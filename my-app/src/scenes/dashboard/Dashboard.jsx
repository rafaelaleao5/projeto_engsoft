import React, { useContext } from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import GastosContext from './GastosContext'; // Importando o contexto


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
    <Box p={2}>
      {/* Resumo de Indicadores */}
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">R$ {totalGastos}</Typography>
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
      <Box display="flex" mt={4}>
        {/* Gráfico de Linha */}
        <Box flex={1} p={2} backgroundColor="#f0f4f8">
          <Typography variant="h6">Gastos ao Longo do Tempo</Typography>
          <LineChart width={400} height={250} data={lineChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </Box>

        {/* Gráfico de Pizza */}
        <Box flex={1} p={2}>
          <Typography variant="h6">Distribuição de Gastos por Tipo</Typography>
          <PieChart width={400} height={250}>
            <Pie
              data={pieChartData}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={-4}
        innerRadius={0.35}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.8'
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
