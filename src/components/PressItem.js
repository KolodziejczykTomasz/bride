import React from 'react';
import styled from 'styled-components';

const CardTitle = styled.p``;

const CardHeroText = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 20%;
  top: 50%;
  left: 0%;
  background-color: rgba(192, 192, 192, 0.8);
  opacity: 0;
`;
const ImageItem = styled.img`
  height: 28rem;
  filter: grayscale(80%) blur(0.5px);
`;
const Wrapper = styled.div`
  cursor: pointer;
  transition: 0.7s;
  :hover {
    scale: 1.2;
  }
  :hover ${CardHeroText} {
    opacity: 1;
  }
  :hover ${ImageItem} {
    filter: none;
  }
`;
const Card = styled.div`
  position: relative;
`;

const CardHeroTextTitle = styled.p`
  display: block;
  text-align: center;
  margin: 12% auto;
  font-size: 2.2rem;
`;

const PressItem = ({ url, number }) => (
  <Wrapper className="card">
    <Card class="card-content">
      <CardTitle className="title">
        <ImageItem src={url} alt="press" />
      </CardTitle>
    </Card>
    <CardHeroText>
      <CardHeroTextTitle>Numer: {number}</CardHeroTextTitle>
    </CardHeroText>
  </Wrapper>
);

export default PressItem;
