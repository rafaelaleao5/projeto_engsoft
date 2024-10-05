import React, { createContext, useState } from 'react';
// Se for usar lodash para `groupBy` e `sumBy`, importe assim:
import { groupBy, sumBy } from 'lodash';

const GastosContext = createContext();

export const GastosProvider = ({ children }) => {
  const [gastos, setGastos] = useState([]);
  const [transacoes, setTransacoes] = useState([]);
  
  // Valores padrões para tipos de gasto e formas de pagamento
  const [tiposGasto, setTiposGasto] = useState(['ALIMENTAÇÃO', 'TRANSPORTE', 'PESSOAL', 'OUTROS']);
  const [formasPagamento, setFormasPagamento] = useState(['VR', 'PIX', 'CRÉDITO', 'OUTROS']);

  // Função para adicionar um novo gasto
  const adicionarGasto = (gasto) => {
    setGastos((prevGastos) => [...prevGastos, gasto]);
  };

  // Função para adicionar um novo tipo de gasto
  const adicionarTipoGasto = (novoTipo) => {
    setTiposGasto((prevTiposGasto) => [...prevTiposGasto, novoTipo]);
  };

  // Função para adicionar uma nova forma de pagamento
  const adicionarFormaPagamento = (novaForma) => {
    setFormasPagamento((prevFormasPagamento) => [...prevFormasPagamento, novaForma]);
  };

  // Função para limpar todos os gastos
  const limparGastos = () => {
    setGastos([]); // Reseta a lista de gastos para um array vazio
  };

  const addTransacao = (novaTransacao) => {
    setTransacoes((prevTransacoes) => [...prevTransacoes, novaTransacao]);
  };

  // Função para agrupar gastos por mês e categoria
  // Função para agrupar gastos por mês e categoria, considerando tipos de gasto dinâmicos
const agruparGastosPorMes = () => {
  // Agrupando gastos por mês
  const gastosPorMes = groupBy(gastos, (gasto) => new Date(gasto.data).getMonth());

  // Criando o array de resultado por mês e categorias
  return Object.keys(gastosPorMes).map((mes) => {
    const grouped = { month: new Date(2023, mes, 1).toLocaleString('default', { month: 'short' }) };
    
    // Para cada tipo de gasto, somar os valores e adicionar ao objeto
    tiposGasto.forEach((tipo) => {
      grouped[tipo] = sumBy(gastosPorMes[mes].filter(g => g.tipo === tipo), 'valor');
    });
    
    return grouped;
  });
};


  return (
    <GastosContext.Provider 
      value={{ 
        gastos, 
        transacoes, 
        tiposGasto, 
        formasPagamento, 
        adicionarGasto, 
        addTransacao,
        limparGastos,
        adicionarTipoGasto,
        adicionarFormaPagamento,
        agruparGastosPorMes // Passando a função para o contexto
      }}
    >
      {children}
    </GastosContext.Provider>
  );
};

export default GastosContext;
