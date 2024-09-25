import React, { createContext, useState } from 'react';

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
        adicionarFormaPagamento 
      }}
    >
      {children}
    </GastosContext.Provider>
  );
};

export default GastosContext;
