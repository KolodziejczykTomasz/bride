import React from 'react';
import NavbarTop from 'components/organisms/NavbarTop';
import JumbotronBar from 'components/molecules/JumbotronBar';
import Footer from 'components/organisms/Footer';
import ChurchBar from 'components/molecules/ChurchBar';

const ChurchView = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <ChurchBar />
    <Footer />
  </>
);

export default ChurchView;
