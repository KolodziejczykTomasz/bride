import React from 'react';
import Flickity from 'react-flickity-component';
import styled from 'styled-components';

import './DressBar.css';

import suknia_slubna_1 from '../assets/images/dress/suknia_slubna_1.jpg';
import suknia_slubna_2 from '../assets/images/dress/suknia_slubna_2.jpg';
import suknia_slubna_3 from '../assets/images/dress/suknia_slubna_3.jpg';
import suknia_slubna_4 from '../assets/images/dress/suknia_slubna_4.jpg';
import suknia_slubna_5 from '../assets/images/dress/suknia_slubna_5.jpg';
import suknia_slubna_6 from '../assets/images/dress/suknia_slubna_6.jpg';
import suknia_slubna_7 from '../assets/images/dress/suknia_slubna_7.jpg';

const flickityOptions = {
  initialIndex: 1,
};

const ImageItem = styled.img`
  max-height: 500px;
`;

function Carousel() {
  return (
    <Flickity
      className={'carousel'}
      elementType={'div'}
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
      <ImageItem src={suknia_slubna_1} alt="suknia ślubna" />
      <ImageItem src={suknia_slubna_2} alt="suknia ślubna" />
      <ImageItem src={suknia_slubna_3} alt="suknia ślubna" />
      <ImageItem src={suknia_slubna_4} alt="suknia ślubna" />
      <ImageItem src={suknia_slubna_5} alt="suknia ślubna" />
      <ImageItem src={suknia_slubna_6} alt="suknia ślubna" />
      <ImageItem src={suknia_slubna_7} alt="suknia ślubna" />
      <ImageItem src={suknia_slubna_1} alt="suknia ślubna" />
      <ImageItem src={suknia_slubna_2} alt="suknia ślubna" />
      <ImageItem src={suknia_slubna_3} alt="suknia ślubna" />
      <ImageItem src={suknia_slubna_4} alt="suknia ślubna" />
      <ImageItem src={suknia_slubna_5} alt="suknia ślubna" />
      <ImageItem src={suknia_slubna_6} alt="suknia ślubna" />
      <ImageItem src={suknia_slubna_7} alt="suknia ślubna" />
    </Flickity>
  );
}

function DressBar() {
  return <Carousel />;
}

export default DressBar;
