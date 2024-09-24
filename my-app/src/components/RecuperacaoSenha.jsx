import React, { useState } from 'react';
import './RecuperacaoSenha.css'; // Importa o arquivo de estilo CSS
import Logo from '../img/LOGO.png';

const RecuperacaoSenha = () => {
  const [email, setEmail] = useState('');

  const recuperarSenha = () => {
    if (email) {
      alert('Um link de recuperação de senha foi enviado para seu e-mail.');
    } else {
      alert('Por favor, insira seu e-mail.');
    }
  };

  return (
    <div className="container">
      <div className="secao-recuperacao">
        <h2 className="titulo">Problemas para entrar?</h2>
        <form className="form">
          <div className="grupo-input">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </div>
          <div className="btns">
            <button
              type="button"
              className="botao-recuperar"
              onClick={recuperarSenha}
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
      <div className="secao-imagem">
        <img src={Logo} alt="Imagem de Recuperação" className="imagem-recuperacao" />
      </div>
    </div>
  );
};

export default RecuperacaoSenha;
