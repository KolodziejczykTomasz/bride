import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MainTemplates from 'templates/MainTemplates';
import FairPostListItem from 'components/molecules/FairPostListItem';
import FairListAsideItem from 'components/molecules/FairListAsideItem';

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
  grid-row-gap: 3rem;
  height: 100%;
  width: 100%;  
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

class FairList extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, pageType, fair } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageType}/${id}`} />;
    }
    return (
      <MainTemplates>
        <Wrapper>
          <Main>
            <MainContainer>
              {fair.map(({ id, url, place, data, city, description, pageType, tags, category }) => (
                <WrapperItem>
                  <FairPostListItem
                    id={id}
                    url={url}
                    key={id}
                    place={place}
                    data={data}
                    city={city}
                    tags={tags}
                    category={category}
                    description={description}
                    pageType={pageType}
                  />
                </WrapperItem>
              ))}
            </MainContainer>
          </Main>
          <Aside>
            <AsideContainer>
            {fair.map(({ id, pageType, city }) => (
              <FairListAsideItem id={id} key={id} pageType={pageType} city={city} />
            ))}
            </AsideContainer>
          </Aside>
        </Wrapper>
      </MainTemplates>
    );
  }
}

const mapStateToProps = (state) => {
  const { fair } = state;
  return { fair };
};

export default connect(mapStateToProps)(FairList);
