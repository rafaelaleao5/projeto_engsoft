import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Typography, Box } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = ({ data }) => {
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
        Distribuição de Gastos por Tipo
      </Typography>
      <PieChart width={500} height={350}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Box>
  );
};

export default PieChartComponent;
