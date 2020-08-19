import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';
import styled from 'styled-components';

const PhotoBox = styled.div`
  width: 90%;
  margin: 0 auto;
  min-height: 30rem;
  @media (max-width: 600px) {
    min-height: 30rem;
  }
  @media (min-width: 600px) {
    min-height: 30rem;
  }
 
`;

const Photo = styled.img`
  display: block;
  margin: 2rem auto 0 auto;
   @media (min-width: 600px) {
    min-height: 30rem;
  }
  @media (min-width: 768px) {
    max-height: 35rem;
  }
  @media (min-width: 1024px) {
    max-height: 35rem;
  }
  @media (min-width: 1224px) {
    max-height: 35rem;
  }
`;

class CompaniesItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, title, subtitle, url, price, pageType } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <Col sm="6">
        <Card body>
          <CardTitle>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </CardTitle>
          <PhotoBox>
            <Photo src={url} alt={title} />
          </PhotoBox>
          <CardText>{price}</CardText>
          <Button onClick={this.handleCardClick}>Przejdź</Button>
        </Card>
      </Col>
    );
  }
}

export default CompaniesItem;
