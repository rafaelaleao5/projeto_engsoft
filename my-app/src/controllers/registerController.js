
import axios from 'axios';

// Função para enviar login ao backend
export const register = async (name, email, password) => {
  const registerData = {
    name: name,
    email: email,
    password: password,
  };

  try {
    const response = await axios.post('http://localhost:8080/auth/register', registerData);

    return response;
  } catch (error) {
    console.error('Erro no registro:', error);
    throw error; // Propaga o erro para ser tratado onde a função foi chamada
  }
};