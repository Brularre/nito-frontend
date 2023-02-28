import { useState, useEffect } from 'react';

// Import internos
import '../App/App.css';
import api from '../../utils/api';
import { AppContext } from '../../contexts/AppContext';

// Componentes
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Map from '../Map/Map';
import Suggested from '../Suggested/Suggested';
import AddForm from '../Form/AddForm';

export default function Main() {
  const [workers, setWorkers] = useState([]);
  const [filteredWorkers, setFilteredWorkers] = useState(workers);
  const [isMapActive, setMapActive] = useState(false);

  useEffect(() => {
    api
      .getWorkers()
      .then((workerList) => {
        setWorkers(workerList.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredWorkers(workers);
  }, [workers]);

  function handleWorkersFilter(e) {
    let workerArea = e.target.value;
    workerArea !== 'all'
      ? setFilteredWorkers(filterWork(workerArea))
      : setFilteredWorkers(workers);
  }

  function filterWork(area) {
    let filteredWorkers = workers.filter((worker) => worker.area === area);
    return filteredWorkers;
  }

  return (
    <>
      <AppContext.Provider value={(isMapActive, setMapActive)}>
        <Header isVisible={isMapActive} />
        <Hero
          isMapActive={isMapActive}
          setMapActive={setMapActive}
          workers={workers}
          setFilteredWorkers={setFilteredWorkers}
        />
        <Map workers={filteredWorkers} />
        <Suggested
          filteredWorkers={filteredWorkers}
          filterWorkers={handleWorkersFilter}
        />
        <AddForm />
      </AppContext.Provider>
    </>
  );
}
