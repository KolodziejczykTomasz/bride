import React from 'react';
import NavbarTop from 'components/organisms/NavbarTop';
import JumbotronBar from 'components/molecules/JumbotronBar';
import Footer from 'components/organisms/Footer';
import AccesoriesList from 'components/molecules/AccesoriesList';

const AccesoriesView = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <AccesoriesList />
    <Footer />
  </>
);

export default AccesoriesView;
