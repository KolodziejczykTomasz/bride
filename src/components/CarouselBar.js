import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import slider1 from '../assets/images/slider/slider1.jpg';
import slider2 from '../assets/images/slider/slider2.jpg';
import slider3 from '../assets/images/slider/slider3.jpg';

const items = [
  {
    src: slider1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1',
  },
  {
    src: slider2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2',
  },
  {
    src: slider3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3',
  },
];

const CarouselBar = () => <UncontrolledCarousel items={items} />;

export default CarouselBar;
