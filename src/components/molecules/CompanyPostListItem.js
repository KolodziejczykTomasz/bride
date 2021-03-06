import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplates';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0.5rem;
  cursor: pointer;
  box-shadow: 0 0.5em 1em -0.125em rgba(108, 68, 162, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
`;

const Body = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.2fr 0.8fr;
  margin: 0 auto;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 481px) and (max-width: 766px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 767px) and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.div`
  background-color: rgba(10, 10, 10, 0.1);
  border-radius: 5px;
  margin: 0 auto;
  padding: 0.5rem 0.5rem;
`;

const PhotoBox = styled.div`
  width: 100%;
`;

const Photo = styled.img`
  display: block;
  width: 100%;
  height: auto;
  padding: 2px 2px;
  margin: 25% auto;
`;

const Aside = styled.div``;
const DescriptionItemList = styled.ul`
  margin-left: 2.3rem;
  @media (max-width: 480px) {
    margin-left: 0.3rem;
    font-size: 1.5rem;
    text-align: justify;
    hyphens: auto;
  }

  @media (min-width: 481px) and (max-width: 766px) {
    margin-left: 0.3rem;
    font-size: 1.5rem;
    text-align: justify;
    hyphens: auto;
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    margin-left: 0.3rem;
    font-size: 1.5rem;
    text-align: justify;
    hyphens: auto;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 2.3rem;
    text-align: justify;
    hyphens: auto;
  }
  @media (min-width: 1281px) {
    margin-left: 2.3rem;
    text-align: justify;
    hyphens: auto;
  }
`;
const DescriptionItemListItem = styled.li``;

const AsideWrapper = styled.div`
  padding: 2rem 2rem;
`;

const Title = styled.h1`
  padding: 1rem 1.8rem 0 1.8rem;
  @media (max-width: 480px) {
    padding: 1rem 1.8rem 0 0.3rem;
  }

  @media (min-width: 481px) and (max-width: 766px) {
    padding: 1rem 1.8rem 0 0.3rem;
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    padding: 1rem 1.8rem 0 0.3rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    padding: 1rem 1.8rem 0 1.8rem;
  }
  @media (min-width: 1281px) {
    padding: 1rem 1.8rem 0 1.8rem;
  }
`;

const SubTitle = styled.h2`
  padding: 1rem 1.8rem 0 1.8rem;
  @media (max-width: 480px) {
    padding: 1rem 1.8rem 0 0.3rem;
  }

  @media (min-width: 481px) and (max-width: 766px) {
    padding: 1rem 1.8rem 0 0.3rem;
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    padding: 1rem 1.8rem 0 0.3rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    padding: 1rem 1.8rem 0 1.8rem;
  }
  @media (min-width: 1281px) {
    padding: 1rem 1.8rem 0 1.8rem;
  }
`;

const Button = styled.a`
  display: grid;
  position: fixed;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-content: center;
  color: black;
  background-color: #d8c6ee;
  border-radius: 50px;
  bottom: 220px;
  right: 40px;
  :hover {
    text-decoration-line: none;
    color: white;
  }
`;

const Footer = styled.div`
  margin-top: 5rem;
  font-weight: 500;
`;

const FooterSpan = styled.span`
  color: #6c44a2;
`;

class CompanyPostListItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const {
      id,
      name,
      title,
      subtitle,
      url,
      city,
      data,
      place,
      pageType,
      category,
      description,
    } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <MainTemplates pageType={pageType}>
        <Wrapper onClick={this.handleCardClick}>
          <Body>
            <Main>
              <PhotoBox>
                <Photo src={url} alt={name} />
              </PhotoBox>
            </Main>
            <Aside>
              <AsideWrapper>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
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
                <DescriptionItemList>
                  {city !== '' ? (
                    <DescriptionItemListItem>Miasto: {city}</DescriptionItemListItem>
                  ) : null}
                  {data !== '' ? <DescriptionItemListItem>{data}</DescriptionItemListItem> : null}
                  {place !== '' ? <DescriptionItemListItem>{place}</DescriptionItemListItem> : null}
                </DescriptionItemList>
                <Footer>
                  <hr />
                  Kategoria: <FooterSpan>{category}</FooterSpan>
                </Footer>
              </AsideWrapper>
            </Aside>
          </Body>
        </Wrapper>
        <Button as={Link} to={`/`}>
          Close
        </Button>
      </MainTemplates>
    );
  }
}

export default CompanyPostListItem;
