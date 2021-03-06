import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MainTemplates from 'templates/MainTemplates';
import PressItem from 'components/molecules/PressItem';
import PressListAsideItem from 'components/molecules/PressListAsideItem';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  margin-bottom: 10rem;
  grid-template-columns: 8% auto;
  grid-column-gap: 2rem;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 481px) and (max-width: 766px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    grid-template-columns: 80% auto;
  }
  @media (min-width: 1281px) {
    grid-template-columns: 80% auto;
  }
`;

const Main = styled.div``;

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 481px) and (max-width: 766px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1281px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Aside = styled.div``;

const AsideContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  width: 100%;
`;

class PressList extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, pageType, press } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <MainTemplates>
        <Wrapper>
          <Main>
            <MainContainer>
              {press.map(({ id, url, pageType, title, number }) => (
                <PressItem
                  id={id}
                  url={url}
                  key={id}
                  title={title}
                  number={number}
                  pageType={pageType}
                />
              ))}
            </MainContainer>
          </Main>
          <Aside>
            <AsideContainer>
              {press
                .sort((a, b) => b.data < a.data)
                .map(({ id, pageType, title, number }) => (
                  <PressListAsideItem
                    id={id}
                    key={id}
                    pageType={pageType}
                    title={title}
                    number={number}
                  />
                ))}
            </AsideContainer>
          </Aside>
        </Wrapper>
      </MainTemplates>
    );
  }
}

const mapStateToProps = (state) => {
  const { press } = state;
  return { press };
};

export default connect(mapStateToProps)(PressList);
