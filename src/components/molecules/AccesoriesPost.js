import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BreakeHeader from 'components/atoms/BreakeHeader';
import PostFooter from 'components/organisms/PostFooter';

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
  margin: 0.5rem 0;
`;


const Main = styled.div``;
const PhotoBox = styled.div``;
const Photo = styled.img`
  display: block;
  width: 100%;
  margin: .2rem auto;
`;


const Aside = styled.div`
padding-left: 2rem;
`;
const Name = styled.h1`
  margin: .5rem 0;  
`;
const Price = styled.h2``;
const Description = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
`;
const Shop = styled.h3``;




class AccesoriesPost extends Component {
  render() {
    const { name, description, price, shop, url, pageType, tags, category } = this.props;
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
              <Name>{name}</Name>
              <Price>{price}</Price>
              <Description>{description}</Description>
              <Shop>{shop}</Shop>
            </Aside>
          </Card>

          <Button as={Link} to={`/`}>
            Close
          </Button>
        </Wrapper>
        <PostFooter category={category} tags={tags} />
      </MainTemplates>
    );
  }
}

export default AccesoriesPost;