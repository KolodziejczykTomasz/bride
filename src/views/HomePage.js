import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarTop from '../components/NavbarTop';
import Footer from '../components/Footer';
import CarouselBar from '../components/CarouselBar';
import SocialMediaBar from '../components/SocialMediaBar';
import PressBar from '../components/PressBar';
import HeaderBreake from '../components/HeaderBreake';
import FairBar from '../components/FairBar';
import FairMain from '../components/FairMain';
import CompaniesDatabase from '../components/CompaniesDatabase';
import GlobalStyle from '../theme/GlobalStyle';
import ExtrasBar from '../components/ExtrasBar';
import MainBar from '../components/MainBar';

const WrapperView = styled.div``;

class HomePage extends Component {
  render() {
    return (
      <WrapperView>
        <GlobalStyle />
        <NavbarTop />
        <CarouselBar />  
        <MainBar />
        <HeaderBreake>Dodatki ślubne</HeaderBreake> 
        <ExtrasBar />
        <HeaderBreake>Targi ślubne</HeaderBreake> 
        <FairMain />
        <FairBar />        
        <HeaderBreake>Inspiracje</HeaderBreake> 
        <PressBar />
        <HeaderBreake>Katalog firm</HeaderBreake> 
        <CompaniesDatabase />
        <SocialMediaBar />
        <Footer />
      </WrapperView>
    );
  }
}

export default HomePage;
