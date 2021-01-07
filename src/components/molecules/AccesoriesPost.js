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
  align-self: end;
  color: black;
  background-color: lightgray;
  border-radius: 50px;
  bottom: 20vh;
  right: 10vh;
  :hover {
    text-decoration-line: none;
    color: white;
  }
`;

const Wrapper = styled.div`
  width: 80vw;
  margin: 2rem auto;
  padding: 2rem 5rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(108, 68, 162, 0.3), 0 0px 0 1px rgba(10, 10, 10, 0.02);
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

const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.3fr 0.7fr;
  margin: 0.5rem 0;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.div``;

const PhotoBox = styled.div``;

const Photo = styled.img`
  display: block;
  width: 100%;
  margin: 0.2rem auto;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 60vw;
    margin: 1rem auto 2rem auto;
  }
`;

const Aside = styled.div`
  padding: 1rem 2rem 0 2rem;
  @media (max-width: 767px) {
    margin: 1rem 0;
  }
`;
const Title = styled.h1`
  margin: 0.5rem 0;
`;

const SubTitle = styled.div`
  @media (max-width: 767px) {
    margin: 1rem 0;
    font-size: 1.8rem;
    font-weight: 600;
    text-align: justify;
    hyphens: auto;
  }
`;

const Price = styled.h2``;
const Description = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin: 2rem 0.8rem 1.3rem 0.8rem;
  @media (max-width: 767px) {
    margin: 2rem 0 1.3rem 0;
  }
`;

const Details = styled.ul``;
const DetailsItem = styled.li``;
const DescriptionItemListItem = styled.li`
  margin: 1rem 0.8rem 1rem 0.8rem;
  @media (max-width: 767px) {
    margin: 1rem 0;
    font-size: 1.5rem;
    text-align: justify;
    hyphens: auto;
  }
`;
const DescriptionItemList = styled.ul`
  margin-left: 0.5rem;
  @media (max-width: 767px) {
    margin-left: 0;
  }
`;

class AccesoriesPost extends Component {
  render() {
    const { title, subtitle, description, price, shop, url, pageType, tags, category } = this.props;
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
              <Title>{title}</Title>
              <Price>{price}</Price>
              <Description>
                <SubTitle>{subtitle}</SubTitle>
                {description.length !== '' ? (
                  <>
                    {description.map(({ id, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 }) => (
                      <DescriptionItemList>
                        <DescriptionItemListItem key={id}>{p1}</DescriptionItemListItem>
                        <DescriptionItemListItem key={id}>{p2}</DescriptionItemListItem>
                        <DescriptionItemListItem key={id}>{p3}</DescriptionItemListItem>
                        <DescriptionItemListItem key={id}>{p4}</DescriptionItemListItem>
                        <DescriptionItemListItem key={id}>{p5}</DescriptionItemListItem>
                        <DescriptionItemListItem key={id}>{p6}</DescriptionItemListItem>
                        <DescriptionItemListItem key={id}>{p7}</DescriptionItemListItem>
                        <DescriptionItemListItem key={id}>{p8}</DescriptionItemListItem>
                        <DescriptionItemListItem key={id}>{p9}</DescriptionItemListItem>
                        <DescriptionItemListItem key={id}>{p10}</DescriptionItemListItem>
                      </DescriptionItemList>
                    ))}
                  </>
                ) : null}
              </Description>
              <Details>
                {shop !== '' ? <DetailsItem>Sklep/Firma: {shop}</DetailsItem> : null}
              </Details>
            </Aside>
          </Card>

          <Button as={Link} to={`/accesorieslist`}>
            Close
          </Button>
        </Wrapper>
        <PostFooter category={category} tags={tags} />
      </MainTemplates>
    );
  }
}

export default AccesoriesPost;
