import React, { useState } from 'react';
import CustomerSearchForm from '../components/CustomerSearchForm';
import AddNewCustomer from '../pages/AddNewCustomer';
import '../styles/listPage.css';
import {useNavigate} from 'react-router-dom';

const CustomerTable = ({ customerList, onDelete, onSave, performSearch }) => {
  const [editableRowId, setEditableRowId] = useState(null);
  const [editedRowData, setEditedRowData] = useState('');
  const navigate = useNavigate();

  const handleEditClick = (customerId,index) => {
      setEditedRowData(customerList[index]);
      setEditableRowId(customerId);
  };

  const handleSaveClick = (customerId) => {
      const isConfirmed = window.confirm("Are you sure you want to save the changes?");
      if(isConfirmed){
        onSave(editedRowData, editedRowData);
      }
      setEditableRowId(null);
      setEditedRowData('');
  };

  const isRowEditable = (customerId) => {
    return customerId === editableRowId;
  };

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setEditedRowData((prevData) => ({
      ...prevData,
      [name]:value,
    }));
  }

  const OnAddCustomerButtonClick = () => {
    navigate('/add-customer');
  }

  return (
    <div className="table-container">
      <div className="upper-section">
            <button className='add-customer-btn' name='addCustomerButton' onClick={OnAddCustomerButtonClick} >Add Customer</button>
            <CustomerSearchForm onSearch={performSearch} />
      </div>
      <h2>Customer List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Street</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((customer, rowIndex) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{isRowEditable(customer.id) ? <input id="firstName" name="firstName" type="text" defaultValue={customer.firstName} onChange={handleInputChange}/> : customer.firstName}</td>
              <td>{isRowEditable(customer.id) ? <input id="lastName" name="lastName" type="text" defaultValue={customer.lastName} onChange={handleInputChange}/> : customer.lastName}</td>
              <td>{isRowEditable(customer.id) ? <input id="street" name="street" type="text" defaultValue={customer.street} onChange={handleInputChange}/> : customer.street}</td>
              <td>{isRowEditable(customer.id) ? <input id="address" name="address" type="text" defaultValue={customer.address} onChange={handleInputChange}/> : customer.address}</td>
              <td>{isRowEditable(customer.id) ? <input id="city" name="city" type="text" defaultValue={customer.city} onChange={handleInputChange}/> : customer.city}</td>
              <td>{isRowEditable(customer.id) ? <input id="state" name="state" type="text" defaultValue={customer.state} onChange={handleInputChange}/> : customer.state}</td>
              <td>{isRowEditable(customer.id) ? <input id="email" name="email" type="text" defaultValue={customer.email} onChange={handleInputChange}/> : customer.email}</td>
              <td>{isRowEditable(customer.id) ? <input id="phone" name="phone" type="text" defaultValue={customer.phone} onChange={handleInputChange}/> : customer.phone}</td>
              <td>
              {isRowEditable(customer.id) ? (
                  <button className='save-btn' onClick={() => handleSaveClick(customer.id)}>Save</button>
                ) : (
                  <button className='action-btn' onClick={() => handleEditClick(customer.id, rowIndex)}>Edit</button>
                )}
                  <button className='action-btn' onClick={() => onDelete(customer.id)}> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  );
};

export default CustomerTable;
