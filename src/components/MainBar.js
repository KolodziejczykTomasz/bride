import React from 'react';
import styled from 'styled-components';
import MainBarHero from './MainBarHero';
import MainBarItem from './MainBarItem';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1, 1fr;
  grid-template-columns: 1.8fr 1fr;
  margin: 2rem 0;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
 height: 55rem;
 
`;
const Main = styled.div`
  margin-bottom: 3rem;  
`;

const MainWrapper = styled.div``;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin-left: 2rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  padding-left: 2rem;
`;

const MainBar = () => (
  <Wrapper>
    <Main>
      <MainWrapper>
        <MainBarHero />
      </MainWrapper>
    </Main>
    <Aside>
      <MainBarItem />
      <MainBarItem />
      <MainBarItem />
    </Aside>
  </Wrapper>
);

export default MainBar;
