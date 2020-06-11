import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import slider1 from '../assets/images/slider/slider1.jpg';
import slider2 from '../assets/images/slider/slider2.jpg';
import slider3 from '../assets/images/slider/slider3.jpg';

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    src: slider1,
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    src: slider2,
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    src: slider3,
  },
];

const CarouselBarText = styled.div`
  display: block;
  position: absolute;
  border-radius: 10px;
  width: 60%;
  height: 15rem;
  bottom: 12rem;
  right: calc(50% - 30%);
  background-color: rgba(192, 192, 192, 0.7);
  z-index: 9999;
`;

const CarouselBar = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} />

        <CarouselCaption          
          className="text-info"
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              position: absolute;
              max-width: 100%;
              height: 600px;
              position: relative; 
             font-size: 7rem;                   
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <CarouselBarText/>
    </div>
  );
};

export default CarouselBar;
