import React from 'react';
import NavbarTop from 'components/organisms/NavbarTop';
import JumbotronBar from 'components/molecules/JumbotronBar';
import CompanyList from 'components/molecules/CompanyList';
import Footer from 'components/organisms/Footer';

const CompanyView = () => (
  <>
    <NavbarTop />
    <JumbotronBar />
    <CompanyList/>
    <Footer />
  </>
);

export default CompanyView;
