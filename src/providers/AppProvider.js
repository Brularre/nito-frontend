import { useState, useEffect } from 'react';
import api from '../utils/api';
import { AppContext } from '../contexts/AppContext';

export default function AppProvider({ handleLoading, children }) {
  const [isMapActive, setMapActive] = useState(false);
  const [workers, setWorkers] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [filteredWorkers, setFilteredWorkers] = useState(workers);
  const [mapPosition, setMapPosition] = useState([-33.0153, -71.5505]);
  const [isAddFormOpen, setAddFormOpen] = useState(false);

  console.log(handleLoading);

  useEffect(() => {
    api
      .getWorkers()
      .then((workerList) => {
        setWorkers(workerList.data);
        handleLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilteredWorkers(workers);
  }, [workers]);

  function handleWorkersFilter(workerArea) {
    if (workerArea !== 'all') {
      setFilteredWorkers(filterWork(workerArea));
      setMapActive(true);
    } else {
      setFilteredWorkers(workers);
    }
  }

  function filterWork(area) {
    let filteredWorkers = workers.filter((worker) => worker.area === area);
    return filteredWorkers;
  }

  const contextValues = {
    isMapActive,
    setMapActive,
    workers,
    setWorkers,
    selectedWorker,
    setSelectedWorker,
    filteredWorkers,
    setFilteredWorkers,
    handleWorkersFilter,
    mapPosition,
    setMapPosition,
    isAddFormOpen,
    setAddFormOpen,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
}
