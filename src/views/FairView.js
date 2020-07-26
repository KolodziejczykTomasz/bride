import React from 'react';
import NavbarTop from 'components/organisms/NavbarTop';
import JumbotronBar from 'components/molecules/JumbotronBar';
import BreakeHeader from 'components/atoms/BreakeHeader';
import FairList from 'components/molecules/FairList';
import Footer from 'components/organisms/Footer';

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
