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
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        margin: 0, // Remove a margem
        padding: 0, // Remove o padding
        '@keyframes fadeIn': { from: { opacity: 0 }, to: { opacity: 1 } },
        animation: 'fadeIn 1s ease-in-out',
      }}
    >
      <div
        className="secao-recuperacao"
        style={{
          width: '50%',
          padding: '50px',
          '@keyframes slideIn': {
            from: { transform: 'translateX(-20px)', opacity: 0 },
            to: { transform: 'translateX(0)', opacity: 1 },
          },
          animation: 'slideIn 1s ease-in-out',
        }}
      >
        <h2
          className="titulo"
          style={{
            fontSize: '2rem',
            marginBottom: '20px',
            textAlign: 'center'
          }}
        >
          Problemas para entrar?
        </h2>
        <form className="form">
          <div className="grupo-input" style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px' ,}}>
            <p style={{ fontSize: '1.0rem', color: '#555' }}>
            Informe o seu email para a recuperação de senha.
</p>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                transition: 'all 0.3s ease',
                '&:focus': {
                  borderColor: '#1976d2',
                  boxShadow: '0px 4px 8px rgba(25, 118, 210, 0.3)',
                },
              }}
            />
          </div>
          <div className="btns" style={{ textAlign: 'center' }}>
            <button
              type="button"
              className="botao-recuperar"
              onClick={recuperarSenha}
              style={{
                padding: '10px 20px',
                backgroundColor: '#19044b',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#130337',
                  transform: 'scale(1.02)',
                },
              }}
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
      <div
        className="secao-imagem"
        style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={Logo}
          alt="Imagem de Recuperação"
          className="imagem-recuperacao"
          style={{
            maxWidth: '100%',
            height: '100vh',
            '@keyframes fadeIn': { from: { opacity: 0 }, to: { opacity: 1 } },
            animation: 'fadeIn 1s ease-in-out',
          }}
        />
      </div>
    </div>
  );
};

export default RecuperacaoSenha;