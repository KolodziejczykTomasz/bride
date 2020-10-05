import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import { Navbar, Nav, Form } from 'react-bootstrap';
import BarndMark from 'assets/images/logotypy/brendmark.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarTop.css';

const NavbarTop = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" id="nav-bar" class="sticky-top">
        <NavLink to="/" style={{ marginRight: 20 }}>
          <Navbar.Brand style={{ width: 'auto', textTransform: 'uppercase', marginRight: 20 }}>
            <img src={BarndMark} alt="BarndMark" /> Ślub z Klasą
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <ul className="navbar-nav">
              <li class="nav-link">
                <NavLink className="button" to="/" id="navbutton">
                  Home
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink className="button" to="/accesorieslist" id="navbutton">
                  Akcesoria
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink className="button" to="/presslist" id="navbutton">
                  Prasa
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink className="button" to="/company" id="navbutton">
                  Katalog firm
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink className="button" to="/fairlist" id="navbutton">
                  Targi
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink className="button" to="/contact" id="navbutton">
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </Nav>
          <Form inline>
            <div id="nav-phone">
              <FaPhone style={{ marginRight: '10px' }} />
              +48 123 456 789{' '}
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavbarTop;
