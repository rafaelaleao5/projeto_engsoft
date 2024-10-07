import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Box, Typography } from '@mui/material';


// Função para agrupar entradas e saídas por mês
const agruparEntradasSaidasPorMes = (gastos) => {
  const meses = {};

  gastos.forEach((gasto) => {
    const mes = format(parseISO(gasto.purchaseDate), 'MMMM', { locale: ptBR });
    const mesNumero = format(parseISO(gasto.purchaseDate), 'M'); // Número do mês

    if (!meses[mesNumero]) {
      meses[mesNumero] = { mes, entradas: 0, saidas: 0 };
    }

    if (gasto.valor >= 0) {
      meses[mesNumero].entradas += gasto.entryValue;
    } else {
      meses[mesNumero].saidas += Math.abs(gasto.entryValue);
      // Abs para mostrar saídas como positivo no gráfico
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
    <Box
      p={1}
      bgcolor="#ece8ff"
      borderRadius="10px"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      maxWidth={800}
      width="100%"
      mx="auto" // Centraliza horizontalmente
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: "#1c044c",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Histórico de Transações
      </Typography>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20}}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" label={{ value: 'Mês', position: 'insideBottom', offset: -10, fill: '#7048b7' }} />
          <YAxis label={{ value: 'Valor (R$)', angle: -90, position: 'insideLeft', fill: '#7048b7' }} />
          <Tooltip
            formatter={(value) => `R$ ${value.toFixed(2)}`}
            contentStyle={{ backgroundColor: '#f7f7f9', borderRadius: '8px', border: '1px solid #d4c8e7' }}
            itemStyle={{ color: "#1c044c" }}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ paddingTop: 20, color: "#1c044c" }}
          />

          {/* Barra para Entradas */}
          <Bar dataKey="entradas" fill="#32c48d" name="Entradas" radius={[4, 4, 0, 0]} barSize={40} />
          {/* Barra para Saídas */}
          <Bar dataKey="saidas" fill="#941d1d" name="Saídas" radius={[4, 4, 0, 0]} barSize={40} />

        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SimpleBarChart;
