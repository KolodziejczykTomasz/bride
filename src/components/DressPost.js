import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplates';
import BreakeHeader from 'components/BreakeHeader';
import BreakeFooter from 'components/BreakeFooter';
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
const PhotoBox = styled.div``;
const Photo = styled.img`
  display: block;
  width: 50rem;
  margin: 5rem auto;
`;




class DressPost extends Component {
  render() {
    const { url, pageType } = this.props;
    return (
      <MainTemplates pageType={pageType}>
        <BreakeHeader>Suknie ślubne</BreakeHeader>
        <Wrapper>
          <PhotoBox> 
            <Photo src={url} alt="pic name" />
            </PhotoBox>
          <Button as={Link} to={`/`}>
            Close
          </Button>
        </Wrapper>
        <BreakeFooter>TAGI:</BreakeFooter>
      </MainTemplates>
    );
  }
}

export default DressPost;
