import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchEmployees as fetchEmployeesApi, addEmployee as addEmployeeApi, removeEmployee } from '../api/api';

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async (_, thunkAPI) => {
    try {
      const response = await fetchEmployeesApi();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Something went wrong');
    }
  },
);

export const addEmployee = createAsyncThunk(
  'employees/addEmployee',
  async (employeeData, thunkAPI) => {
    try {
      const response = await addEmployeeApi(employeeData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Something went wrong');
    }
  },
);

export const deleteEmployee = createAsyncThunk(
  'employees/deleteEmployee',
  async (id, thunkAPI) => {
    try {
      await removeEmployee(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to delete');
    }
  },
);

