// Imports Dependencies
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// Imports internos
import { WorkerContext } from '../../contexts/WorkerContext';
import api from '../../utils/api';

// Components
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Main from '../Main/Main';
import Map from '../Map/Map';

function App() {
  // App States
  const [workers, setWorkers] = useState({});

  function renderWorkers() {
    api
      .getWorkers()
      .then((workerList) => setWorkers(workerList.data))
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    renderWorkers();
  }, []);

  return (
    <>
      <Header />
      <WorkerContext.Provider value={{ workers }}>
        <Switch>
          <Route path="/">
            <Hero />
            <Map />
            <Main />
          </Route>
        </Switch>
      </WorkerContext.Provider>
    </>
  );
}

export default App;
