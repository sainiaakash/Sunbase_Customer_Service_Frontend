import React, { useState } from 'react';

const CustomerSearchForm = ({ onSearch }) => {
  const [searchField, setSearchField] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch({ searchField, searchValue });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className='search-form'>
        <select
          id="searchField"
          name="searchField"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}>
            <option value="" disabled>Search By</option>
            <option value="firstName">First Name</option>
            <option value="city">City</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option> 
        </select>
        <input
          type="text"
          id="searchValue"
          name="searchValue"
          placeholder="Enter search value"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          required
        />
        <button className='search-btn' type="submit">Search</button>
        </div>
        
      </form>
    </div>
  );
};

export default CustomerSearchForm;
