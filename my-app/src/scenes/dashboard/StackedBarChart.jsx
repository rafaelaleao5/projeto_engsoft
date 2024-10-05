import React, { useContext, useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Typography, Box } from '@mui/material';
import GastosContext from './GastosContext';

// Cores para cada categoria de gasto
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384', '#36A2EB', '#FFCE56'];

const StackedBarChart = () => {
  const { agruparGastosPorMes, tiposGasto, gastos } = useContext(GastosContext);
  const [data, setData] = useState(agruparGastosPorMes());

  useEffect(() => {
    setData(agruparGastosPorMes());
  }, [gastos]);

  return (
    <Box 
      p={2} 
      bgcolor="#f0f4f8" 
      borderRadius={2} 
      boxShadow={1} 
      maxWidth={900} 
      margin="auto"
    >
      <Typography variant="h6" gutterBottom>
        Gastos por Mês
      </Typography>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis 
            dataKey="month" 
            tick={{ fill: '#4a4a4a', fontWeight: 'bold' }} 
            label={{ value: 'Mês', position: 'insideBottom', offset: -10, fill: '#4a4a4a' }} 
          />
          <YAxis 
            tick={{ fill: '#4a4a4a', fontWeight: 'bold' }} 
            label={{ value: 'Valor (R$)', angle: -90, position: 'insideLeft', fill: '#4a4a4a' }} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} 
            formatter={(value) => `R$ ${value.toFixed(2)}`} 
          />
          <Legend verticalAlign="bottom" align="center" wrapperStyle={{ paddingBottom: 20 }} />
          
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
