import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import BarndMark from 'assets/images/logotypy/brendmark.jpg';

import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 100%;
`;


const NavbarTop = () => (
  <Wrapper>
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <NavLink to="/" style={{ marginRight: 20, }}>
        <Navbar.Brand style={{ width: 'auto', textTransform: 'uppercase', marginRight: 20, }}>
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
            marginLeft: 10,
            marginBottom: 20,
            backgroundColor: '#fff',
            textTransform: 'uppercase',
          }}
        >   
          <NavLink style={{ width: 'auto', textDecoration: 'none', color: 'black', marginRight: 30, }} to="/accesorieslist">
            Akcesoria
          </NavLink>
          <NavLink style={{ width: 'auto', textDecoration: 'none', color: 'black', marginRight: 30, }} to="/presslist">
            Prasa
          </NavLink>       
          <NavLink style={{ width: 'auto', textDecoration: 'none', color: 'black', marginRight: 30, }} to="/company">
            Katalog firm
          </NavLink>
          <NavLink style={{ width: 'auto', textDecoration: 'none', color: 'black', marginRight: 30, }} to="/fairlist">
            Targi
          </NavLink>
          <NavLink style={{ width: 'auto', textDecoration: 'none', color: 'black',}} to="/contact">
            Kontakt
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="mr-auto justify-content-end">
        <Navbar.Text style={{ width: '160px', backgroundColor: '#fff', fontSize: 'auto' }}>
          <FaPhone style={{ marginRight: '15px' }} />
          +48 123 456 789
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  </Wrapper>
);
export default NavbarTop;
