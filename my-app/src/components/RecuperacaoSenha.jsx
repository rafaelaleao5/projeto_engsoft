import React, { useState } from 'react';
import styles from './RecuperacaoSenha.module.css'; // Importe o arquivo CSS para os estilos

const RecuperacaoSenha = () => {
    const [email, setEmail] = useState('');

    // Função que será executada ao clicar no botão "Recuperar Senha"
    const recuperarSenha = () => {
        if (email) {
            alert('Um link de recuperação de senha foi enviado para seu e-mail.');
        } else {
            alert('Por favor, insira seu e-mail.');
        }
    };

    return (
        <div className="container">
            {/* Seção de recuperação */}
            <div className="secao-recuperacao">
                <h2>Problemas para entrar?</h2>
                <form className="form">
                    {/* Grupo de entrada para o email */}
                    <div className="grupo-input border1">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado com o valor do input
                        />
                    </div>
                    <div className="btns">
                        {/* Botão de recuperação */}
                        <button
                            type="button"
                            className="botao-recuperar btn"
                            onClick={recuperarSenha}
                        >
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
            {/* Seção de imagem */}
            <div className="secao-imagem">
                <img src="LOGO_TELA_DE_LOGIN.png" alt="Imagem de Recuperação" style={{ maxWidth: '100%', height: '100vh' }} />
            </div>
        </div>
    );
};

export default RecuperacaoSenha;