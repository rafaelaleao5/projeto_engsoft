import React, { useContext } from 'react';
import { Box, Grid, Card, CardContent, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import GastosContext from './GastosContext'; // Importando o contexto
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReceiptIcon from '@mui/icons-material/Receipt';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';

// Ícones mapeados para cada tipo de transação
const iconMap = {
    'wallet': <AccountBalanceWalletIcon />,
    'credit_card': <CreditCardIcon />,
    'attach_money': <AttachMoneyIcon />,
    'receipt': <ReceiptIcon />,
    'transfer': <TransferWithinAStationIcon />,
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Dashboard() {
  const { gastos, transacoes } = useContext(GastosContext); // Acessando o estado global

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
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Box>
      </Box>

      {/* Lista de Transações Dinâmicas */}
      <Box mt={4} sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '10px', boxShadow: 2, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Transações Recentes
        </Typography>
        <List>
          {transacoes.map((transaction) => (
            <ListItem key={transaction.id}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: transaction.valor < 0 ? '#ffcccc' : '#ccffcc' }}>
                  {iconMap[transaction.tipo]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="body1" component="span">
                    {transaction.tipo}
                  </Typography>
                }
                secondary={transaction.descricao}
              />
              <Typography
                variant="body1"
                component="span"
                sx={{ color: transaction.valor < 0 ? 'red' : 'green', fontWeight: 'bold' }}
              >
                {transaction.valor > 0 ? `+ $${transaction.valor}` : `- $${Math.abs(transaction.valor)}`}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Dashboard;
