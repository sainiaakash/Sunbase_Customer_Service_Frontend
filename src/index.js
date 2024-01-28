import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import CustomerListPage from './pages/CustomerListPage';
import AddNewCustomer from './pages/AddNewCustomer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/customer-list" element={<CustomerListPage />} />
        <Route path="/add-customer" element={<AddNewCustomer/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
