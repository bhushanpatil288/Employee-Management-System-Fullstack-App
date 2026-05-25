import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout';
import { Home, EmployeeList, AddEmployees, TempTrash, UpdateEmployee } from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: '12px',
            background: '#1e293b',
            color: '#f8fafc',
            fontSize: '14px',
            fontWeight: '500',
            padding: '12px 16px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
          },
          success: {
            iconTheme: { primary: '#22c55e', secondary: '#f8fafc' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#f8fafc' },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-employees" element={<AddEmployees />} />
          <Route path="/employees-list" element={<EmployeeList />} />
          <Route path="/temp-trash" element={<TempTrash />} />
          <Route path="/update/:id" element={<UpdateEmployee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}