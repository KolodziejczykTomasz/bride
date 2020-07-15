import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-shrink: 1;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;
const CardImg = styled.img`
  width: 30vw;
  max-width: 110px;
`;
const CardText = styled.p`
  padding: 0 1.5rem;
  font-size: 1.4rem;
  line-height: 20px;
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
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, title, subtitle, picHeader, header, pageType } = this.props;
const { redirect } = this.state;

if (redirect) {
  return <Redirect to={`${pageType}/${id}`} />;
}
    return (
      <Card pageType={pageType}>
        <CardImg top width="100%" src={picHeader} alt="Card image cap" />
        <CardBody>
          <CardSubtitle>{title}</CardSubtitle>
          <CardText>{subtitle}</CardText>
          <CardText>{header}</CardText>
          <WarpperButton>
            <Button onClick={this.handleCardClick}>Zobacz więcej</Button>
          </WarpperButton>
        </CardBody>
      </Card>
    );
  }
}

export default MainBarItem;
