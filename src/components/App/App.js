// Imports Dependencies
import { Switch, Route } from 'react-router-dom';

// Components
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';

function App() {
  // App States

  return (
    <>
      <Switch>
        <Route path="/">
          <Main />
          <About />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
