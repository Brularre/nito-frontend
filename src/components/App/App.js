// Imports Dependencies
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

// Imports internos
// import { WorkerContext } from '../../contexts/WorkerContext';
// import api from '../../utils/api';

// Components
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';

function App() {
  // App States
  const [workers, setWorkers] = useState([]);

  return (
    <>
      <Header />
      {/* <WorkerContext.Provider> */}
      <Switch>
        <Route path="/">
          <Main workers={workers} setWorkers={setWorkers} />
          <About />
        </Route>
      </Switch>
      <Footer />
      {/* </WorkerContext.Provider> */}
    </>
  );
}

export default App;
