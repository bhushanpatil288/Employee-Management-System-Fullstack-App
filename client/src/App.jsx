import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { Home, EmployeeList, AddEmployees, TempTrash, UpdateEmployee } from './pages';

export default function App() {
  return (
    <BrowserRouter>
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