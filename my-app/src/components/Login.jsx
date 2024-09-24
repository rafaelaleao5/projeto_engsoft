import React from "react";
import { useNavigate, Link} from 'react-router-dom';


/**
 * Função que retorna o JSX da página de Login
 *
 * @returns {JSX.Element} O JSX da página de Login
 */
function Login() {
    const navigate = useNavigate(); // Hook para navegação

    // Função para o botão "Entrar"
    const entrar = () => {
        // const usuario = document.getElementById('usuario').value;
        // const senha = document.getElementById('senha').value;

        // if (usuario && senha) {
        //     alert('Login bem-sucedido!');
        //     navigate('/Menu'); // Navega para a rota de cadastro

        // } else {
        //     alert('Por favor, insira seu nome de usuário e senha.');
        // }

        navigate('/Menu')
    };

    // Função para o botão "Cadastrar"
    const inscrever = () => {
        navigate('/cadastro'); // Navega para a rota de cadastro
    };


    return (
        <div className="container">
            <div className="secao-login">
                <h2>Entrar</h2>
                <form className="form">
                    {/* Grupo de entrada para o nome de usuário */}
                    <div className="grupo-input border1">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" id="usuario" placeholder="Digite seu nome de usuário" />
                    </div>
                    
                    {/* Grupo de entrada para a senha */}
                    <div className="grupo-input border2">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" placeholder="Digite sua senha" />
                    </div>

                    {/* Botões de login e cadastrar */}
                    <div className="btns">
                        <button type="button" className="botao-login btn" onClick={entrar}>Entrar</button>
                        <button type="button" className="botao-inscrever btn" onClick={inscrever}>Cadastrar</button>
                    </div>

                   
                    <Link to = "/RecuperacaoSenha">Esqueceu a senha?</Link>
                </form>
            </div>

            {/* Seção de imagem */}
            <div className="secao-imagem">
                <img src="LOGO TELA DE LOGIN.png" alt="Imagem de Login" style={{ maxWidth: "100%", height: "100vh" }} />
            </div>
        </div>
    );
}

export default Login;
