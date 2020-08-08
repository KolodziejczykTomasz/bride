import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MainTemplates from 'templates/MainTemplates';
import CompanyPostListItem from 'components/molecules/CompanyPostListItem';
import CompanyListAsideItem from 'components/molecules/CompanyListAsideItem';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  margin-bottom: 10rem;
  grid-template-columns: 8% auto;
  grid-column-gap: 2rem;
  @media (max-width: 600px) {grid-template-columns: 1fr;
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

class CompanyList extends Component {
    state = {
        redirect: false,
    };

    handleCardClick = () => this.setState({ redirect: true });

    
    render() {
        const { id, pageType, company } = this.props;
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to={`${pageType}/${id}`} />;
        }
       
        
        return (
            <MainTemplates>
                <Wrapper>
                    <Main>
                        <MainContainer>
                            {company.map(({ id, url, place, data, city, description, pageType, tags, category }) => (
                                <WrapperItem>
                                    <CompanyPostListItem
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
                            {company.map(({ category }) => (
                                <CompanyListAsideItem category={category} />
                            ))}
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
