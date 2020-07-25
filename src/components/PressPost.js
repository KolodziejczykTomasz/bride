import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplates';
import BreakeHeader from 'components/BreakeHeader';
import PressSimilarItems from 'components/PressSimilarItems';
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
  margin: 2rem 0;
`;
const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.3fr 0.7fr;
  margin: 5rem 0;
`;
const Main = styled.div``;
const Aside = styled.div`
margin-left: 2rem;
`;

const PhotoBox = styled.div``;

const Photo = styled.img`
  display: block;
  width: 50rem;
  margin: 1rem auto;
`;

const DataItem = styled.div`
margin-left: 1rem;
`;

const DescriptionItemList = styled.ul`
margin-left: 3rem;
`;
const DescriptionItemListItem = styled.li``;

const Section = styled.div``;

const TextBold = styled.span`
  text-transform: uppercase;
  font-weight: 400;
  padding-right: 1rem;
`;

class PressPost extends Component {
  state = {
    redirect: false, 
  };

  handleCardClick = () =>
    this.setState({
      redirect: true,
    });

  render() {
    const { redirect } = this.state;
    const { id, pageType } = this.props;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }

    const {     
      title,
      number,
      description,
      price,
      download,
      publisher,
      shop,
      url,
    } = this.props;
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
              <DataItem>
                <TextBold>Wydanie nr:</TextBold> {number}
              </DataItem>
              <Section>
                <DataItem>
                  <TextBold>W numerze:</TextBold>
                </DataItem>
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
                {publisher !== '' ? (
                  <>
                    <DataItem>
                      <TextBold>Wydawca:</TextBold> {publisher}
                    </DataItem>
                  </>
                ) : null}
                {price !== '' ? (
                  <>
                    <DataItem>
                      <TextBold>Cena:</TextBold> {price}
                    </DataItem>
                  </>
                ) : null}
                {shop !== '' ? (
                  <>
                    <DataItem>
                      <TextBold>Sklep:</TextBold> {shop}
                    </DataItem>
                  </>
                ) : null}
                {download !== '' ? (
                  <>
                    <DataItem>
                      <TextBold>Pobierz:</TextBold> {download}
                    </DataItem>
                  </>
                ) : null}
              </Section>
            </Aside>
          </Card>
          <PressSimilarItems pageType={pageType} />
          <Button as={Link} to={`/`}>
            Close
          </Button>
        </Wrapper>
      </MainTemplates>
    );
  }
}


export default PressPost;
