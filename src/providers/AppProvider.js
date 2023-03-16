import { useState, useEffect } from 'react';
import api from '../utils/api';
import { AppContext } from '../contexts/AppContext';
import * as auth from '../utils/auth';

export default function AppProvider({ handleLoading, children }) {
  // Estados de Usuario y Auth
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isOverlayActive, setOverlayActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // Estados de App
  const [isMapActive, setMapActive] = useState(false);
  const [workers, setWorkers] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [filteredWorkers, setFilteredWorkers] = useState(workers);
  const [mapPosition, setMapPosition] = useState([-33.0153, -71.5505]);
  const [isAddFormOpen, setAddFormOpen] = useState(false);

  // function x() {
  //   // setear el mapa activo
  //   // setear map position
  //   // se importa en listItem y se ejecuta en el onClick
  //   // toma el location del listItem
  // }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .getAuthorizedUserData(jwt)
        .then((res) => {
          if (res) {
            const { name, email, _id } = res.data;
            setCurrentUser({ name, email, _id });
            setIsRegistered(true);
            setIsLoggedIn(true);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

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
          setCurrentUser(user.data);
          setIsRegistered(true);
          setIsSuccess(true);
        } else {
          setIsSuccess(false);
        }
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setOverlayActive(true);
        setTimeout(() => {
          setOverlayActive(false);
        }, 1250);
      });
  }

  function handleLogin(userValues) {
    auth
      .authorize(userValues)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setIsLoggedIn(true);
          setIsSuccess(true);
        } else {
          setIsSuccess(false);
        }
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setOverlayActive(true);
        setTimeout(() => {
          setOverlayActive(false);
        }, 1250);
      });
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
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
    handleRegister,
    handleLogin,
    handleLogout,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
}
