import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MainTemplates from 'templates/MainTemplates';
import CompanyPostListItem from 'components/molecules/CompanyPostListItem';
import BreakeHeader from 'components/atoms/BreakeHeader';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  margin-bottom: 10rem;
  grid-template-columns: 8% auto;
  grid-column-gap: 2rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 80% auto;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 80% auto;
  }
  @media (min-width: 1224px) {
    grid-template-columns: 80% auto;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-row-gap: 3rem;
`;

const MainContainer = styled.div`
  display: grid;
  grid-row-gap: 3rem;
  height: 100%;
`;

const Aside = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  width: 100%;
`;

const AsideContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
`;

const AsideCityList = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  text-transform: uppercase;
  border: 1px solid rgba(10, 10, 10, 0.1);
  :hover {
    color: orange;
    cursor: pointer;
    box-shadow: 0 2px 4px #777;
  }
`;

const WrapperItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 3rem;
  width: 100%;
  :hover {
    box-shadow: 0 2px 4px #777;
  }
`;

class CompanyList extends Component {
  state = {
    redirect: false,
    dekoracje: false,
    atrakcje: false,
    lokale: false,
  };

  componentDidMount() {
    this.setState({ lokale: true, atrakcje: true, dekoracje: true });
  }

  handleCardClick = () => this.setState({ redirect: true });
  handleChangeLokaleCardClick = () =>
    this.setState({ lokale: true, atrakcje: false, dekoracje: false });
  handleChangeAtrakcjeCardClick = () =>
    this.setState({ lokale: false, atrakcje: true, dekoracje: false });
  handleChangeDekoracjeCardClick = () =>
    this.setState({ lokale: false, atrakcje: false, dekoracje: true });

  render() {
    const { id, pageType, company } = this.props;
    const { redirect, dekoracje, atrakcje, lokale } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }

    return (
      <MainTemplates>
        <BreakeHeader>Katalog firm </BreakeHeader>
        <Wrapper>
          <Main>
            <MainContainer>
              {dekoracje === true ? (
                <>
                  {company
                    .filter((item) => item.pageName === 'dekoracje')
                    .map(
                      ({
                        id,
                        url,
                        title,
                        subtitle,
                        price,
                        city,
                        description,
                        pageType,
                        pageName,
                        category
                      }) => (
                        <WrapperItem>
                          <CompanyPostListItem
                            id={id}
                            url={url}
                            key={id}
                            price={price}
                            title={title}
                            subtitle={subtitle}
                            description={description}
                            city={city}
                            pageType={pageType}
                            pageName={pageName}
                              category={category}
                          />
                        </WrapperItem>
                      ),
                    )}
                </>
              ) : null}
              {atrakcje === true ? (
                <>
                  {company
                    .filter((item) => item.pageName === 'atrakcje')
                    .map(
                      ({
                        id,
                        url,
                        title,
                        subtitle,
                        price,
                        city,
                        description,
                        pageType,
                        pageName,
                        category
                      }) => (
                        <WrapperItem>
                          <CompanyPostListItem
                            id={id}
                            url={url}
                            key={id}
                            price={price}
                            title={title}
                            subtitle={subtitle}
                            description={description}
                            city={city}
                            pageType={pageType}
                            pageName={pageName}
                              category={category}
                          />
                        </WrapperItem>
                      ),
                    )}
                </>
              ) : null}
              {lokale === true ? (
                <>
                  {company
                    .filter((item) => item.pageName === 'lokale')
                    .map(
                      ({
                        id,
                        url,
                        title,
                        subtitle,
                        price,
                        city,
                        description,
                        pageType,
                        pageName,
                        category
                      }) => (
                        <WrapperItem>
                          <CompanyPostListItem
                            id={id}
                            url={url}
                            key={id}
                            price={price}
                            title={title}
                            subtitle={subtitle}
                            description={description}
                            city={city}
                            pageType={pageType}
                            pageName={pageName}
                            category={category}
                          />
                        </WrapperItem>                        
                      ),
                    )}
                </>
              ) : null}
            </MainContainer>
          </Main>
          <Aside>
            <AsideContainer>
              <AsideCityList onClick={this.handleChangeDekoracjeCardClick}>Dekoracje</AsideCityList>
              <AsideCityList onClick={this.handleChangeLokaleCardClick}>Lokale</AsideCityList>
              <AsideCityList onClick={this.handleChangeAtrakcjeCardClick}>Atrakcje</AsideCityList>
            </AsideContainer>
          </Aside>
        </Wrapper>
      </MainTemplates>
    );
  }
}

const mapStateToProps = (state) => {
  const { company } = state;
  return { company };
};

export default connect(mapStateToProps)(CompanyList);
