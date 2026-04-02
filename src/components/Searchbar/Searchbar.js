import React, { useContext, useState } from 'react';
import { WorkersContext } from '../../contexts/WorkersContext';

import './Searchbar.css';

export default function SearchBar(props) {
  const { handleWorkersFilter } = useContext(WorkersContext);

  const [select1Value, setSelect1Value] = useState('');
  const [select2Value, setSelect2Value] = useState('');

  const handleSelect1Change = (event) => {
    setSelect1Value(event.target.value);
  };

  const handleSelect2Change = (event) => {
    setSelect2Value(event.target.value);
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    handleWorkersFilter(select2Value);
  };

  return (
    <section>
      <form className="searchbar" onSubmit={handleSearch}>
        {
          <select
            value={select1Value}
            onChange={handleSelect1Change}
            className="searchbar__select"
          >
            <option value="vinadelmar">Viña del Mar</option>
          </select>
        }
        <select
          value={select2Value}
          onChange={handleSelect2Change}
          className="searchbar__select"
          required
        >
          <option value="">Especialidad</option>
          <option value="all">Todos</option>
          <option value="Automotriz">Automotriz</option>
          <option value="Pintura">Pintura</option>
          <option value="Construcción">Construcción</option>
          <option value="Plomería">Plomería</option>
          <option value="Electricidad">Electricidad</option>
        </select>
        <button disabled={select2Value === ''} className="searchbar__button">
          Buscar 🔍
        </button>
      </form>
      <p className="searchbar__info">{props.info}</p>
    </section>
  );
}
