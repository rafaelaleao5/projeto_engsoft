import React, { useContext, useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Typography, Box } from '@mui/material';
import GastosContext from './GastosContext';

// Cores para cada categoria de gasto
const COLORS = ['#32c48d', '#7048b7', '#FFBB28', '#e57373', '#FF8042', '#36A2EB', '#FFCE56'];

const StackedBarChart = () => {
  const { agruparGastosPorMes, tiposGasto, gastos } = useContext(GastosContext);
  const [data, setData] = useState(agruparGastosPorMes());

  useEffect(() => {
    setData(agruparGastosPorMes());
  }, [gastos]);

  return (
    <Box 
      p={3} 
      bgcolor="#ece8ff" 
      borderRadius="10px" 
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" 
      width="100%"
      mx="auto"
    >
      <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ 
          color: "#1c044c", 
          fontWeight: "bold", 
          textAlign: "center" 
        }}
      >
        Gastos por Mês
      </Typography>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}> {/* Aumentei a margem inferior */}
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis 
            dataKey="month" 
            tick={{ fill: '#7048b7', fontWeight: 'bold' }} 
            label={{ value: 'Mês', position: 'insideBottom', offset: -10, fill: '#7048b7' }} 
          />
          <YAxis 
            tick={{ fill: '#7048b7', fontWeight: 'bold' }} 
            label={{ value: 'Valor (R$)', angle: -90, position: 'insideLeft', fill: '#7048b7' }} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#f7f7f9', borderRadius: '8px', border: '1px solid #d4c8e7' }} 
            formatter={(value) => `R$ ${value.toFixed(2)}`} 
            itemStyle={{ color: "#1c044c" }}
          />
          <Legend verticalAlign="bottom" align="center" wrapperStyle={{ color: "#1c044c", paddingBottom: 10 }} /> {/* Legenda ajustada */}
          
          {tiposGasto.map((tipo, index) => (
            <Bar
              key={tipo}
              dataKey={tipo}
              stackId="a"
              fill={COLORS[index % COLORS.length]}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default StackedBarChart;
