
import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import BarndMark from '../assets/images/logotypy/brendmark.jpg';
import styled from 'styled-components';



const NavbarTop = () => (
  <Fragment>
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Navbar.Brand
        style={{ width: '130px',  textTransform: 'uppercase',}}
         href="#home"
 
      >
        <img src={BarndMark} alt="BarndMark" /> Ślub z Klasą
      </Navbar.Brand>
     
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
          <NavLink style={{ width: '100px', textDecoration: 'none', color: 'black' }} to="/">
            Home
          </NavLink>
          <NavLink style={{ width: '100px', textDecoration: 'none', color: 'black' }} to="/about">
            About
          </NavLink>
          <NavLink style={{ width: '100px', textDecoration: 'none', color: 'black' }} to="/contact">
            Contact
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
  </Fragment>
);
export default NavbarTop;
