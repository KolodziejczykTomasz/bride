import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplates';

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
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, title, subtitle, picHero, pageType, extras } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <MainTemplates>
        <Card pageType={extras}>
          <CardImg top width="100%" src={picHero} alt="Card image cap" />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>
              <hr />
            </CardSubtitle>
            <CardText>{subtitle}</CardText>
            <Button onClick={this.handleCardClick}>Zobacz więcej</Button>
          </CardBody>
        </Card>
      </MainTemplates>
    );
  }
}

export default MainBarHero;
