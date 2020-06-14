import React from 'react';
import styled from 'styled-components';
import suknia from '../assets/images/main/suknia.jpg';

const Card = styled.div`
  display: flex;
  flex-shrink: 1;
  width: 100%;
  max-height: 10rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;
const CardImg = styled.img`
  width: 15%;
`;
const CardText = styled.p`
  padding: 0 1.5rem;
`;
const CardBody = styled.div``;
const CardSubtitle = styled.h1`
  padding: 0 1.5rem;
`;

const WarpperButton = styled.div``;
const Button = styled.button`
  float: right;
  margin-top: 0.5rem;
  margin-right: 5rem;
  padding: 0.2rem 1rem;
`;

const MainBarItem = () => (
  <Card>
    <CardImg top width="100%" src={suknia} alt="Card image cap" />
    <CardBody>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </CardText>
      <WarpperButton>
        <Button>Button</Button>
      </WarpperButton>
    </CardBody>
  </Card>
);

export default MainBarItem;
