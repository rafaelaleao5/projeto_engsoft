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

  // Função para excluir um tipo de gasto
  const excluirTipoGasto = (tipo) => {
    setTiposGasto((prevTiposGasto) => prevTiposGasto.filter(t => t !== tipo));
  };

  // Função para atualizar um tipo de gasto
  const atualizarTipoGasto = (tipoAntigo, tipoNovo) => {
    setTiposGasto((prevTiposGasto) => 
      prevTiposGasto.map((t) => (t === tipoAntigo ? tipoNovo : t))
    );
  };

  // Função para adicionar uma nova forma de pagamento
  const adicionarFormaPagamento = (novaForma) => {
    setFormasPagamento((prevFormasPagamento) => [...prevFormasPagamento, novaForma]);
  };
  const removerFormaPagamento = (forma) => {
    setFormasPagamento((prevFormas) => prevFormas.filter((f) => f !== forma));
  };

  const editarFormaPagamento = (formaAntiga, novaForma) => {
    setFormasPagamento((prevFormas) =>
      prevFormas.map((f) => (f === formaAntiga ? novaForma : f))
    );
  };



  // Função para limpar todos os gastos
  const limparGastos = () => {
    setGastos([]); // Reseta a lista de gastos para um array vazio
  };

  const addTransacao = (novaTransacao) => {
    setTransacoes((prevTransacoes) => [...prevTransacoes, novaTransacao]);
  };

  // Função para excluir um gasto por ID
  const excluirGasto = (id) => {
    setGastos((prevGastos) => prevGastos.filter(gasto => gasto.id !== id));
  };

  const atualizarGasto = (gastoAtualizado) => {
    setGastos((prevGastos) =>
      prevGastos.map((gasto) => 
        gasto.id === gastoAtualizado.id ? gastoAtualizado : gasto
      )
    );
  };

  // Função para agrupar gastos por mês e categoria
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
        excluirTipoGasto,  // Adicionando função para excluir tipo de gasto
        atualizarTipoGasto, // Adicionando função para atualizar tipo de gasto
        adicionarFormaPagamento,
        agruparGastosPorMes,
        excluirGasto,
        atualizarGasto,
        removerFormaPagamento,
        editarFormaPagamento // Passando a função para o contexto
      }}
    >
      {children}
    </GastosContext.Provider>
  );
};

export default GastosContext;
