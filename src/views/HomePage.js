import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarTop from '../components/NavbarTop';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SocialMediaBar from '../components/SocialMediaBar';
import PressBar from '../components/PressBar';
import HeaderBreake from '../components/HeaderBreake';
import CompanyBar from '../components/CompanyBar';
import FairMain from '../components/FairMain';

const WrapperView = styled.div``;

class HomePage extends Component {
  render() {
    return (
      <WrapperView>
        <NavbarTop />
        <Hero />
        <Breadcrumb />
        coś
        <HeaderBreake>Targi ślubne</HeaderBreake> 
        <FairMain />
        <CompanyBar />        
        <HeaderBreake>Inspiracje</HeaderBreake> 
        <PressBar />
        <SocialMediaBar />
        <Footer />
      </WrapperView>
    );
  }
}

export default HomePage;
