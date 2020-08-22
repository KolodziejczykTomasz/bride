import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
  grid-column-gap: 2rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 60% auto;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 60% auto;
  }
  @media (min-width: 1224px) {
    grid-template-columns: 60% auto;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
`;

const MainContainer = styled.div`
  display: grid;
  height: 100%;
  box-shadow: 0 0.5em 1em -0.125em rgba(108, 68, 162, 0.3), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  :hover {
    box-shadow: 0 2px 4px #6c44a2;
  }
`;

const Aside = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  width: 100%;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const AsideContainer = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 0 0.5em 1em -0.125em rgba(108, 68, 162, 0.3), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  :hover {
    box-shadow: 0 2px 4px #6c44a2;
  }
`;



const ContactBar = () => (
    <Wrapper>
        <Main>
            <MainContainer>
               Main                
            </MainContainer>
        </Main>
        <Aside>
            <AsideContainer>
              Aside1  
            </AsideContainer>
            <AsideContainer>
               Aside2
            </AsideContainer>           
        </Aside>
    </Wrapper>
);



export default ContactBar;
