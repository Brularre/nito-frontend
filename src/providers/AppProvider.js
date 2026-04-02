import { useState, useEffect, useRef } from 'react';
import api from '../utils/api';
import { AppContext } from '../contexts/AppContext';
import * as auth from '../utils/auth';

const OVERLAY_DURATION = 1500;

export default function AppProvider({ handleLoading, children }) {
  // Estados de Usuario y Auth
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isOverlayActive, setOverlayActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // Estados de App
  const [map, setMap] = useState(null);
  const [isMapActive, setMapActive] = useState(false);
  const [workers, setWorkers] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [filteredWorkers, setFilteredWorkers] = useState(workers);
  const [mapPosition, setMapPosition] = useState([-33.0153, -71.5505]);
  const [isAddFormOpen, setAddFormOpen] = useState(false);

  const markerRefs = useRef([]);

  function showOverlay(success) {
    setIsSuccess(success);
    setOverlayActive(true);
    setTimeout(() => setOverlayActive(false), OVERLAY_DURATION);
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .getAuthorizedUserData()
        .then((res) => {
          if (res) {
            const { name, email, _id } = res.data;
            setIsRegistered(true);
            setIsLoggedIn(true);
            setCurrentUser({ name, email, _id });
          }
        })
        .catch(() => {
          // Token expired or invalid — clear it so the user can log in again
          localStorage.removeItem('jwt');
        });
    }
  }, []);

  useEffect(() => {
    api
      .getWorkers()
      .then((workerList) => {
        setWorkers(workerList.data);
        handleLoading(false);
      })
      .catch(() => {
        handleLoading(false);
        showOverlay(false);
      });
  }, [handleLoading]);

  useEffect(() => {
    setFilteredWorkers(workers);
  }, [workers]);

  function handleWorkersFilter(workerArea) {
    setMapActive(true);
    if (workerArea !== 'all') {
      setFilteredWorkers(filterWork(workerArea));
    } else {
      setFilteredWorkers(workers);
    }
  }

  function filterWork(area) {
    return workers.filter((worker) => worker.area === area);
  }

  function handleRegister(userData) {
    auth
      .register(userData)
      .then((user) => {
        if (user.data._id) {
          setIsRegistered(true);
          showOverlay(true);
        } else {
          showOverlay(false);
        }
      })
      .catch(() => showOverlay(false));
  }

  function handleLogin(userValues) {
    auth
      .authorize(userValues)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setIsLoggedIn(true);
          showOverlay(true);
        } else {
          showOverlay(false);
        }
      })
      .catch(() => showOverlay(false));
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
  }

  function showWorkerLocation(worker) {
    setMapActive(true);
    setMapPosition(worker.location);
    if (map) map.setView(worker.location);
    const markerRef = markerRefs.current[worker._id];
    if (markerRef) markerRef.openPopup();
  }

  const contextValues = {
    isLoggedIn,
    setIsLoggedIn,
    isSuccess,
    isOverlayActive,
    isRegistered,
    setIsRegistered,
    currentUser,
    setCurrentUser,
    map,
    setMap,
    isMapActive,
    setMapActive,
    markerRefs,
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
    handleRegister,
    handleLogin,
    handleLogout,
    showWorkerLocation,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
}
