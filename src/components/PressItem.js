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

const PressItem = (id, url, title, number) => (
  <Wrapper className="card">
    <Card class="card-content">
      <CardTitle className="title">
        {title}
        <img src={url} alt="press" />
      </CardTitle>
    </Card>
    <CardHeroText>
      <CardHeroTextTitle>{number}</CardHeroTextTitle>
    </CardHeroText>
  </Wrapper>
);

export default PressItem;
