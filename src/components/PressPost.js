import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MainTemplates from 'templates/MainTemplates';
import BreakeHeader from 'components/BreakeHeader';
import BreakeFooter from 'components/BreakeFooter';
import PressItem from 'components/PressItem';
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

const WrapperFooter = styled.div`
  display: flexbox;
  justify-content: space-between;
`;

const WrapperFooterItem = styled.div`
  width: 17%;
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
    pageType: '',
    id: 0,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, pageType } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }

    const {
      mlodapara,
      pannamloda,
      uroczystosc,
      wedding,
      omsvadba,
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
          <BreakeFooter>Poprzednie wydania</BreakeFooter>
          {pageType === 'mlodapara' ? (
            <>
              <WrapperFooter>
                {mlodapara.slice(1, 6).map(({ id, url, title, number }) => (
                  <WrapperFooterItem onClick={this.handleCardClick}>
                    <PressItem
                      id={id}
                      url={url}
                      key={id}
                      title={title}
                      number={number}
                      pageType="mlodapara"
                    />
                  </WrapperFooterItem>
                ))}
              </WrapperFooter>
            </>
          ) : null}
          {pageType === 'pannamloda' ? (
            <>
              <WrapperFooter>
                {pannamloda.slice(1, 6).map(({ id, url, title, number }) => (
                  <WrapperFooterItem>
                    <PressItem
                      id={id}
                      url={url}
                      key={id}
                      title={title}
                      number={number}
                      pageType="pannamloda"
                      onClick={this.handleCardClick}
                    />
                  </WrapperFooterItem>
                ))}
              </WrapperFooter>
            </>
          ) : null}
          {pageType === 'uroczystosc' ? (
            <>
              <WrapperFooter>
                {uroczystosc.slice(1, 6).map(({ id, url, title, number }) => (
                  <WrapperFooterItem onClick={this.handleCardClick}>
                    <PressItem
                      id={id}
                      url={url}
                      key={id}
                      title={title}
                      number={number}
                      pageType="uroczystosc"
                    />
                  </WrapperFooterItem>
                ))}
              </WrapperFooter>
            </>
          ) : null}
          {pageType === 'wedding' ? (
            <>
              <WrapperFooter>
                {wedding.slice(1, 6).map(({ id, url, title, number }) => (
                  <WrapperFooterItem onClick={this.handleCardClick}>
                    <PressItem
                      id={id}
                      url={url}
                      key={id}
                      title={title}
                      number={number}
                      pageType="wedding"
                    />
                  </WrapperFooterItem>
                ))}
              </WrapperFooter>
            </>
          ) : null}
          {pageType === 'omsvadba' ? (
            <>
              <WrapperFooter>
                {omsvadba.slice(1, 6).map(({ id, url, title, number }) => (
                  <WrapperFooterItem onClick={this.handleCardClick}>
                    <PressItem
                      id={id}
                      url={url}
                      key={id}
                      title={title}
                      number={number}
                      pageType="omsvadba"
                    />
                  </WrapperFooterItem>
                ))}
              </WrapperFooter>
            </>
          ) : null}

          <Button as={Link} to={`/`}>
            Close
          </Button>
        </Wrapper>
      </MainTemplates>
    );
  }
}

const mapStateToProps = (state) => {
  const { mlodapara, pannamloda, uroczystosc, wedding, omsvadba } = state;
  return { mlodapara, pannamloda, uroczystosc, wedding, omsvadba };
};

export default connect(mapStateToProps)(PressPost);
