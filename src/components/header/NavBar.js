import React from 'react';
import { CartWidget } from '../CartWidget';

export const NavBar = () => {
  return (
    <div className= "header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CerveMundo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul style={{paddingRight:30}} className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Tipo de Productos
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Cerveza en botellas
                  </a>
                  <a className="dropdown-item" href="#">
                    Cerveza en latas
                  </a>
                  <a className="dropdown-item" href="#">
                    Barril de 30l
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Productos
                </a>
              </li>
              <CartWidget  />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
