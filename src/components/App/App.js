// Imports
import { useState } from 'react';

// Components
import Preloader from '../Preloader/Preloader';
import InfoOverlay from '../InfoOverlay/InfoOverlay';
import Header from '../Header/Header';
import AppProvider from '../../providers/AppProvider';
import Hero from '../Hero/Hero';
import Map from '../Map/Map';
import Suggested from '../Suggested/Suggested';
import UserForm from '../UserForm/UserForm';
import About from '../About/About';
import Footer from '../Footer/Footer';

// Styles
import './App.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AppProvider handleLoading={setIsLoading}>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <section className="hero-section">
            <Hero />
            <Map />
          </section>
          <main>
            <Suggested />
            <UserForm />
            <About />
          </main>
          <Footer />
          <InfoOverlay />
        </>
      )}
    </AppProvider>
  );
}
