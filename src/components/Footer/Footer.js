import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import logo from '../../images/Logo-Gradient.png';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__column">
          <img className="footer__logo" src={logo} alt="Logo de Nito" />
          <p className="footer__description">
            Nito sólo tiene un interés en construir una comunidad de buenos
            datos. Todos los datos inscritos son para uso público
          </p>
          <ul className="footer__social-links">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="footer__column">
        <h3 className="footer__title">Navegación</h3>
        <nav className="footer__navbar">
          <NavLink
            exact
            className="navbar__item"
            activeClassName="navbar__item_active"
            to="/"
          >
            Agregar dato
          </NavLink>
          <NavLink
            exact
            className="navbar__item"
            activeClassName="navbar__item_active"
            to="/"
          >
            Sobre mi
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Footer;
