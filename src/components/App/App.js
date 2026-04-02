// Imports
import { useState } from 'react';

// Providers
import NotificationProvider from '../../providers/NotificationProvider';
import AuthProvider from '../../providers/AuthProvider';
import WorkersProvider from '../../providers/WorkersProvider';

// Components
import Preloader from '../Preloader/Preloader';
import InfoOverlay from '../InfoOverlay/InfoOverlay';
import Header from '../Header/Header';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Hero from '../Hero/Hero';
import Map from '../Map/Map';
import Suggested from '../Suggested/Suggested';
import UserForm from '../UserForm/UserForm';
import Footer from '../Footer/Footer';

// Styles
import './App.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ErrorBoundary>
      <NotificationProvider>
        <AuthProvider>
          <WorkersProvider handleLoading={setIsLoading}>
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
                </main>
                <Footer />
                <InfoOverlay />
              </>
            )}
          </WorkersProvider>
        </AuthProvider>
      </NotificationProvider>
    </ErrorBoundary>
  );
}
