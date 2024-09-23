import React, { createContext, useState } from 'react';

const GastosContext = createContext();

export const GastosProvider = ({ children }) => {
  const [gastos, setGastos] = useState([]);
  const [transacoes, setTransacoes] = useState([]); // Adicionando o estado para as transações

  const adicionarGasto = (gasto) => {
    setGastos((prevGastos) => [...prevGastos, gasto]);
  };

  // Adicionar uma nova transação
  const addTransacao = (novaTransacao) => {
    setTransacoes((prevTransacoes) => [...prevTransacoes, novaTransacao]); // Corrigido para 'transacoes'
  };

  return (
    <GastosContext.Provider value={{ gastos, transacoes, adicionarGasto, addTransacao }}>
      {children}
    </GastosContext.Provider>
  );
};

export default GastosContext;
