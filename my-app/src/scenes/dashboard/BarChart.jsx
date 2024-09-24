import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'; // Renomeando o import do BarChart
import { Typography, Box } from '@mui/material';

const SimpleBarChart = ({ data }) => {
  return (
    <Box p={2} backgroundColor="#f0f4f8">
      <Typography variant="h6">Gastos</Typography>
      <RechartsBarChart width={200} height={250} data={data}> {/* Usando o nome renomeado aqui */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </RechartsBarChart>
    </Box>
  );
};

export default SimpleBarChart;
