// Components
import Header from '../Header/Header';
import AppProvider from '../../providers/AppProvider';
import Hero from '../Hero/Hero';
import Map from '../Map/Map';
import Suggested from '../Suggested/Suggested';
import AddForm from '../Form/AddForm';
import About from '../About/About';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <>
      <AppProvider>
        <Header />
        <Hero />
        <Map />
        <main>
          <Suggested />
          <AddForm />
          <About />
        </main>
      </AppProvider>
      <Footer />
    </>
  );
}
