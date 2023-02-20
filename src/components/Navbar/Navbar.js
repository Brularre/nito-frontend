import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import './navbar__mobile-button.css';

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className={`navbar__item-container ${isActive && 'active'}`}>
          <NavLink
            exact
            className="navbar__item"
            activeClassName="navbar__item_active"
            to="/"
          >
            Iniciar Sesión
          </NavLink>
          <NavLink
            exact
            className="navbar__item"
            activeClassName="navbar__item_active"
            to="/"
          >
            Iniciar Sesión
          </NavLink>
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

export default NavBar;
