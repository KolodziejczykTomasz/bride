import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BreakeHeader from 'components/BreakeHeader';
import BreakeFooter from 'components/BreakeFooter';

import MainTemplates from 'templates/MainTemplates';
import styled from 'styled-components';

const Button = styled.a`
  display: grid;
  position: fixed;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-content: center;
  color: black;
  background-color: lightgray;
  border-radius: 50px;
  bottom: 220px;
  right: 40px;
  :hover {
    text-decoration-line: none;
    color: white;
  }
`;

const Wrapper = styled.div`
  width: 80vw;
  margin: 2rem auto;
  padding: 2rem 5rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
`;

const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.3fr 0.7fr;
  margin: 2rem 0;
`;
const Main = styled.div``;
const Title = styled.h1`
  margin: 0.5rem 0;
`;
const Subtitle = styled.h2``;

const Aside = styled.div`
  padding-left: 2rem;
`;

const PhotoBox = styled.div``;
const Photo = styled.img`
  display: block;
  width: 50rem;
  margin: 0 auto;
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

const Details = styled.ul``;
const DetailsItem = styled.li``;

class CompaniesPost extends Component {
  render() {
    const { title, subtitle, url, pageType, description, price, city } = this.props;
    return (
      <MainTemplates pageType={pageType}>
        <BreakeHeader>Katalog firm</BreakeHeader>
        <Wrapper>
          <Card>
            <Main>
              <PhotoBox>
                <Photo src={url} alt={title} />
              </PhotoBox>
            </Main>
            <Aside>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
              <Description>{description}</Description>
              <Details>
                <DetailsItem>Cena: {price}</DetailsItem>
                <DetailsItem>Miasto: {city}</DetailsItem>
              </Details>
            </Aside>
          </Card>
        </Wrapper>
        <BreakeFooter>TAGI:</BreakeFooter>
        <Button as={Link} to={`/`}>
          Close
        </Button>
      </MainTemplates>
    );
  }
}

export default CompaniesPost;