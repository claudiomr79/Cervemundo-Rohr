import React from 'react';
import { CartWidget } from '../CartWidget';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import {   NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
      <Navbar fixed="top" className="px-2" variant="dark" bg="primary">
        <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
                <span>
                    <i className="material-icons"> sports_bar </i>
                    Cervemundo
                </span>
        </Navbar.Brand>
          <Nav className="ms-auto">
            <NavDropdown title="Productos">
              <NavDropdown.Item as={NavLink} to="/category/botella">Cerveza en botellas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/lata">Cerveza en Latas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/barril">Barril de 30l</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        <Nav as={NavLink} to="/cart" className="d-flex justify-content-between">
            <CartWidget />
        </Nav>
        </Container>
      </Navbar>
  );
};
