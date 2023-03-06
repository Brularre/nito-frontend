import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import './Hero.css';
import SearchBar from '../Searchbar/Searchbar';

export default function Hero() {
  const { isMapActive } = useContext(AppContext);
  return (
    <div className={`hero ${isMapActive ? 'hero_hidden' : ''}`}>
      <div className="hero__content">
        <h1 className="hero__title">¿Necesitas un "datito"?</h1>
        <p className="hero__description">
          Nito es una comunidad que construimos todos con datos de especialistas
          en mantención para nuestros hogares y vehículos.
        </p>
        <SearchBar info="Por el momento sólo tenemos búsquedas en ciertos territorios solamente" />
        <h2 className="hero__subtitle">
          Puedes agregar tus datos de confianza, haciendo click derecho 😊
        </h2>
      </div>
    </div>
  );
}
