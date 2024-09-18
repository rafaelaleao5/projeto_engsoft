import React from "react";

/**
 * Função que retorna o JSX da página de Cadastro
 *
 * @returns {JSX.Element} O JSX da página de Cadastro
 */
function Cadastro() {
    // Função para o botão "Cadastrar"
    const cadastrar = () => {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmar-senha').value;

        if (nome && email && senha && confirmarSenha) {
            if (senha === confirmarSenha) {
                alert('Cadastro bem-sucedido!');
            } else {
                alert('As senhas não coincidem. Por favor, tente novamente.');
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <div className="container">
            {/* Seção de cadastro */}
            <div className="secao-cadastro">
                <h2>Cadastre-se</h2>
                <form className="form">
                    {/* Grupo de entrada para o nome */}
                    <div className="grupo-input border1">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" placeholder="Digite seu nome" />
                    </div>

                    {/* Grupo de entrada para o email */}
                    <div className="grupo-input border1">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="Digite seu e-mail" />
                    </div>

                    {/* Grupo de entrada para a senha */}
                    <div className="grupo-input border2">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" placeholder="Crie uma senha" />
                    </div>

                    {/* Grupo de entrada para a confirmação de senha */}
                    <div className="grupo-input border2">
                        <label htmlFor="confirmar-senha">Confirmar Senha</label>
                        <input type="password" id="confirmar-senha" placeholder="Confirme sua senha" />
                    </div>

                    {/* Botões */}
                    <div className="btns">
                        <button type="button" className="botao-cadastro btn" onClick={cadastrar}>Cadastrar</button>
                    </div>
                </form>
            </div>

            {/* Seção de imagem */}
            <div className="secao-imagem">
                <img src="LOGO_TELA_DE_LOGIN.png" alt="Imagem de Cadastro" style={{ maxWidth: "100%", height: "100vh" }} />
            </div>
        </div>
    );
}

export default Cadastro;
