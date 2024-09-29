import React, { useContext } from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Typography, Box } from '@mui/material';
import GastosContext from './GastosContext';
import { format, parseISO } from 'date-fns';

// Função para agrupar entradas e saídas por mês
const agruparEntradasSaidasPorMes = (gastos) => {
  const meses = {};

  gastos.forEach((gasto) => {
    const mes = format(parseISO(gasto.data), 'MMMM'); // Nome do mês
    const mesNumero = format(parseISO(gasto.data), 'M'); // Número do mês

    if (!meses[mesNumero]) {
      meses[mesNumero] = { mes, entradas: 0, saidas: 0 };
    }

    if (gasto.valor >= 0) {
      meses[mesNumero].entradas += gasto.valor;
    } else {
      meses[mesNumero].saidas += Math.abs(gasto.valor); // Abs para mostrar saídas como positivo no gráfico
    }
  });

  // Ordena os meses por número
  return Object.keys(meses)
    .sort((a, b) => a - b) // Ordena os meses numericamente
    .map((mesNumero) => ({
      name: meses[mesNumero].mes,
      entradas: meses[mesNumero].entradas,
      saidas: meses[mesNumero].saidas,
    }));
};

const SimpleBarChart = () => {
  const { gastos } = useContext(GastosContext);

  // Agrupar dados por mês com entradas e saídas
  const data = agruparEntradasSaidasPorMes(gastos);

  return (
    <Box p={2} bgcolor="#f0f4f8" borderRadius={2} boxShadow={1} maxWidth={800}>
      <Typography variant="h6" gutterBottom>
        Histórico de Transações
      </Typography>

      <ResponsiveContainer width="100%" height={400}>
        <RechartsBarChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" stroke="#555" />
          <YAxis stroke="#555" />
          <Tooltip />
          <Legend />

          {/* Barra para entradas com borda */}
          <Bar dataKey="entradas" fill="green" name="Entradas" stroke="#333" strokeWidth={2} radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-entrada-${index}`} />
            ))}
          </Bar>

          {/* Barra para saídas com borda */}
          <Bar dataKey="saidas" fill="red" name="Saídas" stroke="#333" strokeWidth={2} radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-saida-${index}`} />
            ))}
          </Bar>
        </RechartsBarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SimpleBarChart;
