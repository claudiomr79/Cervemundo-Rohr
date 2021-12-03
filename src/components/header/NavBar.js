import React from 'react';
import { CartWidget } from '../CartWidget';

export const NavBar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="black">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo left">
            Cervemundo
          </a>
          <ul className="right">
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Registrarse</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
               <CartWidget  />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
