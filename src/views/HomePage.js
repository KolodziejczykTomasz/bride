import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarTop from '../components/NavbarTop';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SocialMediaBar from '../components/SocialMediaBar';

const WrapperView = styled.div``;

class HomePage extends Component {
  render() {
    return (
      <WrapperView>
        <NavbarTop />
        <Hero />
        <Breadcrumb />
        coś 
        <SocialMediaBar />
        <Footer />
      </WrapperView>
    );
  }
}

export default HomePage;
