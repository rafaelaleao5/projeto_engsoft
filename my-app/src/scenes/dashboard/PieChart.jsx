import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Typography, Box } from '@mui/material';

// Definir cores dinâmicas para entradas e saídas
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384', '#36A2EB', '#FFCE56'];

const RADIAN = Math.PI / 180;

// Função para exibir o rótulo com a porcentagem correspondente
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={12}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComponent = ({ data }) => {
  // Ajustar os dados para usar valores absolutos
  const processedData = data.map(item => ({
    ...item,
    value: Math.abs(item.value), // Converte valores para positivos
  }));

  return (
    <Box 
      p={2} 
      bgcolor="#f0f4f8" 
      borderRadius={2} 
      boxShadow={1} 
      maxWidth={600} 
      margin="auto"
    >
      <Typography variant="h6" gutterBottom>
        Transação por Categoria
      </Typography>
      
      <PieChart width={500} height={400}>
        <Pie
          data={processedData}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          labelLine={false} // Desativa as linhas de rótulo
          label={renderCustomizedLabel} // Usa o rótulo personalizado para mostrar as porcentagens
        >
          {processedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
        <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} /> {/* Formatação de valor no tooltip */}
        <Legend layout="horizontal" verticalAlign="bottom" align="center" /> {/* Legenda para identificar cada fatia */}
      </PieChart>
    </Box>
  );
};

export default PieChartComponent;
