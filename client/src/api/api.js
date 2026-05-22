import axios from 'axios';

const api = axios.create({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
});

export const addEmployee = (employeeData) => api.post('/add', employeeData);
export const removeEmployee = (id) => api.post('/remove', id);

export default api;
