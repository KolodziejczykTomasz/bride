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
  margin: 2rem 0;
`;
const Main = styled.div``;
const Title = styled.h1`
  margin: 0.5rem 0;
`;
const Subtitle = styled.h2`
`;

const Aside = styled.div`
  padding-left: 2rem;
`;

const AsideWrapper = styled.div`
  padding: 2rem 2rem;
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

const DescriptionItemList = styled.ul`
  margin-left: 0.5rem;
`;
const DescriptionItemListItem = styled.li``;

class CompaniesPost extends Component {
  render() {
    const { title, subtitle, url, pageType, description, category, price, city, tags } = this.props;
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
              <AsideWrapper>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
              <Description>
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
              </Description>
              <Details>
                {price !== '' ?  <DetailsItem>Cena: {price}</DetailsItem> : null}
                {city !== '' ? <DetailsItem>Miasto: {city}</DetailsItem> : null}
              </Details>
              </AsideWrapper>
            </Aside>
          </Card>
        </Wrapper>
        <PostFooter category={category} tags={tags} />
        <Button as={Link} to={`/companies`}>
          Close
        </Button>
      </MainTemplates>
    );
  }
}

export default CompaniesPost;
