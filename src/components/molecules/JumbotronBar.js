import React from 'react';
import { Jumbotron } from 'reactstrap';
import styled from 'styled-components';
import Image from 'assets/images/slider/slider2.jpg';

const Wrapper = styled.div``;
const Header = styled.h1`
  color: white;
  font-weight: 600;
`;
const Title = styled.p`
  font-size: 22px;
  color: white;
`;
const Subtitle = styled.p`
  color: white;
  font-size: 19px;
`;


const JumbotronBar = (props) => (
  <Wrapper>
    <Jumbotron
      style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', height: '50rem' }}
    >
      <div
        style={{ marginTop: '15rem', backgroundColor: 'rgba(108, 68, 162, 0.3)', width: '100%' }}
      >
        <Header className="display-3">Ślub z klasą!</Header>
        <Title className="lead">Zaplanuj z nami swój wymarzony ślub.</Title>
        <hr className="my-2" />
        <Subtitle>- spokojnie i bez paniki.</Subtitle>
      </div>
    </Jumbotron>
  </Wrapper>
);

export default JumbotronBar;
