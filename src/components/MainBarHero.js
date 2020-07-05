import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-shrink: 1;
  width: 100%;
`;
const CardImg = styled.img`
  min-width: 40%;
  padding: 2rem 2rem;
`;
const CardBody = styled.div``;
const CardTitle = styled.h1`
  margin-top: 2rem;
  padding: 0 1.5rem;
`;
const CardSubtitle = styled.h2`
  padding: 0 1.5rem;
`;
const CardText = styled.p`
  padding: 1.5rem 1.5rem;
`;
const Button = styled.button`
  float: right;
  margin-top: 2rem;
  margin-right: 5rem;
  padding: 1.5rem 4rem;
`;

class MainBarHero extends Component {
  render() {
    const { title, subtitle, picHero } = this.props;

    return (
      <Card>
        <CardImg top width="100%" src={picHero} alt="Card image cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>
            <hr />
          </CardSubtitle>
          <CardText>{subtitle}</CardText>
          <Button>Zobacz więcej</Button>
        </CardBody>
      </Card>
    );
  }
}

export default MainBarHero;
