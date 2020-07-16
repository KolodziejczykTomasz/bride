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
  margin: 5rem 0;
`;
const Main = styled.div``;
const Title = styled.h1`
  margin: 5rem 0;
`;
const Aside = styled.div``;

const PhotoBox = styled.div``;
const Photo = styled.img`
  display: block;
  width: 50rem;
  margin: 1rem auto;
`;

class AccesoriesPost extends Component {
  render() {
    const { name, url, pageType } = this.props;
    return (
      <MainTemplates pageType={pageType}>
        <BreakeHeader>Akcesoria ślubne</BreakeHeader>
        <Wrapper>
          <Card>
            <Main>
              <PhotoBox>
                <Photo src={url} alt="Accesories" />
              </PhotoBox>
            </Main>
            <Aside>
              <Title>{name}</Title>
            </Aside>
          </Card>

          <Button as={Link} to={`/`}>
            Close
          </Button>
        </Wrapper>
        <BreakeFooter>TAGI:</BreakeFooter>
      </MainTemplates>
    );
  }
}

export default AccesoriesPost;
