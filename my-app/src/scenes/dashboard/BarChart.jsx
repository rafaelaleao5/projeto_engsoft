import React, { useContext } from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Typography, Box } from '@mui/material';
import GastosContext from './GastosContext';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';


// Função para agrupar entradas e saídas por mês
const agruparEntradasSaidasPorMes = (gastos) => {
  const meses = {};

  gastos.forEach((gasto) => {
    const mes = format(parseISO(gasto.data), 'MMMM', { locale: ptBR });
    const mesNumero = format(parseISO(gasto.data), 'M'); // Número do mês

    if (!meses[mesNumero]) {
      meses[mesNumero] = { mes, entradas: 0, saidas: 0 };
    }

    if (gasto.valor >= 0) {
      meses[mesNumero].entradas += gasto.valor;
    } else {
      meses[mesNumero].saidas += Math.abs(gasto.valor);
      // Abs para mostrar saídas como positivo no gráfico
    }
  });

  // Ordena os meses por número
  return Object.keys(meses)
    .sort((a, b) => a - b) // Ordena os meses numericamente
    .map((mesNumero) => ({
      name: meses[mesNumero].mes,
      entradas: meses[mesNumero].entradas,
      saidas: meses[mesNumero].saidas,
    }));
};

const SimpleBarChart = () => {
  const { gastos } = useContext(GastosContext);

  // Agrupar dados por mês com entradas e saídas
  const data = agruparEntradasSaidasPorMes(gastos);

  return (
    <Box 
      p={3} 
      bgcolor="#ece8ff" 
      borderRadius="10px"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" 
      width = '100%'
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
        Histórico de Transações
      </Typography>

      <ResponsiveContainer width="100%" height={400}>
        <RechartsBarChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" stroke="#7048b7" /> 
          <YAxis stroke="#7048b7" /> 
          <Tooltip 
            contentStyle={{ backgroundColor: "#f7f7f9", borderRadius: "8px", border: "1px solid #d4c8e7" }} 
            itemStyle={{ color: "#1c044c" }}
          />
          <Legend wrapperStyle={{ color: "#1c044c" }} />

          <Bar dataKey="entradas" fill="#32c48d" name="Entradas" stroke="#1c044c" strokeWidth={1} radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-entrada-${index}`} />
            ))}
          </Bar>

          {/* Barra para saídas estilizadas */}
          <Bar dataKey="saidas" fill="#e57373" name="Saídas" stroke="#1c044c" strokeWidth={1} radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-saida-${index}`} />
            ))}
          </Bar>
        </RechartsBarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SimpleBarChart;
