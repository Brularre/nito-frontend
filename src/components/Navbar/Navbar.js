import { useState, useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { HashLink as Link } from 'react-router-hash-link';
import Button from '../Button/Button';

import './Navbar.css';

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const { isMapActive, setMapActive } = useContext(AppContext);

  return (
    <>
      {!isMapActive && (
        <>
          <nav className="navbar">
            <div className={`navbar__item-container ${isActive && 'active'}`}>
              <Link className="navbar__item" to="/#home">
                Inicio
              </Link>
              <Link className="navbar__item" to="/#suggested">
                Sugeridos
              </Link>
              <Link className="navbar__item" to="/#about">
                Sobre mi
              </Link>
            </div>
          </nav>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={`navbar__mobile-button ${isActive && 'open'}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={`navbar__container-background ${isActive && 'active'}`}
          ></div>
        </>
      )}
      {isMapActive && (
        <Button onClick={() => setMapActive(false)} text="Cerrar mapa" />
      )}
    </>
  );
}
