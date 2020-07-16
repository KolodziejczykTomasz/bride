import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplates';
import BreakeHeader from 'components/BreakeHeader';
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
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
`;
const Header = styled.div`
  margin: 5rem 0;
`;
const Title = styled.h1`
  margin: 5rem 0;
`;
const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.3fr 0.7fr;
  margin: 5rem 0;
`;
const Main = styled.div``;
const Aside = styled.div``;

const PhotoBox = styled.div``;
const Photo = styled.img`
  display: block;
  width: 50rem;
  margin: 1rem auto;
`;

class PressPost extends Component {
  render() {
    const { title, number, url, pageType } = this.props;
    return (
      <MainTemplates pageType={pageType}>
        <BreakeHeader>Prasa ślubna</BreakeHeader>
        <Wrapper>
          <Header></Header>
          <Card>
            <Main>
              <PhotoBox>
                <Photo src={url} alt={title} />
              </PhotoBox>
            </Main>
            <Aside>
              <Title> {title}</Title>
              {number}
            </Aside>
          </Card>
          <Button as={Link} to={`/`}>
            Close
          </Button>
        </Wrapper>
      </MainTemplates>
    );
  }
}

export default PressPost;
