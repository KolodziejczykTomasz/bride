import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import BarndMark from 'assets/images/logotypy/brendmark.jpg';
import './NavbarTop.css';

const NavbarTop = () => (
  <Fragment>
    <div class="navbar-brand" id="headerNavbar">
      <div>
        <span id="headerNavbarSpan">Kontakt z redakcją portalu</span>
        <span id="headerNavbarSpanSecond"> "ślub z klasą"</span>
        <FaPhone style={{ marginRight: '10px' }} />
        +48 123 456 789
      </div>
    </div>

    <div class="navbar navbar-expand-md navbar-light sticky-top" id="wrapperNavbar">
      <div class="navbar-toggler-right">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <NavLink to="/" style={{ marginRight: 20 }}>
        <Navbar.Brand style={{ width: 'auto', textTransform: 'uppercase', marginRight: 20 }}>
          <img src={BarndMark} alt="BarndMark" /> Ślub z Klasą
        </Navbar.Brand>
      </NavLink>
      <nav class="collapse navbar-collapse flex-column " id="navbar">
        <ul class="navbar-nav  w-100 justify-content-center px-3">
          <li class="nav-link">
            <NavLink class="button" to="/" id="navbutton">
              Home
            </NavLink>
          </li>
          <li class="nav-link">
            <NavLink class="button" to="/accesorieslist" id="navbutton">
              Akcesoria
            </NavLink>
          </li>
          <li class="nav-link">
            <NavLink class="button" to="/presslist" id="navbutton">
              Prasa
            </NavLink>
          </li>
          <li class="nav-link">
            <NavLink class="button" to="/company" id="navbutton">
              Katalog firm
            </NavLink>
          </li>
          <li class="nav-link">
            <NavLink class="button" to="/fairlist" id="navbutton">
              Targi
            </NavLink>
          </li>
          <li class="nav-link">
            <NavLink class="button" to="/contact" id="navbutton">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </Fragment>
);
export default NavbarTop;
