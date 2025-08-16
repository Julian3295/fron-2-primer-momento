import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Mi Proyecto de Front 2</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;