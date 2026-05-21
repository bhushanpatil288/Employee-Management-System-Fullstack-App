import axios from 'axios';

const api = axios.create({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
});

export const addEmployee = () => api.post('/add');

export default api;
