import React from 'react';
import { CartWidget } from '../CartWidget';

export const NavBar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper black">
          <a href="#" style={{paddingLeft:30}} className="brand-logo">
            Cervemundo
          </a>
          <ul style={{paddingRight:20}} className="right hide-on-med-and-down">
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
          <a href="#" data-target="responsive-menu" className="sidenav-trigger right">
            <i className="material-icons">menu</i>
          </a>
      </nav>
      <ul id="responsive-menu" className="sidenav">
            <li><a href="#">Item1</a></li>
            <li><a href="#">Item2</a></li>
            <li><a href="#">Item3</a></li>
            <li><a href="#">Item4</a></li>
      </ul>
    </div>
  );
};
