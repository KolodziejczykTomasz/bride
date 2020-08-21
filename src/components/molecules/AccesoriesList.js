import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
  display: flex;
  flex-direction: column;
  align-content: space-between;
  width: 100%;
`;

const AsideCityList = styled.p`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 10rem;
  text-transform: uppercase;
   box-shadow: 0 0.5em 1em -0.125em rgba(108, 68,  162, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  :hover {
    color: #6C44A2;
    cursor: pointer;
    box-shadow: 0 2px 4px #6C44A2;
  }
`;

class AccesoriesList extends Component {
  state = {
    redirect: false,
    Dodatki: false,
    Atrakcje: false,
  };

  componentDidMount() {
    this.setState({ Dodatki: true, Atrakcje: true });
  }

  handleClick = (item) => {
    if (item === 'Dodatki') {
      this.setState({ Atrakcje: false, Dodatki: true });
    } else if (item === 'Atrakcje') {
      this.setState({ Atrakcje: true, Dodatki: false });
    } else {
      console.log('Something went wrong');
    }
  };

  render() {
    const { accesories, id, pageType } = this.props;
    const { redirect, Atrakcje, Dodatki } = this.state;
    const unique = [...new Set(accesories.map((obj) => obj.category))];

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <MainTemplates>
        <BreakeHeader>Akcesoria, dodatki</BreakeHeader>
        <Wrapper>
          <Main>
            <MainContainer>
              {Dodatki === true ? (
                <>
                  {accesories
                    .filter((item) => item.category === 'Dodatki')
                    .map(
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
                          key={title}
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
                </>
              ) : null}
              {Atrakcje === true ? (
                <>
                  {accesories
                    .filter((item) => item.category === 'Atrakcje')
                    .map(
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
                          key={title}
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
                </>
              ) : null}
            </MainContainer>
          </Main>
          <Aside>
            <AsideContainer>
              {unique.map((item) => (
                <AsideCityList key={item.id} onClick={() => this.handleClick(item)}>{item}</AsideCityList>
              ))}
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
