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

const WrapperView = styled.div``;

class HomePage extends Component {
  render() {
    return (
      <WrapperView>
        <NavbarTop />
        <CarouselBar />       
        <HeaderBreake>Dodatki ślubne</HeaderBreake> 
        
        <HeaderBreake>Targi ślubne</HeaderBreake> 
        <FairMain />
        <FairBar />        
        <HeaderBreake>Inspiracje</HeaderBreake> 
        <PressBar />
        <HeaderBreake>Katalog firm</HeaderBreake> 
        <SocialMediaBar />
        <Footer />
      </WrapperView>
    );
  }
}

export default HomePage;
