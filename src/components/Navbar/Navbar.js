import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Navbar.css';
import './navbar__mobile-button.css';

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className={`navbar__item-container ${isActive && 'active'}`}>
          <Link exact className="navbar__item" to="/#home">
            Inicio
          </Link>
          <Link exact className="navbar__item" to="/#suggested">
            Sugeridos
          </Link>
          <Link exact className="navbar__item" to="/#form">
            Agregar dato
          </Link>
          <Link exact className="navbar__item" to="/#about">
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
  );
}
