import React, { useEffect, useState } from 'react';
import CustomerSearchForm from '../components/CustomerSearchForm';
import CustomerTable from '../components/CustomerTable';
import '../styles/ListStyle.css';

const CustomerListPage = () => {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    fetchCustomerList();
  }, []); 
  
  const fetchCustomerList = async () => {
    try {
      const response = await fetch('http://localhost:8080/customerList');

      if (!response.ok) {
        throw new Error(`Error fetching customer list: ${response.statusText}`);
      }
      const customerData = await response.json();
      setCustomerList(customerData);
    } catch (error) {
      console.error('Error fetching customer list:', error);
    }
  };

  const performSearch = async ({ searchField, searchValue }) => {
    try {
      const response = await fetch( `http://localhost:8080/searchByField?searchField=${searchField}&fieldValue=${searchValue}`);

      if (!response.ok) {
        throw new Error(`Error searching for customers: ${response.statusText}`);
      }

      const searchData = await response.json();
      // Update customerList state with the search results
      setCustomerList(searchData);
      
    } catch (error) {
      console.error('Error performing search:', error);
    }
  };

  const performDelete = async(customerId) => {
      try{
        const response = await fetch(`http://localhost:8080/delete/${customerId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
        },
        });

        if(!response.ok){
          throw new Error(`Error while deleting customer: ${response.statusText}`);
        }
        fetchCustomerList();

      }catch(error){
        console.error('Error while deleting record:', error);
      }
  };

  const handleDelete = (customerId) => {

    const isConfirmed = window.confirm('Are you sure you want to delete this record?');
    if(isConfirmed){
      performDelete(customerId);
    }
  }

  const handleSave = async(customerId,editedCustomer) => {
    console.log(editedCustomer);
    try{
      const response = await fetch(`http://localhost:8080/update`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedCustomer),
      });
      if(!response.ok){
        throw new Error(`Error while deleting customer: ${response.statusText}`);
      }
      fetchCustomerList();
    }catch(error){
      console.error('Error while saving the changes: ', error);
    }
  };

  return (
    <div>
      <CustomerSearchForm onSearch={performSearch} />
      <CustomerTable 
        customerList={customerList}
        onDelete={handleDelete}
        onSave={handleSave}
      />
    </div>
  );
};

export default CustomerListPage;
