import axios from 'axios';

// Cria uma instância do axios
const api = axios.create({
  baseURL: 'http://localhost:8080', // Coloque o URL do seu backend
});

// Interceptor para adicionar o token em todas as requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Recupera o token do localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Adiciona o token no cabeçalho Authorization
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
