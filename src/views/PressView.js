import React from 'react';
import NavbarTop from 'components/organisms/NavbarTop';
import JumbotronBar from 'components/molecules/JumbotronBar';
import BreakeHeader from 'components/atoms/BreakeHeader';
import PressList from 'components/molecules/PressList';
import Footer from 'components/organisms/Footer';

const PressView = () => (
    <>
        <NavbarTop />
        <JumbotronBar />
        <BreakeHeader>Prasa ślubna</BreakeHeader>
        <PressList />
        <Footer />
    </>
);

export default PressView;
