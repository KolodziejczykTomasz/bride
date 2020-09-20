import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import BarndMark from 'assets/images/logotypy/brendmark.jpg';

import './NavbarTop.css';

const NavbarTop = () => (
  <>
    <div id="navbarHeader">
      <Navbar.Brand id="navbarHeaderBrand">
        <img src={BarndMark} alt="BarndMark" id="navbarHeaderBrandPhoto" />
      </Navbar.Brand>
      <div id="navbarHeaderPhone">
        <Navbar.Text style={{ backgroundColor: '#fff', fontSize: '12' }}>
          <FaPhone style={{ marginRight: '10px' }} />
          +48 123 456 789
        </Navbar.Text>
      </div>
    </div>
    <nav class="navbar navbar-expand-md sticky-top">
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
      <NavLink to="/">
        <Navbar.Brand
          id="navbarHeaderSecondBrand"     
        >
          Ślub z Klasą
        </Navbar.Brand>
      </NavLink>
      <nav class="collapse navbar-collapse flex-column " id="navbar">
        <ul class="navbar-nav  w-100 justify-content-center px-3">
          <li class="nav-item dropdown">
            <NavLink id="navlink" to="/accesorieslist">
              Akcesoria
            </NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink id="navlink" to="/presslist">
              Prasa
            </NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink id="navlink" to="/company">
              Katalog firm
            </NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink id="navlink" to="/fairlist">
              Targi
            </NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink id="navlink" to="/contact">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </nav>
  </>
);
export default NavbarTop;
