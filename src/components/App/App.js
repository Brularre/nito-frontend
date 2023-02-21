// Imports Dependencies
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// Imports internos
import { WorkerContext } from '../../contexts/WorkerContext';
import api from '../../utils/api';

// Components
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';

function App() {
  // App States
  const [workers, setWorkers] = useState({});

  function renderCards() {
    api
      .getWorkers()
      .then((workerList) => setWorkers(workerList.data))
      .catch((err) => {
        console.log(err);
      });
  }

  // useEffect(() => {
  //   console.log('esto');
  //   renderCards();
  // }, []);

  return (
    <>
      <Header />
      <WorkerContext.Provider value={{ workers }}>
        <Switch>
          <Route path="/">
            <Main workers={workers} renderCards={renderCards} />
            <About />
          </Route>
        </Switch>
        <Footer />
      </WorkerContext.Provider>
    </>
  );
}

export default App;
