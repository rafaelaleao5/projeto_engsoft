import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography, Box } from '@mui/material';

// Ajustando as cores para seguir a paleta e estilo do gráfico de barras
const COLORS = ['#32c48d', '#7048b7', '#FFBB28', '#e57373', '#FF8042', '#36A2EB', '#FFCE56'];

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
      p={3} 
      bgcolor="#ece8ff" 
      borderRadius="10px"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" 
      width="100%"
      mx="auto" // Centralizar horizontalmente
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
        Transação por Categoria
      </Typography>
      
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={processedData}
            cx="50%"
            cy="50%"
            outerRadius="80%" // Tornando o raio dinâmico em porcentagem
            fill="#8884d8"
            dataKey="value"
            labelLine={false} // Desativa as linhas de rótulo
            label={renderCustomizedLabel} // Usa o rótulo personalizado para mostrar as porcentagens
          >
            {processedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          
          <Tooltip 
            contentStyle={{ backgroundColor: "#f7f7f9", borderRadius: "8px", border: "1px solid #d4c8e7" }} 
            itemStyle={{ color: "#1c044c" }}
            formatter={(value) => `R$ ${value.toFixed(2)}`} // Formatação de valor no tooltip
          />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ color: "#1c044c" }} /> {/* Legenda para identificar cada fatia */}
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PieChartComponent;
