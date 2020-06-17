import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import styled from 'styled-components';
import Image from '../assets/images/slider/slider2.jpg';

const Wrapper = styled.div``;

const JumbotronBar = (props) => (
  <Wrapper>
    <Jumbotron
      style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', height: '40rem' }}
    ><div style={{ marginTop: '15rem' }}>
      <h1 className="display-3">Hello, world!</h1>
      <p className="lead">
        This is a simple hero unit, a simple Jumbotron-style component for calling extra attention
        to featured content or information.
      </p>
      <hr className="my-2" />
      <p>
        It uses utility classes for typography and spacing to space content out within the larger
        container.
      </p>
      <p className="lead">
        <Button color="primary">Learn More</Button>
      </p></div>
    </Jumbotron>
  </Wrapper>
);

export default JumbotronBar;
