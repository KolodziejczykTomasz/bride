import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
`;
const CardText = styled.p``;
const CardHeroText = styled.div`
  display: block;
  position: absolute;
  width: 80%;
  height: 20%;
  top: 50%;
  left: 10%;
  background-color: rgba(192, 192, 192, 0.8);
  opacity: 0;
`;
const Wrapper = styled.div`
  cursor: pointer;
  transition: 0.5s;
  :hover {
    scale: 1.2;
    z-index: 999;
  }
  :hover ${CardHeroText} {
    opacity: 1;
  }
`;
const CardHeroTextTitle = styled.p`
  display: block;
  text-align: center;
  margin: 12% auto;
  font-size: 2.2rem;
`;

const ImageItem = styled.img`
  display: block;
  height: 28rem;
  padding: 5px 5px;
  margin: 0 auto;
`;

const ExtrasItem = ({ url, name }) => (
  <Wrapper className="card">
    <Card class="card-content">
      <CardText className="title">
        <ImageItem src={url} alt={name} />
      </CardText>
    </Card>
    <CardHeroText>
      <CardHeroTextTitle>{name}</CardHeroTextTitle>
    </CardHeroText>
  </Wrapper>
);

export default ExtrasItem;
