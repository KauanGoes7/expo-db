import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dragonball-api.com/api',
  timeout: 10000, // 10 segundos
});

// Adicione interceptors se necessário
api.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na API:', error);
    return Promise.reject(error);
  }
);