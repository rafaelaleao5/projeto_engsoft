import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { Typography, Box } from '@mui/material';

const LineChartComponent = ({ data }) => {
  return (
    <Box p={2} backgroundColor="#f0f4f8">
      <Typography variant="h6">Gastos ao Longo do Tempo</Typography>
      <LineChart width={400} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </Box>
  );
};

export default LineChartComponent;
