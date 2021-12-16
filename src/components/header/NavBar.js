import React from 'react';
import { CartWidget } from '../CartWidget';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";


export const NavBar = () => {
  return (
    <div id="header">
      <Navbar className="px-2" collapseOnSelect expand="lg" variant="dark" bg="primary">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand>CerveMundo</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Tipos de productos">
              <NavDropdown.Item>Cerveza en botellas</NavDropdown.Item>
              <NavDropdown.Item>Cerveza en growler</NavDropdown.Item>
              <NavDropdown.Item>Barril de 30l</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}} >
            <CartWidget />
        </Nav>
      </Navbar>
    </div>
  );
};
