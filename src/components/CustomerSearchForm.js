import React, { useState } from 'react';

const CustomerSearchForm = ({ onSearch }) => {
  const [searchField, setSearchField] = useState('firstName');
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch({ searchField, searchValue });
  };

  return (
    <div className="search-container">
      <h2>Customer Search</h2>
      <form onSubmit={handleSearch}>
        <label htmlFor="searchField">Search by:</label>
        <select
          id="searchField"
          name="searchField"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        >
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
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default CustomerSearchForm;
