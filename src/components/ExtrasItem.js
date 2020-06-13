import React from 'react';
import styled from 'styled-components';
import press1 from '../assets/images/press/bc_2_2019.jpg';

const Wrapper = styled.div``;
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
`;

const CardHeroTextTitle = styled.p`
  display: block;
  text-align: center;
  margin: 12% auto;
  font-size: 2.2rem;
`;

const ExtrasItem = () => (
  <Wrapper className="card">
    <Card class="card-content">
      <CardText className="title">
        <img src={press1} alt="press" />
      </CardText>
    </Card>
    <CardHeroText>
      <CardHeroTextTitle>1/2020</CardHeroTextTitle>
    </CardHeroText>
  </Wrapper>
);

export default ExtrasItem;
