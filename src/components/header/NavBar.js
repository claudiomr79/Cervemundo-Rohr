import React from 'react';
import { CartWidget } from '../CartWidget';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {   NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div id="header">
      <Navbar className="px-2" collapseOnSelect expand="lg" variant="dark" bg="primary">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand as={NavLink} to="/">
            CerveMundo
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Tipos de productos">
              <NavDropdown.Item as={NavLink} to="/category/1">Cerveza en botellas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/2">Barril de 30l</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav as={NavLink} to="/search">
            <a className="nav-link">
                <i className="large material-icons"> search </i>
            </a>
        </Nav>
        <Nav as={NavLink} to="/cart" style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}} >
            <CartWidget />
        </Nav>
      </Navbar>
    </div>
  );
};
