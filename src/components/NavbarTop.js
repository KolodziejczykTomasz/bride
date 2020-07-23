import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import BarndMark from '../assets/images/logotypy/brendmark.jpg';

import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1250px;
`;


const NavbarTop = () => (
  <Wrapper>
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <NavLink to="/">
        <Navbar.Brand style={{ width: '130px', textTransform: 'uppercase' }}>
          <img src={BarndMark} alt="BarndMark" /> Ślub z Klasą
        </Navbar.Brand>
      </NavLink>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="mr-auto justify-content-center"
          style={{
            width: '60vw',
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: '#fff',
            textTransform: 'uppercase',
          }}
        >
          <NavLink style={{ width: '160px', textDecoration: 'none', color: 'black' }} to="/prepare">
            Przygotowania
          </NavLink>
          <NavLink style={{ width: '140px', textDecoration: 'none', color: 'black' }} to="/company">
            Katalog firm
          </NavLink>
          <NavLink style={{ width: '120px', textDecoration: 'none', color: 'black' }} to="/contact">
            Kontakt
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="mr-auto justify-content-end">
        <Navbar.Text style={{ width: '180px', backgroundColor: '#fff' }}>
          <FaPhone style={{ marginRight: '15px' }} />
          +48 123 456 789
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  </Wrapper>
);
export default NavbarTop;
