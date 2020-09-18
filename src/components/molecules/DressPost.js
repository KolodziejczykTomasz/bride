import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplates';
import BreakeHeader from 'components/atoms/BreakeHeader';
import PostFooter from 'components/organisms/PostFooter';

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
  @media (max-width: 767px) {
    width: 100%;
    padding: 1rem 1rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    padding: 1rem 1.5rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 100%;
    padding: 1rem 1.5rem;
  }
`;

const Title = styled.h1`
  text-align: center;
`;
const Subtitle = styled.h2`
  text-align: center;
`;

const PhotoBox = styled.div``;
const Photo = styled.img`
  display: block;
  width: 50rem;
  margin: 5rem auto;
`;

const Details = styled.div`
  width: 50vw;
  margin: 5rem auto;
`;
const Price = styled.div``;
const Category = styled.div``;
const Descripion = styled.div``;
const Shop = styled.div``;

const TextBold = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  padding-right: 1rem;
`;

class DressPost extends Component {
  render() {
    const { url, pageType, name, model, price, shop, category, descripion, tags } = this.props;
    return (
      <MainTemplates pageType={pageType}>
        <BreakeHeader>Suknie ślubne</BreakeHeader>
        <Wrapper>
          <Title>{name}</Title>
          <Subtitle>{model}</Subtitle>
          <PhotoBox>
            <Photo src={url} alt="pic name" />
          </PhotoBox>
          <Details>
            {price !== '' ? (
              <>
                <Price>
                  <TextBold>Cena:</TextBold> {price}
                </Price>
              </>
            ) : null}
            <Category>
              {category !== '' ? (
                <>
                  <TextBold>Kategoria:</TextBold> {category}
                </>
              ) : null}
            </Category>
            <Descripion>
              {descripion !== '' ? (
                <>
                  <TextBold>Opis:</TextBold> {descripion}
                </>
              ) : null}
            </Descripion>
            <Shop>
              {shop !== '' ? (
                <>
                  <TextBold>Sklep:</TextBold> {shop}
                </>
              ) : null}
            </Shop>
          </Details>
          <Button as={Link} to={`/`}>
            Close
          </Button>
        </Wrapper>
        <PostFooter category={category} tags={tags} />
      </MainTemplates>
    );
  }
}

export default DressPost;
