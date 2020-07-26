import React from 'react';
import NavbarTop from 'components/organisms/NavbarTop';
import JumbotronBar from 'components/molecules/JumbotronBar';
import BreakeHeader from 'components/atoms/BreakeHeader';
import TravelBar from 'components/molecules/TravelBar';
import Footer from 'components/organisms/Footer';

const TravelView = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <BreakeHeader>Podróż poślubna - inspiracje</BreakeHeader>
    <TravelBar />
    <Footer />
  </>
);

export default TravelView;
