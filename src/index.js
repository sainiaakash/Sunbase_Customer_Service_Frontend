import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomerListPage from './pages/CustomerListPage';
import AddNewCustomer from './pages/AddNewCustomer';
import  Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>
);

reportWebVitals();
