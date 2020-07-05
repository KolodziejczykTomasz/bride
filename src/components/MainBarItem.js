import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-shrink: 1;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;
const CardImg = styled.img`
  width: 20%;
`;
const CardText = styled.p`
  padding: 0 1.5rem;
  font-size: 1.1rem;
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
  padding: 1.5rem 4rem;
`;

class MainBarItem extends Component {
  render() {
    const { title, subtitle, picHero } = this.props;

    return (
      <Card>
        <CardImg top width="100%" src={picHero} alt="Card image cap" />
        <CardBody>
          <CardSubtitle>{title}</CardSubtitle>
          <CardText>{subtitle}</CardText>
          <WarpperButton>
            <Button>Zobacz więcej</Button>
          </WarpperButton>
        </CardBody>
      </Card>
    );
  }
}

export default MainBarItem;
