import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Altere de acordo com a sua URL de API
});

// Adiciona um interceptor para incluir o token nos cabeçalhos de todas as requisições
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;