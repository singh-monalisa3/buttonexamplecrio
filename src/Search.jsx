import React from 'react';
import './SearchBar.css'; // Import the CSS file for styling

const SearchBar = () => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search a song of your choice"
    />
  );
};

export default SearchBar;
