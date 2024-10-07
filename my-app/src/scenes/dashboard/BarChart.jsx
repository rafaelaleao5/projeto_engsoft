import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';

// Função para transformar os dados no formato esperado pelo BarChart
const formatData = (gastosPorMes) => {
  return Object.entries(gastosPorMes).map(([month, value]) => ({
    name: month,
    entradas: value.entradas,
    saidas: value.saidas,
  }));
};

const SimpleBarChart = ({ data }) => {
  // Formata os dados para o gráfico
  const formattedData = formatData(data);

  return (
    <Box
      p={3}
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

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formattedData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Barra para Entradas */}
          <Bar dataKey="entradas" fill="#32c48d" name="Entradas" />
          {/* Barra para Saídas */}
          <Bar dataKey="saidas" fill="#e57373" name="Saídas" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SimpleBarChart;
