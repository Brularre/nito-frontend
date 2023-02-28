import React, { useState } from 'react';

import './Searchbar.css';

export default function SearchBar(props) {
  console.log(props);
  const [select1Value, setSelect1Value] = useState('');
  const [select2Value, setSelect2Value] = useState('');

  const handleSelect1Change = (event) => {
    setSelect1Value(event.target.value);
  };

  const handleSelect2Change = (event) => {
    setSelect2Value(event.target.value);
  };

  function handleWorkersFilter(workerArea) {
    workerArea !== 'all'
      ? props.setFilteredWorkers(filterWork(workerArea))
      : props.setFilteredWorkers(props.workers);
  }

  function filterWork(area) {
    let filteredWorkers = props.workers.filter(
      (worker) => worker.area === area,
    );
    return filteredWorkers;
  }

  const handleSearch = (evt) => {
    evt.preventDefault();
    props.setMapActive(true);
    handleWorkersFilter(select2Value);
  };

  return (
    <>
      <form className="searchbar" onSubmit={handleSearch}>
        {/* <select
          value={select1Value}
          onChange={handleSelect1Change}
          className="searchbar__select"
        >
          <option value="">Ciudad</option>
          <option value="vinadelmar">Viña del Mar</option>
        </select> */}
        <select
          value={select2Value}
          onChange={handleSelect2Change}
          className="searchbar__select"
        >
          <option>Especialidad</option>
          <option value="Automotriz">Automotriz</option>
          <option value="Pintura">Pintura</option>
          <option value="Construcción">Construcción</option>
          <option value="Plomería">Plomería</option>
          <option value="Electricidad">Electricidad</option>
        </select>
        <button className="searchbar__button">Buscar 🔍</button>
      </form>
      <p className="searchbar__info">{props.info}</p>
    </>
  );
}
