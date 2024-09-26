import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Typography, Box } from '@mui/material';

const SimpleBarChart = ({ data }) => {
  return (
    <Box 
      p={2} 
      bgcolor="#f0f4f8" 
      borderRadius={2} 
      boxShadow={1} 
      maxWidth={600} 
    >
      <Typography variant="h6" gutterBottom>
        Transações
      </Typography>
      <RechartsBarChart 
        width={500} 
        height={350} 
        data={data} 
        margin={{ top: 20, right: 10, left: 20, bottom: 5 }} 
      >
        <XAxis dataKey="name" stroke="#555" />
        <YAxis stroke="#555" />
        <Tooltip />
        <Bar dataKey="value" 
        fill="#8884d8" />
      </RechartsBarChart>
    </Box>
  );
};

export default SimpleBarChart;
