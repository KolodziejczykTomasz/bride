import React from 'react';
import NavbarTop from 'components/NavbarTop';
import JumbotronBar from 'components/JumbotronBar';
import BreakeHeader from 'components/BreakeHeader';
import FairList from 'components/FairList';
import Footer from 'components/Footer';

const FairView = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <BreakeHeader>Targi ślubne</BreakeHeader>
    <FairList />
    <Footer />
  </>
);

export default FairView;
