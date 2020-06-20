import React from 'react';
import Carousel from 'react-multi-carousel';
import { Image } from 'semantic-ui-react';

import suknia_slubna_1 from '../assets/images/dress/suknia_slubna_1.jpg';
import suknia_slubna_2 from '../assets/images/dress/suknia_slubna_2.jpg';
import suknia_slubna_3 from '../assets/images/dress/suknia_slubna_3.jpg';
import suknia_slubna_4 from '../assets/images/dress/suknia_slubna_4.jpg';
import suknia_slubna_5 from '../assets/images/dress/suknia_slubna_5.jpg';
import suknia_slubna_6 from '../assets/images/dress/suknia_slubna_6.jpg';
import suknia_slubna_7 from '../assets/images/dress/suknia_slubna_7.jpg';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};


const images = [
  suknia_slubna_1,
  suknia_slubna_2,
  suknia_slubna_3,
  suknia_slubna_4,
  suknia_slubna_5,
  suknia_slubna_6,
  suknia_slubna_7,
];


const DressBarData = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 7).map((image) => {
        return <Image draggable={false} style={{ width: '96%', height: '90%', cursor: 'pointer'}} src={image} />;
      })}
    </Carousel>
  );
};

export default DressBarData;
