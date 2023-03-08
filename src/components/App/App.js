// Imports
import { useState } from 'react';

// Components
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import AppProvider from '../../providers/AppProvider';
import Hero from '../Hero/Hero';
import Map from '../Map/Map';
import Suggested from '../Suggested/Suggested';
import Form from '../Form/Form';
import About from '../About/About';
import Footer from '../Footer/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AppProvider handleLoading={setIsLoading}>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Hero />
          <Map />
          <main>
            <Suggested />
            <Form />
            <About />
          </main>
          <Footer />
        </>
      )}
    </AppProvider>
  );
}
