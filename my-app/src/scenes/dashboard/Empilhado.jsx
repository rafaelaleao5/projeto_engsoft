import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// Dados exemplo - agrupar por mês e tipo de gasto
const data = [
  { month: 'Jan', Alimentação: 400, Transporte: 300, Pessoal: 200 },
  { month: 'Feb', Alimentação: 500, Transporte: 400, Pessoal: 300 },
  { month: 'Mar', Alimentação: 600, Transporte: 300, Pessoal: 400 },
  // Adicione mais meses e categorias conforme necessário
];

const StackedBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* Gráfico de Coluna Empilhada */}
        <Bar dataKey="Alimentação" stackId="a" fill="#8884d8" />
        <Bar dataKey="Transporte" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Pessoal" stackId="a" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
