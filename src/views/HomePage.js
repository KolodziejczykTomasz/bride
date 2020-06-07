import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarTop from '../components/NavbarTop';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SocialMediaBar from '../components/SocialMediaBar';
import PressBar from '../components/PressBar';
import HeaderBreake from '../components/HeaderBreake';

const WrapperView = styled.div``;

class HomePage extends Component {
  render() {
    return (
      <WrapperView>
        <NavbarTop />
        <Hero />
        <Breadcrumb />
        coś 
        <HeaderBreake/>
        <PressBar />
        <SocialMediaBar />
        <Footer />
      </WrapperView>
    );
  }
}

export default HomePage;
