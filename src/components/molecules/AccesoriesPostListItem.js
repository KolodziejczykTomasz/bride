import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplates';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0.5rem;
  cursor: pointer;
   box-shadow: 0 0.5em 1em -0.125em rgba(108, 68,  162, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
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
`;
const DescriptionItemListItem = styled.li``;

const AsideWrapper = styled.div`
  padding: 2rem 2rem;
`;

const Title = styled.h1`
  padding: 1rem 1.8rem 0 1.8rem;
`;

const SubTitle = styled.p`
  padding: 1rem 2rem;
  font-size: 1.8rem;
  font-weight: 500;
`;

const Button = styled.a`
  display: grid;
  position: fixed;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-content: center;
  color: black;
  background-color: #D8C6EE;
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
  color: #6C44A2;
`;

class AccesoriesPostListItem extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, title, subtitle, url, price, shop, pageType, category, description } = this.props;
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
                <Photo src={url} alt={title} />
              </PhotoBox>
            </Main>
            <Aside>
              <AsideWrapper>
                <Title>{title}</Title>
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
                        <DescriptionItemListItem key={id}>{p7}</DescriptionItemListItem>
                        <DescriptionItemListItem key={id}>{p8}</DescriptionItemListItem>
                        <DescriptionItemListItem key={id}>{p9}</DescriptionItemListItem>
                        <DescriptionItemListItem key={id}>{p10}</DescriptionItemListItem>
                      </DescriptionItemList>
                    ))}
                  </>
                ) : null}
                <DescriptionItemList>
                  {price !== '' ? (
                    <DescriptionItemListItem>Cena: {price}</DescriptionItemListItem>
                  ) : null}
                  {shop !== '' ? (
                    <DescriptionItemListItem>Firma/Sklep: {shop}</DescriptionItemListItem>
                  ) : null}
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

export default AccesoriesPostListItem;
