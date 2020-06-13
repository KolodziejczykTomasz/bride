import React from 'react';
import styled from 'styled-components';
import press1 from '../assets/images/press/bc_2_2019.jpg';



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
const Wrapper = styled.div`
cursor: pointer;
:hover ${CardHeroText} {
    opacity: 1;
  } `;
const Card = styled.div`
  position: relative;
`;



const CardHeroTextTitle = styled.p`
  display: block;
  text-align: center;
  margin: 12% auto;
  font-size: 2.2rem;
`;

const PressItem = () => (
  <Wrapper className="card">
    <Card class="card-content">
      <CardTitle className="title">
        <img src={press1} alt="press" />
      </CardTitle>
    </Card>
    <CardHeroText>
      <CardHeroTextTitle>1/2020</CardHeroTextTitle>
    </CardHeroText>
  </Wrapper>
);

export default PressItem;
