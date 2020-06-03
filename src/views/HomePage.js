import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarTop from '../components/NavbarTop';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

const WrapperView = styled.div`
 
`;

class HomePage extends Component {
  render() {
    return (
      <WrapperView>
        <NavbarTop />
        <Breadcrumb />
        coś
        <Footer/>
      </WrapperView>
    );
  }
}

export default HomePage;
