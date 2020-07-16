import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarTop from 'components/NavbarTop';
import Footer from 'components/Footer';
import SliderBar from 'components/SliderBar';
import SocialMediaBar from 'components/SocialMediaBar';
import PressBar from 'components/PressBar';
import BreakeHeader from 'components/BreakeHeader';
import FairBar from 'components/FairBar';
import FairMain from 'components/FairMain';
import CompaniesBar from 'components/CompaniesBar';
import GlobalStyle from 'theme/GlobalStyle';
import AccesoriesBar from 'components/AccesoriesBar';
import MainBar from 'components/MainBar';
import DressBar from 'components/DressBar';


const WrapperView = styled.div``;

class HomeView extends Component {
  render() {
    return (
      <WrapperView>
        <GlobalStyle />
        <NavbarTop />
        <SliderBar />
        <MainBar />
        <BreakeHeader>Suknie ślubne</BreakeHeader>
        <DressBar />
        <BreakeHeader>Dodatki ślubne</BreakeHeader>
        <AccesoriesBar />
        <BreakeHeader>Targi ślubne</BreakeHeader>
        <FairMain />
        <FairBar />
        <BreakeHeader>Inspiracje</BreakeHeader>
        <PressBar />
        <BreakeHeader>Katalog firm</BreakeHeader>
        <CompaniesBar />
        <SocialMediaBar />
        <Footer />
      </WrapperView>
    );
  }
}

export default HomeView;
