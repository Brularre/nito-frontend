import React, { useState } from 'react';

import './Searchbar.css';

function SearchBar(props) {
  const [select1Value, setSelect1Value] = useState('');
  const [select2Value, setSelect2Value] = useState('');

  const handleSelect1Change = (event) => {
    setSelect1Value(event.target.value);
  };

  const handleSelect2Change = (event) => {
    setSelect2Value(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search button clicked');
    console.log('Select 1 value: ', select1Value);
    console.log('Select 2 value: ', select2Value);
  };

  return (
    <>
      <div className="searchbar">
        <select
          value={select1Value}
          onChange={handleSelect1Change}
          className="searchbar__select"
        >
          <option value="">Ciudad</option>
          <option value="santiago">Santiago</option>
          <option value="valparaiso">Valparaíso</option>
          <option value="vinadelmar">Viña del Mar</option>
          <option value="quillota">Quillota</option>
          <option value="quilpue">Quilpué</option>
        </select>
        <select
          value={select2Value}
          onChange={handleSelect2Change}
          className="searchbar__select"
        >
          <option>Especialidad</option>
          <option value="automotriz">Automotriz</option>
          <option value="pintura">Pintura</option>
          <option value="construccion">Construcción</option>
          <option value="plomeria">Plomería</option>
          <option value="electricidad">Electricidad</option>
        </select>
        <button className="searchbar__button" onClick={handleSearch}>
          Buscar 🔍
        </button>
      </div>
      <p className="searchbar__info">{props.info}</p>
    </>
  );
}

export default SearchBar;
