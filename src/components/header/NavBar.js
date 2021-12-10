import React from 'react';
import { CartWidget } from '../CartWidget';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";


export const NavBar = () => {
  return (
    <div className="header">
      <Navbar className="px-3" collapseOnSelect expand="lg" variant="dark" bg="primary">
        <Navbar.Brand>CerveMundo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Tipos de productos">
              <NavDropdown.Item>Cerveza en botellas</NavDropdown.Item>
              <NavDropdown.Item>Cerveza en growler</NavDropdown.Item>
              <NavDropdown.Item>Barril de 30l</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>Productos</Nav.Link>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
