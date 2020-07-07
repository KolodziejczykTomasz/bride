import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarTop from 'components/NavbarTop';
import Footer from 'components/Footer';
import SliderBar from 'components/SliderBar';
import SocialMediaBar from 'components/SocialMediaBar';
import PressBar from 'components/PressBar';
import HeaderBreake from 'components/HeaderBreake';
import FairBar from 'components/FairBar';
import FairMain from 'components/FairMain';
import CompaniesDatabase from 'components/CompaniesDatabase';
import GlobalStyle from 'theme/GlobalStyle';
import ExtrasBar from 'components/ExtrasBar';
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
        <HeaderBreake>Suknie ślubne</HeaderBreake>
        <DressBar />
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

export default HomeView;
