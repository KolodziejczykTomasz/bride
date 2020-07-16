import React from 'react';
import NavbarTop from 'components/NavbarTop';
import JumbotronBar from 'components/JumbotronBar';
import BreakeHeader from 'components/BreakeHeader';
import TravelBar from 'components/TravelBar';
import Footer from 'components/Footer';

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
