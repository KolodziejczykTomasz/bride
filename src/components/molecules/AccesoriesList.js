import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainTemplates from 'templates/MainTemplates';
import AccesoriesPostListItem from 'components/molecules/AccesoriesPostListItem';
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

const Main = styled.div``;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
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

class AccesoriesList extends Component {
  render() {
    const { accesories } = this.props;

    return (
      <MainTemplates>
        <BreakeHeader>Akcesoria, dodatki</BreakeHeader>
        <Wrapper>
          <Main>
            <MainContainer>
              {accesories.map(
                ({
                  id,
                  title,
                  subtitle,
                  description,
                  price,
                  shop,
                  url,
                  pageType,
                  tags,
                  category,
                }) => (
                  <AccesoriesPostListItem
                    id={id}
                    url={url}
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    pageType="accesories"
                    price={price}
                    category={category}
                    tags={tags}
                    shop={shop}
                  />
                ),
              )}
            </MainContainer>
          </Main>
          <Aside>
            <AsideContainer>
              <AsideCityList>SideBar</AsideCityList>
            </AsideContainer>
          </Aside>
        </Wrapper>
      </MainTemplates>
    );
  }
}

const mapStateToProps = (state) => {
  const { accesories } = state;
  return { accesories };
};
export default connect(mapStateToProps)(AccesoriesList);
