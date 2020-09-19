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

const Header = styled.h1`
  text-align: center;
`;
const SubHeader = styled.h2`
  text-align: center;
`;

const PhotoBox = styled.div``;
const Photo = styled.img`
  display: block;
  width: 50rem;
  margin: 5rem auto;
`;

const Section = styled.div`
  margin: 4rem 0;
`;

const Text = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
`;

const DescriptionItemList = styled.ul`
  margin-left: 3rem;
  @media (max-width: 767px) {
    margin-left: 0;
    font-size: 1.5rem;
    text-align: justify;
    hyphens: auto;
  }
`;
const DescriptionItemListItem = styled.li``;

class TravelPost extends Component {
  render() {
    const { url, pleace, price, description, pageType, tags, category } = this.props;
    return (
      <MainTemplates pageType={pageType}>
        <BreakeHeader>Podróż poślubna</BreakeHeader>
        <Wrapper>
          <Header>{pleace}</Header>
          <SubHeader>{price}</SubHeader>
          <Section>
            <Text>
              {description.length !== '' ? (
                <>
                  {description.map(({ p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 }) => (
                    <DescriptionItemList>
                      <DescriptionItemListItem>{p1}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p2}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p3}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p4}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p5}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p6}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p7}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p8}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p9}</DescriptionItemListItem>
                      <DescriptionItemListItem>{p10}</DescriptionItemListItem>
                    </DescriptionItemList>
                  ))}
                </>
              ) : null}
            </Text>
          </Section>
          <PhotoBox>
            <Photo src={url} alt={pleace} />
          </PhotoBox>
          <Button as={Link} to={`/travels`}>
            Close
          </Button>
        </Wrapper>
        <PostFooter category={category} tags={tags} />
      </MainTemplates>
    );
  }
}

export default TravelPost;
