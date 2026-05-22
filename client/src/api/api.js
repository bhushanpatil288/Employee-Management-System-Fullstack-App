import axios from 'axios';

const api = axios.create({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
});

export const addEmployee = (employeeData) => api.post('/employees/add', employeeData);
export const removeEmployee = (id) => api.delete(`/employees/remove/${id}`);
export const fetchEmployees = () => api.get('/employees/list');

export default api;
