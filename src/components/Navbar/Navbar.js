import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { WorkersContext } from '../../contexts/WorkersContext';
import { HashLink as Link } from 'react-router-hash-link';
import Button from '../Button/Button';

import './Navbar.css';

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const { isLoggedIn, currentUser, handleLogout } = useContext(AuthContext);
  const { isMapActive, setMapActive } = useContext(WorkersContext);

  return (
    <>
      {!isMapActive && (
        <>
          <nav className="navbar">
            <ul className={`navbar__item-container ${isActive && 'active'}`}>
              {isLoggedIn && (
                <li className="navbar__item">{`Hola, ${currentUser.name}`}</li>
              )}
              <li>
                <Link className="navbar__item" to="/#home">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="navbar__item" to="/#suggested">
                  Sugeridos
                </Link>
              </li>
              <li>
                <Link className="navbar__item" to="/#about">
                  Sobre mi
                </Link>
              </li>
              {isLoggedIn && (
                <li className="navbar__item" onClick={handleLogout}>
                  Cerrar Sesión
                </li>
              )}
            </ul>
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
