import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import styled from 'styled-components';
import Image from 'assets/images/slider/slider2.jpg';

const Wrapper = styled.div``;

const JumbotronBar = (props) => (
  <Wrapper>
    <Jumbotron
      style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', height: '40rem' }}
    >
      <div style={{ marginTop: '15rem' }}>
        <h1 className="display-3">Ślub z klasą!</h1>
        <p className="lead">
          Zaplanuj z nami swój wymarzony ślub.
        </p>
        <hr className="my-2" />
        <p>
          - spokojnie i bez paniki.
        </p>
        <p className="lead">
          <Button color="primary">Zobacz więcej</Button>
        </p>
      </div>
    </Jumbotron>
  </Wrapper>
);

export default JumbotronBar;
