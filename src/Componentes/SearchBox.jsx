// src/Componentes/SearchBox.jsx
import React, { useState } from 'react';

function SearchBox({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Buscar por ID, serie o detalle..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchBox;
