import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const addEmployee = (employeeData) => api.post('/employees/add', employeeData);
export const removeEmployee = (id) => api.delete(`/employees/remove/${id}`);
export const fetchEmployees = () => api.get('/employees/list');
export const employeeDetails = (id) => api.get(`/employees/list/${id}`);
export const updateEmployee = (employeeData) => api.put(`/employees/update`, employeeData);

export default api;
