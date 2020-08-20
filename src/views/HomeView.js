import React, { Component } from 'react';
import NavbarTop from 'components/organisms/NavbarTop';
import Footer from 'components/organisms/Footer';
import SliderBar from 'components/atoms/SliderBar';
import SocialMediaBar from 'components/molecules/SocialMediaBar';
import PressBar from 'components/molecules/PressBar';
import BreakeHeader from 'components/atoms/BreakeHeader';
import FairBar from 'components/molecules/FairBar';
import FairMain from 'components/molecules/FairMain';
import CompaniesBar from 'components/molecules/CompaniesBar';
import AccesoriesBar from 'components/molecules/AccesoriesBar';
import MainBar from 'components/molecules/MainBar';
import DressBar from 'components/molecules/DressBar';

import GlobalStyle from 'theme/GlobalStyle';
import styled from 'styled-components';

const WrapperView = styled.div``;

class HomeView extends Component {
  render() {
    return (
      <WrapperView>
        <GlobalStyle />
        <NavbarTop />
        <SliderBar  />
        <BreakeHeader>Aktualności</BreakeHeader>
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
