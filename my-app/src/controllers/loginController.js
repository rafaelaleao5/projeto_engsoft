
import axios from 'axios';

// Função para enviar login ao backend
export const login = async (email, password) => {
  const loginData = {
    email: email,
    password: password,
  };

  try {
    const response = await axios.post('http://localhost:8080/auth/login', loginData);

    // Recebe o token JWT
    const token = response.data.token;
    
    // Armazena o token no localStorage
    localStorage.setItem('token', token);

    return token; // Retorna o token ou outro valor conforme necessário
  } catch (error) {
    console.error('Erro no login:', error);
    throw error; // Propaga o erro para ser tratado onde a função foi chamada
  }
};