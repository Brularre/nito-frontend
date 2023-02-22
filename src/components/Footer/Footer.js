import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Footer.css';
import logo from '../../images/Logo-Gradient.png';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__column">
          <img className="footer__logo" src={logo} alt="Logo de Nito" />
          <p className="footer__description">
            Nito sólo tiene un interés en construir una comunidad de buenos
            datos. Todos los datos inscritos son para uso público
          </p>
          <nav className="footer__social-links">
            <NavLink
              to="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="footer__social-icon footer__social-icon_facebook" />
            </NavLink>
            <NavLink
              to="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="footer__social-icon footer__social-icon_twitter" />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="footer__social-icon footer__social-icon_instagram" />
            </NavLink>
          </nav>
        </div>
        <div className="footer__column">
          <h3 className="footer__title">Navegación</h3>
          <nav className="footer__navbar">
            <Link exact className="footer__link" to="/#home">
              Inicio
            </Link>
            <Link exact className="footer__link" to="/#suggested">
              Sugeridos
            </Link>
            <Link exact className="footer__link" to="/#form">
              Agregar dato
            </Link>
            <Link exact className="footer__link" to="/#about">
              Sobre mi
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
